#!/bin/bash

# uncomment the following for debugging this script
#set -x

set -e
set -o pipefail
shopt -s inherit_errexit

jq --version >/dev/null 2>/dev/null || {
	echo "The jq tool is required. To install, run:" >&2;
	echo "sudo apt-get install jq" >&2;
	exit 1;
}

function printUsage {
cat <<EOF
Usage: $0 COMMAND
Commands:
    start						Start the encoder
    restart						Restart the encoder
    stop						Stop the encoder
    list-inputs					List inputs
    enable-input INPUT_NAME		Enables an input. Corresponding configuration file is <INPUT_NAME>.yml
    disable-input INPUT_NAME	Disables an input. Corresponding configuration file is <INPUT_NAME>.yml
    monitor						Monitor encoder log
    monitor-input INPUT_NAME	Monitor input log
    list-versions				List available versions
    set-version VERSION			Selects the encoder version. To activate the version, run: $0 restart
    version						Prints the current version
    shell						Give you a bash shell inside the encoder
    get-examples				Copies examples into local examples directory
	mdns				  		With no option shows status of whether or not to map the dbus directory 
									and avahi daemon socket into the container.
		enable					enable mdns mapping
		disable					disable mdns mapping
EOF
}

if [ "$#" == 0 ]; then
	printUsage
	exit 1
fi

if [ "${PHENIX_ENCODER_HOME}" == "" ]; then
    readonly BASE_DIR=$(realpath "$(dirname "${BASH_SOURCE[0]}")")
else
    readonly BASE_DIR="${PHENIX_ENCODER_HOME}"
    cd "${PHENIX_ENCODER_HOME}"
fi

readonly ESCAPED_BASE_DIR=$(echo "${BASE_DIR}" | sed -E 's/([^\\]) /\1\\ /g')

readonly IMAGE_NAME="docker.io/phenixrts/encoder"
readonly CONTAINER_NAME="phenix-encoder"
readonly ENCODER_VERSION_FILE="${BASE_DIR}/.version"
readonly ENCODER_ENVIRONMENT_FILE="${BASE_DIR}/.environment"
readonly ENCODER_VOLUMES_FILE="${BASE_DIR}/.volumes"
readonly ENCODER_VERSION=$(cat "${ENCODER_VERSION_FILE}" || echo -n "")
readonly MDNS_STATE_FILE="${BASE_DIR}/.mdns"

function isEncoderStarted {
	ENCODER_CONTAINER_ID=$(docker ps -q --filter "name=${CONTAINER_NAME}")

	[ "${ENCODER_CONTAINER_ID}" != "" ]
}

function stopEncoder {
	if isEncoderStarted; then
		echo "Stopping encoder..."
		local readonly SECONDS_TO_WAIT=3
		docker stop -t ${SECONDS_TO_WAIT} "${CONTAINER_NAME}" >/dev/null
		docker rm -f "${CONTAINER_NAME}" >/dev/null 2>/dev/null
	fi
}

function launchShell {
    if isEncoderStarted; then
	docker exec -it "${CONTAINER_NAME}" /bin/bash
    fi
}

function getExamples {
    mkdir -p "${BASE_DIR}/examples/$(cat ${ENCODER_VERSION_FILE})/config"
    
    if isEncoderStarted; then
	cd "${BASE_DIR}/examples/$(cat ${ENCODER_VERSION_FILE})/config"
	docker exec "${CONTAINER_NAME}" /bin/sh -c 'tar -cf - /usr/src/app/config/encoder/*' | tar --strip-components 5 -xvf -
	mv "${BASE_DIR}/examples/$(cat ${ENCODER_VERSION_FILE})/config/examples" "${BASE_DIR}/examples/$(cat ${ENCODER_VERSION_FILE})/inputs"
    fi
}

function printVersion {
    cat "${ENCODER_VERSION_FILE}"
}

function killEncoder {
	if isEncoderStarted; then
		echo "Killing encoder..."
		local readonly SECONDS_TO_WAIT=3
		docker kill "${CONTAINER_NAME}" >/dev/null
		docker rm -f "${CONTAINER_NAME}" >/dev/null 2>/dev/null
	fi
}

function startEncoder {
	if [ ! -f "${ENCODER_VERSION_FILE}" ]; then
		echo "Encoder version is not set. Run: $0 enable-input VERSION" >&2
		exit 1
	fi

	mkdir \
		-p \
		"${BASE_DIR}/inputs" \
		"${BASE_DIR}/logs" \
		"${BASE_DIR}/data"

	local VOLUMES="-v ${ESCAPED_BASE_DIR}/inputs:/usr/src/inputs:ro"
	VOLUMES="${VOLUMES} -v ${ESCAPED_BASE_DIR}/data:/usr/src/data:ro"
	VOLUMES="${VOLUMES} -v ${ESCAPED_BASE_DIR}/logs:/usr/src/app/logs"

	if [ -d "/dev/blackmagic" ] \
		   && [ -f /usr/lib/libDeckLinkAPI.so ] \
		   && [ -d /usr/lib/blackmagic ]; then
		VOLUMES="${VOLUMES} -v /dev/blackmagic:/dev/blackmagic"
		VOLUMES="${VOLUMES} -v /usr/lib/libDeckLinkAPI.so:/usr/lib/libDeckLinkAPI.so:ro"
		VOLUMES="${VOLUMES} -v /usr/lib/blackmagic:/usr/lib/blackmagic:ro"
	fi

	if [ -d "${BASE_DIR}/config" ]; then
		VOLUMES="${VOLUMES} -v ${ESCAPED_BASE_DIR}/config:/usr/src/app/config/encoder:ro"
	fi

	if [ -d "${BASE_DIR}/profiles" ]; then
		VOLUMES="${VOLUMES} -v ${ESCAPED_BASE_DIR}/profiles:/usr/src/app/profiles:ro"
	fi

	if [ -f $MDNS_STATE_FILE ]; then
		VOLUMES="${VOLUMES} -v /var/run/dbus:/var/run/dbus"
		VOLUMES="${VOLUMES} -v /var/run/avahi-daemon/socket:/var/run/avahi-daemon/socket"
	fi

	local ENVIRONMENT_VARIABLES="-e NODE_ENV=encoder -e SERVER_APP=encoder"

	if [ -f "${ENCODER_ENVIRONMENT_FILE}" ]; then
		local LINE
		while read -r LINE; do
			ENVIRONMENT_VARIABLES="${ENVIRONMENT_VARIABLES} -e '${LINE}'"
		done < "${ENCODER_ENVIRONMENT_FILE}"
	fi

	if isEncoderStarted; then
		echo "Encoder is already started."
	elif [ "${ENCODER_VERSION}" == "" ]; then
		echo "Select an encoder version by running: $0 set-version ..." >&2
		exit 1
	else
		echo "Starting encoder..."
		echo "${VOLUMES}"
		docker rm -f "${CONTAINER_NAME}" >/dev/null 2>/dev/null

		bash -c "docker \
			run \
			-d \
			--privileged \
			--net=host \
			--name=${CONTAINER_NAME} \
			--restart=unless-stopped \
			${VOLUMES} \
			${ENVIRONMENT_VARIABLES} \
			-t ${IMAGE_NAME}:${ENCODER_VERSION}" >/dev/null
	fi
}

function enableInput {
	mkdir \
		-p \
		"${BASE_DIR}/inputs" \
		"${BASE_DIR}/disabled-inputs"

	local readonly INPUT_NAME="$1"

	if [ "${INPUT_NAME}" == "" ]; then
		printUsage
		exit 1
	fi

	local readonly FILE_NAME="${INPUT_NAME}.yml"
	local readonly ENABLED_INPUT_FILE_NAME="${BASE_DIR}/inputs/${FILE_NAME}"
	local readonly DISABLED_INPUT_FILE_NAME="${BASE_DIR}/disabled-inputs/${FILE_NAME}"

	if [ -f "${DISABLED_INPUT_FILE_NAME}" ]; then
		if [ -f "${ENABLED_INPUT_FILE_NAME}" ]; then
			echo "Error moving file. This would overwrite ${DISABLED_INPUT_FILE_NAME}" >&2
			exit 1
		fi

		mv "${DISABLED_INPUT_FILE_NAME}" "${ENABLED_INPUT_FILE_NAME}"
		echo "Enabled input '${INPUT_NAME}'."
	elif [ -f "${ENABLED_INPUT_FILE_NAME}" ]; then
		echo "Input '${INPUT_NAME}' is already enabled."
	else
		echo "Input '${INPUT_NAME}' does not exist." >&2
		exit 1
	fi
}

function disableInput {
	mkdir \
		-p \
		"${BASE_DIR}/inputs" \
		"${BASE_DIR}/disabled-inputs"

	local readonly INPUT_NAME="$1"

	if [ "${INPUT_NAME}" == "" ]; then
		printUsage
		exit 1
	fi

	local readonly FILE_NAME="${INPUT_NAME}.yml"
	local readonly ENABLED_INPUT_FILE_NAME="${BASE_DIR}/inputs/${FILE_NAME}"
	local readonly DISABLED_INPUT_FILE_NAME="${BASE_DIR}/disabled-inputs/${FILE_NAME}"

	if [ -f "${ENABLED_INPUT_FILE_NAME}" ]; then
		if [ -f "${DISABLED_INPUT_FILE_NAME}" ]; then
			echo "Not disabling input. This action would overwrite ${DISABLED_INPUT_FILE_NAME}" >&2
			exit 1
		fi

		mv "${ENABLED_INPUT_FILE_NAME}" "${DISABLED_INPUT_FILE_NAME}"
		echo "Disabled input '${INPUT_NAME}'."
	elif [ -f "${DISABLED_INPUT_FILE_NAME}" ]; then
		echo "Input '${INPUT_NAME}' is already disabled."
	else
		echo "Input '${INPUT_NAME}' does not exist." >&2
		exit 1
	fi
}

function setVersion {
	local readonly NEW_VERSION="$1"

	if [ "${NEW_VERSION}" == "" ]; then
		printUsage
		exit 1
	fi

	if [ "${ENCODER_VERSION}" == "${NEW_VERSION}" ]; then
		echo "Version ${NEW_VERSION} is already selected." >&2
		return 0
	fi

	docker pull "${IMAGE_NAME}:${NEW_VERSION}" || {
		echo "Failed to pull image. The version may be wrong, or you may need to login using: docker login" >&2;
		exit 1;
	}

	echo "${NEW_VERSION}" > "${ENCODER_VERSION_FILE}"

	echo -e "\nTo activate this version, run:"
	echo "$0 restart"
}

function listVersions {
	local readonly DOCKER_CONFIG_FILE=$(realpath ~/.docker/config.json)
	if [ ! -f "${DOCKER_CONFIG_FILE}" ]; then
		echo "Cannot access Docker repo. Please run: docker login" >&2
		exit 1
	fi

	local readonly AUTH_STRING=$(cat "${DOCKER_CONFIG_FILE}" \
									| jq -r '.auths["https://index.docker.io/v1/"].auth' \
									| base64 -d)

	local readonly USERNAME=$(echo "$AUTH_STRING" | cut -d: -f1)
	local readonly PASSWORD=$(echo "$AUTH_STRING" | cut -d: -f2)
	local readonly DOCKER_IO_AUTH_TOKEN=$(curl \
											-s \
											-H "Content-Type: application/json" \
											-X POST \
											-d '{"username": "'${USERNAME}'", "password": "'${PASSWORD}'"}' \
											https://hub.docker.com/v2/users/login/ | jq -r .token)

	local AVAILABLE_ENCODER_VERSION
	while read -r AVAILABLE_ENCODER_VERSION; do
		if [ "${AVAILABLE_ENCODER_VERSION}" == "${ENCODER_VERSION}" ]; then
			echo "${AVAILABLE_ENCODER_VERSION} (Selected)"
		else
			echo "${AVAILABLE_ENCODER_VERSION}"
		fi
	done < <(curl \
				-s \
				-H "Authorization: JWT ${DOCKER_IO_AUTH_TOKEN}" \
				https://hub.docker.com/v2/repositories/phenixrts/encoder/tags/ \
				| jq -r '.results|.[]|.name')
}

function monitorContainer {
	if isEncoderStarted; then
		docker logs -f ${CONTAINER_NAME}
	else
		echo "Encoder is not started." >&2
	fi
}

function monitorInput {
	local readonly INPUT_NAME="$1"
	local readonly INPUT_YML_FILENAME="${BASE_DIR}/inputs/${INPUT_NAME}.yml"
	local readonly DISABLED_INPUT_YML_FILENAME="${BASE_DIR}/disabled-inputs/${INPUT_NAME}.yml"
	local readonly LOG_FILENAME="${BASE_DIR}/logs/${INPUT_NAME}.log"

	if [ "${INPUT_NAME}" == "" ]; then
		printUsage
		exit 1
	fi

	if ! isEncoderStarted; then
		echo "Encoder is not started." >&2
		exit 1
	fi

	if [ ! -f "${INPUT_YML_FILENAME}" ]; then
		if [ ! -f "${DISABLED_INPUT_YML_FILENAME}" ]; then
			echo "Input '${INPUT_NAME}' does not exist." >&2
			exit 1
		else
			echo "Input '${INPUT_NAME}' is disabled." >&2
			exit 1
		fi
	fi

	if [ ! -f "${LOG_FILENAME}" ]; then
		echo "Waiting for '${LOG_FILENAME}' to be created."

		while [ ! -f "${LOG_FILENAME}" ]; do
			sleep 0.1
		done
	fi

	tail -f "${LOG_FILENAME}"
}

function listInputs {
	local YML_FILENAME

	echo "Enabled Inputs:"
	while read -r YML_FILENAME; do
		local readonly INPUT_NAME=$(basename "${YML_FILENAME}" | sed -E 's/\.[Yy][Mm][Ll]$//')
		echo "    ${INPUT_NAME}"
	done < <(find "${BASE_DIR}/inputs" -name '*.[Yy][Mm][Ll]')

	echo -e "\nDisabled Inputs:"
	while read -r YML_FILENAME; do
		local readonly INPUT_NAME=$(basename "${YML_FILENAME}" | sed -E 's/\.[Yy][Mm][Ll]$//')
		echo "    ${INPUT_NAME}"
	done < <(find "${BASE_DIR}/disabled-inputs" -name '*.[Yy][Mm][Ll]')
}

function mdns {
	case "$1" in
		enable) touch ${MDNS_STATE_FILE} ; mdns ;;
		disable) rm ${MDNS_STATE_FILE} ; mdns ;;
		*) [[ -f $MDNS_STATE_FILE ]] && echo "enabled" || echo "disabled" ;; 
	esac
}

case "$1" in
	start)			startEncoder ;;
	restart) 		stopEncoder ; startEncoder ;;
	stop) 			stopEncoder ;;
	kill) 			killEncoder ;;
	list-inputs)	listInputs ;;
	enable-input) 	enableInput "$2" ;;
	disable-input) 	disableInput "$2" ;;
	list-versions)	listVersions ;;
	set-version)	setVersion "$2" ;;
	version)	    printVersion ;;
	monitor)		monitorContainer ;;
	monitor-input)	monitorInput "$2" ;;
	shell)	        launchShell ;;
	get-examples)	getExamples ;;
	mdns)			mdns $2 ;;
	*) echo "Unknown option $1" >&2 ; printUsage ; exit 1 ;;
esac
