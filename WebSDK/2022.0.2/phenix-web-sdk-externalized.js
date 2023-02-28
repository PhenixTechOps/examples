/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("phenix-web-lodash-light"), require("phenix-web-assert"), require("phenix-rtc"), require("phenix-web-disposable"), require("phenix-web-observable"), require("phenix-web-event"), require("phenix-web-http"), require("phenix-web-logging"), require("phenix-web-application-activity-detector"), require("phenix-web-proto"), require("phenix-web-detect-browser"), require("phenix-web-global"), require("phenix-web-closest-endpoint-resolver"));
	else if(typeof define === 'function' && define.amd)
		define("phenix-web-sdk", ["phenix-web-lodash-light", "phenix-web-assert", "phenix-rtc", "phenix-web-disposable", "phenix-web-observable", "phenix-web-event", "phenix-web-http", "phenix-web-logging", "phenix-web-application-activity-detector", "phenix-web-proto", "phenix-web-detect-browser", "phenix-web-global", "phenix-web-closest-endpoint-resolver"], factory);
	else if(typeof exports === 'object')
		exports["phenix-web-sdk"] = factory(require("phenix-web-lodash-light"), require("phenix-web-assert"), require("phenix-rtc"), require("phenix-web-disposable"), require("phenix-web-observable"), require("phenix-web-event"), require("phenix-web-http"), require("phenix-web-logging"), require("phenix-web-application-activity-detector"), require("phenix-web-proto"), require("phenix-web-detect-browser"), require("phenix-web-global"), require("phenix-web-closest-endpoint-resolver"));
	else
		root["phenix-web-sdk"] = factory(root["phenix-web-lodash-light"], root["phenix-web-assert"], root["phenix-rtc"], root["phenix-web-disposable"], root["phenix-web-observable"], root["phenix-web-event"], root["phenix-web-http"], root["phenix-web-logging"], root["phenix-web-application-activity-detector"], root["phenix-web-proto"], root["phenix-web-detect-browser"], root["phenix-web-global"], root["phenix-web-closest-endpoint-resolver"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__16__, __WEBPACK_EXTERNAL_MODULE__22__, __WEBPACK_EXTERNAL_MODULE__29__, __WEBPACK_EXTERNAL_MODULE__47__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var streamEnums = {
        networkStates: {
            networkEmpty: {
                id: 0,
                name: 'NETWORK_EMPTY'
            },
            networkIdle: {
                id: 1,
                name: 'NETWORK_IDLE'
            },
            networkLoading: {
                id: 2,
                name: 'NETWORK_LOADING'
            },
            networkNoSource: {
                id: 3,
                name: 'NETWORK_NO_SOURCE'
            }
        },
        types: {
            realTime: {
                id: 0,
                name: 'real-time'
            },
            dash: {
                id: 1,
                name: 'dash'
            },
            hls: {
                id: 2,
                name: 'hls'
            },
            rtmp: {
                id: 0,
                name: 'rtmp'
            }
        },
        streamEvents: {
            playerEnded: {
                id: 0,
                name: 'playerended'
            },
            playerError: {
                id: 1,
                name: 'playererror'
            },
            stopped: {
                id: 2,
                name: 'stopped'
            }
        },
        rendererEvents: {
            ended: {
                id: 0,
                name: 'ended'
            },
            error: {
                id: 1,
                name: 'error'
            },
            autoMuted: {
                id: 2,
                name: 'autoMuted'
            },
            failedToPlay: {
                id: 3,
                name: 'failedToPlay'
            }
        }
    };

    return streamEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event) {
    'use strict';

    var defaultPollFrequency = 500;
    var minimumPollFrequency = 15;

    function DimensionsChangedMonitor(logger, options) {
        assert.isObject(logger, 'logger');

        this._logger = logger;
        this._dimensionsChangedEvent = new event.Event();
        this._dimensionsChangedIntervalId = null;
        this._toBeStarted = false;
        this._videoElement = null;
        this._dimensionsChangedData = {
            pollFrequency: defaultPollFrequency,
            previousWidth: 0,
            previousHeight: 0
        };

        if (options && options.pollFrequency) {
            this._dimensionsChangedData.pollFrequency = options.pollFrequency >= minimumPollFrequency ? options.pollFrequency : minimumPollFrequency;
        }

        this._renderer = null;
    }

    DimensionsChangedMonitor.prototype.start = function start(renderer, element) {
        startMonitor.call(this, renderer, element);
    };

    DimensionsChangedMonitor.prototype.stop = function stop() {
        stopMonitor.call(this);
    };

    DimensionsChangedMonitor.prototype.addVideoDisplayDimensionsChangedCallback = function addVideoDisplayDimensionsChangedCallback(callback) {
        assert.isFunction(callback, 'addVideoDisplayDimensionsChangedCallback');
        startInterval.call(this);

        return this._dimensionsChangedEvent.listen(callback);
    };

    DimensionsChangedMonitor.prototype.toString = function() {
        return 'DimensionsChangedMonitor[pollFrequency=' + this._dimensionsChangedData.pollFrequency +
            ', previousHeight=' + this._dimensionsChangedData.previousHeight +
            ', previousWidth=' + this._dimensionsChangedData.previousHeight +
            ', state=' + (this._dimensionsChangedIntervalId ? 'running' : 'stopped') + ']';
    };

    function startMonitor(renderer, element) {
        if (!element || _.isUndefined(element.videoWidth)) {
            this._logger.warn("Attempting to start dimensions changed monitor without providing proper 'video' element.");
        }

        this._renderer = renderer;
        this._videoElement = element;
        this._toBeStarted = true;
        startInterval.call(this);
    }

    function stopMonitor() {
        this._toBeStarted = false;

        if (this._dimensionsChangedIntervalId) {
            clearInterval(this._dimensionsChangedIntervalId);
            this._dimensionsChangedIntervalId = null;
        }

        this._dimensionsChangedEvent.dispose();
    }

    function startInterval() {
        // Return if either:
        // - start hasn't been called yet
        // - the interval is already running
        // - there is no callback yet
        if (!this._toBeStarted || this._dimensionsChangedIntervalId || this._dimensionsChangedEvent.size() === 0) {
            return;
        }

        var that = this;
        this._dimensionsChangedData.previousWidth = this._videoElement.videoWidth;
        this._dimensionsChangedData.previousHeight = this._videoElement.videoHeight;

        this._dimensionsChangedIntervalId = setInterval(function checkVideoDimensions() {
            if (that._videoElement.videoWidth !== that._dimensionsChangedData.previousWidth || that._videoElement.videoHeight !== that._dimensionsChangedData.previousHeight) {
                that._dimensionsChangedData.previousWidth = that._videoElement.videoWidth;
                that._dimensionsChangedData.previousHeight = that._videoElement.videoHeight;

                that._dimensionsChangedEvent.fireAsync([that._renderer, {
                    width: that._videoElement.videoWidth,
                    height: that._videoElement.videoHeight
                }]);
            }
        }, that._dimensionsChangedData.pollFrequency);
    }

    return DimensionsChangedMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(22)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, DetectBrowser) {
    'use strict';

    var environment = {};
    var browser = new DetectBrowser(navigator.userAgent).detect();

    environment.getEnvironmentFromUrl = function(uri) {
        try {
            var baseURL;

            if (URL && browser.browser !== 'IE') {
                baseURL = new URL(uri);
            } else {
                baseURL = getLocation(uri);
            }

            if (baseURL.port) {
                return baseURL.protocol + '//' + baseURL.hostname + ':' + baseURL.port;
            }

            return baseURL.protocol + '//' + baseURL.hostname;
        } catch (e) {
            return '';
        }
    };

    environment.parseEnvFromPcastBaseUri = function(uri) {
        uri = uri.toLowerCase();

        if (_.includes(uri, 'local')) {
            return 'local';
        } else if (_.includes(uri, 'stg')) {
            return 'staging';
        }

        return 'production';
    };

    environment.getTelemetryServerUri = function(baseUri) {
        if (!baseUri) {
            return '';
        }

        try {
            var baseURL;

            if (URL && browser.browser !== 'IE') {
                baseURL = new URL(baseUri);
            } else {
                baseURL = getLocation(baseUri);
            }

            var segments = baseURL.hostname.split('.');

            if (segments.length === 2 ||
                (segments.length === 3 && segments[segments.length - 2].length <= 2 && segments[segments.length - 1].length <= 3)
            ) {
                segments.unshift('telemetry');
            } else if (_.startsWith(segments[0], 'stg-') || _.endsWith(segments[0], '-stg') || _.includes(segments[0], '-stg-') || segments[0] === 'stg') {
                segments[0] = 'telemetry-stg';
            } else if (_.startsWith(segments[0], 'local') || _.endsWith(segments[0], 'local')) {
                // Leave URL unchanged
            } else {
                segments[0] = 'telemetry';
            }

            baseURL.hostname = segments.join('.');

            switch (baseURL.protocol) {
            case 'ws:':
                baseURL.protocol = 'http:';

                break;
            case 'wss:':
                baseURL.protocol = 'https:';

                break;

            default:
                break;
            }

            if (baseURL.port) {
                return baseURL.protocol + '//' + baseURL.hostname + ':' + baseURL.port + '/telemetry';
            }

            return baseURL.protocol + '//' + baseURL.hostname + '/telemetry';
        } catch (e) {
            return baseUri;
        }
    };

    function getLocation(url) {
        var match = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/); // eslint-disable-line

        return match && {
            href: url,
            protocol: match[1],
            host: match[2],
            hostname: match[3],
            port: match[4],
            pathname: match[5],
            search: match[6],
            hash: match[7],
            origin: match[1] + '//' + match[2]
        };
    }

    return environment;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2),
    __webpack_require__(29),
    __webpack_require__(27),
    __webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, rtc, global, PhenixLiveStream, streamEnums) {
    'use strict';

    var defaultFeatures = [
        streamEnums.types.realTime.name,
        streamEnums.types.dash.name,
        streamEnums.types.hls.name
    ];

    function FeatureDetector(features) {
        features = features || defaultFeatures;

        assert.isArray(features, 'features');

        _.forEach(features, function(feature, index) {
            assert.isValidType(feature, streamEnums.types, 'FeatureType[' + index + ']');
        });

        this._features = _.map(features, _.bind(_.getEnumName, _, streamEnums.types));
    }

    FeatureDetector.isFeatureSupported = function(feature) {
        if (feature) {
            assert.isStringNotEmpty(feature, 'feature');
        }

        var featureName = _.getEnumName(streamEnums.types, feature);

        switch (featureName) {
        case streamEnums.types.realTime.name:
            return rtc.webrtcSupported;
        case streamEnums.types.dash.name:
        case streamEnums.types.hls.name:
        case streamEnums.types.rtmp.name:
            return PhenixLiveStream.canPlaybackType(feature);
        default:
            return false;
        }
    };

    FeatureDetector.mapFeatureToPCastCapability = function(feature) {
        if (feature) {
            assert.isStringNotEmpty(feature, 'feature');
        }

        var featureName = _.getEnumName(streamEnums.types, feature);

        switch (featureName) {
        case streamEnums.types.realTime.name:
            return 'real-time';
        case streamEnums.types.dash.name:
        case streamEnums.types.hls.name:
            return 'streaming';
        case streamEnums.types.rtmp.name:
            return 'rtmp';
        default:
            return '';
        }
    };

    FeatureDetector.mapPCastCapabilitiesToFeatures = function(capabilities) {
        assert.isArray(capabilities, 'capabilities');

        return _.reduce(capabilities, function(features, capability) {
            return features.concat(FeatureDetector.mapPCastCapabilityToFeatures(capability));
        }, []);
    };

    FeatureDetector.mapPCastCapabilityToFeatures = function(capability) {
        if (capability) {
            assert.isStringNotEmpty(capability, 'capability');
        }

        if (capability === 'real-time') {
            return [streamEnums.types.realTime.name];
        }

        if (capability === 'streaming') {
            return [streamEnums.types.dash.name, streamEnums.types.dash.name];
        }

        if (capability === 'rtmp') {
            return [streamEnums.types.rtmp.name];
        }

        return [];
    };

    FeatureDetector.prototype.getFeatures = function() {
        return this._features;
    };

    FeatureDetector.prototype.getFeaturePCastCapabilities = function() {
        var capabilities = _.map(this._features, FeatureDetector.mapFeatureToPCastCapability);

        return _.reduce(capabilities, removeDuplicates, []);
    };

    FeatureDetector.prototype.getPreferredFeatureFromPublisherCapabilities = function(capabilities, excludeRealTime) {
        assert.isArray(capabilities, 'capabilities');

        var preferredFeature = _.reduce(this._features, function(candidateFeature, feature) {
            var featureCapability = FeatureDetector.mapFeatureToPCastCapability(feature);
            var isFeatureAvailableAndCanPlayBack = FeatureDetector.isFeatureSupported(feature) && (_.includes(capabilities, featureCapability) || (feature === 'real-time' && !excludeRealTime));
            var nextFeature = isFeatureAvailableAndCanPlayBack ? feature : null;

            return candidateFeature || nextFeature;
        }, null);

        if (preferredFeature === streamEnums.types.dash.name && FeatureDetector.shouldUseNativeHls && _.includes(capabilities, FeatureDetector.mapFeatureToPCastCapability(streamEnums.types.hls.name)) && _.includes(this._features, streamEnums.types.hls.name)) {
            preferredFeature = streamEnums.types.hls.name;
        } else if (preferredFeature === streamEnums.types.hls.name && !FeatureDetector.shouldUseNativeHls && _.includes(capabilities, FeatureDetector.mapFeatureToPCastCapability(streamEnums.types.dash.name)) && _.includes(this._features, streamEnums.types.dash.name)) {
            preferredFeature = streamEnums.types.dash.name;
        }

        return preferredFeature;
    };

    FeatureDetector.shouldUseNativeHls = isIOS() || rtc.browser === 'Safari' || isSamsungBrowser();
    FeatureDetector.isIOS = isIOS;
    FeatureDetector.isSamsungBrowser = isSamsungBrowser;
    FeatureDetector.isAndroid = isAndroid;
    FeatureDetector.isMobile = isMobile;
    FeatureDetector.getIOSVersion = getIOSVersion;

    function isIOS() {
        var userAgent = _.get(global, ['navigator', 'userAgent'], '');

        return /iPad|iPhone|iPod/.test(userAgent) && !global.MSStream;
    }

    function isSamsungBrowser() {
        var userAgent = _.get(global, ['navigator', 'userAgent'], '');

        return /SamsungBrowser/.test(userAgent);
    }

    function isAndroid() {
        var userAgent = _.get(global, ['navigator', 'userAgent'], '');

        return /(android)/i.test(userAgent);
    }

    function isMobile() {
        var userAgent = _.get(global, ['navigator', 'userAgent'], '');

        return isIOS() || /Android|webOS|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent);
    }

    function getIOSVersion() {
        var userAgent = _.get(global, ['navigator', 'userAgent'], '');

        if (/iP(hone|od|ad)/.test(userAgent)) {
            var version = userAgent.match(/.*OS (\d+)_(\d+)_?(\d+)? like Mac OS X/);

            return {
                major: parseInt(_.get(version, [1], 0), 10),
                minor: parseInt(_.get(version, [2], 0), 10),
                patch: parseInt(_.get(version, [3], 0), 10)
            };
        }
    }

    function removeDuplicates(list, item) {
        if (!_.includes(list, item)) {
            list.push(item);
        }

        return list;
    }

    return FeatureDetector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var memberEnums = {
        roles: {
            participant: {
                id: 0,
                name: 'Participant'
            },
            moderator: {
                id: 1,
                name: 'Moderator'
            },
            presenter: {
                id: 2,
                name: 'Presenter'
            },
            audience: {
                id: 3,
                name: 'Audience'
            }
        },
        states: {
            active: {
                id: 0,
                name: 'Active'
            },
            passive: {
                id: 1,
                name: 'Passive'
            },
            handRaised: {
                id: 2,
                name: 'HandRaised'
            },
            inactive: {
                id: 3,
                name: 'Inactive'
            },
            offline: {
                id: 4,
                name: 'Offline'
            }
        }
    };

    return memberEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var roomEnums = {
        types: {
            directChat: {
                id: 0,
                name: 'DirectChat'
            },
            multiPartyChat: {
                id: 1,
                name: 'MultiPartyChat'
            },
            moderatedChat: {
                id: 2,
                name: 'ModeratedChat'
            },
            townHall: {
                id: 3,
                name: 'TownHall'
            },
            channel: {
                id: 4,
                name: 'Channel'
            }
        },
        events: {
            memberJoined: {
                id: 0,
                name: 'MemberJoined'
            },
            memberLeft: {
                id: 1,
                name: 'MemberLeft'
            },
            memberUpdated: {
                id: 2,
                name: 'MemberUpdated'
            },
            roomUpdated: {
                id: 3,
                name: 'RoomUpdated'
            },
            roomEnded: {
                id: 4,
                name: 'RoomEnded'
            }
        }
    };

    return roomEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(8),
    __webpack_require__(10),
    __webpack_require__(42)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, logging, environment, telemetryAppenderFactory) {
    'use strict';

    function PCastLoggerFactory() {

    }

    PCastLoggerFactory.prototype.createPCastLogger = function createPCastLogger(baseUri, disableConsole, loggingLevel) {
        if (baseUri) {
            assert.isStringNotEmpty(baseUri, 'baseUri');
        }

        var logger = new logging.Logger();
        var env = environment.getEnvironmentFromUrl(baseUri);
        var telemetryAppender = telemetryAppenderFactory.getAppender(baseUri);

        logger.setEnvironment(env);

        if (loggingLevel) {
            telemetryAppender.setThreshold(loggingLevel);
        } else {
            telemetryAppender.setThreshold(logging.level.INFO);
        }

        if (!disableConsole) {
            logger.addAppender(new logging.ConsoleAppender());
        }

        logger.addAppender(telemetryAppender);

        logger.isPCastLogger = true;

        return logger;
    };

    return new PCastLoggerFactory();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(1),
    __webpack_require__(0),
    __webpack_require__(3),
    __webpack_require__(47)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(assert, _, disposable, ClosestEndPointResolver) {
    'use strict';

    function PCastEndPoint(version, baseUri, logger, sessionTelemetry) {
        assert.isStringNotEmpty(version, 'version');
        assert.isStringNotEmpty(baseUri, 'baseUri');
        assert.isObject(logger, 'logger');

        this._version = version;
        this._baseUri = baseUri;
        this._logger = logger;
        this._disposables = new disposable.DisposableList();
        this._sessionTelemetry = sessionTelemetry;
    }

    PCastEndPoint.DefaultPCastUri = 'https://pcast.phenixrts.com';

    PCastEndPoint.prototype.getBaseUri = function() {
        return this._baseUri;
    };

    PCastEndPoint.prototype.resolveUri = function(callback /* (error, {uri, roundTripTime}) */) {
        return resolveUri.call(this, this._baseUri, callback);
    };

    PCastEndPoint.prototype.dispose = function() {
        this._disposables.dispose();
    };

    PCastEndPoint.prototype.toString = function() {
        return 'PCastEndPoint[' + this._baseUri + ']';
    };

    function resolveUri(baseUri, callback /* (error, {uri, roundTripTime}) */) {
        var isWss = baseUri.lastIndexOf('wss:', 0) === 0;
        var isWs = baseUri.lastIndexOf('ws:', 0) === 0;
        var isHttps = baseUri.lastIndexOf('https:', 0) === 0;
        var isHttp = baseUri.lastIndexOf('http:', 0) === 0;

        if (isWss || isWs) {
            // WS - Specific web socket end point
            callback(undefined, {
                uri: baseUri + '/ws',
                roundTripTime: 0
            });
        } else if (isHttps || isHttp) {
            // HTTP - Resolve closest end point
            var that = this;

            getEndpoints.call(that, baseUri, function(err, endPoints) {
                if (err) {
                    return callback(err);
                }

                var closestEndPointResolver = new ClosestEndPointResolver({
                    logger: that._logger,
                    version: that._version
                }, callback, function(err, response) {
                    if (err) {
                        if (err.code === 503) {
                            that._logger.debug('The end point [%s] is temporarily disabled', _.get(response, ['endPoint']));
                        } else {
                            that._logger.warn('An error occurred in resolving an endpoint [%s]', _.get(response, ['endPoint']), err);
                        }

                        return;
                    }

                    var isHttpsEndPoint = response.endPoint.lastIndexOf('https:', 0) === 0;

                    that._sessionTelemetry.recordMetric('RoundTripTime', {uint64: response.time}, null, {
                        resource: response.endPoint,
                        kind: isHttpsEndPoint ? 'https' : 'http'
                    });
                });

                closestEndPointResolver.resolveAll(endPoints);

                that._disposables.add(closestEndPointResolver);
            });
        } else {
            // Not supported
            callback(new Error('Uri not supported [' + baseUri + ']'));
        }
    }

    function getEndpoints(baseUri, callback) {
        var version = '2022-04-13T15:08:08Z';
        var requestUrl = baseUri + '/pcast/endPoints?version=' + version + '&_=' + _.now();
        var xhr = getAndOpenVendorSpecificXmlHttpMethod('GET', requestUrl);

        xhr.addEventListener('readystatechange', _.bind(handleReadyStateChange, this, xhr, function(err, response) {
            if (err) {
                return callback(new Error('Failed to resolve an end point', err));
            }

            var endPoints = response.data.split(',');

            if (endPoints.length < 1) {
                callback(new Error('Failed to discover end points'));
            }

            callback(undefined, endPoints);
        }));
        xhr.timeout = 15000;
        xhr.send(null);
    }

    function getAndOpenVendorSpecificXmlHttpMethod(requestMethod, requestUrl) {
        var xhr = new XMLHttpRequest();

        if ('withCredentials' in xhr) {
            // Most browsers.
            xhr.open(requestMethod, requestUrl, true);
        } else if (typeof XDomainRequest !== 'undefined') {
            // IE8 & IE9
            // eslint-disable-next-line no-undef
            xhr = new XDomainRequest();
            xhr.open(requestMethod, requestUrl);
        } else {
            return;
        }

        return xhr;
    }

    function handleReadyStateChange(xhr, callback) {
        if (xhr.readyState === 4 /* DONE */) {
            if (xhr.status === 200) {
                var responseHeaders = getXhrResponseHeaders(xhr);
                var response = {
                    data: xhr.response || xhr.responseText,
                    headers: responseHeaders,
                    rawXhr: xhr
                };

                callback(null, response);
            } else {
                var err = new Error(xhr.status === 0 ? 'timeout' : 'Status=[' + xhr.status + ']');

                err.code = xhr.status;

                callback(err);
            }
        }
    }

    function getXhrResponseHeaders(xhr) {
        var responseHeadersString = xhr.getAllResponseHeaders();

        return _.reduce(responseHeadersString.trim().split(/[\r\n]+/), function(headers, header) {
            var parts = header.split(': ');
            var headerName = parts.shift();
            var headerValue = parts.join(': ');

            if (headerName) {
                headers[headerName] = headerValue;
            }

            return headers;
        }, {});
    }

    return PCastEndPoint;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, rtc) {
    'use strict';

    // TODO(dy) wrap PC in this class
    function PeerConnection() {

    }

    PeerConnection.convertPeerConnectionStats = function(stats, lastStats) {
        return convertPeerConnectionStats(stats, lastStats);
    };

    function convertPeerConnectionStats(stats, lastStats) {
        if (!stats) {
            return null;
        }

        var newStats = [];
        var normalizedStats = normalizeStatsReport(stats);

        var iteratorDidRun = false;

        function convertStats(statsReport) {
            if (!iteratorDidRun) {
                iteratorDidRun = true;
            }

            if (!_.hasIndexOrKey(statsReport, 'ssrc') || !statsReport.ssrc || _.includes(statsReport.id, 'rtcp')) {
                return;
            }

            var id = statsReport.id || statsReport.ssrc;

            if (!_.hasIndexOrKey(lastStats, id)) {
                lastStats[id] = {timestamp: _.now()};
            }

            var direction = '?';
            var timeDelta = parseFloat(statsReport.timestamp) - lastStats[id].timestamp;
            var up = calculateUploadRate(parseFloat(statsReport.bytesSent), lastStats[id].bytesSent, timeDelta);
            var down = calculateDownloadRate(parseFloat(statsReport.bytesReceived), lastStats[id].bytesReceived, timeDelta);
            var framerateMean = calculateFrameRate(useFirstNumberValue(parseIntOrUndefined(statsReport.framesEncoded), parseIntOrUndefined(statsReport.framesDecoded)), lastStats[id].framesEncoded || lastStats[id].framesDecoded, timeDelta);

            if (isOutbound(statsReport)) {
                direction = 'upload';
            }

            if (isInbound(statsReport)) {
                direction = 'download';
            }

            var stat = {
                uploadRate: up,
                downloadRate: down,
                mediaType: statsReport.mediaType,
                ssrc: statsReport.ssrc,
                direction: direction,
                nativeReport: statsReport,
                rtt: useFirstNumberValue(parseIntOrUndefined(statsReport.rtt), parseIntOrUndefined(statsReport.googRtt), parseIntOrUndefined(statsReport.roundTripTime), parseIntOrUndefined(statsReport.currentRoundTripTime)),
                bitrateMean: parseIntOrUndefined(statsReport.bitrateMean, 10) || (isOutbound(statsReport) ? up : down) * 1000,
                targetDelay: parseIntOrUndefined(useFirstStringValue(statsReport.targetDelay, statsReport.googTargetDelayMs), 10),
                currentDelay: parseIntOrUndefined(useFirstStringValue(statsReport.currentDelay, statsReport.currentDelayMs, statsReport.googCurrentDelayMs), 10)
            };

            _.assign(lastStats[id], statsReport);

            if (statsReport.mediaType === 'video') {
                stat = _.assign(stat, {
                    droppedFrames: parseIntOrUndefined(statsReport.droppedFrames, 10) || 0,
                    framerateMean: useFirstNumberValue(statsReport.framerateMean, statsReport.framesPerSecond, framerateMean) || 0,
                    cpuLimitedResolution: useFirstStringValue(statsReport.cpuLimitedResolution, statsReport.googCpuLimitedResolution),
                    avgEncode: parseIntOrUndefined(useFirstStringValue(statsReport.avgEncode, statsReport.avgEncodeMs, statsReport.googAvgEncodeMs), 10)
                });
            }

            if (statsReport.mediaType === 'audio') {
                stat = _.assign(stat, {
                    audioInputLevel: useFirstStringValue(statsReport.audioInputLevel, statsReport.googAudioInputLevel),
                    audioOutputLevel: useFirstStringValue(statsReport.audioOutputLevel, statsReport.googAudioOutputLevel),
                    jitter: parseIntOrUndefined(useFirstStringValue(statsReport.jitter, statsReport.jitterReceived, statsReport.googJitterReceived), 10),
                    jitterBuffer: parseIntOrUndefined(useFirstStringValue(statsReport.jitterBuffer, statsReport.jitterBufferMs, statsReport.googJitterBufferMs), 10),
                    totalSamplesDuration: parseFloatOrUndefined(statsReport.totalSamplesDuration),
                    totalAudioEnergy: parseFloatOrUndefined(statsReport.totalAudioEnergy)
                });
            }

            newStats.push(stat);
        }

        _.forOwn(normalizedStats, convertStats);

        if (!iteratorDidRun && newStats.length <= 0 && normalizedStats.forEach) {
            normalizedStats.forEach(convertStats);
        }

        return newStats;
    }

    function useFirstNumberValue(value1, value2, value3, value4, value5) {
        if (_.isNumber(value1)) {
            return value1;
        }

        if (_.isNumber(value2)) {
            return value2;
        }

        if (_.isNumber(value3)) {
            return value3;
        }

        if (_.isNumber(value4)) {
            return value4;
        }

        return value5;
    }

    function useFirstStringValue(value1, value2, value3, value4, value5) {
        if (_.isString(value1)) {
            return value1;
        }

        if (_.isString(value2)) {
            return value2;
        }

        if (_.isString(value3)) {
            return value3;
        }

        if (_.isNumber(value4)) {
            return value4;
        }

        return value5;
    }

    function parseIntOrUndefined(value, radix) {
        var parsed = parseInt(value, radix);

        if (isNaN(parsed)) {
            return undefined;
        }

        return parsed;
    }

    function parseFloatOrUndefined(value) {
        var parsed = parseFloat(value);

        if (isNaN(parsed)) {
            return undefined;
        }

        return parsed;
    }

    function calculateUploadRate(bytesSent, prevBytesSent, timeDelta) {
        if (_.isUndefined(prevBytesSent)) {
            return;
        }

        if (bytesSent) {
            var bytesSentBefore = prevBytesSent || 0;

            return 8 * (bytesSent - bytesSentBefore) / timeDelta;
        }

        return 0;
    }

    function calculateDownloadRate(bytesReceived, prevBytesReceived, timeDelta) {
        if (_.isUndefined(prevBytesReceived)) {
            return;
        }

        if (bytesReceived) {
            var bytesReceivedBefore = prevBytesReceived || 0;

            return 8 * (bytesReceived - bytesReceivedBefore) / timeDelta;
        }

        return 0;
    }

    function calculateFrameRate(currentFramesEncoded, lastFramesEncoded, timeDelta) {
        if (_.isUndefined(lastFramesEncoded)) {
            return;
        }

        return (currentFramesEncoded - lastFramesEncoded)
            / (timeDelta / 1000.0);
    }

    function normalizeStatsReport(stats) {
        var normalizedReport = {};

        switch (rtc.browser) {
        case 'Firefox':
            _.forOwn(stats, function(report, key) {
                if (_.includes(key, 'rtcp')) {
                    _.forOwn(stats, function(reportToUpdate, key) {
                        if (_.includes(key, 'rtp') && report.mediaType === reportToUpdate.mediaType) {
                            reportToUpdate.jitter = (report.jitter || reportToUpdate.jitter) * 1000;
                            reportToUpdate.roundTripTime = report.roundTripTime;
                        }
                    });
                }
            });

            return stats;
        case 'IE':
            _.forOwn(stats, function(value, key) {
                if (!_.startsWith(key, 'ssrc')) {
                    return;
                }

                normalizedReport[value.id] = value;
            });

            return normalizedReport;
        case 'Edge':
            stats.forEach(function(report) {
                normalizedReport[report.id] = report;

                if (_.hasIndexOrKey(report, 'jitter')) {
                    report.jitter *= 1000;
                }
            });

            _.forOwn(normalizedReport, function(report) {
                if (report.type === 'track' && _.hasIndexOrKey(report, 'framesPerSecond')) {
                    _.forOwn(normalizedReport, function(reportToUpdate) {
                        if (reportToUpdate.mediaType === 'video') {
                            reportToUpdate.framesPerSecond = parseInt(report.framesPerSecond, 10);
                        }
                    });
                }
            });

            return normalizedReport;
        case 'Safari':
            stats.forEach(function(report) {
                normalizedReport[report.id] = report;
            });

            _.forOwn(normalizedReport, function(report) {
                if (_.hasIndexOrKey(report, 'id') && isInbound(report)) {
                    var candidateSsrc = parseInt(_.get(report.id.split('_'), [1]), 10);

                    report.ssrc = candidateSsrc || report.ssrc; // Ssrc is inaccurate for inbound reports
                }

                if (_.hasIndexOrKey(report, 'jitter')) {
                    report.jitter *= 1000;
                }

                if (report.type === 'candidate-pair') {
                    _.forOwn(normalizedReport, function(reportToUpdate) {
                        if (reportToUpdate.mediaType === 'audio' || reportToUpdate.mediaType === 'video') {
                            reportToUpdate.currentRoundTripTime = report.currentRoundTripTime * 1000;
                        }
                    });
                }

                if (report.type === 'track') {
                    _.forOwn(normalizedReport, function(reportToUpdate) {
                        if (reportToUpdate.mediaType === 'audio' && isInbound(reportToUpdate)) {
                            reportToUpdate.audioOutputLevel = report.audioLevel * 100000;
                        } else if (reportToUpdate.mediaType === 'audio' && isOutbound(reportToUpdate)) {
                            reportToUpdate.audioInputLevel = report.audioLevel * 100000;
                        }
                    });
                }
            });

            return normalizedReport;
        case 'ReactNative':
            var parsedStats = _.isString(stats) ? JSON.parse(stats) : stats;

            parsedStats.forEach(function(report) {
                var normalizedStatistics = {
                    id: report.id,
                    type: report.type
                };

                report.values.forEach(function(value) {
                    _.keys(value).forEach(function(key) {
                        normalizedStatistics[key] = value[key];
                    });
                });

                normalizedStatistics.timestamp = report.timestamp;

                normalizedReport[normalizedStatistics.id] = normalizedStatistics;
            });

            return normalizedReport;
        case 'Chrome':
        default:
            stats.result().forEach(function(report) {
                var normalizedStatistics = {
                    id: report.id,
                    type: report.type
                };

                report.names().forEach(function(name) {
                    normalizedStatistics[name] = report.stat(name);
                });

                normalizedStatistics.timestamp = report.timestamp.getTime();

                normalizedReport[normalizedStatistics.id] = normalizedStatistics;
            });

            return normalizedReport;
        }
    }

    function isOutbound(statsReport) {
        return _.includes(statsReport.id, 'send') || _.includes(statsReport.id, 'outbound') || statsReport.type === 'outboundrtp' || statsReport.type === 'outbound-rtp' || statsReport.type === 'kOutboundRtp';
    }

    function isInbound(statsReport) {
        return _.includes(statsReport.id, 'recv') || statsReport.type === 'inboundrtp' || statsReport.type === 'inbound-rtp' || statsReport.type === 'kInboundRtp';
    }

    return PeerConnection;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(20),
    __webpack_require__(34)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, stream, track) {
    'use strict';

    var streamTypes = stream.types;
    var trackStates = track.states;
    var oldPcastStreamPrefix = 'pcast://phenixp2p.com/';
    var pcastStreamPrefix = 'pcast://phenixrts.com/';

    function Stream(uri, type, audioState, videoState) {
        this.init(uri, type, audioState, videoState);
    }

    Stream.prototype.init = function(uri, type, audioState, videoState) {
        assert.isString(uri, 'uri');

        this._uri = new observable.Observable(uri);
        this._type = new observable.Observable(type, assertIsValidStreamType);
        this._audioState = new observable.Observable(audioState || trackStates.trackEnabled.name, assertIsValidTrackState);
        this._videoState = new observable.Observable(videoState || trackStates.trackEnabled.name, assertIsValidTrackState);
        this._streamId = Stream.parsePCastStreamIdFromStreamUri(uri);
    };

    Stream.prototype.getUri = function getUri() {
        return this._uri.getValue();
    };

    Stream.prototype.getType = function getType() {
        return this._type.getValue();
    };

    Stream.prototype.getObservableAudioState = function getObservableAudioState() {
        return this._audioState;
    };

    Stream.prototype.getObservableVideoState = function getObservableVideoState() {
        return this._videoState;
    };

    Stream.prototype.toJson = function toJson() {
        return {
            uri: this._uri.getValue(),
            type: this._type.getValue(),
            audioState: this._audioState.getValue(),
            videoState: this._videoState.getValue()
        };
    };

    Stream.prototype._update = function update(stream) {
        if (!_.isObject(stream)) {
            return;
        }

        if (Object.prototype.hasOwnProperty.call(stream, 'uri')) {
            if (stream.uri !== this._uri.getValue() && matchPCastStreams(stream.uri, this._uri.getValue())) {
                this._uri.setValue(stream.uri);

                this._streamId = Stream.parsePCastStreamIdFromStreamUri(stream.uri);
            }
        }

        if (Object.prototype.hasOwnProperty.call(stream, 'audioState')) {
            this._audioState.setValue(stream.audioState);
        }

        if (Object.prototype.hasOwnProperty.call(stream, 'videoState')) {
            this._videoState.setValue(stream.videoState);
        }
    };

    Stream.prototype.isPCastStream = function() {
        return !!this._streamId;
    };

    Stream.prototype.getPCastStreamId = function() {
        return this._streamId;
    };

    Stream.prototype.getInfo = function() {
        return parseStreamInfoFromStreamUri(this._uri.getValue());
    };

    Stream.getPCastPrefix = function() {
        return oldPcastStreamPrefix;
    };

    Stream.parsePCastStreamIdFromStreamUri = function(uri) {
        var hasPrefix = _.includes(uri, getPrefixToUse(uri));

        if (!hasPrefix) {
            return null;
        }

        return uri.replace(getPrefixToUse(uri), '').split('?')[0];
    };

    Stream.getInfoFromStreamUri = function(uri) {
        return parseStreamInfoFromStreamUri(uri);
    };

    function getPrefixToUse(uri) {
        if (_.includes(uri, oldPcastStreamPrefix)) {
            return oldPcastStreamPrefix;
        }

        return pcastStreamPrefix;
    }

    function matchPCastStreams(uriA, uriB) {
        return Stream.parsePCastStreamIdFromStreamUri(uriA) === Stream.parsePCastStreamIdFromStreamUri(uriB);
    }

    function parseStreamInfoFromStreamUri(uri) {
        var parsedUriInfo = {};
        var queryParamString = uri.split('?');

        if (queryParamString.length !== 2) {
            return parsedUriInfo;
        }

        var queryParamsString = queryParamString[1];
        var queryParams = queryParamsString.split('&');

        _.forEach(queryParams, function(param) {
            var parsedParams = param.split('=');
            var key = parsedParams[0];
            var value = decodeURIComponent(parsedParams[1]);

            parsedUriInfo[key] = value;

            if (key === 'capabilities') {
                parsedUriInfo[key] = value ? (value.split(',') || []) : [];
            }
        });

        return parsedUriInfo;
    }

    function assertIsValidStreamType(type) {
        assert.isValidType(type, streamTypes, 'streamType');

        return _.getEnumName(streamTypes, type);
    }

    function assertIsValidTrackState(state) {
        assert.isValidType(state, trackStates, 'trackState');

        return _.getEnumName(trackStates, state);
    }

    return Stream;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var streamEnums = {
        types: {
            user: {
                id: 0,
                name: 'User'
            },
            presentation: {
                id: 1,
                name: 'Presentation'
            },
            audio: {
                id: 2,
                name: 'Audio'
            }
        }
    };

    return streamEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(15),
    __webpack_require__(7),
    __webpack_require__(11),
    __webpack_require__(10),
    __webpack_require__(24),
    __webpack_require__(44),
    __webpack_require__(17),
    __webpack_require__(48),
    __webpack_require__(49),
    __webpack_require__(25),
    __webpack_require__(9),
    __webpack_require__(50),
    __webpack_require__(52),
    __webpack_require__(53),
    __webpack_require__(18),
    __webpack_require__(55),
    __webpack_require__(27),
    __webpack_require__(59),
    __webpack_require__(12),
    __webpack_require__(6),
    __webpack_require__(28),
    __webpack_require__(2),
    __webpack_require__(26)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, pcastLoggerFactory, http, applicationActivityDetector, environment, AudioContext, PCastProtocol, PCastEndPoint, ScreenShareExtensionManager, UserMediaProvider, PeerConnectionMonitor, DimensionsChangedMonitor, metricsTransmitterFactory, StreamTelemetry, SessionTelemetry, PeerConnection, StreamWrapper, PhenixLiveStream, PhenixRealTimeStream, FeatureDetector, streamEnums, BitRateMonitor, phenixRTC, sdpUtil) {
    'use strict';

    var sdkVersion = '2022-04-13T15:08:08Z';
    var accumulateIceCandidatesDuration = 50;
    var roomOrChannelIdRegex = /^(?:room|channel)Id[:](.*)$/;
    var roomOrChannelAliasRegex = /^(?:room|channel)Alias[:](.*)$/;

    function PCast(options) {
        options = options || {};

        assert.isObject(options, 'options');

        if (options.streamingSourceMapping) {
            assert.isObject(options.streamingSourceMapping, 'options.streamingSourceMapping');
            assert.isStringNotEmpty(options.streamingSourceMapping.replacement, 'options.streamingSourceMapping.replacement');

            if (!(options.streamingSourceMapping.patternToReplace instanceof RegExp)) {
                assert.isStringNotEmpty(options.streamingSourceMapping.patternToReplace, 'options.streamingSourceMapping.patternToReplace');
            }
        }

        if (!_.isNullOrUndefined(options.disableMultiplePCastInstanceWarning)) {
            assert.isBoolean(options.disableMultiplePCastInstanceWarning, 'options.disableMultiplePCastInstanceWarning');
        }

        if (!_.isNullOrUndefined(options.disableGlobalErrorListener)) {
            assert.isBoolean(options.disableGlobalErrorListener, 'options.disableGlobalErrorListener');
        }

        if (!_.isNullOrUndefined(options.disableBeforeUnload)) {
            assert.isBoolean(options.disableBeforeUnload, 'options.disableBeforeUnload');
        }

        if (!_.isNullOrUndefined(options.disableConsoleLogging)) {
            assert.isBoolean(options.disableConsoleLogging, 'options.disableConsoleLogging');
        }

        if (!_.isNullOrUndefined(options.loggingLevel)) {
            assert.isNumber(options.loggingLevel, 'options.loggingLevel');
        }

        if (!_.isNullOrUndefined(options.treatBackgroundAsOffline)) {
            assert.isBoolean(options.treatBackgroundAsOffline, 'options.treatBackgroundAsOffline');
        }

        if (!_.isNullOrUndefined(options.reAuthenticateOnForeground)) {
            assert.isBoolean(options.reAuthenticateOnForeground, 'options.reAuthenticateOnForeground');
        }

        if (options.treatBackgroundAsOffline === true && options.reAuthenticateOnForeground === false) {
            this._logger.warn('Conflicting options "reAuthenticateOnForeground" can not be false when "treatBackgroundAsOffline" is true. Will reauthenticate upon entering foreground.');
        }

        if (options.shakaLoader) {
            assert.isFunction(options.shakaLoader, 'options.shakaLoader');
        }

        if (options.webPlayerLoader) {
            assert.isFunction(options.webPlayerLoader, 'options.webPlayerLoader');
        }

        this._observableStatus = new observable.Observable('offline');
        this._networkRTT = new observable.Observable(0);
        this._observableSessionId = new observable.Observable(null);
        this._deviceId = options.deviceId || '';
        this._version = sdkVersion;

        if (!options.authToken) {
            this._baseUri = options.uri || PCastEndPoint.DefaultPCastUri;
            setupPcastLoggerAndMetrics.call(this, options);
        } else {
            var baseUri = this.parseUriFromToken.call(this, options.authToken);

            if (baseUri) {
                this._baseUri = baseUri;
                setupPcastLoggerAndMetrics.call(this, options);

                if (options.uri) {
                    this._logger.warn('Trying to join room with both authToken and uri. Please only use authToken.');
                }

                this._logger.info('Base uri is set to [%s] from authToken [%s]', baseUri, options.authToken);
            } else {
                this._baseUri = options.uri || PCastEndPoint.DefaultPCastUri;
                setupPcastLoggerAndMetrics.call(this, options);

                if (options.uri) {
                    this._logger.warn('Trying to join room with options uri. Please use authToken.');

                    this._logger.info('Base uri is set to [%s] from options uri', options.uri);
                }
            }
        }

        this._screenShareExtensionManager = new ScreenShareExtensionManager(options, this._logger);
        this._shakaLoader = options.shakaLoader;
        this._webPlayerLoader = options.webPlayerLoader;
        this._rtmpOptions = options.rtmp || {};
        this._streamingSourceMapping = options.streamingSourceMapping;
        this._disposables = new disposable.DisposableList();
        this._disableMultiplePCastInstanceWarning = options.disableMultiplePCastInstanceWarning;
        this._treatBackgroundAsOffline = options.treatBackgroundAsOffline === true;
        this._reAuthenticateOnForeground = options.reAuthenticateOnForeground === true;
        this._authenticateCallId = 0;
        this._reAuthenticateCallId = 0;
        this._canPlaybackAudio = true;
        this._h264ProfileIds = [];
        this._supportedWebrtcCodecs = [];
        this._featureDetector = new FeatureDetector(options.features);
        this._pendingIceCandidates = {};
        this._addIceCandidatesTimeoutScheduled = {};

        var that = this;
        var supportedFeatures = _.filter(this._featureDetector.getFeatures(), FeatureDetector.isFeatureSupported);
        var logGlobalError = function logGlobalError(event) {
            var errorToLog = event ? event.error : 'Unknown Error';
            that._logger.error('Window Error Event Triggered with pcast in [%s] state [%s]', that._observableStatus.getValue(), /* Once for browsers that don't show stack traces */ errorToLog, errorToLog);
        };

        this._logger.info('Device supports features [%s], user selected [%s]', supportedFeatures, this._featureDetector.getFeatures());

        _.addEventListener(phenixRTC.global, 'unload', function() {
            that._logger.info('Window Unload Event Triggered');

            return that.stop('window-unload');
        });

        if (!options.disableGlobalErrorListener) {
            _.addEventListener(phenixRTC.global, 'error', logGlobalError);

            if (phenixRTC.global.__phenixGlobalErrorListenerDisposable) {
                phenixRTC.global.__phenixGlobalErrorListenerDisposable.dispose();
            }

            phenixRTC.global.__phenixGlobalErrorListenerDisposable = new disposable.Disposable(function() {
                _.removeEventListener(phenixRTC.global, 'unload', logGlobalError);
            });
        }

        if (!options.disableBeforeUnload) {
            _.addEventListener(phenixRTC.global, 'beforeunload', function() {
                that._logger.info('Window Before Unload Event Triggered');

                return that.stop('window-beforeunload');
            });
        }

        if (!phenixRTC.webrtcSupported && phenixRTC.browser === 'ReactNative') {
            phenixRTC.shim();
        }

        // We need to check connection status because FF can create PC only with network status online
        if (phenixRTC.webrtcSupported && this._observableStatus.getValue() === 'online') {
            setEnvironmentCodecDefaults.call(this);
            setAudioState.call(this);
        }
    }

    PCast.prototype.getBaseUri = function() {
        return this._baseUri;
    };

    PCast.prototype.getStatus = function() {
        return this._observableStatus.getValue();
    };

    PCast.prototype.getObservableStatus = function() {
        return this._observableStatus;
    };

    PCast.prototype.getRemoteDescriptionSdp = function(streamId) {
        assert.isStringNotEmpty(streamId, 'streamId');

        if (!this._peerConnections) {
            return;
        }

        return _.get(this._peerConnections, [streamId, 'remoteDescription', 'sdp']);
    };

    PCast.prototype.isStarted = function() {
        return this._started;
    };

    PCast.prototype.reAuthenticate = function(authToken) {
        assert.isStringNotEmpty(authToken, 'authToken');

        if (this._observableStatus.getValue() === 'online') {
            return this._logger.warn('Already authenticated. Denying request to re-authenticate');
        }

        this._logger.info('Attempting to re-authenticate with new auth token [%s]', authToken);

        this._authToken = authToken;

        reconnected.call(this);
    };

    PCast.prototype.start = function(authToken, authenticationCallback, onlineCallback, offlineCallback) {
        assert.isStringNotEmpty(authToken, 'authToken');
        assert.isFunction(authenticationCallback, 'authenticationCallback');
        assert.isFunction(onlineCallback, 'onlineCallback');
        assert.isFunction(offlineCallback, 'offlineCallback');

        if (this._started) {
            throw new Error('"Already started"');
        }

        if (!_.isNumber(phenixRTC.global.__phenixInstantiatedPCastCount)) {
            phenixRTC.global.__phenixInstantiatedPCastCount = 1;
        } else {
            phenixRTC.global.__phenixInstantiatedPCastCount++;
        }

        if (phenixRTC.global.__phenixInstantiatedPCastCount > 1 && !this._disableMultiplePCastInstanceWarning) {
            this._logger.warn('Avoid using multiple instances of PCast as this uses unnecessary resources and will reduce performance. This is your [%s] simultaneous instance. Remember to dispose all resources when done with them by calling .stop() or .dispose()',
                phenixRTC.global.__phenixInstantiatedPCastCount);
        }

        this._stopped = false;
        this._started = true;
        this._authToken = authToken;
        this._authenticationCallback = authenticationCallback;
        this._onlineCallback = onlineCallback;
        this._offlineCallback = offlineCallback;
        this._sessionTelemetry = new SessionTelemetry(this._logger, this._metricsTransmitter);
        this._endPoint = new PCastEndPoint(this._version, this._baseUri, this._logger, this._sessionTelemetry);

        transitionToStatus.call(this, 'connecting');

        this._peerConnections = {};
        this._mediaStreams = {};
        this._iceCandidateCallbacks = {};
        this._publishers = {};
        this._gumStreams = [];

        this._disposables.add(this._endPoint);
        this._disposables.add(this._sessionTelemetry);
        this._disposables.add(applicationActivityDetector.onBackground(_.bind(handleBackground, this)));
        this._disposables.add(applicationActivityDetector.onForeground(_.bind(handleForeground, this)));

        var that = this;

        that._endPoint.resolveUri(function(err, endPoint) {
            if (err) {
                that._logger.error('Failed to connect to [%s]', that._baseUri, err);

                if (that._authenticationCallback) {
                    switch (err.code) {
                    case 0:
                        that._authenticationCallback.call(that, that, 'network-unavailable', '');

                        break;
                    case 503:
                        that._authenticationCallback.call(that, that, 'capacity', '');

                        break;
                    default:
                        that._authenticationCallback.call(that, that, 'critical-network-issue', '');

                        return;
                    }
                }

                transitionToStatus.call(that, 'offline');

                that._stopped = true;
                that._started = false;

                return;
            }

            that._logger.info('Discovered end point [%s] with RTT [%s]', endPoint.uri, endPoint.roundTripTime);

            that._networkOneWayLatency = endPoint.roundTripTime / 2;
            that._resolvedEndPoint = endPoint.uri;

            if (!that._started) {
                return;
            }

            instantiateProtocol.call(that, endPoint.uri);
        });
    };

    PCast.prototype.stop = function(reason) {
        reason = reason || '';

        assert.isString(reason, 'reason');

        if (!this._started) {
            return;
        }

        this._logger.info('Stopping pcast instance with reason [%s]', reason);

        this._stopped = true;
        this._started = false;

        delete this._authenticationCallback;

        try {
            var that = this;

            _.forOwn(this._mediaStreams, function(mediaStream, streamId) {
                endStream.call(that, streamId, reason);
            });
            _.forOwn(this._publishers, function(publisher, publisherStreamId) {
                endStream.call(that, publisherStreamId, reason);

                if (!_.includes(publisher.getOptions(), 'detached')) {
                    publisher.stop(reason, true);
                }
            });
            _.forOwn(this._peerConnections, function(mediaStream, peerConnectionStreamId) {
                endStream.call(that, peerConnectionStreamId, reason);
            });
            _.forEach(this._gumStreams, function(gumStream) {
                var tracks = gumStream.getTracks();

                _.forEach(tracks, function(track) {
                    track.stop();
                });
            });
        } catch (e) {
            that._logger.warn('Pcast stop caught an error', e);
        } finally {
            if (this._protocol) {
                try {
                    this._protocol.disconnect();
                } catch (e) {
                    that._logger.warn('Failed to disconnect pcast', e);
                }

                this._protocol = null;
            }

            if (this._logger.setObservableSessionId) {
                this._logger.setObservableSessionId(null);
            }

            if (this._sessionTelemetrySubscription) {
                this._sessionTelemetrySubscription.dispose();
                this._sessionTelemetry.setSessionId(null);
            }

            if (this._sessionIdSubscription) {
                this._sessionIdSubscription.dispose();
                this._observableSessionId.setValue(null);
            }

            phenixRTC.global.__phenixInstantiatedPCastCount--;

            this._disposables.dispose();
        }
    };

    PCast.prototype.getUserMedia = function(options, callback, onScreenShare) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Publishing not supported on IE');
        }

        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        if (onScreenShare) {
            assert.isFunction(onScreenShare, 'onScreenShare');
        }

        var userMediaProvider = new UserMediaProvider(this._logger, this._screenShareExtensionManager, onScreenShare);

        return userMediaProvider.getUserMedia(options, callback);
    };

    PCast.prototype.publish = function(streamToken, streamToPublish, callback, tags, options) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Publishing not supported on IE');
        }

        if (!this._started) {
            throw new Error('PCast not started. Unable to publish. Please start pcast first.');
        }

        tags = tags || [];
        options = options || {};

        assert.isStringNotEmpty(streamToken, 'streamToken');
        assert.isFunction(callback, 'callback');
        assert.isArray(tags, 'tags');
        assert.isObject(options, 'options');

        if (!_.isObject(streamToPublish) && !_.isString(streamToPublish)) {
            throw new Error('"streamToPublish" must be an object or URI');
        }

        var that = this;
        var streamType = 'upload';
        var setupStreamOptions = _.assign({}, options, {negotiate: true});

        if (_.isString(streamToPublish)) {
            setupStreamOptions.negotiate = false;
            setupStreamOptions.connectUri = streamToPublish;
        } else {
            setupStreamOptions.connectUri = options.connectUri;
        }

        if (tags.length > 0) {
            setupStreamOptions.tags = tags;
        }

        var streamTelemetry = new StreamTelemetry(this.getProtocol().getSessionId(), this._logger, this._metricsTransmitter);

        streamTelemetry.setProperty('resource', streamType);
        this._protocol.setupStream(streamType, streamToken, setupStreamOptions, that._networkOneWayLatency * 2, function(error, response) {
            if (error) {
                that._logger.error('Failed to create uploader [%s]', error);

                return callback.call(that, that, 'failed');
            } else if (response.status !== 'ok') {
                that._logger.warn('Failed to create uploader, status [%s]', response.status);

                switch (response.status) {
                case 'timeout':
                case 'capacity':
                case 'unauthorized':
                    return callback.call(that, that, response.status);
                default:
                    return callback.call(that, that, 'failed');
                }
            } else {
                var streamId = response.createStreamResponse.streamId;

                streamTelemetry.setStreamId(streamId);
                streamTelemetry.setStartOffset(response.createStreamResponse.offset);
                streamTelemetry.recordMetric('Provisioned');
                streamTelemetry.recordMetric('RoundTripTime', {uint64: that._networkOneWayLatency * 2}, null, {
                    resource: that._resolvedEndPoint,
                    kind: 'https'
                });

                if (setupStreamOptions.negotiate === true) {
                    var offerSdp = response.createStreamResponse.createOfferDescriptionResponse.sessionDescription.sdp;
                    var peerConnectionConfig = applyVendorSpecificLogic(parseProtobufMessage(response.createStreamResponse.rtcConfiguration));

                    if (phenixRTC.browser === 'Opera' && that._h264ProfileIds.length > 0) {
                        // For publishing we need any profile and level that is equal to or greater than the offer's profile and level
                        var profileLevelIdToReplace = _.get(sdpUtil.getH264ProfileIds(offerSdp), [0]);
                        var preferredLevelId = sdpUtil.getH264ProfileIdWithSameProfileAndEqualToOrHigherLevel(that._h264ProfileIds, profileLevelIdToReplace);

                        if (!preferredLevelId) {
                            that._logger.warn('[%s] Unable to find h264 profile level id to replace [%s]. Rejected environment defaults of [%s]',
                                streamId, profileLevelIdToReplace, that._h264ProfileIds);
                        } else if (profileLevelIdToReplace !== preferredLevelId) {
                            that._logger.info('[%s] Replacing publisher h264 profile level id [%s] with new value [%s] in offer sdp',
                                streamId, profileLevelIdToReplace, preferredLevelId);

                            offerSdp = sdpUtil.replaceH264ProfileId(offerSdp, profileLevelIdToReplace, preferredLevelId);
                        }
                    }

                    return createPublisherPeerConnection.call(that, peerConnectionConfig, streamToPublish, streamId, offerSdp, streamTelemetry, function(phenixPublisher, error) {
                        streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                        if (error) {
                            callback.call(that, that, 'failed', null);
                        } else {
                            callback.call(that, that, 'ok', phenixPublisher);
                        }
                    }, options, response.createStreamResponse.options);
                }

                return createPublisher.call(that, streamId, function(phenixPublisher, error) {
                    streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                    if (error) {
                        callback.call(that, that, 'failed', null);
                    } else {
                        callback.call(that, that, 'ok', phenixPublisher);
                    }
                }, response.createStreamResponse.options);
            }
        });
    };

    PCast.prototype.subscribe = function(streamToken, callback, options) {
        if (!this._started) {
            throw new Error('PCast not started. Unable to subscribe. Please start pcast first.');
        }

        options = options || {};

        assert.isStringNotEmpty(streamToken, 'streamToken');
        assert.isFunction(callback, 'callback');
        assert.isObject(options, 'options');

        var that = this;

        setAudioState.call(that, function() {
            var streamType = 'download';
            var setupStreamOptions = _.assign({}, options, {negotiate: options.negotiate !== false});
            var streamTelemetry = new StreamTelemetry(that.getProtocol().getSessionId(), that._logger, that._metricsTransmitter);
            var createViewerOptions = _.assign({}, options);

            createViewerOptions.canPlaybackAudio = that._canPlaybackAudio;

            createViewerOptions.capabilities = that.parseCapabilitiesFromToken(streamToken);

            if (!that._canPlaybackAudio && options.disableAudioIfNoOutputFound && options.receiveAudio !== false) {
                setupStreamOptions.receiveAudio = false;
                createViewerOptions.receiveAudio = false;
                createViewerOptions.forcedAudioDisabled = true;
            }

            if (options.originStreamId) {
                setupStreamOptions.originStreamId = options.originStreamId;
            }

            streamTelemetry.setProperty('resource', streamType);

            that._protocol.setupStream(streamType, streamToken, setupStreamOptions, that._networkOneWayLatency * 2, function(error, response) {
                if (error) {
                    that._logger.error('Failed to create downloader [%s]', error);

                    return callback.call(that, that, 'failed');
                } else if (response.status !== 'ok') {
                    that._logger.warn('Failed to create downloader, status [%s]', response.status);

                    return callback.call(that, that, response.status);
                }

                var streamId = response.createStreamResponse.streamId;
                var offerSdp = response.createStreamResponse.createOfferDescriptionResponse.sessionDescription.sdp;
                var peerConnectionConfig = applyVendorSpecificLogic(parseProtobufMessage(response.createStreamResponse.rtcConfiguration));
                var create = _.bind(createViewerPeerConnection, that, peerConnectionConfig);
                var isNotRealTime = !(offerSdp.match(/m=audio /) || offerSdp.match(/m=video /)) && (offerSdp.match(/a=x-playlist:/) || offerSdp.match(/a=x-rtmp:/));

                if (isNotRealTime) {
                    create = createChunkedOrRtmpViewer;
                }

                streamTelemetry.setStreamId(streamId);
                streamTelemetry.setStartOffset(response.createStreamResponse.offset);
                streamTelemetry.recordMetric('Provisioned');
                streamTelemetry.recordMetric('RoundTripTime', {uint64: that._networkOneWayLatency * 2}, null, {
                    resource: that.getBaseUri(),
                    kind: 'https'
                });

                createViewerOptions.originStartTime = _.now() - response.createStreamResponse.offset + that._networkOneWayLatency;

                if (!isNotRealTime && ((phenixRTC.browser === 'Chrome' && phenixRTC.browserVersion >= 62 && FeatureDetector.isMobile()) || phenixRTC.browser === 'Opera') && that._h264ProfileIds.length > 0) {
                    // For subscribing we need any profile and level that is equal to or greater than the offer's profile and level
                    var profileLevelIdToReplace = _.get(sdpUtil.getH264ProfileIds(offerSdp), [0]);
                    var preferredLevelId = sdpUtil.getH264ProfileIdWithSameOrHigherProfileAndEqualToOrHigherLevel(that._h264ProfileIds, profileLevelIdToReplace);

                    if (!preferredLevelId) {
                        that._logger.warn('[%s] Unable to find new subscriber h264 profile level id to replace [%s]. Rejected environment defaults of [%s]',
                            streamId, profileLevelIdToReplace, that._h264ProfileIds);
                    } else if (profileLevelIdToReplace !== preferredLevelId) {
                        that._logger.info('[%s] Replacing subscriber h264 profile level id [%s] with new value [%s] in offer sdp',
                            streamId, profileLevelIdToReplace, preferredLevelId);

                        offerSdp = sdpUtil.replaceH264ProfileId(offerSdp, profileLevelIdToReplace, preferredLevelId);
                    }
                }

                return create.call(that, streamId, offerSdp, streamTelemetry, function(phenixMediaStream, error) {
                    streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                    if (error) {
                        callback.call(that, that, 'failed', null);
                    } else {
                        callback.call(that, that, 'ok', phenixMediaStream);
                    }
                }, createViewerOptions);
            });
        });
    };

    PCast.prototype.getProtocol = function() {
        return this._protocol;
    };

    PCast.prototype.getLogger = function() {
        return this._logger;
    };

    PCast.prototype.getObservableSessionId = function() {
        return this._observableSessionId;
    };

    PCast.prototype.toString = function() {
        var protocol = this.getProtocol();
        var sessionId = protocol ? protocol.getSessionId() : '';

        return 'PCast[' + sessionId || false;
    };

    PCast.prototype.parseCapabilitiesFromToken = function(streamToken) {
        return _.get(parseToken.call(this, streamToken), ['capabilities'], []);
    };

    PCast.prototype.parseUriFromToken = function(streamToken) {
        return _.get(parseToken.call(this, streamToken), ['uri'], '');
    };

    PCast.prototype.parseRoomOrChannelIdFromToken = function(streamToken) {
        var requiredTag = _.get(parseToken.call(this, streamToken), ['requiredTag'], '');
        var idMatch = requiredTag.match(roomOrChannelIdRegex);

        return idMatch ? idMatch[1] : null;
    };

    PCast.prototype.parseRoomOrChannelAliasFromToken = function(streamToken) {
        var requiredTag = _.get(parseToken.call(this, streamToken), ['requiredTag'], '');
        var aliasMatch = requiredTag.match(roomOrChannelAliasRegex);

        return aliasMatch ? aliasMatch[1] : null;
    };

    function setupPcastLoggerAndMetrics(options) {
        this._logger = options.logger || pcastLoggerFactory.createPCastLogger(this._baseUri, options.disableConsoleLogging, options.loggingLevel);
        this._metricsTransmitter = options.metricsTransmitter || metricsTransmitterFactory.createMetricsTransmitter(this._baseUri);
    }

    function parseToken(streamToken) {
        if (!_.startsWith(streamToken, 'DIGEST:')) {
            this._logger.warn('Failed to parse the `streamToken` [%s]', streamToken);

            throw new Error('Bad `streamToken`');
        }

        try {
            var base64Token = streamToken.split(':')[1];
            var decodedToken = phenixRTC.global.atob(base64Token);
            var token = JSON.parse(decodedToken).token;
            var tokenOptions = JSON.parse(token);

            return tokenOptions;
        } catch (e) {
            var sessionId = this.getProtocol().getSessionId();
            this._logger.warn('[%s] Failed to parse the `streamToken` [%s]', sessionId, streamToken);

            throw new Error(e);
        }
    }

    function instantiateProtocol(uri) {
        this._protocol = new PCastProtocol(uri, this._deviceId, this._version, this._logger);

        this._protocol.onEvent('connected', _.bind(connected, this));
        this._protocol.onEvent('reconnecting', _.bind(reconnecting, this));
        this._protocol.onEvent('reconnected', _.bind(reconnected, this));
        this._protocol.onEvent('disconnected', _.bind(disconnected, this));
        this._protocol.onEvent('pcast.StreamEnded', _.bind(streamEnded, this));
        this._protocol.onEvent('pcast.StreamDataQuality', _.bind(dataQuality, this));

        if (this._logger.setObservableSessionId) {
            this._logger.setObservableSessionId(this._protocol.getObservableSessionId());
        }

        if (this._sessionTelemetrySubscription) {
            this._sessionTelemetrySubscription.dispose();
            this._sessionTelemetry.setSessionId(null);
        }

        if (this._sessionIdSubscription) {
            this._sessionIdSubscription.dispose();
        }

        var handleSessionIdChange = function(sessionId) {
            this._observableSessionId.setValue(sessionId);
        };

        this._sessionIdSubscription = this._protocol.getObservableSessionId().subscribe(_.bind(handleSessionIdChange, this));

        this._sessionTelemetrySubscription = this._protocol.getObservableSessionId().subscribe(_.bind(this._sessionTelemetry.setSessionId, this._sessionTelemetry));
    }

    function connected() {
        var that = this;

        if (that._stopped) {
            that._logger.warn('[%s] Skip connect due to stopped state', that);

            return;
        }

        if (areAllPeerConnectionsOffline.call(that) && that._observableStatus.getValue() === 'offline') {
            this._logger.warn('[PCast] connected after being offline. Reconnecting.');

            reconnecting.call(that);
        }

        this._connected = true;

        var protocol = that._protocol;
        var authenticateCallId = ++that._authenticateCallId;

        protocol.authenticate(that._authToken, function(error, response) {
            if (protocol !== that._protocol) {
                that._logger.info('Ignoring authentication response as reset took place');

                return;
            }

            if (authenticateCallId !== that._authenticateCallId) {
                that._logger.info('Ignoring authentication response as a latter request is already underway');

                return;
            }

            if (that._authenticationCallback) {
                if (error) {
                    that._logger.error('Failed to authenticate [%s]', error);
                    transitionToStatus.call(that, 'unauthorized');
                    that._authenticationCallback.call(that, that, 'unauthorized', '');
                } else if (response.status !== 'ok') {
                    that._logger.warn('Failed to authenticate, status [%s]', response.status);
                    transitionToStatus.call(that, 'unauthorized');
                    that._authenticationCallback.call(that, that, 'unauthorized', '');
                } else {
                    transitionToStatus.call(that, 'online');

                    that._authenticationCallback.call(that, that, response.status, response.sessionId);
                }
            }
        });
    }

    function reconnecting() {
        transitionToStatus.call(this, 'reconnecting');
    }

    function reconnected(optionalReason) {
        if (optionalReason) {
            assert.isString('reason', optionalReason);
        }

        transitionToStatus.call(this, 'reconnected', optionalReason);

        this._logger.info('Attempting to re-authenticate after reconnected event [%s]', optionalReason);

        reAuthenticate.call(this);
    }

    function reAuthenticate() {
        var that = this;

        if (that._stopped) {
            that._logger.info('Skip re-authentication due to stopped state');

            return;
        }

        var protocol = that._protocol;
        var reAuthenticateCallId = ++that._reAuthenticateCallId;

        protocol.authenticate(that._authToken, function(error, response) {
            var suppressCallbackIfNeverDisconnected = that._connected === true;

            if (protocol !== that._protocol) {
                that._logger.info('Ignoring re-authentication response as reset took place');

                return;
            }

            if (reAuthenticateCallId !== that._reAuthenticateCallId) {
                that._logger.info('Ignoring re-authentication response as a latter request is already underway');

                return;
            }

            if (error) {
                that._logger.error('Unable to authenticate after reconnect to WebSocket [%s]', error);

                return transitionToStatus.call(that, 'reconnect-failed');
            }

            if (response.status !== 'ok') {
                that._logger.warn('Unable to authenticate after reconnect to WebSocket, status [%s]', response.status);

                var reason = response.status === 'capacity' ? response.status : 'reconnect-failed';

                return transitionToStatus.call(that, reason);
            }

            that._connected = true;

            that._logger.info('Successfully authenticated after reconnect to WebSocket');

            return transitionToStatus.call(that, 'online', null, suppressCallbackIfNeverDisconnected);
        });
    }

    function disconnected() {
        if (areAllPeerConnectionsOffline.call(this) && this._observableStatus.getValue() === 'reconnecting') {
            this._logger.warn('[PCast] disconnected after attempting to reconnect. Going offline.');

            transitionToStatus.call(this, 'critical-network-issue');

            return this.stop('critical-network-issue');
        }

        this._connected = false;
        transitionToStatus.call(this, 'offline');
    }

    function areAllPeerConnectionsOffline() {
        return _.reduce(this._peerConnections, function(isOffline, peerConnection) {
            if (!isOffline) {
                return isOffline;
            }

            return peerConnection.iceConnectionState === 'closed';
        }, true);
    }

    function streamEnded(event) {
        var streamId = event.streamId;
        var reason = event.reason;

        return endStream.call(this, streamId, reason);
    }

    function dataQuality(event) {
        var streamId = event.streamId;
        var status = event.status;
        var reason = event.reason;

        var internalMediaStream = this._mediaStreams[streamId];

        if (internalMediaStream) {
            internalMediaStream.dataQualityChangedCallback(status, reason);
        }

        var publisher = this._publishers[streamId];

        if (publisher && _.isFunction(publisher.dataQualityChangedCallback)) {
            publisher.dataQualityChangedCallback(publisher, status, reason);
        }
    }

    function endStream(streamId, reason) {
        this._logger.info('[%s] Stream ended with reason [%s]', streamId, reason);

        var internalMediaStream = this._mediaStreams[streamId];

        if (internalMediaStream) {
            internalMediaStream.streamEndedCallback(StreamWrapper.getStreamEndedStatus(reason), reason, true);
        }

        delete this._mediaStreams[streamId];

        var publisher = this._publishers[streamId];

        if (publisher && _.isFunction(publisher.publisherEndedCallback)) {
            publisher.publisherEndedCallback(publisher, StreamWrapper.getStreamEndedStatus(reason), reason);
        }

        delete this._publishers[streamId];

        var peerConnection = this._peerConnections[streamId];

        if (peerConnection) {
            closePeerConnection.call(this, streamId, peerConnection, 'ended');
        }

        delete this._peerConnections[streamId];
    }

    function setupStreamAddedListener(streamId, state, peerConnection, streamTelemetry, callback, options) {
        var that = this;
        var added = false;
        var setupTimeoutId;
        var streamSetupInterval = 3000;
        var onAddStream = function onAddStream(event) {
            if (state.failed || added) {
                return;
            }

            var numberOfActiveTracks = sdpUtil.getNumberOfActiveSections(peerConnection);
            var masterStream = event.stream || _.get(event, ['streams', 0]);
            var kind = 'real-time';

            if (!masterStream) {
                state.failed = true;
                that._logger.warn('[%s] No remote stream', streamId);

                return callback.call(that, undefined, 'failed');
            }

            if (setupTimeoutId) {
                clearTimeout(setupTimeoutId);
            }

            if (numberOfActiveTracks !== masterStream.getTracks().length && phenixRTC.browser !== 'ReactNative') {
                setupTimeoutId = setTimeout(function() {
                    state.failed = true;
                    that._logger.warn('[%s] Did not receive all tracks within [%s] ms', streamId, streamSetupInterval);

                    return callback.call(that, undefined, 'failed');
                }, streamSetupInterval);

                return;
            }

            added = true;

            that._logger.info('[%s] Got remote stream', streamId);

            streamTelemetry.setProperty('kind', kind);

            var streamOptions = _.assign({networkLag: that._networkOneWayLatency}, options);
            var realTimeStream = new PhenixRealTimeStream(streamId, masterStream, peerConnection, streamTelemetry, streamOptions, that._logger);
            var realTimeStreamDecorator = new StreamWrapper(kind, realTimeStream, that._logger);

            var onError = function onError(source, event) {
                that._logger.info('Phenix Real-Time stream error [%s] [%s]', source, event);

                realTimeStreamDecorator.streamErrorCallback(kind, event);
            };

            var onStop = function destroyMasterMediaStream(reason) {
                if (state.stopped || !that._protocol) {
                    return;
                }

                that._logger.info('[%s] media stream has stopped with reason [%s]', streamId, reason);

                closePeerConnection.call(that, streamId, peerConnection, 'stop');

                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                    if (error) {
                        that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                        return;
                    } else if (response.status !== 'ok') {
                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                        return;
                    }

                    that._logger.info('[%s] destroyed stream', streamId);
                });

                state.stopped = true;
            };

            realTimeStreamDecorator.on(streamEnums.streamEvents.playerError.name, onError);
            realTimeStreamDecorator.on(streamEnums.streamEvents.stopped.name, onStop);

            that._mediaStreams[streamId] = realTimeStreamDecorator;

            callback.call(that, realTimeStream);
        };

        _.addEventListener(peerConnection, 'addstream', onAddStream);
        _.addEventListener(peerConnection, 'track', onAddStream);
    }

    function setupIceCandidateListener(streamId, peerConnection, callback) {
        var that = this;
        var onIceCandidate = function onIceCandidate(event) {
            var candidate = event.candidate;

            if (candidate) {
                that._logger.info('[%s] ICE candidate: [%s] [%s] [%s]', streamId, candidate.sdpMid, candidate.sdpMLineIndex, candidate.candidate);
            } else {
                that._logger.info('[%s] ICE candidate discovery complete', streamId);
            }

            if (callback) {
                callback(candidate);
            }
        };

        _.addEventListener(peerConnection, 'icecandidate', onIceCandidate);
    }

    function setupStateListener(streamId, peerConnection) {
        var that = this;
        var onNegotiationNeeded = function onNegotiationNeeded(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Negotiation needed', streamId);
        };

        var onIceConnectionStateChanged = function onIceConnectionStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] ICE connection state changed [%s]', streamId, peerConnection.iceConnectionState);
        };

        var onIceGatheringStateChanged = function onIceGatheringStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] ICE gathering state changed [%s]', streamId, peerConnection.iceGatheringState);
        };

        var onSignalingStateChanged = function onSignalingStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Signaling state changed [%s]', streamId, peerConnection.signalingState);
        };

        var onConnectionStateChanged = function onConnectionStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Connection state changed [%s]', streamId, peerConnection.connectionState);
        };

        _.addEventListener(peerConnection, 'negotiationneeded', onNegotiationNeeded);
        _.addEventListener(peerConnection, 'iceconnectionstatechange', onIceConnectionStateChanged);
        _.addEventListener(peerConnection, 'icegatheringstatechange ', onIceGatheringStateChanged);
        _.addEventListener(peerConnection, 'signalingstatechange', onSignalingStateChanged);
        _.addEventListener(peerConnection, 'connectionstatechange', onConnectionStateChanged);
    }

    function createPublisher(streamId, callback, streamOptions) {
        var that = this;
        var state = {stopped: false};

        var publisher = {
            getStreamId: function getStreamId() {
                return streamId;
            },

            getStream: function getStream() {
                that._logger.debug('[%s] Unable to get stream for remote origin.', streamId);

                return null;
            },

            getStats: function getStats() {
                that._logger.debug('[%s] Unable to get stream stats for remote origin.', streamId);

                return null;
            },

            isActive: function isActive() {
                return !state.stopped;
            },

            hasEnded: function hasEnded() {
                return state.stopped;
            },

            stop: function stop(reason) {
                if (state.stopped) {
                    return;
                }

                that._logger.info('[%s] stopping publisher with reason [%s]', streamId, reason);

                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                    if (error) {
                        that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                        return;
                    } else if (response.status !== 'ok') {
                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                        return;
                    }

                    that._logger.info('[%s] destroyed stream', streamId);
                });

                state.stopped = true;
            },

            setPublisherEndedCallback: function setPublisherEndedCallback(callback) {
                assert.isFunction(callback, 'callback');

                this.publisherEndedCallback = callback;
            },

            setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
                assert.isFunction(callback, 'callback');

                this.dataQualityChangedCallback = callback;
            },

            getOptions: function getOptions() {
                return streamOptions;
            },

            monitor: function monitor(options, callback) {
                assert.isObject(options, 'options');
                assert.isFunction(callback, 'callback');
            },

            getMonitor: function getMonitor() {
                return null;
            }
        };

        that._publishers[streamId] = publisher;

        callback(publisher);
    }

    function setEnvironmentCodecDefaults() {
        var that = this;
        var peerConnection = new phenixRTC.RTCPeerConnection();

        // TODO(DY) remove when updating to webrtc-adapter version 5.0.5 or greater
        if (phenixRTC.browser === 'Safari' && phenixRTC.browserVersion > 10) {
            peerConnection.addTransceiver('audio');
            peerConnection.addTransceiver('video');
        }

        try {
            var handleOffer = function handleOffer(offer) {
                var h264ProfileIds = sdpUtil.getH264ProfileIds(offer.sdp);

                that._supportedWebrtcCodecs = sdpUtil.getSupportedCodecs(offer.sdp);

                that._logger.info('Supported WebRTC video codecs [%s]', that._supportedWebrtcCodecs);

                if (h264ProfileIds.length === 0) {
                    return that._logger.info('Unable to find local h264 profile level id', offer.sdp);
                }

                that._logger.info('Found local h264 profile level ids [%s]', h264ProfileIds, offer.sdp);

                that._h264ProfileIds = h264ProfileIds;

                if (peerConnection.close) {
                    peerConnection.close();
                }
            };

            var handleFailure = function(e) {
                that._logger.error('Unable to create offer to get local h264 profile level id', e);

                if (peerConnection.close) {
                    peerConnection.close();
                }
            };

            var constraints = {
                offerToReceiveAudio: true,
                offerToReceiveVideo: true
            };

            if (typeof phenixRTC.global.Promise === 'function') {
                return peerConnection.createOffer(constraints)
                    .then(handleOffer)
                    .catch(handleFailure);
            }

            peerConnection.createOffer(handleOffer, handleFailure, constraints);
        } catch (e) {
            that._logger.error('Failed to set environment defaults. Creating the Offer failed', e);

            if (peerConnection.close) {
                peerConnection.close();
            }
        }
    }

    function setAudioState(done) {
        var that = this;

        switch (phenixRTC.browser) {
        case 'Edge':
            return phenixRTC.getDestinations(function(destinations) {
                var audioDestinations = _.filter(destinations, function(destination) {
                    return destination.kind === 'audio';
                });

                if (audioDestinations.length === 0) {
                    if (that._canPlaybackAudio) {
                        that._logger.info('Detected no audio devices attached to machine');
                    }

                    that._canPlaybackAudio = false;
                } else {
                    that._canPlaybackAudio = true;
                }

                if (done) {
                    done();
                }
            });
        default:
            if (done) {
                done();
            }

            break;
        }
    }

    function createPublisherPeerConnection(peerConnectionConfig, mediaStream, streamId, offerSdp, streamTelemetry, callback, createOptions, streamOptions) {
        var that = this;
        var state = {
            failed: false,
            stopped: false
        };
        var hasCrypto = offerSdp.match(/a=crypto:/i);
        var hasDataChannel = offerSdp.match(/m=application /i);
        var peerConnection = new phenixRTC.RTCPeerConnection(peerConnectionConfig, {
            'optional': [
                {DtlsSrtpKeyAgreement: !hasCrypto}, {RtpDataChannels: hasDataChannel}
            ]
        });
        var remoteMediaStream = null;
        var publisherMonitor = null;

        shimPeerConnectionGetStreams(peerConnection);

        that._peerConnections[streamId] = peerConnection;

        peerConnection.addStream(mediaStream);

        if (phenixRTC.browser === 'Firefox' || phenixRTC.browser === 'Edge') {
            if (offerSdp.match(/(\nm=video)/g) && offerSdp.match(/(\nm=audio)/g)) {
                var firstSection = /(a=candidate)((.|\n)*)(?=m=)/g;

                offerSdp = offerSdp.replace(firstSection, offerSdp.match(firstSection) + 'a=end-of-candidates\n');
            }

            offerSdp += 'a=end-of-candidates';

            offerSdp = offerSdp.replace(/(\na=ice-options:trickle)/g, '');
        }

        var onFailure = function onFailure(status) {
            if (state.failed) {
                return;
            }

            if (status instanceof Error) {
                that._logger.info('[%s] Failed to setup peer connection', streamId, status);

                status = 'failed';
            }

            state.failed = true;
            state.stopped = true;

            delete that._peerConnections[streamId];
            delete that._publishers[streamId];
            delete that._iceCandidateCallbacks[streamId];

            closePeerConnection.call(that, streamId, peerConnection, 'failure');

            callback.call(that, undefined, status || 'failed');
        };

        var createPublisher = function createPublisher() {
            var bandwidthAttribute = /(b=AS:([0-9]*)[\n\r]*)/gi;
            var video = /(mid:video)([\n\r]*)/gi;
            var limit = 0;
            var bandwithAttribute = bandwidthAttribute.exec(offerSdp);

            if (bandwithAttribute && bandwithAttribute.length >= 3) {
                limit = bandwithAttribute[2] * 1000;
            }

            var publisher = {
                getStreamId: function getStreamId() {
                    return streamId;
                },

                getStream: function getStream() {
                    return mediaStream;
                },

                isActive: function isActive() {
                    return !state.stopped;
                },

                hasEnded: function hasEnded() {
                    switch (peerConnection.iceConnectionState) {
                    case 'new':
                    case 'checking':
                    case 'connected':
                    case 'completed':
                        return false;
                    case 'disconnected':
                    case 'failed':
                    case 'closed':
                        return true;
                    default:
                        return true;
                    }
                },

                stop: function stop(reason) {
                    if (state.stopped || !that._protocol) {
                        return;
                    }

                    that._logger.info('[%s] stopping publisher with reason [%s]', streamId, reason || 'client-action');

                    closePeerConnection.call(that, streamId, peerConnection, 'closed');

                    that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                        if (error) {
                            that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                            return;
                        } else if (response.status !== 'ok') {
                            that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                            return;
                        }

                        that._logger.info('[%s] destroyed stream', streamId);
                    });

                    state.stopped = true;
                },

                setPublisherEndedCallback: function setPublisherEndedCallback(callback) {
                    assert.isFunction(callback, 'callback');

                    this.publisherEndedCallback = callback;
                },

                setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
                    assert.isFunction(callback, 'callback');

                    this.dataQualityChangedCallback = callback;
                },

                limitBandwidth: function limitBandwidth(bandwidthLimit) {
                    if (phenixRTC.browser === 'Edge') {
                        return that._logger.warn('Limit bandwidth not support on [%s]', phenixRTC.browser);
                    }

                    assert.isNumber(bandwidthLimit, 'bandwidthLimit');

                    var newLimit = limit ? Math.min(bandwidthLimit, limit) : bandwidthLimit;
                    var remoteDescription = peerConnection.remoteDescription;

                    that._logger.info('Changing bandwidth limit to [%s]', newLimit);

                    var updatedSdp = remoteDescription.sdp.replace(bandwidthAttribute, '');

                    // Add new limit in kbps
                    updatedSdp = updatedSdp.replace(video, function(match, videoLine, lineEnding, offset, sdp) { // eslint-disable-line no-unused-vars
                        return [videoLine, lineEnding, 'b=AS:', Math.ceil(newLimit / 1000), lineEnding].join('');
                    });

                    var updatedRemoteDescription = new phenixRTC.RTCSessionDescription({
                        type: remoteDescription.type,
                        sdp: updatedSdp
                    });

                    peerConnection.setRemoteDescription(updatedRemoteDescription);

                    return {
                        dispose: function() {
                            peerConnection.setRemoteDescription(remoteDescription);
                        }
                    };
                },

                getMonitor: function getMonitor() {
                    return publisherMonitor;
                },

                monitor: function monitor(options, callback) {
                    assert.isObject(options, 'options');
                    assert.isFunction(callback, 'callback');

                    var monitor = new PeerConnectionMonitor(streamId, peerConnection, that._logger);

                    options.direction = 'outbound';
                    options.setNetworkRTT = function(rtt) {
                        that._networkRTT.setValue(rtt);
                    };
                    monitor.start(options, function activeCallback() {
                        return that._publishers[streamId] === publisher && !state.stopped;
                    }, function monitorCallback(error, monitorEvent) {
                        if (error) {
                            that._logger.warn('[%s] Publisher monitor triggered unrecoverable error [%s]', error);
                        }

                        that._logger.warn('[%s] Publisher triggered monitor condition for [%s]', streamId, monitorEvent.reasons);

                        return callback(publisher, 'client-side-failure', monitorEvent);
                    });

                    _.forEach(mediaStream.getTracks(), function(track) {
                        _.addEventListener(track, 'readystatechange', function() {
                            if (track.readyState === 'ended') {
                                that._logger.warn('[%s] Publisher track has failed [%s]', streamId, track);

                                return callback(publisher, 'camera-track-failure', {
                                    type: track.kind + '-track-ended',
                                    message: 'Publisher ' + track.kind + ' track has ended in an unrecoverable way. This may require reconfiguring your camera or microphone.'
                                });
                            }
                        });
                    });

                    publisherMonitor = monitor;

                    return monitor;
                },

                addBitRateThreshold: function addBitRateThreshold(threshold, callback) {
                    var bitRateMonitor = new BitRateMonitor('Publisher', publisherMonitor, function getLimit() {
                        return limit;
                    });

                    return bitRateMonitor.addThreshold(threshold, callback);
                },

                setRemoteMediaStreamCallback: function setRemoteMediaStreamCallback(callback) {
                    assert.isFunction(callback, 'callback');

                    this.remoteMediaStreamCallback = callback;

                    if (remoteMediaStream) {
                        callback(publisher, remoteMediaStream);
                    }
                },

                getOptions: function getOptions() {
                    return streamOptions;
                },

                getStats: function getStats(callback) {
                    assert.isFunction(callback, 'callback');

                    if (!this._lastStats) {
                        this._lastStats = {};
                    }

                    var that = this;

                    return phenixRTC.getStats(peerConnection, null, function(stats) {
                        callback(PeerConnection.convertPeerConnectionStats(stats, that._lastStats));
                    });
                },

                networkRTT: that._networkRTT
            };

            that._publishers[streamId] = publisher;

            callback.call(that, publisher);
        };

        setupStreamAddedListener.call(that, streamId, state, peerConnection, streamTelemetry, function(mediaStream) {
            var publisher = that._publishers[streamId];

            remoteMediaStream = mediaStream;

            if (publisher && publisher.remoteMediaStreamCallback) {
                publisher.remoteMediaStreamCallback(publisher, mediaStream);
            }
        }, createOptions);
        setupIceCandidateListener.call(that, streamId, peerConnection, function onIceCandidate(candidate) {
            if (that._iceCandidateCallbacks[streamId]) {
                that._iceCandidateCallbacks[streamId](candidate);
            }
        });
        setupStateListener.call(that, streamId, peerConnection);

        var offerSessionDescription = new phenixRTC.RTCSessionDescription({
            type: 'offer',
            sdp: offerSdp
        });
        var mediaConstraints = {mandatory: {}};

        if (phenixRTC.browser === 'Chrome' || phenixRTC.browser === 'ReactNative') {
            mediaConstraints.mandatory.OfferToReceiveVideo = createOptions.receiveVideo === true;
            mediaConstraints.mandatory.OfferToReceiveAudio = createOptions.receiveAudio === true;
        } else {
            mediaConstraints.mandatory.offerToReceiveVideo = createOptions.receiveVideo === true;
            mediaConstraints.mandatory.offerToReceiveAudio = createOptions.receiveAudio === true;
        }

        if (typeof phenixRTC.global.Promise === 'function') {
            return peerConnection.setRemoteDescription(offerSessionDescription)
                .then(_.bind(onSetRemoteDescriptionSuccess, that, peerConnection))
                .then(function() {
                    return peerConnection.createAnswer(mediaConstraints);
                })
                .then(_.bind(onCreateAnswerSuccess, that))
                .then(function(answerSdp) {
                    return new phenixRTC.global.Promise(function(resolve, reject) {
                        setRemoteAnswer.call(that, streamId, answerSdp, resolve, reject);
                    });
                })
                .then(function(sessionDescription) {
                    return peerConnection.setLocalDescription(sessionDescription);
                })
                .then(_.bind(onSetLocalDescriptionSuccess, that, peerConnection))
                .then(function() {
                    that._logger.info('[%s] Peer connection setup completed', streamId);
                })
                .then(createPublisher)
                .catch(onFailure);
        }

        that._logger.info('[%s] Using legacy peer connection api to publish', streamId);

        peerConnection.setRemoteDescription(offerSessionDescription, function() {
            onSetRemoteDescriptionSuccess.call(that, peerConnection);

            peerConnection.createAnswer(function(answerSdp) {
                onCreateAnswerSuccess.call(that, answerSdp);

                setRemoteAnswer.call(that, streamId, answerSdp, function(sessionDescription) {
                    peerConnection.setLocalDescription(sessionDescription, function() {
                        onSetLocalDescriptionSuccess.call(that, peerConnection);

                        that._logger.info('[%s] Peer connection setup completed', streamId);

                        createPublisher();
                    }, onFailure);
                }, onFailure);
            }, onFailure, mediaConstraints);
        }, onFailure);
    }

    function createViewerPeerConnection(peerConnectionConfig, streamId, offerSdp, streamTelemetry, callback, createOptions) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Subscribing in real-time not supported on IE');
        }

        var that = this;
        var state = {
            failed: false,
            stopped: false
        };
        var hasCrypto = offerSdp.match(/a=crypto:/i);
        var hasDataChannel = offerSdp.match(/m=application /i);
        var peerConnection = new phenixRTC.RTCPeerConnection(peerConnectionConfig, {
            'optional': [
                {DtlsSrtpKeyAgreement: !hasCrypto}, {RtpDataChannels: hasDataChannel}
            ]
        });

        shimPeerConnectionGetStreams(peerConnection);

        that._peerConnections[streamId] = peerConnection;

        if (phenixRTC.browser === 'Firefox' || phenixRTC.browser === 'Edge') {
            if (offerSdp.match(/(\nm=video)/g) && offerSdp.match(/(\nm=audio)/g)) {
                var firstSection = /(a=candidate)((.|\n)*)(?=m=)/g;

                offerSdp = offerSdp.replace(firstSection, offerSdp.match(firstSection) + 'a=end-of-candidates\n');
            }

            offerSdp += 'a=end-of-candidates';

            offerSdp = offerSdp.replace(/(\na=ice-options:trickle)/g, '');
        }

        if (phenixRTC.browser === 'ReactNative') {
            offerSdp = sdpUtil.setGroupLineOrderToMatchMediaSectionOrder(offerSdp);
        }

        var onFailure = function onFailure(status) {
            if (state.failed) {
                return;
            }

            if (status instanceof Error) {
                that._logger.info('[%s] Failed to setup peer connection', streamId, status);

                status = 'failed';
            }

            state.failed = true;
            state.stopped = true;

            delete that._peerConnections[streamId];
            delete that._mediaStreams[streamId];
            delete that._iceCandidateCallbacks[streamId];

            closePeerConnection.call(that, streamId, peerConnection, 'failure');

            callback.call(that, undefined, status || 'failed');
        };

        setupStreamAddedListener.call(that, streamId, state, peerConnection, streamTelemetry, callback, createOptions);
        setupIceCandidateListener.call(that, streamId, peerConnection, function onIceCandidate(candidate) {
            if (that._iceCandidateCallbacks[streamId]) {
                that._iceCandidateCallbacks[streamId](candidate);
            }
        });
        setupStateListener.call(that, streamId, peerConnection);

        var offerSessionDescription = new phenixRTC.RTCSessionDescription({
            type: 'offer',
            sdp: offerSdp
        });
        var mediaConstraints = {mandatory: {}};

        if (phenixRTC.browser === 'Chrome' || phenixRTC.browser === 'ReactNative') {
            mediaConstraints.mandatory.OfferToReceiveVideo = createOptions.receiveVideo !== false;
            mediaConstraints.mandatory.OfferToReceiveAudio = createOptions.receiveAudio !== false;
        } else {
            mediaConstraints.mandatory.offerToReceiveVideo = createOptions.receiveVideo !== false;
            mediaConstraints.mandatory.offerToReceiveAudio = createOptions.receiveAudio !== false;
        }

        if (typeof phenixRTC.global.Promise === 'function') {
            return peerConnection.setRemoteDescription(offerSessionDescription)
                .then(_.bind(onSetRemoteDescriptionSuccess, that, peerConnection))
                .then(function() {
                    return peerConnection.createAnswer(mediaConstraints);
                })
                .then(_.bind(onCreateAnswerSuccess, that))
                .then(function(answerSdp) {
                    return new phenixRTC.global.Promise(function(resolve, reject) {
                        setRemoteAnswer.call(that, streamId, answerSdp, resolve, reject);
                    });
                })
                .then(function(sessionDescription) {
                    return peerConnection.setLocalDescription(sessionDescription);
                })
                .then(_.bind(onSetLocalDescriptionSuccess, that, peerConnection))
                .then(function() {
                    that._logger.info('[%s] Peer connection setup completed', streamId);
                })
                .catch(onFailure);
        }

        that._logger.info('[%s] Using legacy peer connection api to subscribe', streamId);

        peerConnection.setRemoteDescription(offerSessionDescription, function() {
            onSetRemoteDescriptionSuccess.call(that, peerConnection);

            peerConnection.createAnswer(function(answerSdp) {
                onCreateAnswerSuccess.call(that, answerSdp);

                setRemoteAnswer.call(that, streamId, answerSdp, function(sessionDescription) {
                    peerConnection.setLocalDescription(sessionDescription, function() {
                        onSetLocalDescriptionSuccess.call(that, peerConnection);

                        that._logger.info('[%s] Peer connection setup completed', streamId);
                    }, onFailure);
                }, onFailure);
            }, onFailure, mediaConstraints);
        }, onFailure);
    }

    function onSetLocalDescriptionSuccess(peerConnection) {
        this._logger.debug('Set local description [%s] [%s]', _.get(peerConnection, ['localDescription', 'type']), _.get(peerConnection, ['localDescription', 'sdp']));
    }

    function onSetRemoteDescriptionSuccess(peerConnection) {
        this._logger.debug('Set remote description [%s] [%s]', _.get(peerConnection, ['localDescription', 'type']), _.get(peerConnection, ['remoteDescription', 'sdp']));
    }

    function onCreateAnswerSuccess(answerSdp) {
        this._logger.info('Created answer [%s]', answerSdp.sdp);

        return answerSdp;
    }

    function setRemoteAnswer(streamId, answerSdp, setRemoteAnswerCallback, onFailure) {
        var that = this;

        that._protocol.setAnswerDescription(streamId, answerSdp.sdp, function(error, response) {
            if (error) {
                that._logger.error('Failed to set answer description [%s]', error);

                return onFailure();
            } else if (response.status !== 'ok') {
                that._logger.warn('Failed to set answer description, status [%s]', response.status);

                return onFailure(response.status);
            }

            if (response && _.includes(response.options, 'ice-candidates')) {
                that._iceCandidateCallbacks[streamId] = _.bind(onIceCandidate, that, streamId);
            }

            var localSdp = response.sessionDescription.sdp;

            if (FeatureDetector.isIOS()) {
                var version = _.get(FeatureDetector.getIOSVersion(), ['major']);

                that._logger.info('iOS Version is [%s]', version);

                if (version < 11) {
                    localSdp = localSdp.replace('BUNDLE audio video', 'BUNDLE video audio'); // Without this only video-only streams work on iOS 10
                }
            }

            var sessionDescription = new phenixRTC.RTCSessionDescription({
                type: 'answer',
                sdp: localSdp
            });

            setRemoteAnswerCallback(sessionDescription);
        });
    }

    function onIceCandidate(streamId, candidate) {
        var that = this;
        var iceCandidates = this._pendingIceCandidates[streamId];

        if (!iceCandidates) {
            iceCandidates = this._pendingIceCandidates[streamId] = [];
        }

        if (candidate && _.get(candidate, ['candidate'])) {
            iceCandidates.push(candidate);
        } else {
            if (that._addIceCandidatesTimeoutScheduled[streamId]) {
                that._logger.debug('[%s] Dismissing scheduled batch for adding ICE candidates. Sending candidates immediately because there are no more candidates.', streamId);
                clearTimeout(that._addIceCandidatesTimeoutScheduled[streamId]);
            }

            submitIceCandidates.call(that, streamId, ['completed']);

            delete this._pendingIceCandidates[streamId];
            delete this._addIceCandidatesTimeoutScheduled[streamId];
        }

        if (this._addIceCandidatesTimeoutScheduled[streamId]) {
            that._logger.debug('[%s] Using existing batch for adding ICE candidates', streamId);

            return;
        }

        this._addIceCandidatesTimeoutScheduled[streamId] = setTimeout(function() {
            submitIceCandidates.call(that, streamId, []);

            delete that._addIceCandidatesTimeoutScheduled[streamId];
        }, accumulateIceCandidatesDuration);

        this._disposables.add(new disposable.Disposable(function() {
            if (that._addIceCandidatesTimeoutScheduled[streamId]) {
                clearTimeout(that._addIceCandidatesTimeoutScheduled[streamId]);
            }

            delete that._pendingIceCandidates[streamId];
            delete that._addIceCandidatesTimeoutScheduled[streamId];
        }));
    }

    function submitIceCandidates(streamId, options) {
        var iceCandidates = this._pendingIceCandidates[streamId] || [];

        if (iceCandidates.length === 0 && options.length === 0) {
            return;
        }

        var that = this;

        delete that._pendingIceCandidates[streamId];

        this._logger.info('[%s] Adding [%s] ICE Candidates with Options [%s]', streamId, iceCandidates.length, options);

        this._protocol.addIceCandidates(streamId, iceCandidates, options, function(error, response) {
            if (error) {
                return that._logger.error('Failed to add ICE candidate [%s]', error);
            } else if (response.status !== 'ok') {
                return that._logger.warn('Failed to add ICE candidate, status [%s]', response.status);
            }

            if (_.includes(response.options, 'cancel')) {
                delete that._iceCandidateCallbacks[streamId];
            }
        });
    }

    function createChunkedOrRtmpViewer(streamId, offerSdp, streamTelemetry, callback, options) {
        var that = this;

        var rtmpQuery = /a=x-rtmp:(rtmp:\/\/[^\n]*)/m;
        var rtmpMatch = offerSdp.match(rtmpQuery);
        var dashMatch = offerSdp.match(/a=x-playlist:([^\n]*[.]mpd\??[^\s]*)/m);
        var hlsMatch = offerSdp.match(/a=x-playlist:([^\n]*[.]m3u8\??[^\s]*)/m);
        var manifestUrl = _.get(dashMatch, [1], '');
        var playlistUrl = _.get(hlsMatch, [1], '');
        var dashManifestOffered = dashMatch && dashMatch.length === 2;
        var hlsPlaylistOffered = hlsMatch && hlsMatch.length === 2;
        var rtmpOffered = !!rtmpMatch;
        var publisherCapabilities = [];

        if (dashManifestOffered || hlsPlaylistOffered) {
            publisherCapabilities.push('streaming');
        }

        if (rtmpOffered) {
            publisherCapabilities.push('rtmp');
        }

        var preferredFeature = this._featureDetector.getPreferredFeatureFromPublisherCapabilities(publisherCapabilities, true);

        if (this._streamingSourceMapping) {
            manifestUrl = manifestUrl.replace(this._streamingSourceMapping.patternToReplace, this._streamingSourceMapping.replacement);
            playlistUrl = playlistUrl.replace(this._streamingSourceMapping.patternToReplace, this._streamingSourceMapping.replacement);
        }

        switch (preferredFeature) {
        case streamEnums.types.rtmp.name:
            var rtmpUris = [];
            var env = environment.parseEnvFromPcastBaseUri(this._baseUri);

            this._logger.info('Selecting flash playback for rtmp.');

            while (rtmpMatch) {
                var rtmpUriAndAttributes = _.get(rtmpMatch, [1], '');
                var rtmpUri = _.get(rtmpUriAndAttributes.match(/(rtmp:\/\/[^\n\s]*)/), [0]);
                var bitrate = _.get(rtmpUriAndAttributes.match(/bitrate=([^\n\s;]*)/), [1]);
                var resolution = _.get(rtmpUriAndAttributes.match(/resolution=([^\n\s;]*)/), [1]);

                offerSdp = offerSdp.replace(rtmpUriAndAttributes, '');

                if (rtmpUri) {
                    rtmpUris.push({
                        uri: rtmpUri,
                        bitrate: bitrate,
                        resolution: resolution
                    });
                }

                rtmpMatch = offerSdp.match(rtmpQuery);
            }

            return createLiveViewerOfKind.call(that, streamId, rtmpUris, streamEnums.types.rtmp.name, streamTelemetry, callback, _.assign({env: env}, this._rtmpOptions, options));
        case streamEnums.types.dash.name:
            this._logger.info('Selecting dash playback for live stream.');

            options.isDrmProtectedContent = /[?&]drmToken=([^&]*)/.test(manifestUrl) || /x-widevine-service-certificate/.test(offerSdp);

            if (options.isDrmProtectedContent) {
                options.widevineServiceCertificateUrl = offerSdp.match(/a=x-widevine-service-certificate:([^\n][^\s]*)/m)[1];
                options.playreadyLicenseUrl = offerSdp.match(/a=x-playready-license-url:([^\n][^\s]*)/m)[1];
            }

            return createLiveViewerOfKind.call(that, streamId, manifestUrl, streamEnums.types.dash.name, streamTelemetry, callback, options);
        case streamEnums.types.hls.name:
            this._logger.info('Selecting hls playback for live stream.');

            options.isDrmProtectedContent = /[?&]drmToken=([^&]*)/.test(playlistUrl);

            if (options.hlsTargetDuration) {
                assert.isNumber(options.hlsTargetDuration, 'options.hlsTargetDuration');

                playlistUrl = playlistUrl + (playlistUrl.indexOf('?') > -1 ? '&' : '?') + 'targetDuration=' + options.hlsTargetDuration;
            }

            return createLiveViewerOfKind.call(that, streamId, playlistUrl, streamEnums.types.hls.name, streamTelemetry, callback, _.assign({preferNative: FeatureDetector.shouldUseNativeHls}, options));
        default:
            break;
        }

        that._logger.warn('[%s] Device does not support [%s] playback. Creating live viewer stream failed.', streamId, FeatureDetector.mapPCastCapabilitiesToFeatures(publisherCapabilities));

        return callback.call(that, undefined, 'failed');
    }

    function createLiveViewerOfKind(streamId, uri, kind, streamTelemetry, callback, options) {
        var that = this;
        var pending = 0;
        var shaka = null;
        var webPlayer = null;

        if (!this._shakaLoader && !this._webPlayerLoader) {
            that._logger.warn('[%s] No player available for [%s] and uri [%s]. Please provide a loader via options.', streamId, kind, uri);

            that._protocol.destroyStream(streamId, 'unsupported-features', function(error, response) {
                if (error) {
                    that._logger.error('[%s] failed to destroy stream with unsupported features, [%s]', streamId, error);

                    return;
                } else if (response.status !== 'ok') {
                    that._logger.warn('[%s] failed to destroy stream with unsupported features, status [%s]', streamId, response.status);

                    return;
                }
            });

            return callback.call(that, undefined, 'unsupported-features');
        }

        if (this._shakaLoader) {
            pending++;
        }

        if (this._webPlayerLoader) {
            pending++;
        }

        var loaded = function() {
            if (!shaka && !webPlayer) {
                that._logger.warn('[%s] No player available for [%s] and uri [%s]. Please make sure the loader properly provides the player.', streamId, kind, uri);

                return callback.call(that, undefined, 'unsupported-features');
            }

            var liveStream = new PhenixLiveStream(kind, streamId, uri, streamTelemetry, options, shaka, webPlayer, that._logger);
            var liveStreamDecorator = new StreamWrapper(kind, liveStream, that._logger);

            var onPlayerError = function onPlayerError(source, event) {
                that._logger.warn('Phenix Live Stream Player Error [%s] [%s]', source, event);

                liveStreamDecorator.streamErrorCallback(source, event);
            };

            var onStop = function onStop(reason) {
                if (!that._protocol) {
                    return that._logger.warn('Unable to destroy stream [%s]', streamId);
                }

                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                    if (error) {
                        that._logger.error('[%s] failed to destroy stream, [%s]', streamId, error);

                        return;
                    } else if (response.status !== 'ok') {
                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                        return;
                    }
                });
            };

            streamTelemetry.setProperty('kind', kind);

            liveStreamDecorator.on(streamEnums.streamEvents.playerError.name, onPlayerError);
            liveStreamDecorator.on(streamEnums.streamEvents.stopped.name, onStop);

            that._mediaStreams[streamId] = liveStreamDecorator;

            callback.call(that, liveStreamDecorator.getPhenixMediaStream());
        };

        if (this._shakaLoader) {
            this._shakaLoader(function(s) {
                shaka = s;
                pending--;

                if (pending === 0) {
                    return loaded();
                }
            });
        }

        if (this._webPlayerLoader) {
            this._webPlayerLoader(function(w) {
                webPlayer = w;
                pending--;

                if (pending === 0) {
                    return loaded();
                }
            });
        }

        if (pending === 0) {
            return loaded();
        }
    }

    function transitionToStatus(newStatus, reason, suppressCallback) {
        var oldStatus = this.getStatus();

        if (oldStatus !== newStatus && !(isOfflineStatus(oldStatus) && newStatus === 'offline')) {
            this._observableStatus.setValue(newStatus);

            var protocol = this.getProtocol();
            var sessionId = protocol ? protocol.getSessionId() : '';
            this._logger.debug('[%s] Transition from [%s] to [%s] with reason [%s]', sessionId, oldStatus, newStatus, reason);

            if (suppressCallback) {
                return;
            }

            switch (newStatus) {
            case 'connecting':
            case 'reconnecting':
            case 'reconnected':
                break;
            case 'critical-network-issue':
            case 'unauthorized':
            case 'reconnect-failed':
            case 'offline':
                return this._offlineCallback.call(this);
            case 'online':
                return this._onlineCallback.call(this);
            default:
                break;
            }
        }
    }

    function isOfflineStatus(status) {
        return status === 'critical-network-issue' || status === 'offline';
    }

    function closePeerConnection(streamId, peerConnection, reason) {
        if (peerConnection.signalingState === 'closed' || peerConnection.__closing) {
            this._logger.debug('[%s] Peer connection is already closed [%s]', streamId, reason);

            return;
        }

        this._logger.debug('[%s] close peer connection [%s]', streamId, reason);

        peerConnection.close();
        peerConnection.__closing = true;
    }

    function handleForeground() {
        if (this._treatBackgroundAsOffline || this._reAuthenticateOnForeground) {
            reconnected.call(this, 'entered-foreground');
        }
    }

    function handleBackground() {
        if (this._treatBackgroundAsOffline) {
            transitionToStatus.call(this, 'offline', 'entered-background');
        }
    }

    function parseProtobufMessage(message) {
        if (!message) {
            return message;
        }

        var parsedMessage = _.isArray(message) ? [] : {};
        var processIndexOrKey = _.bind(removeNullValuesAndParseEnums, null, parsedMessage);

        if (_.isArray(message)) {
            _.forEach(message, processIndexOrKey);
        } else {
            _.forOwn(message, processIndexOrKey);
        }

        return parsedMessage;
    }

    function removeNullValuesAndParseEnums(parsedMessage, value, key) {
        if (value === null) {
            return;
        }

        if (_.isObject(value) || _.isArray(value)) {
            return parsedMessage[key] = parseProtobufMessage(value);
        }

        if (!_.isString(value) || !_.isString(key)) {
            return parsedMessage[key] = value;
        }

        var prefixedByKey = _.startsWith(value.toLowerCase(), key.toLowerCase());
        var valueParsedWithoutKey = prefixedByKey ? value.substring(key.length, value.length).toLowerCase() : value;

        parsedMessage[key] = valueParsedWithoutKey;
    }

    function applyVendorSpecificLogic(config) {
        switch (phenixRTC.browser) {
        case 'Firefox':
            // Firefox doesn't support TURN with TCP/TLS https://bugzilla.mozilla.org/show_bug.cgi?id=1056934
            removeTurnsServers(config);

            break;
        case 'Edge':
            // Edge doesn't support TURN with TCP
            forceTurnUdp(config);

            break;
        default:
            break;
        }

        return config;
    }

    function removeTurnsServers(config) {
        if (!config) {
            return config;
        }

        _.forEach(config.iceServers, function(server) {
            server.urls = _.filter(server.urls, function(url) {
                return !_.startsWith(url, 'turns');
            });
        });

        return config;
    }

    function forceTurnUdp(config) {
        if (!config) {
            return config;
        }

        _.forEach(config.iceServers, function(server) {
            server.urls = _.map(server.urls, function(url) {
                return url.replace('transport=tcp', 'transport=udp');
            });
        });

        return config;
    }

    // Shim required. Webrtc adapter successfully shims but breaks Edge.
    var shimPeerConnectionGetStreams = function(peerConnection) {
        if (!_.isUndefined(peerConnection.onaddstream)) {
            return;
        }

        var remoteStreams = [];
        var localStreams = [];

        _.addEventListener(peerConnection, 'track', function(event) {
            _.forEach(event.streams, function(stream) {
                if (!_.includes(remoteStreams, stream)) {
                    remoteStreams.push(stream);
                }
            });
        });

        peerConnection.getRemoteStreams = function getRemoteStreams() {
            return remoteStreams;
        };

        peerConnection.getLocalStreams = function getLocalStreams() {
            return localStreams;
        };

        peerConnection.addStream = function addStream(stream) {
            if (!_.includes(localStreams, stream)) {
                localStreams.push(stream);
            }

            _.forEach(stream.getTracks(), function(track) {
                peerConnection.addTrack(track, stream);
            });
        };
    };

    return PCast;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__22__;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var telemetryProto = {
        "package": "telemetry",
        "messages": [
            {
                "name": "LogData",
                "fields": [
                    {
                        "rule": "required",
                        "type": "LogLevel",
                        "name": "level",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "timestamp",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "category",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "message",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "source",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "fullQualifiedName",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "userId",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "environment",
                        "id": 8
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "version",
                        "id": 9
                    },
                    {
                        "rule": "optional",
                        "type": "float",
                        "name": "runtime",
                        "id": 10
                    }
                ]
            },
            {
                "name": "StoreLogRecords",
                "fields": [
                    {
                        "rule": "repeated",
                        "type": "LogData",
                        "name": "records",
                        "id": 1
                    }
                ]
            },
            {
                "name": "StoreLogRecordsResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "storedRecords",
                        "id": 2
                    }
                ]
            },
            {
                "name": "MetricValue",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "string",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "float",
                        "name": "float",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "uint64",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "int64",
                        "name": "int64",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "bool",
                        "name": "boolean",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "timestamp",
                        "id": 6
                    }
                ]
            },
            {
                "name": "MetricData",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "timestamp",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "source",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "resource",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "kind",
                        "id": 6
                    },
                    {
                        "rule": "required",
                        "type": "Metric",
                        "name": "metric",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "MetricValue",
                        "name": "value",
                        "id": 8
                    },
                    {
                        "rule": "optional",
                        "type": "MetricValue",
                        "name": "previousValue",
                        "id": 9
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "elapsed",
                        "id": 10
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "fullQualifiedName",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "environment",
                        "id": 12
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "version",
                        "id": 13
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "tool",
                        "id": 14
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "toolVersion",
                        "id": 15
                    },
                    {
                        "rule": "required",
                        "type": "float",
                        "name": "runtime",
                        "id": 16
                    }
                ]
            },
            {
                "name": "SubmitMetricRecords",
                "fields": [
                    {
                        "rule": "repeated",
                        "type": "MetricData",
                        "name": "records",
                        "id": 1
                    }
                ]
            },
            {
                "name": "SubmitMetricRecordsResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "storedRecords",
                        "id": 2
                    }
                ]
            }
        ],
        "enums": [
            {
                "name": "LogLevel",
                "values": [
                    {
                        "name": "Trace",
                        "id": 0
                    },
                    {
                        "name": "Debug",
                        "id": 1
                    },
                    {
                        "name": "Info",
                        "id": 2
                    },
                    {
                        "name": "Warn",
                        "id": 3
                    },
                    {
                        "name": "Error",
                        "id": 4
                    },
                    {
                        "name": "Fatal",
                        "id": 5
                    }
                ]
            },
            {
                "name": "Metric",
                "values": [
                    {
                        "name": "RoundTripTime",
                        "id": 0
                    },
                    {
                        "name": "DownlinkThroughputCapacity",
                        "id": 26
                    },
                    {
                        "name": "Initialized",
                        "id": 1
                    },
                    {
                        "name": "Provisioned",
                        "id": 2
                    },
                    {
                        "name": "SetupCompleted",
                        "id": 3
                    },
                    {
                        "name": "Offset",
                        "id": 4
                    },
                    {
                        "name": "TimeToFirstFrame",
                        "id": 5
                    },
                    {
                        "name": "Playing",
                        "id": 6
                    },
                    {
                        "name": "Stalled",
                        "id": 7
                    },
                    {
                        "name": "Buffering",
                        "id": 8
                    },
                    {
                        "name": "Seeking",
                        "id": 22
                    },
                    {
                        "name": "Stopped",
                        "id": 9
                    },
                    {
                        "name": "BitRateAdaptation",
                        "id": 10
                    },
                    {
                        "name": "ResolutionChanged",
                        "id": 11
                    },
                    {
                        "name": "DisplayResolutionChanged",
                        "id": 23
                    },
                    {
                        "name": "VideoBitRate",
                        "id": 28
                    },
                    {
                        "name": "AudioBitRate",
                        "id": 29
                    },
                    {
                        "name": "FrameRateChanged",
                        "id": 12
                    },
                    {
                        "name": "FramesDropped",
                        "id": 13
                    },
                    {
                        "name": "PacketsLost",
                        "id": 14
                    },
                    {
                        "name": "PictureLost",
                        "id": 15
                    },
                    {
                        "name": "PlayoutDelayChanged",
                        "id": 16
                    },
                    {
                        "name": "CodecChanged",
                        "id": 17
                    },
                    {
                        "name": "PlayerEvent",
                        "id": 21
                    },
                    {
                        "name": "MetricDropped",
                        "id": 18
                    },
                    {
                        "name": "NetworkOffline",
                        "id": 19
                    },
                    {
                        "name": "NetworkOnline",
                        "id": 20
                    },
                    {
                        "name": "NetworkType",
                        "id": 27
                    },
                    {
                        "name": "ApplicationForeground",
                        "id": 24
                    },
                    {
                        "name": "ApplicationBackground",
                        "id": 25
                    }
                ]
            }
        ]
    };

    return telemetryProto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(rtc) {
    'use strict';

    function AudioContext() {
        this.init();
    }

    AudioContext.prototype.init = function init() {
        if (!rtc.global.AudioContext && !rtc.global.webkitAudioContext) {
            throw new Error('Browser does not support AudioContext');
        }

        this._audioContext = new (rtc.global.AudioContext || rtc.global.webkitAudioContext)();
    };

    AudioContext.prototype.getNativeAudioContext = function getNativeAudioContext() {
        return this._audioContext;
    };

    AudioContext.prototype.toString = function toString() {
        return 'AudioContext';
    };

    return AudioContext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(2),
    __webpack_require__(26),
    __webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, phenixRTC, sdpUtil, PeerConnection) {
    'use strict';

    var defaultMonitoringInterval = 4000;
    var defaultConditionMonitoringInterval = 1500;
    var defaultFrameRateThreshold = 2;
    var defaultAudioBitRateThreshold = 5000;
    var defaultVideoBitRateThreshold = 1000;
    var defaultConditionCountForNotificationThreshold = 3;
    var minMonitoringInterval = 500;
    var minEdgeMonitoringInterval = 6000;
    var minEdgeConditionCountForNotification = 2;

    function PeerConnectionMonitor(name, peerConnection, logger) {
        assert.isString(name, 'name');
        assert.isObject(peerConnection, 'peerConnection');
        assert.isObject(logger, 'logger');

        this._name = name;
        this._peerConnection = peerConnection;
        this._logger = logger;
        this._lastStats = {};
    }

    PeerConnectionMonitor.prototype.start = function(options, activeCallback, monitorCallback) {
        assert.isObject(options, 'options');
        assert.isFunction(activeCallback, 'activeCallback');
        assert.isFunction(monitorCallback, 'monitorCallback');

        if (options.direction !== 'inbound' && options.direction !== 'outbound') {
            throw new Error('Invalid monitoring direction');
        }

        var monitoringEnabled = Object.prototype.hasOwnProperty.call(options, 'monitoringInterval') ? options.monitoringInterval > 0 : true;

        if (!monitoringEnabled) {
            this._logger.info('[%s] Monitoring is disabled', name);

            return;
        }

        this._frameRateFailureThreshold = options.frameRateThreshold || defaultFrameRateThreshold;
        this._videoBitRateFailureThreshold = options.videoBitRateThreshold || defaultVideoBitRateThreshold;
        this._audioBitRateFailureThreshold = options.audioBitRateThreshold || defaultAudioBitRateThreshold;
        this._conditionCountForNotificationThreshold = options.conditionCountForNotificationThreshold || defaultConditionCountForNotificationThreshold;
        this._monitoringInterval = Math.max(minMonitoringInterval, options.monitoringInterval || defaultMonitoringInterval);
        this._conditionMonitoringInterval = Math.max(minMonitoringInterval, options.conditionMonitoringInterval || defaultConditionMonitoringInterval);
        this._monitorFrameRate = Object.prototype.hasOwnProperty.call(options, 'monitorFrameRate') ? options.monitorFrameRate : true;
        this._monitorBitRate = Object.prototype.hasOwnProperty.call(options, 'monitorBitRate') ? options.monitorBitRate : true;
        this._monitorState = Object.prototype.hasOwnProperty.call(options, 'monitorState') ? options.monitorState : true;
        this._pausedTracks = [];
        this._calculatedMetricsEvent = new event.Event();

        if (phenixRTC.browser === 'Edge') {
            var conditionMaxDuration = this._conditionMonitoringInterval * this._conditionCountForNotificationThreshold;

            this._monitoringInterval = Math.max(this._monitoringInterval, minEdgeMonitoringInterval);
            this._conditionMonitoringInterval = Math.max(this._conditionMonitoringInterval, minEdgeMonitoringInterval);
            this._conditionCountForNotificationThreshold = Math.max(Math.ceil(conditionMaxDuration / this._monitoringInterval), minEdgeConditionCountForNotification);

            this._logger.info('Using modified options for optimal monitoring of PeerConnection on [Edge]. Monitor Interval [%s], Condition Monitor Interval [%s], Condition Count For Notification [%s]',
                this._monitoringInterval, this._conditionMonitoringInterval, this._conditionCountForNotificationThreshold);
        }

        return monitorPeerConnection.call(this, this._name, this._peerConnection, options, activeCallback, monitorCallback);
    };

    PeerConnectionMonitor.prototype.setMonitorTrackState = function(track, state) {
        assert.isObject(track, 'track');
        assert.isBoolean(state, 'state');

        try {
            var peerConnectionTracks = getAllTracks.call(this, this._peerConnection);
            var foundTrack = !!_.find(peerConnectionTracks, function(pcTrack) {
                return pcTrack.id === track.id;
            });

            if (!foundTrack) {
                return this._logger.warn('[%s] Unable to find track [%s] [%s] in peer connection', this._name, track.kind, track.id);
            }
        } catch (e) {
            if (phenixRTC.browser === 'Firefox' && e.message === 'InvalidStateError: Peer connection is closed') {
                this._logger.debug('Failed to verify monitor track due to closed peer connection');
            } else {
                this._logger.warn('Failed to verify monitor track due to [%s]', e.message);
            }
        }

        if (!state) {
            this._logger.info('[%s] Pausing monitoring of track [%s] [%s]', this._name, track.kind, track.id);

            return this._pausedTracks.push(track);
        }

        var pausedTrackLength = this._pausedTracks.length;

        this._pausedTracks = _.filter(this._pausedTracks, function(pausedTrack) {
            return pausedTrack.id !== track.id;
        });

        if (pausedTrackLength !== this._pausedTracks.length) {
            this._logger.info('[%s] Starting monitoring of track [%s] [%s] after it was paused', this._name, track.kind, track.id);
        }
    };

    PeerConnectionMonitor.prototype.on = function(eventName, listener) {
        assert.isStringNotEmpty(eventName, 'eventName');
        assert.isFunction(listener, 'listener');

        switch (eventName) {
        case 'calculatedmetrics':
            return this._calculatedMetricsEvent.listen(listener);
        default:
            throw new Error('Unsupported event ' + eventName);
        }
    };

    PeerConnectionMonitor.prototype.toString = function() {
        return 'PeerConnectionMonitor[' + this._name + ']';
    };

    function monitorPeerConnection(name, peerConnection, options, activeCallback, monitorCallback) {
        var that = this;
        var conditionCount = 0;
        var frameRate = undefined;
        var videoBitRate = undefined;
        var audioBitRate = undefined;

        function nextCheck() {
            var selector = null;

            getStats.call(that, peerConnection, options, selector, activeCallback, function successCallback(report) {
                var hasFrameRate = false;
                var hasVideoBitRate = false;
                var hasAudioBitRate = false;

                if (!activeCallback()) {
                    return that._logger.info('[%s] Finished monitoring of peer connection', name);
                }

                function eachStats(stats) {
                    if (options.direction === 'outbound' && stats.direction === 'upload') {
                        switch (stats.mediaType) {
                        case 'video':
                            that._logger.debug('[%s] [%s] [%s] [%s] with RTT [%s], bitrate [%s], dropped frames [%s], frame rate [%s] and average encoding time [%s] ms (CPU limited=[%s])',
                                name, options.direction, stats.mediaType, stats.ssrc, stats.rtt, stats.bitrateMean, stats.droppedFrames, stats.framerateMean, stats.avgEncode, stats.cpuLimitedResolution);

                            frameRate = stats.framerateMean;
                            videoBitRate = stats.uploadRate ? stats.uploadRate * 1000 : stats.uploadRate;
                            hasFrameRate = true;
                            hasVideoBitRate = true;

                            if (options.setNetworkRTT) {
                                options.setNetworkRTT(stats.rtt);
                            }

                            if (phenixRTC.browser === 'Edge') {
                                hasFrameRate = false;
                            }

                            break;
                        case 'audio':
                            that._logger.debug('[%s] [%s] [%s] [%s] with RTT [%s], jitter [%s] and audio input level [%s]',
                                name, options.direction, stats.mediaType, stats.ssrc, stats.rtt, stats.jitter, stats.audioInputLevel);
                            hasAudioBitRate = true;
                            audioBitRate = stats.uploadRate ? stats.uploadRate * 1000 : stats.uploadRate;

                            if (options.setNetworkRTT) {
                                options.setNetworkRTT(stats.rtt);
                            }

                            break;
                        default:
                            break;
                        }
                    }

                    if (options.direction === 'inbound' && stats.direction === 'download') {
                        switch (stats.mediaType) {
                        case 'video':
                            that._logger.debug('[%s] [%s] [%s] [%s] with framerate [%s], current delay [%s] ms and target delay [%s] ms',
                                name, options.direction, stats.mediaType, stats.ssrc, stats.framerateMean, stats.currentDelay, stats.targetDelay);

                            // Inbound frame rate may not be calculated correctly
                            hasFrameRate = true;
                            frameRate = stats.framerateMean || 0;
                            hasVideoBitRate = true;
                            videoBitRate = stats.downloadRate ? stats.downloadRate * 1000 : stats.downloadRate;

                            if (phenixRTC.browser === 'Edge') {
                                hasFrameRate = false;
                            }

                            break;
                        case 'audio':
                            that._logger.debug('[%s] [%s] [%s] [%s] with jitter [%s], jitter buffer [%s] ms, audio output level [%s], total audio energy [%s] and total samples duration [%s]',
                                name, options.direction, stats.mediaType, stats.ssrc, stats.jitter, stats.jitterBuffer, stats.audioOutputLevel, stats.totalAudioEnergy, stats.totalSamplesDuration);

                            hasAudioBitRate = true;
                            audioBitRate = stats.downloadRate ? stats.downloadRate * 1000 : stats.downloadRate;

                            break;
                        default:
                            break;
                        }
                    }
                }

                if (!report) {
                    throw new Error('Report must be a valid PeerConnection.getStats Report');
                }

                _.forEach(report, eachStats);

                if (_.isUndefined(audioBitRate) && _.isUndefined(videoBitRate)) {
                    return setTimeout(nextCheck, that._monitoringInterval); // First measurement
                }

                var hasActiveAudio = sdpUtil.hasActiveAudio(peerConnection);
                var hasActiveVideo = sdpUtil.hasActiveVideo(peerConnection);

                if (hasVideoBitRate && videoBitRate === 0 || hasAudioBitRate && audioBitRate === 0 || hasFrameRate && frameRate === 0) {
                    hasVideoBitRate = hasVideoBitRate && hasActiveVideo;
                    hasAudioBitRate = hasAudioBitRate && hasActiveAudio;
                    hasFrameRate = hasFrameRate && hasActiveVideo;
                }

                if (hasAudioBitRate || hasVideoBitRate || hasFrameRate) {
                    that._logger.debug('[%s] [%s] Current bit rate is [%s] bps for audio and [%s] bps for video with [%s] FPS',
                        name, options.direction, Math.ceil(audioBitRate || 0), Math.ceil(videoBitRate || 0), frameRate || '?');

                    if (_.values(that._lastStats).length > 0) {
                        that._calculatedMetricsEvent.fire([{
                            videoBitRate: videoBitRate,
                            audioBitRate: audioBitRate,
                            frameRate: frameRate
                        }]);
                    }
                }

                var reasons = [];

                if (that._monitorState
                    && (peerConnection.connectionState === 'closed'
                        || peerConnection.connectionState === 'disconnected'
                        || peerConnection.connectionState === 'failed'
                        || peerConnection.iceConnectionState === 'disconnected'
                        || peerConnection.iceConnectionState === 'failed')) {
                    var active = hasActiveAudio && hasActiveVideo;
                    var tracks = getAllTracks.call(that, peerConnection);

                    if (!active && sdpUtil.hasMediaSectionsInLocalSdp(peerConnection)) {
                        that._logger.info('[%s] [%s] Finished monitoring of peer connection with [%s] inactive tracks', name, options.direction, tracks.length);

                        return;
                    }

                    reasons.push('connection');
                }

                var peerConnectionTracks = options.direction === 'outbound' ?
                    getLocalTracks.call(this, peerConnection) :
                    getRemoteTracks.call(this, peerConnection);

                if (that._monitorFrameRate && hasFrameRate && frameRate <= that._frameRateFailureThreshold && !areAllTracksOfTypePaused.call(that, 'video', peerConnectionTracks)) {
                    reasons.push('frameRate');
                }

                if (that._monitorBitRate && hasAudioBitRate && audioBitRate <= that._audioBitRateFailureThreshold && !areAllTracksOfTypePaused.call(that, 'audio', peerConnectionTracks)) {
                    reasons.push('audioBitRate');
                }

                if (that._monitorBitRate && hasVideoBitRate && videoBitRate <= that._videoBitRateFailureThreshold && !areAllTracksOfTypePaused.call(that, 'video', peerConnectionTracks)) {
                    reasons.push('videoBitRate');
                }

                if (videoBitRate === 0 && hasActiveVideo && !areAllTracksOfTypePaused.call(that, 'video', peerConnectionTracks)) {
                    reasons.push('noVideoData');
                }

                if (audioBitRate === 0 && hasActiveAudio && !areAllTracksOfTypePaused.call(that, 'audio', peerConnectionTracks)) {
                    reasons.push('noAudioData');
                }

                var acknowledgeFailure = function acknowledgeFailure() {
                    that._logger.info('[%s] [%s] Failure has been acknowledged', name, options.direction);

                    conditionCount = Number.MIN_VALUE;

                    setTimeout(nextCheck, that._monitoringInterval);
                };

                if (reasons.length > 0) {
                    conditionCount++;
                } else {
                    conditionCount = 0;
                }

                if (conditionCount >= that._conditionCountForNotificationThreshold) {
                    var failureMessage = '[' + name + '] [' + options.direction + '] Failure detected with frame rate [' + frameRate + '] FPS,'
                        + ' audio bit rate [' + audioBitRate + '] bps'
                        + ', video bit rate [' + videoBitRate + '] bps'
                        + ', connection state [' + peerConnection.connectionState + '],'
                        + ' and ice connection state [' + peerConnection.iceConnectionState + ']'
                    + ' after [' + conditionCount + '] checks';
                    var monitorEvent = {
                        type: 'condition',
                        reasons: reasons,
                        message: failureMessage,
                        report: report,
                        frameRate: frameRate,
                        videoBitRate: videoBitRate,
                        audioBitRate: audioBitRate,
                        acknowledgeFailure: acknowledgeFailure
                    };

                    if (!monitorCallback(null, monitorEvent)) {
                        that._logger.info(failureMessage + ': [%s]', report);
                    } else {
                        acknowledgeFailure();
                    }
                } else {
                    setTimeout(nextCheck, conditionCount > 0 ? that._conditionMonitoringInterval : that._monitoringInterval);
                }
            }, function errorCallback(error) {
                monitorCallback(error, {
                    type: 'error',
                    message: 'Unable to get Connection statistics. Connection may have failed.'
                });
            });
        }

        setTimeout(nextCheck, that._monitoringInterval);
    }

    function getStats(peerConnection, options, selector, activeCallback, successCallback, errorCallback) {
        if (!activeCallback()) {
            return this._logger.info('[%s] Finished monitoring of peer connection', this._name);
        }

        var that = this;

        phenixRTC.getStats(peerConnection, null, function(response) {
            var report = PeerConnection.convertPeerConnectionStats(response, that._lastStats);

            report = _.filter(report, function(stats) {
                return options.direction === 'inbound' && stats.direction === 'download' || options.direction === 'outbound' && stats.direction === 'upload';
            });

            successCallback(report);
        }, function(error) {
            errorCallback(error);
        });
    }

    function getAllTracks(peerConnection) {
        var localTracks = getLocalTracks(peerConnection);
        var remoteTracks = getRemoteTracks(peerConnection);

        if (localTracks.length !== 0 && remoteTracks.length !== 0) {
            var result = [];

            _.forEach(localTracks, function(track) {
                result.push(track);
            });

            _.forEach(remoteTracks, function(track) {
                result.push(track);
            });

            return result;
        } else if (localTracks.length !== 0) {
            return localTracks;
        } else if (remoteTracks.length !== 0) {
            return remoteTracks;
        }

        return [];
    }

    function getLocalTracks(peerConnection) {
        var tracks = peerConnection.getSenders ? _.map(peerConnection.getSenders(), function(receiver) {
            return receiver.track;
        }) : [];

        tracks = _.filter(tracks, function(track) {
            return !_.isNullOrUndefined(track);
        });

        if (tracks.length === 0) {
            var streams = peerConnection.getLocalStreams ? peerConnection.getLocalStreams() : [];

            return _.reduce(streams, function(tracks, stream) {
                return tracks.concat(stream.getTracks());
            }, []);
        }

        return tracks;
    }

    function getRemoteTracks(peerConnection) {
        var tracks = peerConnection.getReceivers ? _.map(peerConnection.getReceivers(), function(sender) {
            return sender.track;
        }) : [];

        tracks = _.filter(tracks, function(track) {
            return !_.isNullOrUndefined(track);
        });

        if (tracks.length === 0) {
            var streams = peerConnection.getRemoteStreams ? peerConnection.getRemoteStreams() : [];

            return _.reduce(streams, function(tracks, stream) {
                return tracks.concat(stream.getTracks());
            }, []);
        }

        return tracks;
    }

    function areAllTracksOfTypePaused(kind, peerConnectionTracks) {
        var pcTracksOfType = _.filter(peerConnectionTracks, function(track) {
            return track.kind === kind;
        });
        var pausedTracksOfType = _.filter(this._pausedTracks, function(track) {
            return track.kind === kind;
        });

        return _.reduce(pcTracksOfType, function(areAllPaused, track) {
            if (!areAllPaused) {
                return areAllPaused;
            }

            var isTrackPaused = !!_.find(pausedTracksOfType, function(pcTrack) {
                return pcTrack.id === track.id;
            });

            return !track.enabled || isTrackPaused;
        }, true);
    }

    return PeerConnectionMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var h264ProfileIdRegex = /profile-level-id=[^;\n]*/;
    var vp8Regex = /vp8/i;
    var vp9Regex = /vp9/i;
    var h264Regex = /h264/i;
    var h265Regex = /h265/i;

    function sdpUtil() {

    }

    sdpUtil.prototype.getH264ProfileIds = function getH264ProfileIds(offerSdp) {
        assert.isStringNotEmpty(offerSdp, 'offerSdp');

        var h264ProfileIds = [];
        var h264ProfileIdMatch = offerSdp.match(h264ProfileIdRegex);
        var restOfOffer = offerSdp;

        while (h264ProfileIdMatch) {
            var h264ProfileId = _.get(h264ProfileIdMatch, '0', '');

            h264ProfileIds.push(h264ProfileId.split('=')[1]);

            restOfOffer = restOfOffer.substring(h264ProfileIdMatch.index + h264ProfileId.length, offerSdp.length);
            h264ProfileIdMatch = restOfOffer.match(h264ProfileIdRegex);
        }

        return h264ProfileIds;
    };

    sdpUtil.prototype.replaceH264ProfileId = function replaceH264ProfileId(offerSdp, profileIdToReplace, newProfileId) {
        assert.isStringNotEmpty(offerSdp, 'offerSdp');
        assert.isStringNotEmpty(newProfileId, 'newProfileId');

        var profileIds = this.getH264ProfileIds(offerSdp);

        if (!_.includes(profileIds, profileIdToReplace)) {
            return offerSdp;
        }

        return offerSdp.replace('profile-level-id=' + profileIdToReplace, 'profile-level-id=' + newProfileId);
    };

    sdpUtil.prototype.getH264ProfileIdWithSameProfileAndEqualToOrHigherLevel = function(profileIds, replaceProfileId) {
        if (_.includes(profileIds, replaceProfileId)) {
            return replaceProfileId;
        }

        var nextProfileId = _.reduce(profileIds, function(selectedProfileId, profileId) {
            var selectedProfile = parseInt(selectedProfileId.substring(0, 2), 16);
            var selectedLevel = parseInt(selectedProfileId.substring(4, 6), 16);
            var profile = parseInt(profileId.substring(0, 2), 16);
            var level = parseInt(profileId.substring(4, 6), 16);

            // We prefer the profile that we are replacing
            if (selectedProfile !== profile) {
                return selectedProfileId;
            }

            return selectedLevel >= level ? selectedProfileId : profileId;
        }, replaceProfileId);

        return nextProfileId === replaceProfileId ? null : nextProfileId;
    };

    sdpUtil.prototype.getH264ProfileIdWithSameOrHigherProfileAndEqualToOrHigherLevel = function(profileIds, replaceProfileId) {
        var matchingProfile = this.getH264ProfileIdWithSameProfileAndEqualToOrHigherLevel(profileIds, replaceProfileId);

        if (matchingProfile) {
            return matchingProfile;
        }

        var nextProfileId = _.reduce(profileIds, function(selectedProfileId, profileId) {
            var selectedProfile = parseInt(selectedProfileId.substring(0, 2), 16);
            var selectedLevel = parseInt(selectedProfileId.substring(4, 6), 16);
            var profile = parseInt(profileId.substring(0, 2), 16);
            var level = parseInt(profileId.substring(4, 6), 16);

            // We prefer the profile that we are replacing
            if (selectedProfile < profile) {
                return profileId;
            } else if (profile < selectedProfile) {
                return selectedProfileId;
            }

            return selectedLevel > level ? selectedProfileId : profileId;
        }, replaceProfileId);

        return nextProfileId === replaceProfileId ? null : nextProfileId;
    };

    sdpUtil.prototype.getSupportedCodecs = function getSupportedCodecs(offerSdp) {
        assert.isStringNotEmpty(offerSdp, 'offerSdp');

        var codecs = [];

        if (vp8Regex.test(offerSdp)) {
            codecs.push('VP8');
        }

        if (vp9Regex.test(offerSdp)) {
            codecs.push('VP9');
        }

        if (h264Regex.test(offerSdp)) {
            codecs.push('H264');
        }

        if (h265Regex.test(offerSdp)) {
            codecs.push('H265');
        }

        return codecs;
    };

    sdpUtil.prototype.hasMediaSectionsInLocalSdp = function hasMediaSectionsInLocalSdp(peerConnection) {
        var indexOfSection = this.findInSdpSections(peerConnection, function(section) {
            return _.startsWith(section, 'video') || _.startsWith(section, 'audio');
        });

        return indexOfSection < 0;
    };

    sdpUtil.prototype.hasActiveAudio = function hasActiveAudio(peerConnection) {
        var indexOfActiveVideo = this.findInSdpSections(peerConnection, function(section, index, remoteSections) {
            if (_.startsWith(section, 'audio')) {
                return !_.includes(section, 'a=inactive') && !_.includes(remoteSections[index], 'a=inactive');
            }

            return false;
        });

        return indexOfActiveVideo < 0;
    };

    sdpUtil.prototype.hasActiveVideo = function hasActiveVideo(peerConnection) {
        var indexOfActiveVideo = this.findInSdpSections(peerConnection, function(section, index, remoteSections) {
            if (_.startsWith(section, 'video')) {
                return !_.includes(section, 'a=inactive') && !_.includes(remoteSections[index], 'a=inactive');
            }

            return false;
        });

        return indexOfActiveVideo < 0;
    };

    sdpUtil.prototype.findInSdpSections = function findInSdpSections(peerConnection, callback) {
        var localSections = this.getLocalSdp(peerConnection).split('m=');
        var remoteSections = this.getRemoteSdp(peerConnection).split('m=');

        if (localSections.length !== remoteSections.length) {
            return false;
        }

        return _.findIndex(localSections, function(section, index) {
            return callback(section, index, remoteSections);
        });
    };

    sdpUtil.prototype.getNumberOfActiveSections = function getNumberOfActiveSections(peerConnection) {
        var sdp = this.getLocalSdp(peerConnection) || this.getRemoteSdp(peerConnection);
        var sections = sdp.split('m=');

        return _.filter(sections, function(section) {
            return !_.includes(section, 'a=inactive') && (_.startsWith(section, 'audio') || _.startsWith(section, 'video'));
        }).length;
    };

    sdpUtil.prototype.getLocalSdp = function getLocalSdp(peerConnection) {
        return _.get(peerConnection, ['localDescription', 'sdp'], '');
    };

    sdpUtil.prototype.getRemoteSdp = function getLocalSdp(peerConnection) {
        return _.get(peerConnection, ['remoteDescription', 'sdp'], '');
    };

    sdpUtil.prototype.setGroupLineOrderToMatchMediaSectionOrder = function setGroupLineOrderToMatchMediaSectionOrder(sdp) {
        var groupLineSegment = sdp.match(/(?=a=group:BUNDLE).*/);
        var mediaSegmentNamesString = _.get(_.get(groupLineSegment, [0], '').split('a=group:BUNDLE '), [1], '');
        var mediaSegmentNames = mediaSegmentNamesString.split(' ');

        var sortedMediaSegmentNames = mediaSegmentNames.sort(function(nameA, nameB) {
            return sdp.indexOf('m=' + nameA) - sdp.indexOf('m=' + nameB);
        });

        if (sortedMediaSegmentNames.length > 0) {
            sdp = sdp.replace(mediaSegmentNamesString, sortedMediaSegmentNames.join(' '));
        }

        return sdp;
    };

    return new sdpUtil();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(2),
    __webpack_require__(56),
    __webpack_require__(57),
    __webpack_require__(58),
    __webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, rtc, ShakaRenderer, PhenixPlayerRenderer, FlashRenderer, streamEnums) {
    'use strict';

    function PhenixLiveStream(type, streamId, uri, streamTelemetry, options, shaka, webPlayer, logger) {
        this._type = type;
        this._streamId = streamId;
        this._uri = uri;
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._shaka = shaka;
        this._webPlayer = webPlayer,
        this._logger = logger;
        this._renderers = [];
        this._dimensionsChangedMonitor = null;
        this._namedEvents = new event.NamedEvents();
    }

    PhenixLiveStream.prototype.on = function(name, callback) {
        this._namedEvents.listen(name, callback);
    };

    PhenixLiveStream.prototype.createRenderer = function() {
        var renderer = null;

        switch (this._type) {
        case streamEnums.types.dash.name:
            if (this._webPlayer) {
                renderer = new PhenixPlayerRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._webPlayer, this._logger);
            } else if (this._shaka) {
                if (!this._shaka.Player.isBrowserSupported()) {
                    this._logger.warn('[%s] Shaka does not support this browser', this._streamId);

                    throw new Error('Shaka does not support this browser');
                }

                renderer = new ShakaRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._shaka, this._logger);
            }

            break;
        case streamEnums.types.hls.name:
            renderer = new PhenixPlayerRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._webPlayer, this._logger);

            break;
        case streamEnums.types.rtmp.name:
            renderer = new FlashRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._logger);

            break;
        default:
            throw new Error('Unsupported Live stream Type ' + this._type);
        }

        var that = this;

        renderer.on(streamEnums.rendererEvents.error.name, function(type, error) {
            that._namedEvents.fire(streamEnums.streamEvents.playerError.name, [type, error]);
        });
        renderer.on(streamEnums.rendererEvents.ended.name, function(reason) {
            that._renderers = _.filter(that._renderers, function(storedRenderer) {
                return storedRenderer !== renderer;
            });

            if (that._renderers.length === 0) {
                that._streamTelemetry.stop();
                that._namedEvents.fire(streamEnums.streamEvents.playerEnded.name, [reason]);
            }
        });

        this._renderers.push(renderer);

        return renderer;
    };

    PhenixLiveStream.prototype.select = function select(trackSelectCallback) { // eslint-disable-line no-unused-vars
        this._logger.warn('[%s] selection of tracks not supported for [%s] live streams', this._streamId, this._type);

        return this;
    };

    PhenixLiveStream.prototype.setStreamEndedCallback = function setStreamEndedCallback(callback) {
        assert.isFunction(callback, 'callback');

        this.streamEndedCallback = callback;
    };

    PhenixLiveStream.prototype.setStreamErrorCallback = function setStreamErrorCallback(callback) {
        assert.isFunction(callback, 'callback');

        this.streamErrorCallback = callback;
    };

    PhenixLiveStream.prototype.stop = function stop(reason) {
        if (!this.isActive()) {
            return;
        }

        this._logger.info('[%s] stop [live] media stream with reason [%s]', this._streamId, reason);

        this._namedEvents.fire(streamEnums.streamEvents.stopped.name, [reason]);

        this._isStopped = true;
    };

    PhenixLiveStream.prototype.monitor = function monitor(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
    };

    PhenixLiveStream.prototype.getMonitor = function getMonitor() {
        return null;
    };

    PhenixLiveStream.prototype.addBitRateThreshold = function addBitRateThreshold(threshold, callback) {
        assert.isFunction(callback, 'callback');

        return;
    };

    PhenixLiveStream.prototype.getStream = function getStream() {
        this._logger.debug('[%s] [%s] This type of stream has no internal stream object', this._streamId, this._type);

        return null;
    };

    PhenixLiveStream.prototype.isActive = function isActive() {
        return !this._isStopped;
    };

    PhenixLiveStream.prototype.getStreamId = function getStreamId() {
        return this._streamId;
    };

    PhenixLiveStream.prototype.getStats = function getStats() {
        this._logger.debug('[%s] [%s] This type of stream has no stats', this._streamId, this._type);

        return null;
    };

    PhenixLiveStream.prototype.getRenderer = function getRenderer() {
        return _.get(this._renderers, [0], null);
    };

    PhenixLiveStream.canPlaybackType = function canPlaybackType(type) {
        var deviceSupportsDashPlayback = !!rtc.global.MediaSource;
        var deviceSupportsHlsPlayback = deviceSupportsDashPlayback || (typeof document === 'object' && document.createElement('video').canPlayType('application/vnd.apple.mpegURL') === 'maybe');

        switch (type) {
        case streamEnums.types.dash.name:
            return deviceSupportsDashPlayback;
        case streamEnums.types.hls.name:
            return deviceSupportsHlsPlayback;
        case streamEnums.types.rtmp.name:
            return FlashRenderer.isSupported();
        default:
            return false;
        }
    };

    return PhenixLiveStream;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var maximumBitRateDefault = 3; // 3 x target bitrate

    function BitRateMonitor(name, monitor, getLimit) {
        assert.isStringNotEmpty(name, 'name');
        assert.isObject(monitor, 'monitor');
        assert.isFunction(getLimit, 'getLimit');

        this._name = name;
        this._monitor = monitor;
        this._getLimit = getLimit || _.noop;
    }

    BitRateMonitor.prototype.addThreshold = function(threshold, callback) {
        var thresholds = getThresholdList(threshold);
        var lastThresholdIndex = null;
        var that = this;

        return that._monitor.on('calculatedmetrics', function(metrics) {
            var limit = that._getLimit();
            var totalBitRate = metrics.videoBitRate + metrics.audioBitRate;
            var currentClosestThresholdIndex = getClosestThresholdIndexToButNotBelow(thresholds, totalBitRate / limit);
            var currentRatioThreshold = _.get(thresholds, [currentClosestThresholdIndex]);
            var currentBitRateThreshold = currentRatioThreshold * limit;
            var lastRatioThreshold = _.get(thresholds, [lastThresholdIndex], 1);
            var lastBitRateThreshold = lastRatioThreshold * limit;

            if (limit === 0) {
                return;
            }

            if (lastThresholdIndex === null) {
                return lastThresholdIndex = currentClosestThresholdIndex;
            }

            if (currentClosestThresholdIndex === lastThresholdIndex) {
                return;
            }

            if (currentClosestThresholdIndex < lastThresholdIndex) {
                callback({
                    isIncreasing: false,
                    bitRate: totalBitRate,
                    currentThreshold: currentBitRateThreshold,
                    targetBitRate: limit,
                    index: currentClosestThresholdIndex,
                    lastIndex: lastThresholdIndex,
                    message: that._name + ' bit rate is below ' + currentRatioThreshold + ' * ' + limit + ' threshold of ' + currentBitRateThreshold + ' with a bit rate of ' + totalBitRate
                });
            } else if (currentClosestThresholdIndex > lastThresholdIndex) {
                callback({
                    isIncreasing: true,
                    bitRate: totalBitRate,
                    currentThreshold: lastBitRateThreshold,
                    targetBitRate: limit,
                    index: currentClosestThresholdIndex,
                    lastIndex: lastThresholdIndex,
                    message: that._name + ' bit rate is above ' + lastRatioThreshold + ' * ' + limit + ' threshold of ' + lastBitRateThreshold + ' with a bit rate of ' + totalBitRate
                });
            }

            lastThresholdIndex = currentClosestThresholdIndex;
        });
    };

    function getClosestThresholdIndexToButNotBelow(thresholds, ratio) {
        return _.reduce(thresholds, function(closestIndex, threshold, index) {
            if (closestIndex === null && threshold >= ratio) {
                return index;
            }

            if (threshold < thresholds[closestIndex] && threshold >= ratio) {
                return index;
            }

            return closestIndex;
        }, null);
    }

    function getThresholdList(threshold) {
        var thresholds = [];

        if (_.isArray(threshold)) {
            _.forEach(threshold, function(value) {
                assert.isNumber(value, 'threshold');
            });

            thresholds = threshold.sort();
        } else if (_.isObject(threshold)) {
            assert.isNumber(threshold.levels, 'threshold.levels');

            for (var i = 0; i < threshold.levels; i++) {
                thresholds.push(i / threshold.levels);
            }
        } else {
            assert.isNumber(threshold, 'threshold');

            thresholds.push(threshold);
        }

        thresholds.push(maximumBitRateDefault); // Upper bound

        return thresholds;
    }

    return BitRateMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__29__;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(31),
    __webpack_require__(32),
    __webpack_require__(61),
    __webpack_require__(33),
    __webpack_require__(62),
    __webpack_require__(14),
    __webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, AuthenticationService, Room, ImmutableRoom, Member, RoomChatService, roomEnums, memberEnums) {
    'use strict';

    var notInRoomResponse = _.freeze({status: 'not-in-room'});
    var alreadyInRoomResponse = _.freeze({status: 'already-in-room'});
    var inAnotherRoomResponse = _.freeze({status: 'in-another-room'});

    function RoomService(pcast) {
        this._self = new observable.Observable(null);
        this._activeRoom = new observable.Observable(null);
        this._cachedRoom = new observable.Observable(null);
        this._roomChatService = null;

        this._authenticationService = new AuthenticationService(pcast);

        this.setPCast(pcast);
    }

    RoomService.prototype.setPCast = function setPCast(pcast) {
        assert.isObject(pcast, 'pcast');
        assert.isFunction(pcast.getLogger, 'pcast.getLogger');
        assert.isFunction(pcast.getProtocol, 'pcast.getProtocol');

        if (this._pcast) {
            this._logger.info('Resetting pcast instance for room service');
        }

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._protocol = pcast.getProtocol();

        assert.isObject(this._logger, 'this._logger');
        assert.isObject(this._protocol, 'this._protocol');

        this._authenticationService.setPCast(pcast);

        if (this._roomChatService) {
            this._roomChatService.setPCast(pcast);
        }

        if (this._started) {
            this._disposables.dispose();

            setupSubscriptions.call(this);
        }
    };

    RoomService.prototype.start = function start(role, screenName) {
        if (this._started) {
            this._logger.warn('RoomService already started.');

            return;
        }

        assert.isStringNotEmpty(role, 'role');
        assert.isStringNotEmpty(screenName, 'screenName');

        var myState = memberEnums.states.passive.name;
        var mySessionId = this._authenticationService.getPCastSessionId();
        var myScreenName = screenName;
        var myStreams = [];
        var myLastUpdate = _.now();
        var roomService = this;

        var self = new Member(roomService, myState, mySessionId, myScreenName, role, myStreams, myLastUpdate);

        this._self = new observable.Observable(self);
        this._disposables = new disposable.DisposableList();

        setupSubscriptions.call(this);

        this._started = true;

        return self;
    };

    RoomService.prototype.getRoomInfo = function getRoomInfo(roomId, alias, callback) {
        if (roomId) {
            assert.isStringNotEmpty(roomId, 'roomId');
        } else {
            assert.isStringNotEmpty(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        getRoomInfoRequest.call(this, roomId, alias, callback);
    };

    RoomService.prototype.createRoom = function createRoom(room, callback) {
        assert.isObject(room, 'room');
        assert.isStringNotEmpty(room.name, 'room.name');
        assert.isStringNotEmpty(room.type, 'room.type');
        assert.isString(room.description, 'room.description');
        assert.isFunction(callback, 'callback');

        createRoomRequest.call(this, room, callback);
    };

    RoomService.prototype.enterRoom = function enterRoom(roomId, alias, callback) {
        if (roomId) {
            assert.isStringNotEmpty(roomId, 'roomId');
        } else {
            assert.isStringNotEmpty(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        enterRoomRequest.call(this, roomId, alias, callback);
    };

    RoomService.prototype.leaveRoom = function leaveRoom(callback, isForceLeaveRoom) {
        var that = this;

        return leaveRoomRequest.call(that, callback, isForceLeaveRoom);
    };

    RoomService.prototype.getChatService = function getChatService() {
        if (!this._roomChatService && this._activeRoom.getValue()) {
            this._roomChatService = new RoomChatService(this);
        }

        return this._roomChatService;
    };

    RoomService.prototype.getSelf = function getSelf() {
        return this._self.getValue();
    };

    RoomService.prototype.getObservableActiveRoom = function getObservableActiveRoom() {
        return this._activeRoom;
    };

    RoomService.prototype.updateSelf = function updateSelf(callback) {
        assert.isFunction(callback, 'callback');

        updateMemberRequest.call(this, this.getSelf(), callback);
    };

    RoomService.prototype.updateMember = function updateMember(member, callback) {
        assert.isFunction(callback, 'callback');
        assert.isObject(member, 'member');

        updateMemberRequest.call(this, member, callback);
    };

    RoomService.prototype.updateRoom = function updateRoom(callback) {
        assert.isFunction(callback, 'callback');

        updateRoomRequest.call(this, callback);
    };

    RoomService.prototype.revertRoomChanges = function revertRoomChanges() {
        var activeRoom = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!activeRoom || !cachedRoom) {
            return this._logger.warn('Unable to revert changes to room. Not currently in a room.');
        }

        activeRoom._update(cachedRoom.toJson());
    };

    RoomService.prototype.revertMemberChanges = function revertMemberChanges(member) {
        assert.isObject(member, 'member');

        var cachedMember = findMemberInObservableRoom(member.getSessionId(), this._cachedRoom);
        var activeMember = findMemberInObservableRoom(member.getSessionId(), this._activeRoom);

        if (!cachedMember || !activeMember) {
            return this._logger.warn('Unable to revert changes to member. Member is currently not in room.');
        }

        activeMember._update(cachedMember.toJson());
    };

    RoomService.prototype.isInRoom = function isInRoom() {
        return !!this._activeRoom.getValue();
    };

    RoomService.prototype.toString = function toString() {
        return 'RoomService';
    };

    RoomService.prototype.stop = function stop(reason) {
        var activeRoom = this._activeRoom.getValue();
        var that = this;

        this._logger.info('Stopping room service with reason [%s]', reason);

        if (activeRoom) {
            return this.leaveRoom(function(error, response) {
                if (error) {
                    that._logger.warn('Failure to stop room service. Unable to leave room', error);
                }

                if (response && response.status !== 'ok') {
                    that._logger.warn('Failure to stop room service. Unable to leave room. Status: [%s]', response.status);
                }

                if (response && response.status === 'ok') {
                    resetRoomModels.call(that);

                    that._started = false;
                }
            });
        }

        resetRoomModels.call(this);

        that._started = false;
    };

    function resetRoomModels() {
        this._self.setValue(null);
        this._activeRoom.setValue(null);
        this._cachedRoom.setValue(null);
        this._roomChatService = null;

        if (this._disposables) {
            this._disposables.dispose();
        }

        this._disposables = null;
    }

    function resetSelf(sessionId) {
        var self = this._self.getValue().toJson();
        var roomService = this;

        this._logger.info('Resetting self after sessionId changed to [%s]', sessionId);

        this._self.setValue(new Member(roomService, self.state, sessionId || '', self.screenName, self.role, self.streams, self.lastUpdate));
    }

    function reenterRoom() {
        var that = this;

        var activeRoom = that._activeRoom.getValue();

        if (!_.isObject(activeRoom)) {
            return;
        }

        var self = that._self.getValue();

        if (!self) {
            return;
        }

        var selfSessionId = self.getSessionId();

        if (!selfSessionId) {
            return;
        }

        var roomId = activeRoom.getRoomId();
        var alias = activeRoom.getObservableAlias().getValue();

        that._logger.info('[%s] Re-entering room [%s]', roomId, alias);

        if (that._roomChatService) {
            that._logger.info('Performing soft reset on room chat service for room [%s]', roomId);
            that._roomChatService.stop();
        }

        enterRoomRequest.call(that, roomId, alias, function() {
            if (that._roomChatService) {
                that._logger.info('[%s] Refreshing room chat service after re-entering room [%s]', roomId, alias);

                that._roomChatService.start(that._roomChatService.getBatchSize());
            }

            that._logger.info('[%s] Room [%s] completed reset', roomId, alias);
        }, {reenter: true});
    }

    // Handle events
    function onRoomEvent(event) {
        assert.isObject(event, 'event');
        assert.isString(event.roomId, 'event.roomId');
        assert.isString(event.eventType, 'event.eventType');
        assert.isArray(event.members, 'event.members');

        _.forEach(event.members, function(member) {
            assert.isObject(member, 'member');
        });

        var that = this;

        switch (event.eventType) {
        case roomEnums.events.memberJoined.name:
            that._logger.debug('[%s] Member joined [%s]', event.roomId, event.members);

            return onMembersJoinsRoom.call(that, event.roomId, event.members);
        case roomEnums.events.memberLeft.name:
            that._logger.debug('[%s] Member left [%s]', event.roomId, event.members);

            return onMembersLeavesRoom.call(that, event.roomId, event.members);
        case roomEnums.events.memberUpdated.name:
            that._logger.debug('[%s] Member updated [%s]', event.roomId, event.members);

            return onMembersUpdated.call(that, event.roomId, event.members);
        case roomEnums.events.roomUpdated.name:
            that._logger.debug('[%s] Room updated [%s]', event.roomId, event.room);

            return onRoomUpdated.call(that, event.roomId, event.room);
        case roomEnums.events.roomEnded.name:
            that._logger.info('[%s] Room ended', event.roomId);

            break;
        default:
            that._logger.warn('Unsupported room event [%s]', event.eventType);
        }
    }

    function onMembersJoinsRoom(roomId, members) {
        var room = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!room || room.getRoomId() !== roomId) {
            return;
        }

        room._removeMembers(members);
        room._addMembers(members);

        cachedRoom._removeMembers(members);
        cachedRoom._addMembers(members);

        var that = this;

        var memberIsSelf = function(member) {
            return member.sessionId === that.getSelf().getSessionId();
        };

        var joinedSelf = _.find(members, memberIsSelf);
        var selfInRoom = false;

        if (joinedSelf) {
            selfInRoom = replaceSelfInstanceInRoom.call(that, room);

            room._updateMembers([joinedSelf]);
        }

        this._logger.info('[%s] Room has now [%d] members (Self is present in room [%s])', roomId, room.getObservableMembers().getValue().length, selfInRoom);
    }

    function onMembersLeavesRoom(roomId, members) {
        var room = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!room || room.getRoomId() !== roomId) {
            return;
        }

        var that = this;

        var memberIsSelf = function(member) {
            return member.sessionId === that.getSelf().getSessionId();
        };

        var leftSelf = _.find(members, memberIsSelf);
        var self = this.getSelf();

        if (self && leftSelf) {
            self.getObservableLastUpdate().setValue(leftSelf.lastUpdate);
        }

        room._removeMembers(members);
        cachedRoom._removeMembers(members);

        this._logger.info('[%s] Room has now [%d] members', roomId, room.getObservableMembers().getValue().length);
    }

    function onMembersUpdated(roomId, members) {
        var room = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!room || room.getRoomId() !== roomId) {
            return;
        }

        // To help reduce conflicts when different properties are sequentially changing
        var membersWithOnlyPropertiesThatChanged = getDifferencesBetweenCachedRoomMembersAndUpdatedMembers.call(this, members);

        room._updateMembers(membersWithOnlyPropertiesThatChanged);
        cachedRoom._updateMembers(membersWithOnlyPropertiesThatChanged);

        this._logger.info('[%s] Room has [%d] updated members', roomId, members.length);
    }

    function onRoomUpdated(roomId, room) {
        var activeRoom = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();

        if (!activeRoom || activeRoom.getRoomId() !== roomId) {
            return;
        }

        cachedRoom._update(room);
        activeRoom._update(room);
    }

    function handlePCastSessionIdChanged(sessionId) {
        if (this.getSelf() && this.getSelf().getSessionId() === (sessionId || '')) {
            this._logger.info('[%s] Skip session ID change since it is the same as in self model', sessionId);

            return;
        }

        resetSelf.call(this, sessionId);
    }

    function handleSelfUpdated(self) {
        var that = this;

        if (!self) {
            return;
        }

        if (!self.getSessionId()) {
            return;
        }

        var activeRoom = that._activeRoom.getValue();

        if (!activeRoom) {
            return;
        }

        that._logger.info('[%s] Updating self in room after update', activeRoom.getRoomId());

        updateMemberRequest.call(this, this.getSelf(), function(error, response) {
            if (_.get(response, ['status']) === 'ok') {
                that._logger.info('[%s] Updated self in room after update', activeRoom.getRoomId());
            } else {
                that._logger.info('[%s] Self was not updated in room after update', activeRoom.getRoomId());
            }
        });
    }

    function findMemberInObservableRoom(sessionId, observableRoom) {
        var room = observableRoom.getValue();
        var members = room.getObservableMembers().getValue();

        return findMemberInMembers(sessionId, members);
    }

    function findMemberInMembers(sessionId, members) {
        return _.find(members, function(member) {
            return sessionId === member.getSessionId();
        });
    }

    function handlePCastStatusChange(status) {
        this._logger.info('PCast status changed from [%s] to [%s]', this._lastPcastStatus, status);

        this._lastPcastStatus = status;

        if (status === 'online') {
            reenterRoom.call(this);
        }
    }

    function setupSubscriptions() {
        var roomEventSubscription = this._protocol.onEvent('chat.RoomEvent', _.bind(onRoomEvent, this));
        var selfSubscription = this._self.subscribe(_.bind(handleSelfUpdated, this));
        var pcastStatusSubscription = this._authenticationService.getObservableStatus().subscribe(_.bind(handlePCastStatusChange, this));
        var pcastSessionIdSubscription = this._authenticationService.getObservableSessionId().subscribe(_.bind(handlePCastSessionIdChanged, this));

        this._disposables.add(roomEventSubscription);
        this._disposables.add(selfSubscription);
        this._disposables.add(pcastStatusSubscription);
        this._disposables.add(pcastSessionIdSubscription);
    }

    function getDifferencesBetweenCachedRoomMembersAndUpdatedMembers(members) {
        var that = this;

        return _.map(members, function(member) {
            var cachedMember = findMemberInObservableRoom(member.sessionId, that._cachedRoom);
            var placeholderMember = new Member(that, member.state, member.sessionId, member.screenName, member.role, member.streams, member.lastUpdate);
            var memberWithOnlyDifferentProperties = buildMemberForRequest(placeholderMember, cachedMember);

            memberWithOnlyDifferentProperties.lastUpdate = member.lastUpdate;

            return memberWithOnlyDifferentProperties;
        });
    }

    // Requests to server
    function buildMemberForRequest(member, memberToCompare) {
        var memberForRequest = findDifferencesInMember(member, memberToCompare);

        memberForRequest.sessionId = member.getSessionId();
        // Last valid update from server. Handles collisions.
        memberForRequest.lastUpdate = memberToCompare ? memberToCompare.getLastUpdate() : _.now();

        return memberForRequest;
    }

    function findDifferencesInMember(member, memberToCompare) {
        if (!memberToCompare) {
            return member.toJson();
        }

        var memberForRequest = {};
        var newMember = member.toJson();
        var cachedMember = memberToCompare.toJson();
        var differences = _.findDifferences(newMember, cachedMember, true);

        _.forEach(differences, function(key) {
            memberForRequest[key] = newMember[key];
        });

        return memberForRequest;
    }

    function getRoomInfoRequest(roomId, alias, callback) {
        this._authenticationService.assertAuthorized();

        var that = this;

        this._protocol.getRoomInfo(roomId, alias,
            function handleCreateRoomResponse(error, response) {
                if (error) {
                    that._logger.error('Request to get room info failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {status: response.status};

                if (response.status !== 'ok') {
                    that._logger.warn('Request to get room info failed with status [%s]', response.status);

                    return callback(null, result);
                }

                result.room = _.freeze(createImmutableRoomFromResponse.call(that, response));

                callback(null, result);
            }
        );
    }

    function createRoomRequest(room, callback) {
        this._authenticationService.assertAuthorized();

        var that = this;

        var validatedRoom = getValidRoomObject.call(that, room);

        this._protocol.createRoom(validatedRoom, function handleCreateRoomResponse(error, response) {
            if (error) {
                that._logger.error('Creating room failed with error [%s]', error);

                return callback(error, null);
            }

            var result = {status: response.status};

            if (response.status !== 'ok' && response.status !== 'already-exists') {
                that._logger.warn('Creating room failed with status [%s]', response.status);

                return callback(null, result);
            }

            result.room = _.freeze(createImmutableRoomFromResponse.call(that, response));

            callback(null, result);
        });
    }

    function getValidRoomObject(room) {
        var roomService = this;

        return (new Room(roomService, '', room.alias, room.name, room.description, room.type, [], room.bridgeId, room.pin)).toJson();
    }

    function enterRoomRequest(roomId, alias, callback, options) {
        var reenter = _.get(options, 'reenter') === true;
        var activeRoom = this._activeRoom.getValue();

        if (activeRoom) {
            var isSameRoom = roomId === activeRoom.getRoomId() || alias === activeRoom.getObservableAlias().getValue();

            if (isSameRoom && !reenter) {
                this._logger.info('Unable to join room. Already in [%s]/[%s] room.', activeRoom.getRoomId(), activeRoom.getObservableAlias().getValue());

                return callback(null, _.assign({room: activeRoom}, isSameRoom ? alreadyInRoomResponse : inAnotherRoomResponse));
            }
        }

        this._authenticationService.assertAuthorized();

        var self = this._self.getValue();

        var screenName = self.getObservableScreenName().getValue();
        var role = self.getObservableRole().getValue();
        var selfForRequest = buildMemberForRequest.call(this, self, null);
        var enterRoomOptions = [];
        var timestamp = _.now();

        if (reenter) {
            enterRoomOptions.push('reenter');
        }

        this._logger.info('Enter room [%s]/[%s] with screen name [%s] and role [%s]', roomId, alias, screenName, role);

        var that = this;

        if (that._isEnteringRoom) {
            that._logger.info('[%s] We are already entering the room [%s], skipping', roomId, alias);

            return;
        }

        that._isEnteringRoom = true;

        this._protocol.enterRoom(roomId, alias, selfForRequest, enterRoomOptions, timestamp,
            function handleEnterRoomResponse(error, response) {
                that._isEnteringRoom = false;

                if (error) {
                    that._logger.error('Joining of room failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {status: response.status};

                if (response.status !== 'ok') {
                    that._logger.warn('Joining of room failed with status [%s]', response.status);

                    return callback(null, result);
                }

                result.room = initializeRoomAndBuildCache.call(that, response);

                if (response.status === 'ok' && response.self) {
                    that.getSelf()._update(response.self);
                }

                that._logger.info('Successfully entered room [%s]/[%s]', roomId, alias);

                callback(null, result);
            }
        );
    }

    function leaveRoomRequest(callback, isForceLeaveRoom) {
        var room = this._activeRoom.getValue();

        if (!_.isBoolean(isForceLeaveRoom)) {
            isForceLeaveRoom = true;
        }

        if (!room) {
            this._logger.info('Not currently in a room.');

            return callback(null, notInRoomResponse);
        }

        if (this._authenticationService.getPCastSessionId() === '' || this._authenticationService.getPCastSessionId() === null) {
            this._logger.warn('Unable to leave room. We are currently not connected. Status [%s]', this._lastPcastStatus);

            return;
        }

        if (this._isLeavingRoom) {
            return;
        }

        this._authenticationService.assertAuthorized();

        var roomId = room.getRoomId();
        var timestamp = _.now();

        this._logger.info('Leave room [%s]', roomId);

        var that = this;

        this._isLeavingRoom = true;

        setTimeout(function() {
            that._activeRoom.setValue(null);
            that._cachedRoom.setValue(null);

            if (isForceLeaveRoom) {
                that._isLeavingRoom = false;
                callback(null, {status: 'ok'});
            }
        });

        this._protocol.leaveRoom(roomId, timestamp,
            function handleLeaveRoomResponse(error, response) {
                that._isLeavingRoom = false;

                if (error) {
                    that._logger.error('Leaving room failed with error [%s]', error);

                    if (isForceLeaveRoom) {
                        return;
                    }

                    return callback(error, null);
                }

                if (response.status !== 'ok') {
                    that._logger.warn('Leaving room failed with status [%s]', response.status);
                }

                if (isForceLeaveRoom) {
                    return;
                }

                return callback(null, {status: response.status});
            }
        );
    }

    function updateMemberRequest(member, callback) {
        if (!this._activeRoom.getValue()) {
            this._logger.warn('Not in a room. Please Enter a room before updating member.');

            return callback(null, notInRoomResponse);
        }

        this._authenticationService.assertAuthorized();

        var activeRoom = this._activeRoom.getValue();
        var roomId = activeRoom.getRoomId();
        var memberIsSelf = member.getSessionId() === this.getSelf().getSessionId();
        var cachedMember = findMemberInObservableRoom(member.getSessionId(), this._cachedRoom);

        var memberForRequest = buildMemberForRequest.call(this, member, cachedMember);
        var timestamp = _.now();
        var wasSelfAudienceMember = memberIsSelf && !cachedMember;
        var isSelfBecomingAudience = memberIsSelf && memberForRequest.role === memberEnums.roles.audience.name;

        if (wasSelfAudienceMember) {
            memberForRequest.lastUpdate = member.getObservableLastUpdate().getValue();
        }

        this._logger.info('Updating member info [%s] for active room [%s]', memberForRequest, roomId);

        var that = this;

        this._protocol.updateMember(roomId, memberForRequest, timestamp,
            function handleUpdateMemberResponse(error, response) {
                if (error) {
                    that._logger.error('Update of member failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {
                    status: response.status,
                    lastUpdate: response.lastUpdate
                };

                if (response.status !== 'ok') {
                    that._logger.info('Update of member failed with status [%s]', response.status);
                }

                if (response.status === 'ok' && isSelfBecomingAudience && _.isNumber(response.lastUpdate)) {
                    that.getSelf().getObservableLastUpdate().setValue(response.lastUpdate);
                }

                callback(null, result);
            }
        );
    }

    function updateRoomRequest(callback) {
        if (!this._activeRoom.getValue()) {
            this._logger.warn('Not in a room. Please Enter a room before updating member.');

            return callback(null, notInRoomResponse);
        }

        this._authenticationService.assertAuthorized();

        var room = this._activeRoom.getValue();
        var timestamp = _.now();

        var that = this;

        this._protocol.updateRoom(room.toJson(), timestamp,
            function handleUpdateMemberResponse(error, response) {
                if (error) {
                    that._logger.error('Update of room failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {status: response.status};

                if (response.status !== 'ok') {
                    that._logger.warn('Update of room failed with status [%s]', response.status);
                }

                callback(null, result);
            }
        );
    }

    function createImmutableRoomFromResponse(response) {
        var roomInfo = response.room;
        var members = response.members || [];
        var roomService = this;

        return new ImmutableRoom(roomService, roomInfo.roomId, roomInfo.alias, roomInfo.name, roomInfo.description, roomInfo.type, members, roomInfo.bridgeId, roomInfo.pin);
    }

    function createRoomFromResponse(response) {
        var roomInfo = response.room;
        var members = response.members;
        var roomService = this;

        return new Room(roomService, roomInfo.roomId, roomInfo.alias, roomInfo.name, roomInfo.description, roomInfo.type, members, roomInfo.bridgeId, roomInfo.pin);
    }

    function initializeRoomAndBuildCache(response) {
        var activeRoom = this._activeRoom.getValue();
        var cachedRoom = this._cachedRoom.getValue();
        var room = createRoomFromResponse.call(this, response);
        // The cached room does not contain a reference to the self object so updates to self and room are detected by comparing it against the cached room
        var newCachedRoom = createRoomFromResponse.call(this, response);

        replaceSelfInstanceInRoom.call(this, room);

        if (activeRoom && cachedRoom) {
            this._logger.debug('[%s] Updating existing room model.', activeRoom.getRoomId());
            activeRoom._update(response.room);
            cachedRoom._update(response.room);

            activeRoom.getObservableMembers().setValue(room.getObservableMembers().getValue());
            cachedRoom.getObservableMembers().setValue(newCachedRoom.getObservableMembers().getValue());

            return activeRoom;
        }

        this._activeRoom.setValue(room);
        this._cachedRoom.setValue(newCachedRoom);

        return room;
    }

    function replaceSelfInstanceInRoom(room) {
        var self = this._self.getValue();
        var members = room.getObservableMembers().getValue();

        var selfIndex = _.findIndex(members, function(member) {
            return self.getSessionId() === member.getSessionId();
        });

        if (selfIndex < 0) {
            this._logger.debug('Self not in server room model.');

            return false;
        }

        self._update(members[selfIndex].toJson());

        members[selfIndex] = self;

        room.getObservableMembers().setValue(members);

        return true;
    }

    return RoomService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    function AuthenticationService(pcast) {
        this.setPCast(pcast);
    }

    AuthenticationService.prototype.setPCast = function setPCast(pcast) {
        assert.isObject(pcast, 'pcast');
        assert.isFunction(pcast.getObservableStatus, 'pcast.getObservableStatus');
        assert.isFunction(pcast.getLogger, 'pcast.getLogger');
        assert.isFunction(pcast.getProtocol, 'pcast.getProtocol');

        if (pcast === this._pcast) {
            return;
        }

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._protocol = pcast.getProtocol();

        assert.isObject(this._logger, 'this._logger');
        assert.isObject(this._protocol, 'this._protocol');
        assert.isFunction(this._protocol.getObservableSessionId, 'this._protocol.getObservableSessionId');
        assert.isFunction(this._pcast.getObservableStatus, 'this._pcast.getObservableStatus');

        this._sessionId = this._protocol.getObservableSessionId();
        this._status = this._pcast.getObservableStatus();
    };

    AuthenticationService.prototype.checkAuthorized = function assertAuthorized() {
        if (!validPCastStatus(this.getPCastStatus())) {
            return false;
        }

        if (!validPCastSessionId(this.getPCastSessionId())) {
            return false;
        }

        return true;
    };

    AuthenticationService.prototype.assertAuthorized = function assertAuthorized() {
        if (!validPCastStatus(this.getPCastStatus())) {
            throw new Error('Unable to perform action. Status [' + this.getPCastStatus() + ']. Please wait to reconnect.');
        }

        if (!validPCastSessionId(this.getPCastSessionId())) {
            throw new Error('Unable to perform action. Invalid sessionId [' + this.getPCastSessionId() + '] with status [' + this.getPCastStatus() + ']');
        }
    };

    AuthenticationService.prototype.getObservableSessionId = function getObservableSessionId() {
        return this._sessionId;
    };

    AuthenticationService.prototype.getObservableStatus = function getObservableStatus() {
        return this._status;
    };

    AuthenticationService.prototype.getPCastSessionId = function getPCastSessionId() {
        return this._sessionId.getValue();
    };

    AuthenticationService.prototype.getPCastStatus = function getPCastStatus() {
        return this._status.getValue();
    };

    function validPCastSessionId(sessionId) {
        return sessionId !== null && sessionId !== undefined && sessionId !== '';
    }

    function validPCastStatus(status) {
        return status !== null && status !== undefined && status !== '' && status.toLowerCase() !== 'offline';
    }

    return AuthenticationService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(33),
    __webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, Member, room) {
    'use strict';
    var roomTypes = room.types;

    function Room(roomService, id, alias, name, description, type, members, bridgeId, pin) {
        this.init(roomService, id, alias, name, description, type, members, bridgeId, pin);
    }

    Room.prototype.init = function init(roomService, id, alias, name, description, type, members, bridgeId, pin) {
        assert.isObject(roomService, 'roomService');
        assert.isStringNotEmpty(name, 'name');
        assert.isString(description, 'description');
        assert.isArray(members, 'members');

        if (id) {
            assert.isStringNotEmpty(id, 'id');
        }

        if (alias) {
            assert.isStringNotEmpty(alias, 'alias');
        }

        if (bridgeId) {
            assert.isStringNotEmpty(bridgeId, 'bridgeId');
        }

        if (pin) {
            assert.isStringNotEmpty(pin, 'pin');
        }

        this._roomId = new observable.Observable(id);
        this._alias = new observable.Observable(alias);
        this._name = new observable.Observable(name);
        this._description = new observable.Observable(description);
        this._type = new observable.Observable(type, assertIsValidRoomType);
        this._members = new observable.ObservableArray([]).extend({
            method: "notifyWhenChangesStop",
            timeout: 400
        });
        this._options = new observable.ObservableArray();
        this._bridgeId = new observable.Observable(bridgeId);
        this._pin = new observable.Observable(pin);
        this._roomService = roomService;

        setMembers.call(this, members);
    };

    Room.prototype.getRoomId = function getRoomId() {
        return this._roomId.getValue();
    };

    Room.prototype.getObservableAlias = function getObservableAlias() {
        return this._alias;
    };

    Room.prototype.getObservableName = function getObservableName() {
        return this._name;
    };

    Room.prototype.getObservableDescription = function getObservableDescription() {
        return this._description;
    };

    Room.prototype.getObservableType = function getObservableType() {
        return this._type;
    };

    Room.prototype.getObservableMembers = function getObservableMembers() {
        return this._members;
    };

    Room.prototype.getObservableBridgeId = function getObservableBridgeId() {
        return this._bridgeId;
    };

    Room.prototype.getObservablePin = function getObservablePin() {
        return this._pin;
    };

    Room.prototype.toString = function toString() {
        return this._type.getValue() + '[' + this._roomId.getValue() + ']';
    };

    Room.prototype.toJson = function toJson() {
        return {
            roomId: this._roomId.getValue(),
            alias: this._alias.getValue(),
            name: this._name.getValue(),
            description: this._description.getValue(),
            type: this._type.getValue(),
            pin: this._pin.getValue(),
            bridgeId: this._bridgeId.getValue()
        };
    };

    Room.prototype.commitChanges = function commitChanges(callback) {
        assert.isObject(this._roomService, 'this._roomService');

        this._roomService.updateRoom(this, callback);
    };

    Room.prototype.reload = function reload() {
        assert.isObject(this._roomService, 'this._roomService');

        this._roomService.revertRoomChanges(this);
    };

    Room.prototype._update = function update(room) {
        if (!_.isObject(room)) {
            return;
        }

        if (room.roomId) {
            this._roomId.setValue(room.roomId);
        }

        if (room.alias) {
            this._alias.setValue(room.alias);
        }

        if (room.name) {
            this._name.setValue(room.name);
        }

        if (room.description) {
            this._description.setValue(room.description);
        }

        if (room.type) {
            this._type.setValue(room.type);
        }

        if (room.options) {
            this._options.setValue(room.options);
        }

        if (room.bridgeId) {
            this._bridgeId.setValue(room.bridgeId);
        }

        if (room.pin) {
            this._pin.setValue(room.pin);
        }

        if (room.members) {
            // DO NOTHING -- members updated by member events
        }
    };

    Room.prototype._addMembers = function addMembers(members) {
        var that = this;

        var newMembers = mapMembers(members, this._roomService);

        _.forEach(newMembers, function(member) {
            that._members.push(member);
        });
    };

    Room.prototype._removeMembers = function removeMembers(members) {
        var that = this;

        _.forEach(members, function(member) {
            that._members.remove(function(observableMember) {
                return member.sessionId === observableMember.getSessionId()
                    && member.lastUpdate >= observableMember.getObservableLastUpdate().getValue();
            });
        });
    };

    Room.prototype._updateMembers = function updateMembers(members) {
        _.forEach(this._members.getValue(), function(observableMember) {
            var memberToUpdate = _.find(members, function(member) {
                return observableMember.getSessionId() === member.sessionId && member.lastUpdate > observableMember.getObservableLastUpdate().getValue();
            });

            if (memberToUpdate) {
                observableMember._update(memberToUpdate);
            }
        });
    };

    function setMembers(members) {
        var newMembers = mapMembers(members, this._roomService);

        this._members.setValue(newMembers);
    }

    function mapMembers(members, roomService) {
        return _.map(members, function(member) {
            return new Member(roomService, member.state, member.sessionId, member.screenName, member.role, member.streams, member.lastUpdate);
        });
    }

    function assertIsValidRoomType(type) {
        type = _.getEnumName(roomTypes, type);

        if (!type) {
            throw new Error('"type" must be a valid room type');
        }

        return type;
    }

    return Room;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(19),
    __webpack_require__(13)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, Stream, member) {
    'use strict';
    var memberRoles = member.roles;
    var memberStates = member.states;

    function Member(roomService, state, sessionId, screenName, role, streams, lastUpdate) {
        this.init(roomService, state, sessionId, screenName, role, streams, lastUpdate);
    }

    Member.prototype.init = function init(roomService, state, sessionId, screenName, role, streams, lastUpdate) {
        assert.isObject(roomService, 'roomService');
        assert.isString(sessionId, 'sessionId');
        assert.isString(screenName, 'screenName');
        assert.isArray(streams, 'streams');
        assert.isNumber(_.utc(lastUpdate), 'lastUpdate');

        this._sessionId = new observable.Observable(sessionId);
        this._screenName = new observable.Observable(screenName);
        this._streams = new observable.ObservableArray([]);

        this._state = new observable.Observable(state, assertIsValidMemberState).extend({rateLimit: 500});
        this._role = new observable.Observable(role, assertIsValidMemberRole);
        this._lastUpdate = new observable.Observable(lastUpdate, _.utc);
        this._roomService = roomService;

        this.setStreams(streams);
    };

    Member.prototype.getObservableState = function getObservableState() {
        return this._state;
    };

    Member.prototype.getSessionId = function getSessionId() {
        return this._sessionId.getValue();
    };

    Member.prototype.getObservableScreenName = function getObservableScreenName() {
        return this._screenName;
    };

    Member.prototype.getObservableRole = function getObservableRole() {
        return this._role;
    };

    Member.prototype.getObservableStreams = function getObservableStreams() {
        return this._streams;
    };

    Member.prototype.getObservableLastUpdate = function getObservableLastUpdate() {
        return this._lastUpdate;
    };

    Member.prototype.getLastUpdate = function getLastUpdate() {
        return this._lastUpdate.getValue();
    };

    Member.prototype.getStreams = function getStreams() {
        return _.map(this._streams.getValue(), function mapToJson(stream) {
            return stream.toJson();
        });
    };

    Member.prototype.getRoomService = function getRoomService() {
        return this._roomService;
    };

    Member.prototype.commitChanges = function commitChanges(callback) {
        assert.isObject(this._roomService, 'this._roomService');

        this._roomService.updateMember(this, callback);
    };

    Member.prototype.reload = function reload() {
        assert.isObject(this._roomService, 'this._roomService');

        this._roomService.revertMemberChanges(this);
    };

    Member.prototype.setStreams = function setStreams(streams) {
        var newStreams = _.map(streams, function(stream) {
            return createNewObservableStream(stream);
        });

        this._streams.setValue(newStreams);
    };

    Member.prototype.toString = function toString() {
        return this.getObservableRole().getValue() + '[' + this.getObservableScreenName().getValue() + ',' + this.getSessionId() + ']';
    };

    Member.prototype.toJson = function toJson() {
        var member = {
            sessionId: this._sessionId.getValue(),
            screenName: this._screenName.getValue(),
            role: this._role.getValue(),
            state: this._state.getValue(),
            streams: [],
            lastUpdate: this._lastUpdate.getValue()
        };

        _.forEach(this._streams.getValue(), function(stream) {
            member.streams.push(stream.toJson());
        });

        return member;
    };

    Member.prototype._update = function update(member) {
        if (!_.isObject(member)) {
            return;
        }

        if (Object.prototype.hasOwnProperty.call(member, 'state')) {
            this._state.setValue(member.state);
        }

        if (Object.prototype.hasOwnProperty.call(member, 'screenName')) {
            this._screenName.setValue(member.screenName);
        }

        if (Object.prototype.hasOwnProperty.call(member, 'role')) {
            this._role.setValue(member.role);
        }

        if (Object.prototype.hasOwnProperty.call(member, 'lastUpdate')) {
            this._lastUpdate.setValue(member.lastUpdate);
        }

        if (Object.prototype.hasOwnProperty.call(member, 'streams')) {
            updateStreams.call(this, member.streams);
        }
    };

    function createNewObservableStream(stream) {
        return new Stream(stream.uri, stream.type, stream.audioState, stream.videoState);
    }

    function updateStreams(streams) {
        // Iterate through new streams object, update those that have changed, push new ones, remove old ones
        var oldObservableStreams = this._streams.getValue();
        var newObservableStreams = [];

        _.forEach(streams, function(stream) {
            var pcastStreamId = Stream.parsePCastStreamIdFromStreamUri(stream.uri);
            var streamToUpdate = _.find(oldObservableStreams, function(observableStream) {
                var hasSameUri = observableStream.getUri() === stream.uri;
                var hasSamePCastStreamId = observableStream.isPCastStream() && observableStream.getPCastStreamId() === pcastStreamId;
                var hasSameIdentifier = hasSameUri || hasSamePCastStreamId;

                return observableStream.getType() === stream.type && hasSameIdentifier;
            });

            if (streamToUpdate) {
                streamToUpdate._update(stream);
            } else {
                streamToUpdate = createNewObservableStream(stream);
            }

            newObservableStreams.push(streamToUpdate);
        });

        this._streams.setValue(newObservableStreams);
    }

    function assertIsValidMemberRole(role) {
        assert.isValidType(role, memberRoles, 'memberRole');

        return _.getEnumName(memberRoles, role);
    }

    function assertIsValidMemberState(state) {
        assert.isValidType(state, memberStates, 'memberState');

        return _.getEnumName(memberStates, state);
    }

    return Member;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var trackEnums = {
        states: {
            trackEnabled: {
                id: 0,
                name: 'TrackEnabled'
            },
            trackDisabled: {
                id: 1,
                name: 'TrackDisabled'
            },
            trackEnded: {
                id: 2,
                name: 'TrackEnded'
            }
        }
    };

    return trackEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2),
    __webpack_require__(70)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, RTC, ResolutionProvider) {
    'use strict';

    function UserMediaResolver(pcast, options) {
        assert.isObject(pcast, 'pcast');

        if (options) {
            assert.isObject(options, 'options');
        }

        if (options && options.screenShare) {
            assert.isFunction(options.screenShare, 'options.screenShare');
        }

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._options = options || {};
        this._onScreenShare = _.get(options, ['onScreenShare']);
    }

    UserMediaResolver.prototype.getUserMedia = function getUserMedia(deviceOptions, callback) {
        assert.isObject(deviceOptions, 'deviceOptions');

        var resolutionProvider = new ResolutionProvider(this._options);
        var resolution = resolutionProvider.getDefaultResolution();
        var frameRate = resolutionProvider.getDefaultFrameRate();

        getUserMediaWithOptions.call(this, deviceOptions, resolution, frameRate, resolutionProvider, callback);
    };

    UserMediaResolver.prototype.getVendorSpecificConstraints = function getVendorSpecificConstraints(deviceOptions, resolution, frameRate) {
        resolution = resolution || {};

        if (!deviceOptions || (!deviceOptions.audio && !deviceOptions.video && !deviceOptions.screen && !deviceOptions.screenAudio)) {
            throw new Error('Invalid device options. Must pass in at least one device option.');
        }

        if ((RTC.browser === 'Firefox' && RTC.browserVersion > 38)
            || (RTC.browser === 'Chrome' && RTC.browserVersion > 52 && !deviceOptions.screen && !deviceOptions.screenAudio)
            || (RTC.browser === 'Safari' && RTC.browserVersion > 10)
            || (RTC.browser === 'Opera' && RTC.browserVersion > 40)) {
            return setUserMediaOptionsForNewerBrowser(deviceOptions, resolution, frameRate);
        }

        if (RTC.browser === 'Edge') {
            return setUserMediaOptionsForEdge(deviceOptions, resolution, frameRate);
        }

        return setUserMediaOptionsForOtherBrowsers(deviceOptions, resolution, frameRate);
    };

    function setUserMediaOptionsForEdge(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                height: {
                    min: height,
                    max: height,
                    exact: height
                },
                width: {
                    min: width,
                    max: width,
                    exact: width
                },
                frameRate: frameRate
            };

            if (video.deviceId) {
                constraints.video.deviceId = video.deviceId;
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (!width) {
                delete constraints.video.width;
            }

            if (!height) {
                delete constraints.video.height;
            }

            if (!frameRate) {
                delete constraints.video.frameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = true;

            if (audio.deviceId) {
                constraints.audio = {deviceId: audio.deviceId};
            }
        }

        if (screen) {
            constraints.screen = true;
        }

        return constraints;
    }

    function setUserMediaOptionsForNewerBrowser(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var screenAudio = deviceOptions.screenAudio;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                height: {
                    min: height,
                    ideal: height,
                    max: height
                },
                width: {
                    min: width,
                    ideal: width,
                    max: width
                },
                frameRate: {
                    ideal: frameRate,
                    max: frameRate
                }
            };

            if (video.deviceId) {
                constraints.video.deviceId = {exact: video.deviceId};
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (!width) {
                delete constraints.video.width;
            }

            if (!height) {
                delete constraints.video.height;
            }

            if (!frameRate) {
                delete constraints.video.frameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = {};

            if (audio.deviceId) {
                constraints.audio.deviceId = {exact: audio.deviceId};
            }

            if (audio.mediaSource) {
                constraints.audio.mediaSource = audio.mediaSource;
            }

            if (audio.mediaSourceId) {
                constraints.audio.mediaSourceId = audio.mediaSourceId;
            }

            if (!audio.deviceId && !audio.mediaSource && !audio.mediaSourceId) {
                constraints.audio = true;
            }
        }

        if (screenAudio) {
            constraints.screenAudio = {};

            if (screenAudio.deviceId) {
                constraints.screenAudio.deviceId = {exact: screenAudio.deviceId};
            }

            if (screenAudio.mediaSource) {
                constraints.screenAudio.mediaSource = screenAudio.mediaSource;
            }

            if (screenAudio.mediaSourceId) {
                constraints.screenAudio.mediaSourceId = screenAudio.mediaSourceId;
            }

            if (!screenAudio.deviceId && !screenAudio.mediaSource && !screenAudio.mediaSourceId) {
                constraints.screenAudio = true;
            }
        }

        if (screen) {
            constraints.screen = {
                height: {
                    min: height,
                    ideal: height,
                    max: height
                },
                width: {
                    min: width,
                    ideal: width,
                    max: width
                },
                frameRate: {
                    ideal: frameRate,
                    max: frameRate
                }
            };

            if (!width) {
                delete constraints.screen.width;
            }

            if (!height) {
                delete constraints.screen.height;
            }

            if (!frameRate) {
                delete constraints.screen.frameRate;
            }

            if (screen.mediaSource) {
                constraints.screen.mediaSource = screen.mediaSource;
            }

            if (!width && !height && !frameRate && !screen.mediaSource) {
                constraints.screen = true;
            }
        }

        if (screen && video) {
            constraints.screen = true;
        }

        return constraints;
    }

    function setUserMediaOptionsForOtherBrowsers(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var screenAudio = deviceOptions.screenAudio;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                mandatory: {
                    minHeight: height,
                    maxHeight: height,
                    minWidth: width,
                    maxWidth: width,
                    maxFrameRate: frameRate
                }
            };

            if (video.deviceId) {
                constraints.video.mandatory.sourceId = video.deviceId;
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (video.mediaSource) {
                constraints.video.mandatory.mediaSource = video.mediaSource;
            }

            if (video.mediaSourceId) {
                constraints.video.mandatory.mediaSourceId = video.mediaSourceId;
            }

            if (!width) {
                delete constraints.video.mandatory.minWidth;
                delete constraints.video.mandatory.maxWidth;
            }

            if (!height) {
                delete constraints.video.mandatory.minHeight;
                delete constraints.video.mandatory.maxHeight;
            }

            if (!frameRate) {
                delete constraints.video.mandatory.maxFrameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode && !video.mediaSource && !video.mediaSourceId) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = {mandatory: {}};

            if (audio.deviceId) {
                constraints.audio.mandatory.sourceId = audio.deviceId;
            }

            if (audio.mediaSource) {
                constraints.audio.mandatory.mediaSource = audio.mediaSource;
            }

            if (audio.mediaSourceId) {
                constraints.audio.mandatory.mediaSourceId = audio.mediaSourceId;
            }

            if (!audio.deviceId && !audio.mediaSource && !audio.mediaSourceId) {
                constraints.audio = true;
            }
        }

        if (screenAudio) {
            constraints.screenAudio = {mandatory: {}};

            if (screenAudio.deviceId) {
                constraints.screenAudio.mandatory.sourceId = screenAudio.deviceId;
            }

            if (screenAudio.mediaSource) {
                constraints.screenAudio.mandatory.mediaSource = screenAudio.mediaSource;
            }

            if (screenAudio.mediaSourceId) {
                constraints.screenAudio.mandatory.mediaSourceId = screenAudio.mediaSourceId;
            }

            if (!screenAudio.deviceId && !screenAudio.mediaSource && !screenAudio.mediaSourceId) {
                constraints.screenAudio = true;
            }
        }

        if (screen) {
            constraints.screen = {
                mandatory: {
                    minHeight: height,
                    maxHeight: height,
                    minWidth: width,
                    maxWidth: width,
                    maxFrameRate: frameRate
                }
            };

            if (!width) {
                delete constraints.screen.mandatory.minWidth;
                delete constraints.screen.mandatory.maxWidth;
            }

            if (!height) {
                delete constraints.screen.mandatory.minHeight;
                delete constraints.screen.mandatory.maxHeight;
            }

            if (!frameRate) {
                delete constraints.screen.mandatory.maxFrameRate;
            }

            if (screen.mediaSource) {
                constraints.screen.mandatory.mediaSource = screen.mediaSource;
            }

            if (screen.mediaSourceId) {
                constraints.screen.mandatory.mediaSourceId = screen.mediaSourceId;
            }

            if (!width && !height && !frameRate && !screen.mediaSource) {
                constraints.screen = true;
            }
        }

        if (screen && video) {
            constraints.screen = true;
        }

        return constraints;
    }

    function getUserMediaWithOptions(deviceOptions, resolution, frameRate, resolutionProvider, callback) {
        var constraints = this.getVendorSpecificConstraints(deviceOptions, resolution || {}, frameRate);
        var hasVideo = !!constraints.video;
        var that = this;

        this._pcast.getUserMedia(constraints, function(pcast, status, userMedia, error) {
            if (status === 'ok') {
                that._logger.info('Acquired user media with constraints [%s]', constraints);

                return callback(null, {
                    userMedia: userMedia,
                    options: {
                        frameRate: hasVideo ? frameRate : null,
                        resolution: hasVideo ? _.get(resolution, ['resolution'], null) : null,
                        aspectRatio: hasVideo ? _.get(resolution, ['aspectRatio'], null) : null
                    }
                });
            }

            that._logger.info('Failed to acquire user media with constraints [%s]', constraints);

            var nextResolution = resolution;
            var nextFrameRate = frameRate;
            var constraintName = getConstraintNameFromError(error);

            if (error && (
                error.name === 'ConstraintNotSatisfiedError'
                || error.name === 'OverconstrainedError'
                || error.constructor.name === 'OverconstrainedError'
                || (error.code === 'unavailable' && RTC.browser === 'Edge'))
            ) {
                switch (constraintName.toLowerCase()) {
                case 'width':
                case 'height':
                    if (!resolution || !resolutionProvider.canResolveNextResolution()) {
                        break;
                    }

                    that._logger.warn('Unable to get user media with constraint [%s] with height [%s] and width [%s]. Retrying with next closest resolution.',
                        constraintName, nextResolution.height, nextResolution.width);
                    nextResolution = resolutionProvider.getNextResolution(resolution.height, resolution.aspectRatio);

                    return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, resolutionProvider, callback);
                case 'framerate':
                default:
                    // Always try without frame rate if constraint name is not defined
                    if (frameRate) {
                        that._logger.warn('Unable to get user media with constraint [%s] and frame rate [%s]. Retrying without frame rate constraint.', constraintName, frameRate);
                        nextFrameRate = null;

                        return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, resolutionProvider, callback);
                    }

                    // Then try to reduce resolution
                    if (!resolution || !resolutionProvider.canResolveNextResolution()) {
                        break;
                    }

                    that._logger.warn('Unable to get user media with constraint [%s] with height [%s] and width [%s]. Retrying with next closest resolution.',
                        constraintName, nextResolution.height, nextResolution.width);
                    nextResolution = resolutionProvider.getNextResolution(resolution.height, resolution.aspectRatio);

                    return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, resolutionProvider, callback);
                }
            }

            that._logger.error('Unable to get user media with status [%s]', status, error);

            return callback(error);
        }, function(constraints) {
            var clientConstraints = constraints;

            if (that._onScreenShare && RTC.browser === 'Chrome') {
                var normalizedConstraints = normalizeChromeScreenShareConstraints(constraints);

                clientConstraints = that._onScreenShare(normalizedConstraints);

                var resolution;

                if (clientConstraints.resolution && clientConstraints.aspectRatio) {
                    switch (this._defaultAspectRatio) {
                    // Portrait
                    case '9x16':
                    case '3x4':
                        resolution = {
                            width: clientConstraints.resolution,
                            height: resolutionProvider.calculateLongerDimensionByAspectRatio(clientConstraints.resolution, clientConstraints.aspectRatio)
                        };

                        break;
                    // Landscape
                    case '16x9':
                    case '4x3':
                    default:
                        resolution = {
                            width: resolutionProvider.calculateLongerDimensionByAspectRatio(clientConstraints.resolution, clientConstraints.aspectRatio),
                            height: clientConstraints.resolution
                        };

                        break;
                    }
                }

                clientConstraints = getChromeScreenShareConstraints.call(that, normalizedConstraints, resolution, clientConstraints.frameRate);
            }

            return clientConstraints;
        });
    }

    function normalizeChromeScreenShareConstraints(constraints) {
        var chromeVideoSource = _.get(constraints, ['video', 'mandatory', 'chromeMediaSource']);
        var chromeAudioSource = _.get(constraints, ['audio', 'mandatory', 'chromeMediaSource']);
        var chromeVideoSourceId = _.get(constraints, ['video', 'mandatory', 'chromeMediaSourceId']);
        var chromeAudioSourceId = _.get(constraints, ['audio', 'mandatory', 'chromeMediaSourceId']);
        var normalizedConstraints = {};

        if (chromeVideoSource || chromeAudioSourceId) {
            _.set(normalizedConstraints, ['screen', 'mediaSource'], chromeVideoSource);
            _.set(normalizedConstraints, ['screen', 'mediaSourceId'], chromeVideoSourceId);
        }

        if (chromeAudioSource || chromeAudioSourceId) {
            _.set(normalizedConstraints, ['screenAudio', 'mediaSource'], chromeAudioSource);
            _.set(normalizedConstraints, ['screenAudio', 'mediaSourceId'], chromeAudioSourceId);
        }

        return normalizedConstraints;
    }

    function getChromeScreenShareConstraints(constraints, resolution, frameRate) {
        var screenShareConstraints = this.getVendorSpecificConstraints(constraints, resolution, frameRate);

        if (screenShareConstraints.screen) {
            screenShareConstraints.video = screenShareConstraints.screen;
            delete screenShareConstraints.screen;
        }

        if (screenShareConstraints.screenAudio) {
            screenShareConstraints.audio = screenShareConstraints.screenAudio;
            delete screenShareConstraints.screenAudio;
        }

        var chromeVideoSource = _.get(screenShareConstraints, ['video', 'mandatory', 'mediaSource']);
        var chromeAudioSource = _.get(screenShareConstraints, ['audio', 'mandatory', 'mediaSource']);
        var chromeVideoSourceId = _.get(screenShareConstraints, ['video', 'mandatory', 'mediaSourceId']);
        var chromeAudioSourceId = _.get(screenShareConstraints, ['audio', 'mandatory', 'mediaSourceId']);

        if (chromeVideoSource || chromeVideoSourceId) {
            _.set(screenShareConstraints, ['video', 'mandatory', 'chromeMediaSource'], chromeVideoSource);
            _.set(screenShareConstraints, ['video', 'mandatory', 'chromeMediaSourceId'], chromeVideoSourceId);
            delete screenShareConstraints.video.mandatory.mediaSource;
            delete screenShareConstraints.video.mandatory.mediaSourceId;
        }

        if (chromeAudioSource || chromeAudioSourceId) {
            _.set(screenShareConstraints, ['audio', 'mandatory', 'chromeMediaSource'], chromeAudioSource);
            _.set(screenShareConstraints, ['audio', 'mandatory', 'chromeMediaSourceId'], chromeAudioSourceId);
            delete screenShareConstraints.audio.mandatory.mediaSource;
            delete screenShareConstraints.audio.mandatory.mediaSourceId;
        }

        return screenShareConstraints;
    }

    function getConstraintNameFromError(error) {
        if (error.constraintName) {
            return error.constraintName;
        }

        if (error.constraint) {
            return error.constraint;
        }

        return '';
    }

    return UserMediaResolver;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(37),
    __webpack_require__(35),
    __webpack_require__(21),
    __webpack_require__(2),
    __webpack_require__(71)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, AdminApiProxyClient, UserMediaResolver, PCast, rtc, shakaEnums) {
    'use strict';

    var instanceCounter = 0;
    var unauthorizedStatus = 'unauthorized';
    var capacityBackoffTimeout = 1000;
    var defaultPrerollSkipDuration = 500;
    var defaultUserActionOnlineTimeout = 20000;
    var defaultReconnectOptions = {
        maxOfflineTime: 3 * 60 * 1000,
        maxReconnectFrequency: 60 * 1000
    };

    function PCastExpress(options) {
        assert.isObject(options, 'options');

        if (options.authToken) {
            assert.isStringNotEmpty(options.authToken, 'options.authToken');
        }

        if (options.authToken && options.adminApiProxyClient) {
            throw new Error('Do not pass "options.adminApiProxyClient" if you are using "options.authToken"');
        }

        if (options.onError) {
            assert.isFunction(options.onError, 'options.onError');
        }

        if (!_.isNullOrUndefined(options.onlineTimeout)) {
            assert.isNumber(options.onlineTimeout, 'options.onlineTimeout');

            if (options.onlineTimeout < 0) {
                throw new Error('"options.onlineTimeout" must be a positive number');
            }
        }

        if (options.reconnectOptions) {
            assert.isObject(options.reconnectOptions, 'options.reconnectOptions');
            assert.isNumber(options.reconnectOptions.maxOfflineTime, 'options.reconnectOptions.maxOfflineTime');
            assert.isNumber(options.reconnectOptions.maxReconnectFrequency, 'options.reconnectOptions.maxReconnectFrequency');
        }

        if (options.adminApiProxyClient) {
            assert.isObject(options.adminApiProxyClient, 'options.adminApiProxyClient');
            assert.isFunction(options.adminApiProxyClient.createAuthenticationToken, 'options.adminApiProxyClient.createAuthenticationToken');
        }

        this._instanceId = ++instanceCounter;
        this._pcastObservable = new observable.Observable(null).extend({rateLimit: 0});
        this._sessionIdObservable = new observable.Observable(null).extend({rateLimit: 0});
        this._publishers = {};
        this._adminApiProxyClient = options.adminApiProxyClient;
        this._isInstantiated = false;
        this._reconnectCount = 0;
        this._reauthCount = 0;
        this._disposed = false;
        this._authToken = options.authToken;
        this._onError = options.onError;
        this._options = options;
        this._onlineTimeout = _.isNumber(options.onlineTimeout) ? options.onlineTimeout : defaultUserActionOnlineTimeout;
        this._reconnectOptions = options.reconnectOptions || defaultReconnectOptions;
        this._logger = null;
        this._ignoredStreamEnds = {};

        instantiatePCast.call(this);

        // After logger is instantiated
        if (!options.adminApiProxyClient) {
            if (options.backendUri || _.isString(options.backendUri)) {
                this._logger.warn('Passing options.backendUri is deprecated. Please create an instance of the sdk.net.AdminApiProxyClient and pass that instead');
            }

            if (options.authenticationData) {
                this._logger.warn('Passing options.authenticationData is deprecated. Please create an instance of the sdk.net.AdminApiProxyClient and pass that instead');
            }
        }
    }

    PCastExpress.prototype.toString = function toString() {
        return 'PCastExpress[' + this._instanceId + ']';
    };

    PCastExpress.prototype.dispose = function dispose() {
        if (this._listedForCriticalNetworkRecoveryDisposable) {
            this._listedForCriticalNetworkRecoveryDisposable.dispose();
            this._listedForCriticalNetworkRecoveryDisposable = null;
        }

        if (this._pcastObservable.getValue()) {
            this._pcastObservable.getValue().stop();
            this._pcastObservable.setValue(null);
        }

        if (this._sessionIdObservable.getValue()) {
            this._sessionIdObservable.setValue(null);
        }

        if (_.isNumber(this._instantiatePCastTimeoutId)) {
            clearTimeout(this._instantiatePCastTimeoutId);
            this._instantiatePCastTimeoutId = null;
        }

        if (this._adminApiProxyClient) {
            this._adminApiProxyClient.dispose();
        }

        if (this.sessionIdSubscription) {
            this.sessionIdSubscription.dispose();
        }

        if (this._sessionIdObservable && this._sessionIdObservable.dispose) {
            this._sessionIdObservable.dispose();
        }

        this._reconnectCount = 0;
        this._reauthCount = 0;
        this._disposed = true;

        this._logger.info('[%s] Disposed PCast Express instance', this);
    };

    PCastExpress.prototype.getPCast = function getPCast() {
        return this._pcastObservable.getValue();
    };

    PCastExpress.prototype.getPCastObservable = function() {
        return this._pcastObservable;
    };

    PCastExpress.prototype.getSessionIdObservable = function() {
        return this._sessionIdObservable;
    };

    PCastExpress.prototype.getAdminAPI = function getAdminAPI() {
        return this._adminApiProxyClient;
    };

    PCastExpress.prototype.getUserMedia = function(options, callback) {
        var that = this;

        assert.isObject(options.mediaConstraints, 'options.mediaConstraints');
        assert.isFunction(callback, 'callback');

        if (options.resolution) {
            assert.isNumber(options.resolution, 'options.resolution');
        }

        if (options.frameRate) {
            assert.isNumber(options.frameRate, 'options.frameRate');
        }

        if (options.aspectRatio) {
            assert.isStringNotEmpty(options.aspectRatio, 'options.aspectRatio');
        }

        if (options.onResolveMedia) {
            assert.isFunction(options.onResolveMedia, 'options.onResolveMedia');
        }

        if (options.onScreenShare) {
            assert.isFunction(options.onScreenShare, 'options.onScreenShare');
        }

        if (that._pcastObservable.getValue()) {
            return resolveUserMedia.call(that, that._pcastObservable.getValue(), options, callback);
        }

        var pcastSubscription = that._pcastObservable.subscribe(function(pcast) {
            if (!pcast) {
                return;
            }

            pcastSubscription.dispose();

            resolveUserMedia.call(that, pcast, options, callback);
        });
    };

    PCastExpress.prototype.publish = function publish(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        if (options.mediaConstraints) {
            assert.isObject(options.mediaConstraints, 'options.mediaConstraints');
        } else {
            assert.isObject(options.userMediaStream, 'options.userMediaStream');
        }

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.publishToken) {
            assert.isStringNotEmpty(options.publishToken, 'options.publishToken');
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        }

        if (options.publishToken && options.streamToken) {
            throw new Error('Do not pass streamToken with publishToken. Please use publishToken.');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            if (options.userMediaStream) {
                return getStreamingTokenAndPublish.call(that, options.userMediaStream, options, false, callback);
            }

            that.getUserMedia(options, function(error, response) {
                if (error) {
                    return callback(error);
                }

                if (response.status !== 'ok') {
                    return callback(null, response);
                }

                getStreamingTokenAndPublish.call(that, response.userMedia, options, true, callback);
            });
        }, options.isContinuation);
    };

    var connectOptionCapabilities = ['streaming', 'low-latency', 'on-demand', 'uld', 'vvld', 'vld', 'ld', 'sd', 'hd', 'fhd', 'uhd'];

    PCastExpress.prototype.publishRemote = function publishRemote(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isStringNotEmpty(options.streamUri, 'options.streamUri');

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        if (options.mediaConstraints) {
            throw new Error('Invalid argument: mediaConstraints, passed on publishRemote. Local media not allowed when publishing remote content.');
        }

        if (options.videoElement) {
            throw new Error('May not preview remote stream. Please subscribe to view.');
        }

        if (options.prerollSkipDuration) {
            assert.isNumber(options.prerollSkipDuration, 'options.prerollSkipDuration');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.frameRate) {
            assert.isObject(options.frameRate, 'options.frameRate');

            if (options.frameRate.exact) {
                assert.isNumber(options.frameRate.exact, 'options.frameRate.exact');
            }

            if (options.frameRate.max) {
                assert.isNumber(options.frameRate.max, 'options.frameRate.max');
            }
        }

        if (options.publishToken) {
            assert.isStringNotEmpty(options.publishToken, 'options.publishToken');
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        }

        if (options.publishToken && options.streamToken) {
            throw new Error('Do not pass streamToken with publishToken. Please use publishToken.');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            var remoteOptions = _.assign({
                connectOptions: [],
                capabilities: []
            }, options);

            if (!_.includes(remoteOptions.capabilities, 'publish-uri')) {
                remoteOptions.capabilities.push('publish-uri');
            }

            _.forEach(connectOptionCapabilities, function(capability) {
                if (_.includes(remoteOptions.capabilities, capability)) {
                    remoteOptions.connectOptions.push('publisher-capability=' + capability);
                }
            });

            if (options.frameRate && options.frameRate.exact) {
                remoteOptions.connectOptions.push('source-uri-video-fps=' + options.frameRate.exact);
            }

            if (options.frameRate && options.frameRate.max) {
                remoteOptions.connectOptions.push('source-uri-video-fps-max=' + options.frameRate.max);
            }

            remoteOptions.connectOptions.push('source-uri-preroll-skip-duration=' + (_.isNumber(options.prerollSkipDuration) ? options.prerollSkipDuration : defaultPrerollSkipDuration).toString());

            getStreamingTokenAndPublish.call(that, remoteOptions.streamUri, remoteOptions, false, callback);
        });
    };

    PCastExpress.prototype.publishStreamToExternal = function publishStreamToExternal(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isStringNotEmpty(options.streamId, 'options.streamId');
        assert.isStringNotEmpty(options.externalUri, 'options.externalUri');

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        if (options.mediaConstraints) {
            throw new Error('Invalid argument: mediaConstraints, passed on publishStreamToExternal. Local media not allowed when publishing remote content.');
        }

        if (options.videoElement) {
            throw new Error('May not preview external stream. Please subscribe to view.');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            var remoteOptions = _.assign({
                connectOptions: [],
                capabilities: []
            }, options);

            if (!_.includes(remoteOptions.capabilities, 'egress')) {
                remoteOptions.capabilities.push('egress');
            }

            if (!_.includes(remoteOptions.capabilities, 'egress-own-stream')) {
                remoteOptions.capabilities.push('egress-own-stream');
            }

            getStreamingTokenAndPublish.call(that, remoteOptions.externalUri, remoteOptions, false, callback);
        });
    };

    PCastExpress.prototype.publishScreen = function publishScreen(options, callback) {
        var publishScreenOptions = _.assign({mediaConstraints: {screen: true}}, options);

        _.set(publishScreenOptions, ['monitor', 'options'], _.assign({}, {
            monitorFrameRate: false,
            videoBitRateThreshold: 100,
            conditionCountForNotificationThreshold: 8
        }, _.get(publishScreenOptions, ['monitor', 'options'], {})));

        return this.publish(publishScreenOptions, callback);
    };

    PCastExpress.prototype.subscribe = function subscribe(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isStringNotEmpty(options.streamId, 'options.streamId');

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        } else {
            assert.isObject(options.capabilities, 'options.capabilities');
        }

        if (options.subscriberOptions) {
            assert.isObject(options.subscriberOptions, 'options.subscriberOptions');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                that._logger.error('[%s] Failed to subscribe after error waiting for online status', this, error);

                return callback(error);
            }

            if (options.streamToken) {
                return subscribeToStream.call(that, options.streamToken, options, callback);
            }

            if (!options.streamToken && !that._adminApiProxyClient) {
                throw new Error('Use stream token, or set adminApiProxyClient');
            }

            that._logger.info('[%s] [%s] Generating stream token for subscribing to origin [%s]', this, that._pcastObservable.getValue().getProtocol().getSessionId(), options.streamId);

            that._adminApiProxyClient.createStreamTokenForSubscribing(that._pcastObservable.getValue().getProtocol().getSessionId(), options.capabilities, options.streamId, null, function(error, response) {
                if (error) {
                    that._logger.error('[%s] Failed to create stream token for subscribing', this, error);

                    return callback(error);
                }

                if (response.status !== 'ok') {
                    that._logger.warn('[%s] Failed to create stream token for subscribing with status [%s]', this, response.status);

                    return callback(null, response);
                }

                subscribeToStream.call(that, response.streamToken, options, callback);
            });
        }, options.isContinuation);
    };

    PCastExpress.prototype.subscribeToScreen = function subscribeToScreen(options, callback) {
        var subscribeToScreenOptions = _.assign({}, options);

        _.set(subscribeToScreenOptions, ['monitor', 'options'], _.assign({}, {
            monitorFrameRate: false,
            videoBitRateThreshold: 100,
            conditionCountForNotificationThreshold: 8
        }, _.get(subscribeToScreenOptions, ['monitor', 'options'], {})));

        return this.subscribe(subscribeToScreenOptions, callback);
    };

    PCastExpress.prototype.waitForOnline = function waitForOnline(callback, isNotUserAction) {
        assert.isFunction(callback, 'callback');

        if (this._pcastObservable.getValue() && this._pcastObservable.getValue().getStatus() === 'online') {
            return callback();
        }

        var that = this;
        var disposeOfWaitTimeout = isNotUserAction ? _.get(that._reconnectOptions, ['maxOfflineTime']) : this._onlineTimeout;
        var pcastSubscription = null;
        var statusSubscription = null;
        var onlineTimeoutId = setTimeout(function() {
            that._logger.info('[%s] Disposing of online listener after [%s] ms', this, disposeOfWaitTimeout);

            if (pcastSubscription) {
                pcastSubscription.dispose();
            }

            if (statusSubscription) {
                statusSubscription.dispose();
            }

            if (that._disposed) {
                that._logger.info('[%s] Instance was disposed while waiting for online, ignoring callback', this);

                return;
            }

            callback(new Error('timeout'));
        }, disposeOfWaitTimeout);

        this._logger.info('[%s] Waiting for online status before continuing. Timeout set to [%s]', this, disposeOfWaitTimeout);

        var subscribeToStatusChange = function(pcast) {
            if (statusSubscription) {
                statusSubscription.dispose();
            }

            if (!pcast) {
                return;
            }

            statusSubscription = pcast.getObservableStatus().subscribe(function(status) {
                if (that._disposed) {
                    that._logger.info('[%s] Instance was disposed while waiting for online, canceling waiting and skip triggering callback', this);

                    clearTimeout(onlineTimeoutId);
                    statusSubscription.dispose();
                    pcastSubscription.dispose();

                    return;
                }

                if (status !== 'online') {
                    that._logger.info('[%s] Still waiting for online status before continuing. Current status is [%s]', this, status);

                    return;
                }

                clearTimeout(onlineTimeoutId);
                statusSubscription.dispose();
                pcastSubscription.dispose();

                return callback();
            }, {initial: 'notify'});
        };

        pcastSubscription = this._pcastObservable.subscribe(subscribeToStatusChange, {initial: 'notify'});
    };

    PCastExpress.prototype.parseCapabilitiesFromToken = function parseCapabilitiesFromToken(streamToken) {
        var pcast = this._pcastObservable.getValue();

        return pcast.parseCapabilitiesFromToken(streamToken);
    };

    PCastExpress.prototype.parseRoomOrChannelIdFromToken = function parseRoomOrChannelIdFromToken(streamToken) {
        var pcast = this._pcastObservable.getValue();

        return pcast.parseRoomOrChannelIdFromToken(streamToken);
    };

    PCastExpress.prototype.parseRoomOrChannelAliasFromToken = function parseRoomOrChannelAliasFromToken(streamToken) {
        var pcast = this._pcastObservable.getValue();

        return pcast.parseRoomOrChannelAliasFromToken(streamToken);
    };

    function instantiatePCast() {
        var that = this;

        var authenticationCallback = function(_, status) {
            if (status === 'critical-network-issue') {
                return onPCastStatusChange.call(that, status);
            }
        };

        if (!this._pcastObservable.getValue()) {
            var pcastOptions = _.assign({logger: this._logger}, this._options);

            this._pcastObservable.setValue(new PCast(pcastOptions));
        }

        if (!this._logger) {
            this._logger = this._pcastObservable.getValue().getLogger();
        }

        if (!this._pcastStatusSubscription) {
            this._pcastStatusSubscription = this._pcastObservable.getValue().getObservableStatus().subscribe(_.bind(onPCastStatusChange, this));
        }

        if (this.sessionIdSubscription) {
            this.sessionIdSubscription.dispose();
        }

        var handleSessionIdChange = function(sessionId) {
            this._sessionIdObservable.setValue(sessionId);
        };

        this.sessionIdSubscription = this._pcastObservable.getValue().getObservableSessionId().subscribe(_.bind(handleSessionIdChange, this));

        if (this._authToken) {
            return this._pcastObservable.getValue().start(this._authToken, authenticationCallback, _.noop, _.noop);
        }

        if (!this._authToken && !that._adminApiProxyClient) {
            throw new Error('Use auth token, or set adminApiProxyClient');
        }

        this._adminApiProxyClient.createAuthenticationToken(function(error, response) {
            if (error && error.message === 'timeout') {
                return onPCastStatusChange.call(that, error.message);
            }

            if (error) {
                return handleError.call(that, error);
            }

            if (response.status !== 'ok') {
                return onPCastStatusChange.call(that, response.status);
            }

            if (!that._pcastObservable.getValue()) {
                that._logger.warn('[%s] Unable to authenticate. PCast not instantiated.', this);

                return;
            }

            that._pcastObservable.getValue().start(response.authenticationToken, _.noop, _.noop, _.noop);
        });
    }

    function onPCastStatusChange(status) {
        switch (status) {
        case 'timeout':
        case 'critical-network-issue':
            if (this._pcastObservable.getValue()) {
                this._pcastObservable.getValue().stop('recovery');
                this._pcastObservable.setValue(null);
            }

            if (this._sessionIdObservable.getValue()) {
                this._sessionIdObservable.setValue(null);
            }

            if (this._pcastStatusSubscription) {
                this._pcastStatusSubscription.dispose();
                this._pcastStatusSubscription = null;
            }

            this._reconnectCount++;

            return instantiateWithBackoff.call(this);
        case 'reconnect-failed':
        case 'unauthorized':
            delete this._authToken;

            if (!this._adminApiProxyClient) {
                return handleError.call(this, new Error(status));
            }

            this._reauthCount++;

            if (this._reauthCount > 1) {
                return handleError.call(this, new Error(status));
            }

            this._logger.info('[%s] Attempting to create new authToken and re-connect after [%s] response', this, unauthorizedStatus);

            return getAuthTokenAndReAuthenticate.call(this);
        case 'capacity':
        case 'network-unavailable':
            this._reconnectCount++;

            return instantiateWithBackoff.call(this);
        case 'online':
            if (!this._isInstantiated) {
                this._logger.info('[%s] Successfully instantiated', this);
            } else {
                this._logger.info('[%s] Successfully reconnected (reconnectCount=[%s],reauthCount=[%s])', this, this._reconnectCount, this._reauthCount);
            }

            this._reauthCount = 0;
            this._reconnectCount = 0;
            this._isInstantiated = true;

            return;
        case 'reconnecting':
        case 'reconnected':
        case 'connecting':
            break; // Everything ok
        case 'offline':
            return;
        case 'failed':
        default:
            return handleError.call(this, new Error(status));
        }
    }

    function instantiateWithBackoff() {
        var that = this;
        var staticTimeout = Math.min(capacityBackoffTimeout * that._reconnectCount * that._reconnectCount, this._reconnectOptions.maxReconnectFrequency);
        var maxOffsetInSeconds = Math.min(staticTimeout / 10000, 5);
        var randomLinearOffset = Math.random() * maxOffsetInSeconds * 1000;
        var timeoutWithRandomOffset = staticTimeout + randomLinearOffset;

        this._logger.info('[%s] Waiting for [%s] ms before continuing to attempt to reconnect to PCast', this, timeoutWithRandomOffset);

        this._instantiatePCastTimeoutId = setTimeout(function() {
            if (!that._pcastObservable.getValue() || !that._pcastObservable.getValue().isStarted()) {
                return instantiatePCast.call(that);
            }

            return getAuthTokenAndReAuthenticate.call(that);
        }, timeoutWithRandomOffset);
    }

    function getAuthTokenAndReAuthenticate() {
        var that = this;

        this._adminApiProxyClient.createAuthenticationToken(function(error, response) {
            if (error && error.message === 'timeout') {
                return onPCastStatusChange.call(that, error.message);
            }

            if (error) {
                return handleError.call(that, error);
            }

            if (response.status !== 'ok') {
                return onPCastStatusChange.call(that, response.status);
            }

            if (!that._pcastObservable.getValue()) {
                that._logger.warn('[%s] Unable to authenticate. PCast not instantiated.', this);

                return;
            }

            that._pcastObservable.getValue().reAuthenticate(response.authenticationToken);
        });
    }

    function handleError(e) {
        if (!this._onError) {
            throw e;
        }

        this._onError(e);
    }

    function resolveUserMedia(pcast, options, callback) {
        var userMediaResolver = new UserMediaResolver(pcast, {
            aspectRatio: options.aspectRatio,
            resolution: options.resolution,
            frameRate: options.frameRate,
            resolutionSelectionStrategy: options.resolutionSelectionStrategy,
            onScreenShare: function(screenOptions) {
                screenOptions = options.onScreenShare ? options.onScreenShare(screenOptions) : screenOptions;

                if (screenOptions.resolution) {
                    assert.isNumber(screenOptions.resolution, 'clientOptions.resolution');
                }

                if (screenOptions.frameRate) {
                    assert.isNumber(screenOptions.frameRate, 'screenOptions.frameRate');
                }

                if (screenOptions.aspectRatio) {
                    assert.isStringNotEmpty(screenOptions.aspectRatio, 'screenOptions.aspectRatio');
                }

                return _.assign({resolution: screenOptions.resolution}, screenOptions);
            }
        });

        userMediaResolver.getUserMedia(options.mediaConstraints, function(error, response) {
            if (error) {
                return callback(error);
            }

            if (options.onResolveMedia) {
                options.onResolveMedia(response.options);
            }

            callback(null, _.assign({status: 'ok'}, response));
        });
    }

    function getStreamingTokenAndPublish(userMediaOrUri, options, cleanUpUserMediaOnStop, callback) {
        var that = this;

        if (options.publishToken) {
            try {
                var capabilitiesFromPublishToken = that.parseCapabilitiesFromToken(options.publishToken);

                options.capabilities = capabilitiesFromPublishToken;
            } catch (e) {
                return callback(new Error('Bad `publishToken`', e), {status: 'bad-token'});
            }

            return publishUserMediaOrUri.call(that, options.publishToken, userMediaOrUri, options, cleanUpUserMediaOnStop, callback);
        }

        if (options.streamToken) {
            try {
                var capabilitiesFromStreamToken = that.parseCapabilitiesFromToken(options.streamToken);

                options.capabilities = capabilitiesFromStreamToken;
            } catch (e) {
                return callback(new Error('Bad `streamToken`', e), {status: 'bad-token'});
            }

            return publishUserMediaOrUri.call(that, options.streamToken, userMediaOrUri, options, cleanUpUserMediaOnStop, callback);
        }

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        that.waitForOnline(function(error) {
            if (error) {
                that._logger.error('[%s] Failed to create stream token for publishing after waiting for online status', this, error);

                return callback(error);
            }

            var sessionId = that._pcastObservable.getValue().getProtocol().getSessionId();
            var isEgress = _.includes(options.capabilities, 'egress');
            var generateStreamToken = _.bind(that._adminApiProxyClient.createStreamTokenForPublishing, that._adminApiProxyClient, sessionId, options.capabilities);

            if (isEgress) {
                generateStreamToken = _.bind(that._adminApiProxyClient.createStreamTokenForPublishingToExternal, that._adminApiProxyClient, sessionId, options.capabilities, options.streamId);
            }

            that._logger.info('[%s] [%s] Creating stream token for publishing', this, sessionId);

            generateStreamToken(function(error, response) {
                if (error) {
                    that._logger.error('[%s] [%s] Failed to create stream token for publishing', this, sessionId, error);

                    return callback(error);
                }

                if (response.status !== 'ok') {
                    that._logger.warn('[%s] [%s] Failed to create stream token for publishing with status [%s]', this, sessionId, response.status);

                    return callback(null, response);
                }

                publishUserMediaOrUri.call(that, response.streamToken, userMediaOrUri, options, cleanUpUserMediaOnStop, callback);
            });
        }, options.isContinuation);
    }

    function publishUserMediaOrUri(streamToken, userMediaOrUri, options, cleanUpUserMediaOnStop, callback) {
        var that = this;
        var hasAlreadyAttachedMedia = false;
        var cachedPublisher = null;

        if (options.tags) {
            assert.isArray(options.tags, 'options.tags');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        var publishCallback = function publishCallback(pcast, status, publisher) {
            var retryPublisher = function retryPublisher(reason) {
                var optionsWithToken = _.assign({
                    streamToken: streamToken,
                    isContinuation: true
                }, options);

                that._logger.warn('[%s] Retrying publisher after failure with reason [%s]', this, reason);

                that._ignoredStreamEnds[publisher.getStreamId()] = true;

                if (reason === 'camera-track-failure') {
                    publisher.stop(reason, false);
                    that.publish(options, callback);
                } else {
                    publisher.stop(reason, true);
                    getStreamingTokenAndPublish.call(that, userMediaOrUri, optionsWithToken, cleanUpUserMediaOnStop, callback);
                }
            };

            if ((status === unauthorizedStatus && ((options.streamToken || options.publishToken) || !options.authFailure)) || status === 'timeout') {
                that._logger.info('[%s] Attempting to create new streamToken and re-publish after [%s] response', this, unauthorizedStatus);

                var reAuthOptions = _.assign({
                    isContinuation: true,
                    authFailure: true
                }, options);

                delete reAuthOptions.streamToken;
                delete reAuthOptions.publishToken;

                return getStreamingTokenAndPublish.call(that, userMediaOrUri, reAuthOptions, cleanUpUserMediaOnStop, callback);
            }

            if (status !== 'ok') {
                that._logger.warn('[%s] Failure to publish with status [%s]', this, status);

                if (cachedPublisher) {
                    that._ignoredStreamEnds[cachedPublisher.getStreamId()] = true;
                }

                return callback(null, {status: status});
            }

            delete options.authFailure;

            that._publishers[publisher.getStreamId()] = publisher;

            cachedPublisher = publisher;

            var isPublisher = true;
            var noopCallback = function() {};

            var publisherEndedCallback = _.bind(onPublisherOrStreamEnd, that, noopCallback, retryPublisher, isPublisher);

            if (options.monitor) {
                var monitorCallback = _.bind(onMonitorCallback, that, options.monitor.callback, retryPublisher);

                publisher.monitor(options.monitor.options || {}, monitorCallback);

                publisherEndedCallback = _.bind(onPublisherOrStreamEnd, that, options.monitor.callback, retryPublisher, isPublisher);
            }

            publisher.setPublisherEndedCallback(publisherEndedCallback);

            var expressPublisher = createExpressPublisher.call(that, publisher, options.videoElement, cleanUpUserMediaOnStop);

            if (options.videoElement && !hasAlreadyAttachedMedia) {
                rtc.attachMediaStream(options.videoElement, userMediaOrUri, function(e) {
                    if (e) {
                        that._logger.warn('[%s] [%s] Failed to attach publish media stream to video element.', this, publisher.getStreamId(), e);

                        return;
                    }
                });

                hasAlreadyAttachedMedia = true;
            }

            callback(null, {
                status: 'ok',
                publisher: expressPublisher
            });
        };

        that.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            that._pcastObservable.getValue().publish(streamToken, userMediaOrUri, publishCallback, options.tags, {connectOptions: options.connectOptions});
        }, options.isContinuation);
    }

    function subscribeToStream(streamToken, options, callback) {
        var that = this;
        var cachedSubsciber = null;

        var handleSubscribe = function(pcast, status, subscriber) {
            var retrySubscriber = function retrySubscriber(reason) {
                var retryOptions = _.assign({isContinuation: true}, options);

                that._ignoredStreamEnds[subscriber.getStreamId()] = true;

                subscriber.stop(reason);

                that._logger.warn('[%s] [%s] Stream failure occurred with reason [%s]. Attempting to recover from failure.', this, options.streamId, reason);

                subscribeToStream.call(that, streamToken, retryOptions, callback);
            };

            if (((!options.skipRetryOnUnauthorized && status === unauthorizedStatus && (options.streamToken || !options.authFailure)) || status === 'timeout') && that._adminApiProxyClient) {
                that._logger.info('[%s] [%s] Attempting to create new streamToken and re-subscribe after [%s] response', this, options.streamId, unauthorizedStatus);

                var reAuthOptions = _.assign({
                    isContinuation: true,
                    authFailure: true
                }, options);

                delete reAuthOptions.streamToken;

                return that.subscribe(reAuthOptions, callback);
            }

            if (status === 'streaming-not-ready') {
                that._logger.warn('[%s] Failure to subscribe with status [%s]. Try again in a few seconds.', this, status);

                return callback(null, {
                    status: status,
                    retry: _.bind(retrySubscriber, that, status)
                });
            }

            if (status !== 'ok') {
                that._logger.warn('[%s] Failure to subscribe with status [%s]', this, status);

                if (cachedSubsciber) {
                    that._ignoredStreamEnds[cachedSubsciber.getStreamId()] = true;
                }

                return callback(null, {status: status});
            }

            delete options.authFailure;

            var renderer;

            cachedSubsciber = subscriber;

            if (options.videoElement) {
                renderer = subscriber.createRenderer();

                renderer.start(options.videoElement);
            }

            var isPublisher = false;
            var noopCallback = _.noop;
            var subscriberEndedCallback = _.bind(onPublisherOrStreamEnd, that, noopCallback, retrySubscriber, isPublisher);

            if (options.monitor) {
                var monitorCallback = _.bind(onMonitorCallback, that, options.monitor.callback, retrySubscriber);

                subscriber.monitor(options.monitor.options || {}, monitorCallback);

                subscriberEndedCallback = _.bind(onPublisherOrStreamEnd, that, options.monitor.callback, retrySubscriber, isPublisher);
            }

            subscriber.setStreamEndedCallback(subscriberEndedCallback);

            var expressSubscriber = createExpressSubscriber.call(that, subscriber, renderer);
            var subscribeResponse = {
                status: 'ok',
                mediaStream: expressSubscriber
            };

            subscriber.setStreamErrorCallback(function(playerRenderer, errorType, error) {
                if (errorType === 'real-time' && error.message === 'connection-timeout') {
                    return retrySubscriber.call(that, error.message);
                }

                if (errorType === 'shaka' && error.severity !== shakaEnums.errorSeverity.critical.id) {
                    return; // Ignore error
                }

                var RECOVERABLE = 1;

                if (errorType === 'phenix-player' && error.severity === RECOVERABLE) {
                    that._logger.warn('[%s] [%s] Recoverable error occurred while playing stream with Express API. Attempting to subscribe again.', this, expressSubscriber.getStreamId(), error);

                    var reAuthOptions = _.assign({isContinuation: true}, options);

                    delete reAuthOptions.streamToken;

                    return that.subscribe(reAuthOptions, callback);
                }

                that._logger.warn('[%s] [%s] Error occurred while playing stream with Express API. Stopping stream.', this, expressSubscriber.getStreamId(), error);

                expressSubscriber.stop();

                return callback(error);
            });

            if (renderer) {
                subscribeResponse.renderer = renderer;
            }

            callback(null, subscribeResponse);
        };

        that.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            var subscriberOptions = _.clone(options.subscriberOptions || {});

            if (options.streamId) {
                subscriberOptions.originStreamId = options.streamId;
            }

            that._pcastObservable.getValue().subscribe(streamToken, handleSubscribe, subscriberOptions);
        }, options.isContinuation);
    }

    function createExpressPublisher(publisher, videoElement, cleanUpUserMediaOnStop) {
        var that = this;
        var publisherStop = _.bind(publisher.stop, publisher);

        publisher.stop = function(reason, isInternal) {
            that._logger.info('[%s] [%s] Stopping publisher with reason [%s]', that, publisher.getStreamId(), reason);

            publisherStop(reason);

            if (videoElement) {
                videoElement.src = '';
                videoElement.srcObject = null;
            }

            if (cleanUpUserMediaOnStop && publisher.getStream() && !isInternal) {
                var nativeMediaStream = publisher.getStream();

                if (nativeMediaStream) {
                    nativeMediaStream.getTracks().forEach(function(track) {
                        track.stop();
                    });
                }
            }
        };

        publisher.enableAudio = function() {
            return setStreamAudioTracksState.call(that, publisher, true);
        };

        publisher.disableAudio = function() {
            return setStreamAudioTracksState.call(that, publisher, false);
        };

        publisher.enableVideo = function() {
            return setStreamVideoTracksState.call(that, publisher, true);
        };

        publisher.disableVideo = function() {
            return setStreamVideoTracksState.call(that, publisher, false);
        };

        // Publisher Ended Callback handled with normal callback route for express
        publisher.setPublisherEndedCallback = function() {};

        return publisher;
    }

    function createExpressSubscriber(subscriber, renderer) {
        var that = this;
        var subscriberStop = _.bind(subscriber.stop, subscriber);

        subscriber.stop = function(reason) {
            that._logger.info('[%s] [%s] Stopping subscriber with reason [%s]', that, subscriber, reason);

            if (renderer) {
                renderer.stop(reason);
            }

            subscriberStop(reason);
        };

        subscriber.enableAudio = function() {
            return setStreamAudioTracksState(subscriber.getStream(), true);
        };

        subscriber.disableAudio = function() {
            return setStreamAudioTracksState(subscriber.getStream(), false);
        };

        subscriber.enableVideo = function() {
            return setStreamVideoTracksState(subscriber.getStream(), true);
        };

        subscriber.disableVideo = function() {
            return setStreamVideoTracksState(subscriber.getStream(), false);
        };

        // Stream Ended Callback handled with normal callback route for express
        subscriber.setStreamEndedCallback = function() {};

        return subscriber;
    }

    function setStreamAudioTracksState(publisher, newState) {
        var pcast = this.getPCast();

        if (!pcast) {
            return;
        }

        var streamId = publisher.getStreamId();
        var peerConnectionDescription = pcast.getRemoteDescriptionSdp(streamId);

        if (!peerConnectionDescription) {
            return;
        }

        var stream = publisher.getStream();
        var audioIndex = peerConnectionDescription.lastIndexOf('m=audio');

        if (audioIndex < 0) {
            return;
        }

        var endIndex = peerConnectionDescription.lastIndexOf('m=video');

        if (endIndex < audioIndex) {
            endIndex = peerConnectionDescription.length;
        }

        var trackConfiguration = peerConnectionDescription.substring(
            audioIndex,
            endIndex
        );

        if (trackConfiguration.includes('a=inactive')) {
            return;
        }

        if (!stream) {
            return;
        }

        setTracksEnabled(stream.getAudioTracks(), newState);

        return newState;
    }

    function setStreamVideoTracksState(publisher, newState) {
        var pcast = this.getPCast();

        if (!pcast) {
            return;
        }

        var streamId = publisher.getStreamId();
        var peerConnectionDescription = pcast.getRemoteDescriptionSdp(streamId);

        if (!peerConnectionDescription) {
            return;
        }

        var stream = publisher.getStream();
        var videoIndex = peerConnectionDescription.lastIndexOf('m=video');

        if (videoIndex < 0) {
            return;
        }

        var endIndex = peerConnectionDescription.lastIndexOf('m=audio');

        if (endIndex < videoIndex) {
            endIndex = peerConnectionDescription.length;
        }

        var trackConfiguration = peerConnectionDescription.substring(
            videoIndex,
            endIndex
        );

        if (trackConfiguration.includes('a=inactive')) {
            return;
        }

        if (!stream) {
            return;
        }

        setTracksEnabled(stream.getVideoTracks(), newState);

        return newState;
    }

    function setTracksEnabled(tracks, enabled) {
        assert.isArray(tracks, 'tracks');

        _.forEach(tracks, function(track) {
            track.updateState(enabled);
        });
    }

    function onMonitorCallback(callback, retry, stream, reason, monitorEvent) { // eslint-disable-line no-unused-vars
        switch (reason) {
        case 'camera-track-failure':
        case 'client-side-failure':
            callback(null, _.assign({
                status: reason,
                retry: _.bind(retry, null, reason)
            }, monitorEvent));

            // Handle failure event, redo stream
            break;
        default:
            // No failure has occurred, handle monitor event
            break;
        }
    }

    function onPublisherOrStreamEnd(monitorCallback, retry, isPublisher, publisherOrStream, reason, description) {
        var response = {
            status: 'stream-ended',
            reason: reason,
            description: description
        };

        if (this._ignoredStreamEnds[publisherOrStream.getStreamId()]) {
            this._logger.info('[%s] Ignoring stream end due to recovery in progress [%s]', this, publisherOrStream.getStreamId());

            return;
        }

        switch (reason) {
        case 'egress-setup-failed': // Bad input params
        case 'ended': // Normal operation
        case 'censored': // Forced to stop
            var endedResponse = {
                status: reason,
                reason: reason,
                description: description
            };

            if (isPublisher) {
                endedResponse.publisher = publisherOrStream;
            } else {
                endedResponse.mediaStream = publisherOrStream;
            }

            return monitorCallback(null, endedResponse);
        case 'custom':
            // Client ended publisher, do nothing
            return monitorCallback(null, response);
        case 'egress-failed':
        case 'capacity':
            // Don't inform the client, attempt to re-publish automatically after backoff
            setTimeout(function() {
                if (this._disposed) {
                    return;
                }

                return retry(reason);
            }, capacityBackoffTimeout);

            return;
        case 'failed':
        case 'maintenance':
        case 'overload':
            // Don't inform the client, attempt to re-publish automatically
            return retry(reason);
        case 'app-background':
        default:
            // Give client option to re-publish
            response.retry = retry;

            return monitorCallback(null, response);
        }
    }

    return PCastExpress;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(7),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, http, disposable) {
    'use strict';

    var networkUnavailableCode = 0;
    var requestMaxTimeout = 20000;
    var defaultRequestOptions = {
        timeout: requestMaxTimeout,
        retryOptions: {
            backoff: 1.5,
            delay: 1000,
            maxAttempts: 3,
            additionalRetryErrorCodes: [networkUnavailableCode]
        }
    };
    var authenticationDataLocations = {
        body: {
            id: 1,
            name: 'body'
        },
        header: {
            id: 2,
            name: 'header'
        }
    };
    var defaultEndpointPaths = {
        createStreamTokenPath: '/stream',
        createAuthTokenPath: '/auth'
    };
    var requestTypes = {
        auth: {
            id: 1,
            name: 'auth'
        },
        stream: {
            id: 2,
            name: 'stream'
        }
    };

    function AdminApiProxyClient() {
        this._requestHandler = null;
        this._backendUri = '';
        this._endpointPaths = defaultEndpointPaths;
        this._authenticationData = {};
        this._authenticationDataLocationInPayload = authenticationDataLocations.body.name;
        this._disposables = new disposable.DisposableList();
    }

    AdminApiProxyClient.prototype.dispose = function() {
        return this._disposables.dispose();
    };

    AdminApiProxyClient.prototype.toString = function() {
        return 'AdminApiProxyClient[' +
            'customRequestHandler=' + (!!this._requestHandler).toString() +
            ',backendUri=' + this._backendUri +
            ',authenticationDataLocationInPayload=' + this._authenticationDataLocationInPayload +
            ',customEndpointPaths=' + (this._endpointPaths === defaultEndpointPaths).toString() +
            ',customAuthenticationData=' + (_.keys(this._authenticationData).length > 0).toString() + ']';
    };

    AdminApiProxyClient.prototype.getBackendUri = function() {
        return this._backendUri;
    };

    AdminApiProxyClient.prototype.setBackendUri = function(backendUri) {
        assert.isString(backendUri, 'backendUri');

        this._backendUri = backendUri;
    };

    AdminApiProxyClient.prototype.getEndpointPaths = function() {
        return _.assign({}, this._endpointPaths);
    };

    AdminApiProxyClient.prototype.setEndpointPaths = function(endpointPaths) {
        assert.isObject(endpointPaths, 'endpointPaths');

        if (endpointPaths.createStreamTokenPath) {
            assert.isStringNotEmpty(endpointPaths.createStreamTokenPath, 'endpointPaths.createStreamTokenPath');
        }

        if (endpointPaths.createAuthTokenPath) {
            assert.isStringNotEmpty(endpointPaths.createAuthTokenPath, 'endpointPaths.createAuthTokenPath');
        }

        this._endpointPaths = _.assign({}, defaultEndpointPaths, endpointPaths);
    };

    AdminApiProxyClient.prototype.getAuthenticationData = function() {
        return _.assign({}, this._authenticationData);
    };

    AdminApiProxyClient.prototype.setAuthenticationData = function(authenticationData) {
        assert.isObject(authenticationData, 'authenticationData');

        this._authenticationData = authenticationData;
    };

    AdminApiProxyClient.prototype.getAuthenticationDataLocationInPayload = function() {
        return this._authenticationDataLocationInPayload;
    };

    AdminApiProxyClient.prototype.setAuthenticationDataLocationInPayload = function(authenticationDataLocationInPayload) {
        assert.isValidType(authenticationDataLocationInPayload, authenticationDataLocations, 'authenticationDataLocationInPayload');

        this._authenticationDataLocationInPayload = authenticationDataLocationInPayload;
    };

    AdminApiProxyClient.prototype.getRequestHandler = function() {
        return this._requestHandler;
    };

    AdminApiProxyClient.prototype.setRequestHandler = function(callback) {
        assert.isFunction(callback, 'callback');

        if (this._backendUri) {
            throw new Error('Conflicting parameter [backendUri]');
        }

        if (_.keys(this._authenticationData).length > 0) {
            throw new Error('Conflicting parameter [authenticationData]');
        }

        if (this._authenticationDataLocationInPayload !== authenticationDataLocations.body.name) {
            throw new Error('Conflicting parameter [authenticationDataLocationInPayload]');
        }

        if (this._endpointPaths !== defaultEndpointPaths) {
            throw new Error('Conflicting parameter [endpointPaths]');
        }

        this._requestHandler = callback;
    };

    AdminApiProxyClient.prototype.createAuthenticationToken = function createAuthenticationToken(callback) {
        if (this._requestHandler) {
            return this._requestHandler(requestTypes.auth.name, {}, _.bind(handleOverrideRequestResponse, this, requestTypes.auth.name, callback));
        }

        if (!this._backendUri) {
            callback(null, {status: 'unauthorized'});

            return;
        }

        var requestWithoutCallback = bindAuthDataAndPrepareRequest.call(this, http.postWithRetry, http, this._backendUri + this._endpointPaths.createAuthTokenPath, {}, defaultRequestOptions);

        return requestWithTimeout.call(this, requestWithoutCallback, callback);
    };

    AdminApiProxyClient.prototype.createStreamTokenForPublishing = function createStreamTokenForPublishing(sessionId, capabilities, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isObject(capabilities, 'capabilities');

        var data = {
            sessionId: sessionId,
            capabilities: capabilities
        };

        if (this._requestHandler) {
            return this._requestHandler(requestTypes.stream.name, data, _.bind(handleOverrideRequestResponse, this, requestTypes.stream.name, callback));
        }

        if (!this._backendUri) {
            callback(null, {status: 'unauthorized'});

            return;
        }

        var requestWithoutCallback = bindAuthDataAndPrepareRequest.call(this, http.postWithRetry, http, this._backendUri + this._endpointPaths.createStreamTokenPath, data, defaultRequestOptions);

        return requestWithTimeout.call(this, requestWithoutCallback, callback);
    };

    AdminApiProxyClient.prototype.createStreamTokenForPublishingToExternal = function createStreamTokenForPublishingToExternal(sessionId, capabilities, streamId, callback) {
        this.createStreamTokenForSubscribing(sessionId, capabilities, streamId, null, callback);
    };

    AdminApiProxyClient.prototype.createStreamTokenForSubscribing = function createStreamTokenForSubscribing(sessionId, capabilities, streamId, alternateStreamIds, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isObject(capabilities, 'capabilities');

        if (!_.isNullOrUndefined(alternateStreamIds)) {
            assert.isArray(alternateStreamIds, 'additionalStreamIds');

            _.forEach(alternateStreamIds, function(alternateOriginStreamId) {
                assert.isStringNotEmpty(alternateOriginStreamId, 'alternateOriginStreamId');
            });
        }

        var data = {
            sessionId: sessionId,
            capabilities: capabilities,
            originStreamId: streamId
        };

        if (alternateStreamIds && alternateStreamIds.length > 0) {
            data.alternateOriginStreamIds = alternateStreamIds;
        }

        if (this._requestHandler) {
            return this._requestHandler(requestTypes.stream.name, data, _.bind(handleOverrideRequestResponse, this, requestTypes.stream.name, callback));
        }

        if (!this._backendUri) {
            callback(null, {status: 'unauthorized'});

            return;
        }

        var requestWithoutCallback = bindAuthDataAndPrepareRequest.call(this, http.postWithRetry, http, this._backendUri + this._endpointPaths.createStreamTokenPath, data, defaultRequestOptions);

        return requestWithTimeout.call(this, requestWithoutCallback, callback);
    };

    function requestWithTimeout(requestWithoutCallback, callback) {
        var requestTimeoutId = null;
        var requestDisposable = requestWithoutCallback(_.bind(handleResponse, this, function(error, response) {
            clearTimeout(requestTimeoutId);

            switch (_.get(error, ['code'])) {
            case 401:
                return callback(null, {status: 'unauthorized'});
            case 404:
                return callback(null, {status: 'origin-not-found'});
            case 410:
                return callback(null, {status: 'origin-ended'});
            default:
                return callback(error, response);
            }
        }));

        requestTimeoutId = setTimeout(function() {
            requestDisposable.dispose();
            callback(new Error('timeout'));
        }, requestMaxTimeout);

        this._disposables.add(requestDisposable);
        this._disposables.add(new disposable.Disposable(function() {
            clearTimeout(requestTimeoutId);
        }));

        return requestDisposable;
    }

    function bindAuthDataAndPrepareRequest(method, scope, uri, data, options) {
        switch (this._authenticationDataLocationInPayload) {
        case authenticationDataLocations.body.name:
            data = appendAuthDataTo.call(this, data);

            break;
        case authenticationDataLocations.header.name:
            options = appendAuthHeaders.call(this, options);

            break;
        default:
            throw new Error('Unsupported Authentication Mode ' + this._authenticationDataLocationInPayload);
        }

        return _.bind(method, scope, uri, JSON.stringify(data), options);
    }

    function appendAuthDataTo(data) {
        return _.assign({}, data, this._authenticationData);
    }

    function appendAuthHeaders(options) {
        if (options.headers) {
            options.headers = _.assign({}, this._authenticationData, options.headers);

            return options;
        }

        return _.assign({}, {headers: this._authenticationData}, options);
    }

    function handleResponse(callback, error, response) {
        if (error) {
            return callback(error, {});
        }

        var res = JSON.parse(response.data);

        if (res.status !== 'ok') {
            return callback(null, {status: res.status || 'status-code-missing'});
        }

        return callback(null, res);
    }

    function handleOverrideRequestResponse(type, callback, error, token) {
        if (!token || error) {
            return callback(error, {status: 'failed'});
        }

        var response = {status: 'ok'};

        switch(type) {
        case requestTypes.auth.name:
            response.authenticationToken = token;

            break;
        case requestTypes.stream.name:
            response.streamToken = token;

            break;
        default:
            throw new Error('Unsupported request type ' + type);
        }

        return callback(error, response);
    }

    return AdminApiProxyClient;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(36),
    __webpack_require__(30),
    __webpack_require__(39),
    __webpack_require__(19),
    __webpack_require__(14),
    __webpack_require__(13),
    __webpack_require__(20),
    __webpack_require__(34),
    __webpack_require__(12)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, PCastExpress, RoomService, MemberSelector, Stream, roomEnums, memberEnums, memberStreamEnums, trackEnums, FeatureDetector) {
    'use strict';

    var defaultStreamWildcardTokenRefreshInterval = 300000;
    var streamingTypeCapabilities = ['streaming', 'rtmp'];

    function RoomExpress(options) {
        assert.isObject(options, 'options');

        if (options.pcastExpress) {
            assert.isObject(options.pcastExpress, 'options.pcastExpress');
        }

        this._pcastExpress = options.pcastExpress || new PCastExpress(options);
        this._shouldDisposeOfPCastExpress = !options.pcastExpress;
        this._roomServices = {};
        this._externalPublishers = [];
        this._roomServicePublishers = {};
        this._activeRoomServices = [];
        this._publisherDisposables = {};
        this._logger = this._pcastExpress.getPCast().getLogger();
        this._disposables = new disposable.DisposableList();
        this._disposed = false;
        this._featureDetector = new FeatureDetector(options.features);
        this._isHandlingTrackChange = false;
        this._handleStateChangeTimeOut = null;

        var that = this;

        this._pcastExpress.getPCastObservable().subscribe(function(pcast) {
            if (!pcast) {
                return;
            }

            that._logger.info('Resetting Room Express after change in pcast.');

            that._pcastExpress.waitForOnline(function() {
                var currentPCast = that._pcastExpress.getPCastObservable().getValue();

                if (currentPCast !== pcast) {
                    return;
                }

                _.forOwn(that._roomServices, function(roomService) {
                    roomService.setPCast(pcast);
                });
            });
        });
    }

    RoomExpress.prototype.dispose = function dispose() {
        this._disposed = true;

        disposeOfRoomServices.call(this);

        if (this._shouldDisposeOfPCastExpress) {
            this._pcastExpress.dispose();
        }

        this._disposables.dispose();

        this._logger.info('Disposed Room Express Instance');
    };

    RoomExpress.prototype.getPCastExpress = function getPCastExpress() {
        return this._pcastExpress;
    };

    // Responsible for creating room. Returns immutable room
    RoomExpress.prototype.createRoom = function createRoom(options, callback) {
        assert.isFunction(callback, 'callback');
        assert.isObject(options.room, 'options.room');
        assert.isStringNotEmpty(options.room.name, 'options.room.name');
        assert.isStringNotEmpty(options.room.type, 'options.room.type');

        if (options.room.description) {
            assert.isStringNotEmpty(options.room.description, 'options.room.description');
        }

        var roomDescription = options.room.description || getDefaultRoomDescription(options.room.type);

        createRoomService.call(this, null, null, function(error, roomServiceResponse) {
            if (error) {
                return callback(error);
            }

            if (roomServiceResponse.status !== 'ok') {
                return callback(null, roomServiceResponse);
            }

            var roomService = roomServiceResponse.roomService;
            var roomToCreate = _.assign({}, options.room);

            if (!roomToCreate.description) {
                roomToCreate.description = roomDescription;
            }

            roomService.createRoom(roomToCreate, function(error, roomResponse) {
                if (error) {
                    return callback(error);
                }

                // Don't return room service. Not in room. Room returned is immutable
                roomService.stop('create');

                return callback(null, roomResponse);
            });
        });
    };

    RoomExpress.prototype.joinRoom = function joinRoom(options, joinRoomCallback, membersChangedCallback) {
        assert.isObject(options, 'options');
        assert.isFunction(joinRoomCallback, 'joinRoomCallback');
        assert.isStringNotEmpty(options.role, 'options.role');

        if (membersChangedCallback) {
            assert.isFunction(membersChangedCallback, 'membersChangedCallback');
        }

        if (options.screenName) {
            assert.isStringNotEmpty(options.screenName, 'options.screenName');
        }

        if (options.roomId) {
            assert.isStringNotEmpty(options.roomId, 'options.roomId');
        }

        if (options.alias) {
            assert.isStringNotEmpty(options.alias, 'options.alias');
        }

        if (options.streams) {
            assert.isArray(options.streams, 'options.streams');
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');

            if (options.roomId) {
                this._logger.warn('Trying to join room with both streamToken and roomId. Please only use streamToken.');
            }

            if (options.alias) {
                this._logger.warn('Trying to join room with both streamToken and alias. Please only use streamToken.');
            }

            var roomId = this._pcastExpress.parseRoomOrChannelIdFromToken(options.streamToken);
            var alias = this._pcastExpress.parseRoomOrChannelAliasFromToken(options.streamToken);

            if (roomId) {
                options.roomId = roomId;
                this._logger.info('Room ID is set to [%s] from streamToken [%s]', roomId, options.streamToken);
            }

            if (alias) {
                options.alias = alias;
                this._logger.info('Alias is set to [%s] from streamToken [%s]', alias, options.streamToken);
            }
        }

        var that = this;
        var joinRoomWithPCast = function(pcast) {
            if (!pcast) {
                return;
            }

            joinRoomWithOptions.call(that, options, function(error, response) {
                var joinRoomResponse = response;

                if (joinRoomResponse && joinRoomResponse.roomService) {
                    var leaveRoom = joinRoomResponse.roomService.leaveRoom;

                    joinRoomResponse.roomService.leaveRoom = function(callback, isForceLeaveRoom) {
                        if (subscription && pcast.getObservableStatus() !== 'offline') {
                            subscription.dispose();
                        }

                        leaveRoom(callback, isForceLeaveRoom);
                    };
                }

                joinRoomCallback(error, response);
            }, membersChangedCallback);
        };

        if (this._pcastExpress.getPCastObservable()) {
            return joinRoomWithPCast(this._pcastExpress.getPCastObservable());
        }

        var subscription = this._pcastExpress.getPCastObservable().subscribe(joinRoomWithPCast);
    };

    RoomExpress.prototype.publishToRoom = function publishToRoom(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isObject(options.room, 'options.room');

        var adminApi = this._pcastExpress.getAdminAPI();

        if (options.streamUri) {
            assert.isStringNotEmpty(options.streamUri, 'options.streamUri');
        } else if (options.mediaConstraints) {
            assert.isObject(options.mediaConstraints, 'options.mediaConstraints');
        } else {
            assert.isObject(options.userMediaStream, 'options.userMediaStream');
        }

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.screenName) {
            assert.isStringNotEmpty(options.screenName, 'options.screenName');
        }

        if (options.tags) {
            assert.isArray(options.tags, 'options.tags');
        }

        if (options.streamInfo) {
            assert.isObject(options.streamInfo, 'options.streamInfo');
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
            this._logger.warn('`options.streamToken` is deprecated please use `options.publishToken`.');
        }

        if (options.publishToken && options.capabilities) {
            throw new Error('Do not pass `options.capabilities` with `options.publishToken`. `options.publishToken` should include capabilities in the token.');
        }

        if (options.publishToken && options.streamToken) {
            throw new Error('Do not pass `options.streamToken` with `options.publishToken`. Please use `options.publishToken`.');
        }

        if (options.streamToken && options.capabilities) {
            throw new Error('Do not pass `options.capabilities` with `options.streamToken`. `options.streamToken` should include capabilities in the token.');
        }

        if (!options.streamToken && !options.publishToken && !adminApi) {
            throw new Error('Pass `options.publishToken`, or set adminApiProxyClient on initiating room express');
        }

        if (options.viewerStreamSelectionStrategy) {
            assert.isStringNotEmpty(options.viewerStreamSelectionStrategy, 'options.viewerStreamSelectionStrategy');
        }

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        if (_.isUndefined(options.enableWildcardCapability)) {
            options.enableWildcardCapability = !(options.publishToken || options.streamToken);
        }

        assert.isValidType(options.streamType, memberStreamEnums.types, 'options.streamType');
        assert.isValidType(options.memberRole, memberEnums.roles, 'options.memberRole');
        assert.isBoolean(options.enableWildcardCapability, 'options.enableWildcardCapability');

        var that = this;
        var screenName = options.screenName || _.uniqueId();
        var roomId = options.room.roomId;
        var alias = options.room.alias;

        if (options.publishToken || options.streamToken) {
            roomId = this._pcastExpress.parseRoomOrChannelIdFromToken(options.publishToken || options.streamToken);
            alias = this._pcastExpress.parseRoomOrChannelAliasFromToken(options.publishToken || options.streamToken);

            this._logger.info('[%s] [%s] RoomId and Alias read from token [%s]', roomId, alias, options.publishToken || options.streamToken);
        }

        var activeRoomService = findActiveRoom.call(that, roomId, alias);

        var publishToActiveRoom = function publishToActiveRoom(room, joinRoomResponse) {
            var publishOptions = _.assign({
                monitor: {
                    callback: _.bind(monitorSubsciberOrPublisher, that, callback),
                    options: {conditionCountForNotificationThreshold: 8}
                },
                streamInfo: {}
            }, options);

            if (room.getObservableType().getValue() === roomEnums.types.channel.name) {
                publishOptions.tags = ['channelId:' + room.getRoomId(), 'channelAlias:' + room.getObservableAlias().getValue()].concat(publishOptions.tags || []);
            } else {
                publishOptions.tags = ['roomId:' + room.getRoomId(), 'roomAlias:' + room.getObservableAlias().getValue()].concat(publishOptions.tags || []);
            }

            if (options.streamUri) {
                var remoteOptions = _.assign({connectOptions: []}, publishOptions);
                var hasRoomConnectOptions = _.find(remoteOptions.connectOptions, function(option) {
                    return _.startsWith(option, 'room-id');
                });

                if (!hasRoomConnectOptions) {
                    remoteOptions.connectOptions = remoteOptions.connectOptions.concat([
                        'room-id=' + room.getRoomId(),
                        'member-role=' + options.memberRole,
                        'member-stream-type=' + options.streamType,
                        'screen-name=' + screenName
                    ]);
                }

                if (options.enableWildcardCapability) {
                    remoteOptions.connectOptions.concat([
                        'member-stream-token-type=Wildcard',
                        'member-stream-token-refresh-interval=' + defaultStreamWildcardTokenRefreshInterval
                    ]);
                }

                var callbackWithNoRoomService = function(error, response) {
                    callback(error, response ? _.assign({roomService: null}, response) : response);
                };

                return that._pcastExpress.publishRemote(remoteOptions, callbackWithNoRoomService);
            }

            var callbackWithRoomService = function(error, response) {
                callback(error, response ? _.assign({roomService: joinRoomResponse.roomService}, response) : response);
            };

            publishAndUpdateSelf.call(that, publishOptions, room, callbackWithRoomService);
        };

        if (activeRoomService) {
            var activeRoom = activeRoomService.getObservableActiveRoom().getValue();

            publishToActiveRoom(activeRoom, {roomService: activeRoomService});

            return;
        }

        var joinRoomAsPresenterOptions = _.assign({}, options, {
            role: memberEnums.roles.audience.name,
            roomId: roomId,
            alias: alias
        });

        joinRoomWithOptions.call(this, joinRoomAsPresenterOptions, function joinRoomCallback(error, joinRoomWithOptionsResponse) {
            if (error) {
                return callback(error);
            }

            if (joinRoomWithOptionsResponse.status !== 'ok') {
                return callback(null, joinRoomWithOptionsResponse);
            }

            var activeRoom = joinRoomWithOptionsResponse.roomService.getObservableActiveRoom().getValue();
            publishToActiveRoom(activeRoom, joinRoomWithOptionsResponse);
        }, function membersChangedCallback() {
            return null;
        });
    };

    RoomExpress.prototype.publishScreenToRoom = function publishScreenToRoom(options, callback) {
        var publishScreenOptions = _.assign({mediaConstraints: {screen: true}}, options);

        this.publishToRoom(publishScreenOptions, callback);
    };

    RoomExpress.prototype.subscribeToMemberStream = function(memberStream, options, callback, defaultFeatureIndex) {
        var capabilitiesFromStreamToken;
        var that = this;

        assert.isObject(memberStream, 'memberStream');
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        defaultFeatureIndex = _.isNumber(defaultFeatureIndex) ? defaultFeatureIndex : 0;

        if (options.capabilities) {
            throw new Error('subscribeToMemberStream options.capabilities is deprecated. Please use the constructor features option');
        }

        if (options.streamToken) {
            capabilitiesFromStreamToken = getCapabilitiesFromTokenIfAble.call(that, options.streamToken);

            if (!capabilitiesFromStreamToken) {
                that._logger.warn('Failed to parse the `streamToken` [%s]', options.streamToken);

                return callback(new Error('Bad `streamToken`'), {status: 'bad-token'});
            }
        }

        var streamUri = memberStream.getUri();
        var streamId = memberStream.getPCastStreamId();
        var streamInfo = memberStream.getInfo();
        var isScreen = _.get(streamInfo, ['isScreen'], false);
        var streamToken = null;
        var capabilities = streamInfo.capabilities || buildCapabilitiesFromPublisherWildcardTokens(streamUri) || [];
        var publisherCapabilities = capabilitiesFromStreamToken || capabilities;
        var preferredFeature = this._featureDetector.getPreferredFeatureFromPublisherCapabilities(publisherCapabilities);
        var preferredFeatureCapability = FeatureDetector.mapFeatureToPCastCapability(preferredFeature);
        var subscriberCapabilities = preferredFeatureCapability ? [preferredFeatureCapability] : [];
        var featureCapabilities = this._featureDetector.getFeaturePCastCapabilities();
        var isUsingDeprecatedSdk = false;

        if (!streamId) {
            this._logger.error('Invalid Member Stream. Unable to parse streamId from uri');

            throw new Error('Invalid Member Stream. Unable to parse streamId from uri');
        }

        // TODO(dy) Remove backward compatibility when all publisher clients adapt to providing capabilities.
        if (!_.hasIndexOrKey(streamInfo, 'capabilities')) {
            if (!preferredFeature) {
                var capability = _.get(featureCapabilities, [defaultFeatureIndex]);

                if (!capability && defaultFeatureIndex >= featureCapabilities.length) {
                    return callback(null, {status: 'no-supported-features'});
                }

                subscriberCapabilities = capability ? [capability] : [];
                preferredFeature = capability ? _.get(FeatureDetector.mapPCastCapabilityToFeatures(capability), [0]) : null;
            }

            if (!streamInfo.streamTokenForLiveStream && preferredFeatureCapability === 'streaming') {
                this._logger.warn('Streaming is not available for stream [%].', streamId);

                return callback(null, {status: 'streaming-not-available'});
            }

            streamToken = parseStreamTokenFromStreamUri(streamUri, subscriberCapabilities);
            isUsingDeprecatedSdk = true;
        } else {
            if (!preferredFeature) {
                this._logger.warn('Unable to find supported feature. Publisher capabilities [%s]. Requested feature capabilities [%s]', streamInfo.capabilities, featureCapabilities);

                return callback(null, {status: 'unsupported-features'});
            }

            streamToken = getStreamTokenForFeature(streamUri, preferredFeature);
        }

        this._logger.info('Subscribing to member stream with feature [%s] and pre-generated token [%s]', preferredFeature, !!streamToken);

        var subscribeOptions = _.assign({}, {
            streamId: streamId,
            streamToken: streamToken,
            capabilities: subscriberCapabilities
        }, options);
        var disposables = new disposable.DisposableList();

        subscribeToMemberStream.call(this, subscribeOptions, isScreen, function(error, response) {
            disposables.dispose();

            if (response && response.status === 'ok' && response.mediaStream && response.mediaStream.getStream()) {
                disposables.add(memberStream.getObservableAudioState().subscribe(function(state) {
                    var monitor = response.mediaStream.getMonitor();
                    var tracks = response.mediaStream.getStream().getAudioTracks();

                    if (monitor && tracks.length === 1) {
                        monitor.setMonitorTrackState(tracks[0], state === trackEnums.states.trackEnabled.name);
                    }
                }, {initial: 'notify'}));
                disposables.add(memberStream.getObservableVideoState().subscribe(function(state) {
                    var monitor = response.mediaStream.getMonitor();
                    var tracks = response.mediaStream.getStream().getVideoTracks();

                    if (monitor && tracks.length === 1) {
                        monitor.setMonitorTrackState(tracks[0], state === trackEnums.states.trackEnabled.name);
                    }
                }, {initial: 'notify'}));
            }

            if (error && parseInt(error.category) === 6) {
                return callback(error, {status: 'device-insecure'});
            }

            // TODO(dy) Remove backward compatibility when all publisher clients adapt to providing capabilities.
            if (response && (response.status === 'failed' || response.status === 'streaming-not-available') && isUsingDeprecatedSdk && defaultFeatureIndex < featureCapabilities.length) {
                that._logger.info('Attempting to subscribe to member stream with next available feature after failure');

                return that.subscribeToMemberStream(memberStream, options, callback, defaultFeatureIndex + 1);
            }

            var responseWithOriginStreamId = _.assign({originStreamId: streamId}, response);

            callback(error, responseWithOriginStreamId);
        });
    };

    function getCapabilitiesFromTokenIfAble(streamToken) {
        var that = this;

        try {
            var capabilitiesFromStreamToken = that._pcastExpress.parseCapabilitiesFromToken(streamToken);

            return capabilitiesFromStreamToken;
        } catch (e) {
            return;
        }
    }

    function disposeOfRoomServices() {
        _.forOwn(this._roomServicePublishers, function(publishers) {
            _.forEach(publishers, function(publisher) {
                publisher.stop('dispose');
            });
        });
        _.forOwn(this._roomServices, function(roomService) {
            roomService.stop('dispose');
        });

        this._roomServicePublishers = {};
        this._externalPublishers = [];
        this._roomServices = {};
        this._activeRoomServices = [];
    }

    function createRoomService(roomId, alias, callback) {
        var that = this;
        var uniqueId = _.uniqueId();

        this._pcastExpress.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            var activeRoomService = findActiveRoom.call(that, roomId, alias);

            if (activeRoomService) {
                that._logger.info('Reusing room service for room [%s]/[%s]', roomId, alias);

                return callback(null, {
                    status: 'ok',
                    roomService: activeRoomService
                });
            }

            that._roomServices[uniqueId] = new RoomService(that._pcastExpress.getPCast());

            var expressRoomService = createExpressRoomService.call(that, that._roomServices[uniqueId], uniqueId);

            that._logger.info('Creating room service for room [%s]/[%s]', roomId, alias);

            callback(null, {
                status: 'ok',
                roomService: expressRoomService
            });
        });
    }

    function findActiveRoom(roomId, alias) {
        return _.find(this._activeRoomServices, function(roomService) {
            var activeRoom = roomService.getObservableActiveRoom().getValue();

            return activeRoom && (activeRoom.getRoomId() === roomId || activeRoom.getObservableAlias().getValue() === alias);
        });
    }

    function createExpressRoomService(roomService, uniqueId) {
        var that = this;
        var roomServiceStop = roomService.stop;
        var roomServiceLeaveRoom = roomService.leaveRoom;

        roomService.stop = function() {
            roomServiceStop.apply(roomService, arguments);

            delete that._roomServices[uniqueId];
        };

        roomService.leaveRoom = function leaveRoom(callback, isForceLeaveRoom) {
            var room = roomService.getObservableActiveRoom().getValue();

            roomServiceLeaveRoom.call(roomService, function(error, response) {
                if (error) {
                    roomService.stop('leave-room-failure');

                    return callback(error);
                }

                if (response.status !== 'ok' && response.status !== 'not-in-room') {
                    return callback(null, response);
                }

                that._logger.info('Successfully disposed Express Room Service [%s]', room ? room.getRoomId() : 'Uninitialized');

                roomService.stop('leave-room');

                return callback(null, response);
            }, isForceLeaveRoom);
        };

        return roomService;
    }

    function joinRoomWithOptions(options, joinRoomCallback, membersChangedCallback) {
        var that = this;
        var role = options.role;
        var screenName = options.screenName || _.uniqueId();

        createRoomService.call(that, options.roomId, options.alias, function(error, roomServiceResponse) {
            if (error) {
                return joinRoomCallback(error);
            }

            if (roomServiceResponse.status !== 'ok') {
                return joinRoomCallback(null, roomServiceResponse);
            }

            var roomService = roomServiceResponse.roomService;
            var activeRoomObservable = roomService.getObservableActiveRoom();
            var activeRoom = activeRoomObservable.getValue();
            var membersSubscription = null;
            var setupMembersSubscription = function setupMembersSubscription() {
                var room = activeRoomObservable.getValue();

                if (!room) {
                    that._logger.warn('Unable to setup members subscription. Not in room.');

                    return;
                }

                that._logger.info('Setup member subscription for room [%s]', room.getRoomId());

                membersSubscription = room.getObservableMembers().subscribe(membersChangedCallback, {initial: 'notify'});

                that._disposables.add(activeRoomObservable.subscribe(function(newRoom) {
                    if (membersSubscription) {
                        membersChangedCallback([]);
                        membersSubscription.dispose();
                        membersSubscription = null;
                    }

                    if (!newRoom) {
                        return;
                    }

                    membersSubscription = newRoom.getObservableMembers().subscribe(membersChangedCallback, {initial: 'notify'});
                }));
            };

            if (!activeRoom) {
                roomService.start(role, screenName);
            }

            if (options.streams && options.streams.length > 0) {
                var stream = options.streams[0]; // TODO(dy) support multiple streams

                if (options.streamsWildcardTokenCapabilities && !_.includes(options.streams[0].uri, Stream.getPCastPrefix())) {
                    options.streams[0].uri = Stream.getPCastPrefix() + options.streams[0].uri;
                    that._externalPublishers.push(options.streams[0].uri);
                }

                if (options.streamsWildcardTokenCapabilities && activeRoom && !_.includes(stream.uri, 'streamToken')) {
                    return createViewerStreamTokensAndUpdateSelf.call(that, options, stream, activeRoom, function(error, response) {
                        joinRoomCallback(error, _.assign({roomService: roomService}, response));

                        if (membersChangedCallback) {
                            return setupMembersSubscription();
                        }
                    });
                }

                var roleToJoin = options.streamsWildcardTokenCapabilities && !activeRoom && !_.includes(stream.uri, 'streamToken') ? memberEnums.roles.audience.name : options.role;

                updateSelfStreamsAndRole.call(that, options.streams, roleToJoin, roomService, function(error) {
                    if (error) {
                        return joinRoomCallback(error);
                    }
                });
            }

            if (activeRoom) {
                joinRoomCallback(null, {
                    status: 'ok',
                    roomService: roomService
                });

                if (membersChangedCallback) {
                    setupMembersSubscription();
                }

                return;
            }

            roomService.enterRoom(options.roomId, options.alias, function(error, roomResponse) {
                if (error) {
                    roomService.stop('enter-room-failure');

                    return joinRoomCallback(error);
                }

                if (roomResponse.status === 'not-found') {
                    roomService.stop('enter-room-failure');

                    return joinRoomCallback(null, {status: 'room-not-found'});
                }

                if (roomResponse.status !== 'ok' && roomResponse.status !== 'already-in-room') {
                    roomService.stop('enter-room-failure');

                    return joinRoomCallback(null, roomResponse);
                }

                var room = roomResponse.room;
                var stream = _.get(options, ['streams', 0]); // TODO(dy) support multiple streams

                that._activeRoomServices.push(roomService);

                if (options.streamsWildcardTokenCapabilities && stream && !_.includes(stream.uri, 'streamToken')) {
                    return createViewerStreamTokensAndUpdateSelf.call(that, options, stream, room, function(error, response) {
                        joinRoomCallback(error, _.assign({roomService: roomService}, response));

                        if (membersChangedCallback) {
                            return setupMembersSubscription();
                        }
                    });
                }

                joinRoomCallback(null, {
                    status: 'ok',
                    roomService: roomService
                });

                if (membersChangedCallback) {
                    return setupMembersSubscription();
                }
            });
        });
    }

    function subscribeToMemberStream(subscribeOptions, isScreen, callback) {
        var that = this;

        var count = 0;
        var handleSubscribe = function(error, response) {
            if (error) {
                return callback(error);
            }

            if (response.status !== 'ok' && response.status !== 'streaming-not-ready') {
                return callback(null, response);
            }

            count++;

            if (response.status === 'streaming-not-ready' && count < 3) {
                var retryTimeout = count * count * 1000;

                that._logger.info('Waiting for [%s] ms before retrying after [streaming-not-ready] status.', retryTimeout);

                var timeoutId = setTimeout(response.retry, retryTimeout);

                that._disposables.add(new disposable.Disposable(function() {
                    clearTimeout(timeoutId);
                }));

                return;
            } else if (response.status === 'streaming-not-ready' && count >= 3) {
                return callback(null, {status: response.status});
            }

            var subscribeResponse = _.assign({}, response, {status: 'ok'});

            if (count > 1) {
                subscribeResponse.reason = 'stream-failure-recovered';

                return callback(null, subscribeResponse);
            }

            callback(null, subscribeResponse);
        };

        if (isScreen) {
            return that._pcastExpress.subscribeToScreen(subscribeOptions, handleSubscribe);
        }

        return that._pcastExpress.subscribe(subscribeOptions, handleSubscribe);
    }

    function publishAndUpdateSelf(options, room, callback) {
        var that = this;
        var publisher;
        var refreshTokenIntervalId;
        var callbackWithPublisher = function(error, response) {
            callback(error, response ? _.assign({publisher: publisher}, response) : response);
        };

        var handlePublish = function(error, response) {
            if (refreshTokenIntervalId && publisher) {
                clearInterval(refreshTokenIntervalId);
            }

            if (error) {
                return callbackWithPublisher(error);
            }

            if (response.status !== 'ok') {
                return callbackWithPublisher(null, response);
            }

            addPublisher.call(that, response.publisher, room);
            removePublisher.call(that, publisher, room);

            publisher = response.publisher;

            that._publisherDisposables[publisher.getStreamId()] = new disposable.DisposableList();

            var publisherStop = _.bind(publisher.stop, publisher);

            publisher.stop = function() {
                clearInterval(refreshTokenIntervalId);

                removePublisher.call(that, publisher, room);

                var streamsAfterStop = mapNewPublisherStreamToMemberStreams.call(that, null, room);
                var roomService = findActiveRoom.call(that, room.getRoomId());
                var publisherDisposable = that._publisherDisposables[publisher.getStreamId()];

                if (publisherDisposable) {
                    publisherDisposable.dispose();

                    delete that._publisherDisposables[publisher.getStreamId()];
                }

                publisherStop.apply(publisher, arguments);

                if (!roomService) {
                    return;
                }

                updateSelfStreamsAndRoleAndEnterRoomIfNecessary.call(that, streamsAfterStop, streamsAfterStop.length === 0 ? memberEnums.roles.audience.name : options.memberRole, roomService, room, options, function(error) {
                    if (error) {
                        return callbackWithPublisher(error);
                    }
                });
            };

            listenForTrackStateChange.call(that, publisher, room, callbackWithPublisher);

            if (options.enableWildcardCapability) {
                refreshTokenIntervalId = setInterval(function() {
                    that._logger.info('Refresh wildcard viewer stream token for [%s] interval of [%s] has expired. Creating new token.',
                        publisher.getStreamId(), defaultStreamWildcardTokenRefreshInterval);

                    var activeRoomService = findActiveRoom.call(that, room.getRoomId(), room.getObservableAlias().getValue());
                    var activeRoom = activeRoomService ? activeRoomService.getObservableActiveRoom().getValue() : room;

                    createOptionalViewerStreamTokensAndUpdateSelf.call(that, options, publisher, activeRoom, function ignoreSuccess(error, response) {
                        if (error || response.status !== 'ok') {
                            callbackWithPublisher(error, response);
                        }
                    });
                }, defaultStreamWildcardTokenRefreshInterval);

                that._disposables.add(new disposable.Disposable(function() {
                    clearInterval(refreshTokenIntervalId);
                }));
            }

            createOptionalViewerStreamTokensAndUpdateSelf.call(that, options, response.publisher, room, callbackWithPublisher);
        };

        if (_.get(options, ['mediaConstraints', 'screen'], false)) {
            _.set(options, ['streamInfo', 'isScreen'], true);

            return this._pcastExpress.publishScreen(options, handlePublish);
        }

        this._pcastExpress.publish(options, handlePublish);
    }

    function addPublisher(publisher, room) {
        if (!this._roomServicePublishers[room.getRoomId()]) {
            this._roomServicePublishers[room.getRoomId()] = [];
        }

        this._roomServicePublishers[room.getRoomId()].push(publisher);
    }

    function removePublisher(publisher, room) {
        if (!this._roomServicePublishers[room.getRoomId()] || !publisher) {
            return;
        }

        this._roomServicePublishers[room.getRoomId()] = _.filter(this._roomServicePublishers[room.getRoomId()], function(roomPublisher) {
            return roomPublisher.getStreamId() !== publisher.getStreamId();
        });
    }

    function createOptionalViewerStreamTokensAndUpdateSelf(options, publisher, room, callback) {
        var that = this;
        var streamType = options.streamType;
        var streamInfo = options.streamInfo;
        var capabilities = [];

        if (options.streamToken) {
            var capabilitiesFromStreamToken = getCapabilitiesFromTokenIfAble.call(that, options.streamToken);

            if (!capabilitiesFromStreamToken) {
                return callback(new Error('Bad `streamToken`'), {status: 'bad-token'});
            }

            capabilities = capabilitiesFromStreamToken;
        } else {
            capabilities = options.capabilities;
        }

        var publisherStream = mapStreamToMemberStream(publisher, streamType, streamInfo, capabilities);

        if (!options.enableWildcardCapability) {
            var activeRoomService = findActiveRoom.call(this, room.getRoomId(), room.getObservableAlias().getValue());
            var updateSelfOptions = _.assign({}, options, {streams: mapNewPublisherStreamToMemberStreams.call(this, publisherStream, room)});

            return updateSelfStreamsAndRoleAndEnterRoomIfNecessary.call(this, updateSelfOptions.streams, updateSelfOptions.memberRole, activeRoomService, room, updateSelfOptions, callback);
        }

        return createViewerStreamTokensAndUpdateSelf.call(this, options, publisherStream, room, callback);
    }

    function createViewerStreamTokensAndUpdateSelf(options, publisherStream, room, callback) {
        var that = this;
        var composeWithAdditionalStreams = options.viewerStreamSelectionStrategy === 'high-availability' && room.getObservableType().getValue() === roomEnums.types.channel.name;
        var additionalStreamIds = [];
        var handleJoinRoomCallback = callback;
        var publisherStreamId = Stream.parsePCastStreamIdFromStreamUri(_.get(publisherStream, 'uri', ''));
        var protocol = that.getPCastExpress().getPCast().getProtocol();
        var sessionId = protocol ? protocol.getSessionId() : '';
        var disposables = that._publisherDisposables[publisherStreamId];
        var disposable;

        if (!_.includes(publisherStream, 'capabilities')) {
            if (options.streamToken) {
                var capabilitiesFromStreamToken = getCapabilitiesFromTokenIfAble.call(that, options.streamToken);

                if (!capabilitiesFromStreamToken) {
                    return callback(new Error('Bad `streamToken`'), {status: 'bad-token'});
                }

                publisherStream = addStreamInfo(publisherStream, 'capabilities', capabilitiesFromStreamToken.join(','));
            } else {
                publisherStream = addStreamInfo(publisherStream, 'capabilities', options.capabilities.join(','));
            }
        }

        if (composeWithAdditionalStreams) {
            var membersWithSameContent = MemberSelector.getSimilarMembers(options.screenName, sessionId, room.getObservableMembers().getValue());

            additionalStreamIds = getValidStreamIds(membersWithSameContent);

            handleJoinRoomCallback = function(error, response) {
                callback(error, response);

                var roomService = _.get(response, 'roomService', findActiveRoom.call(that, room.getRoomId(), room.getObservableAlias().getValue()));

                if (error || response.status !== 'ok' || disposable || !roomService) {
                    return;
                }

                var activeRoom = roomService.getObservableActiveRoom().getValue();

                disposable = activeRoom.getObservableMembers().subscribe(function(members) {
                    var self = roomService.getSelf();
                    var selfSessionId = self ? self.getSessionId() : '';
                    var newMembersWithSameContent = MemberSelector.getSimilarMembers(options.screenName, selfSessionId, members);
                    var newAdditionalStreamIds = getValidStreamIds(newMembersWithSameContent);
                    var areTheSame = newAdditionalStreamIds.length === additionalStreamIds.length && _.reduce(newAdditionalStreamIds, function(areAllPreviousTheSame, streamId) {
                        return areAllPreviousTheSame ? _.includes(additionalStreamIds, streamId) : areAllPreviousTheSame;
                    }, true);
                    var selfStreams = self ? self.getObservableStreams().getValue() : [];
                    var publishedSelfStream = _.find(selfStreams, function(stream) {
                        return stream.getPCastStreamId() === publisherStreamId;
                    });

                    if (!publishedSelfStream) {
                        disposable.dispose();
                        disposable = null;

                        return;
                    }

                    if (areTheSame) {
                        return;
                    }

                    that._logger.debug('Members with similar content to stream [%s] have changed. Generating new wildcard viewer token', publisherStreamId);

                    disposable.dispose();
                    disposable = null;

                    createViewerStreamTokensAndUpdateSelf.call(that, options, publisherStream, activeRoom, function ignoreSuccess(error, response) {
                        if (error || response.status !== 'ok') {
                            callback(error, response);
                        }
                    });
                });

                if (disposables) {
                    disposables.add(disposable);
                }
            };
        }

        return generateAllStreamTokensAndCreateStream.call(this, options.capabilities, publisherStreamId, additionalStreamIds, publisherStream, function(error, response) {
            if (error) {
                return callback(error);
            }

            if (response.status !== 'ok') {
                return callback(null, response);
            }

            var activeRoomService = findActiveRoom.call(that, room.getRoomId(), room.getObservableAlias().getValue());
            var updateSelfOptions = _.assign({}, options, {streams: mapNewPublisherStreamToMemberStreams.call(that, publisherStream, room)});

            return updateSelfStreamsAndRoleAndEnterRoomIfNecessary.call(that, updateSelfOptions.streams, updateSelfOptions.memberRole, activeRoomService, room, updateSelfOptions, handleJoinRoomCallback);
        });
    }

    function generateAllStreamTokensAndCreateStream(publisherCapabilities, streamId, additionalStreamIds, stream, callback) {
        var generateStreamTokenRequests = [];
        var numberOfCompletedRequests = 0;
        var requestCancelled = false;
        var disposeOfRequests = function() {
            _.forEach(generateStreamTokenRequests, function(disposable) {
                disposable.dispose();
            });
        };

        var completedRequestsCallback = function(error, response) {
            if (requestCancelled) {
                return;
            }

            if (error || response.status !== 'ok') {
                disposeOfRequests();

                requestCancelled = true;

                return callback(error, response);
            }

            numberOfCompletedRequests++;

            if (numberOfCompletedRequests === generateStreamTokenRequests.length) {
                callback(null, {status: 'ok'});
            }
        };

        this._logger.debug('Creating [real-time] and [broadcast] viewer wildcard stream token for published stream [%s] with [%s] additional streams', streamId, additionalStreamIds.length);

        generateStreamTokenRequests.push(generateWildcardStreamTokenAndAppendToStream.call(this, [], streamId, additionalStreamIds, stream, 'streamToken', completedRequestsCallback));
        generateStreamTokenRequests.push(generateWildcardStreamTokenAndAppendToStream.call(this, ['broadcast'], streamId, additionalStreamIds, stream, 'streamTokenForBroadcastStream', completedRequestsCallback));

        var streamingTypePublisherCapabilities = _.filter(publisherCapabilities, _.bind(_.includes, null, streamingTypeCapabilities));

        if (streamingTypePublisherCapabilities.length > 0) {
            this._logger.debug('Creating [%s] viewer wildcard stream token for published stream [%s] with [%s] additional streams', streamingTypePublisherCapabilities, streamId, additionalStreamIds.length);

            generateStreamTokenRequests.push(generateWildcardStreamTokenAndAppendToStream.call(this, streamingTypePublisherCapabilities, streamId, additionalStreamIds, stream, 'streamTokenForLiveStream', completedRequestsCallback));
        }

        if (_.includes(publisherCapabilities, 'drm')) {
            this._logger.debug('Creating [drm-open-access] and [drm-hollywood] viewer wildcard stream token for published stream [%s] with [%s] additional streams', streamId, additionalStreamIds.length);

            generateStreamTokenRequests.push(generateWildcardStreamTokenAndAppendToStream.call(this, ['streaming', 'drm-open-access'], streamId, additionalStreamIds, stream, 'streamTokenForLiveStreamWithDrmOpenAccess', completedRequestsCallback));
            generateStreamTokenRequests.push(generateWildcardStreamTokenAndAppendToStream.call(this, ['streaming', 'drm-hollywood'], streamId, additionalStreamIds, stream, 'streamTokenForLiveStreamWithDrmHollywood', completedRequestsCallback));
        }

        return disposeOfRequests;
    }

    function generateWildcardStreamTokenAndAppendToStream(capabilities, streamId, additionalStreamIds, stream, tokenName, callback) {
        var that = this;
        var adminApi = that._pcastExpress.getAdminAPI();

        if (!adminApi) {
            throw new Error('Set "options.enableWildcardCapability" to "false", or set adminApiProxyClient on initiating room express');
        }

        return that._pcastExpress.getAdminAPI().createStreamTokenForSubscribing('*', capabilities, streamId, additionalStreamIds, function(error, response) {
            if (error) {
                return callback(error);
            }

            if (response.status !== 'ok') {
                return callback(null, response);
            }

            stream = addStreamInfo(stream, tokenName, response.streamToken);

            callback(null, response);
        });
    }

    function addStreamInfo(stream, name, value) {
        var indexOfQueryParam = stream.uri.indexOf('?');
        var prefix = indexOfQueryParam > -1 ? '&' : '?';
        var indexOfHashAfterQueryParam = stream.uri.indexOf('#', indexOfQueryParam === -1 ? stream.uri.length : indexOfQueryParam);
        var uriBeforeHashIfQueryParamPresent = indexOfHashAfterQueryParam === -1 ? stream.uri : stream.uri.substring(0, indexOfHashAfterQueryParam);
        var uriHash = indexOfHashAfterQueryParam === -1 ? '' : stream.uri.substring(indexOfHashAfterQueryParam);

        stream.uri = uriBeforeHashIfQueryParamPresent + prefix + name + '=' + value + uriHash;

        return stream;
    }

    function getValidStreamIds(members) {
        return _.reduce(members, function(streamIds, member) {
            var stream = _.get(member.getObservableStreams().getValue(), '0');
            var streamId = stream ? stream.getPCastStreamId() : '';

            if (streamId) {
                streamIds.push(streamId);
            }

            return streamIds;
        }, []);
    }

    function mapNewPublisherStreamToMemberStreams(publisherStream, room) {
        var that = this;
        var activeRoomService = findActiveRoom.call(this, room.getRoomId(), room.getObservableAlias().getValue());
        var defaultStreams = publisherStream ? [publisherStream] : [];

        if (!activeRoomService) {
            return defaultStreams;
        }

        var self = activeRoomService.getSelf();

        if (!self) {
            return defaultStreams;
        }

        var selfStreams = _.map(self.getObservableStreams().getValue(), function(selfStream) {
            return selfStream.toJson();
        });
        var publishers = this._roomServicePublishers[room.getRoomId()] || [];
        var publisherIds = _.map(publishers, function(publisher) {
            return publisher.getStreamId();
        });

        if (!selfStreams || selfStreams.length === 0) {
            return defaultStreams;
        }

        if (publisherStream) {
            selfStreams = _.filter(selfStreams, function(stream) {
                var hasSameUri = stream.uri === publisherStream.uri;
                var pcastStreamId = Stream.parsePCastStreamIdFromStreamUri(stream.uri);
                var isPCastStream = !!pcastStreamId;
                var hasSamePCastStreamId = isPCastStream && pcastStreamId === Stream.parsePCastStreamIdFromStreamUri(publisherStream.uri);
                var isTheSameWithoutQueryParams = publisherStream.uri.split('?')[0] === stream.uri.split('?')[0];
                var hasSameType = stream.type === publisherStream.type;

                return (!hasSameUri && !hasSamePCastStreamId && !isTheSameWithoutQueryParams) || !hasSameType;
            });

            selfStreams.push(publisherStream);
        }

        return _.filter(selfStreams, function(stream) {
            return !Stream.parsePCastStreamIdFromStreamUri(stream.uri)
                || _.includes(publisherIds, Stream.parsePCastStreamIdFromStreamUri(stream.uri) || stream.uri)
                || _.includes(that._externalPublishers, stream.uri.split('?')[0]);
        });
    }

    function updateSelfStreamsAndRole(streams, role, roomService, callback) {
        var activeRoom = roomService ? roomService.getObservableActiveRoom().getValue() : null;

        if (streams && roomService) {
            roomService.getSelf().setStreams(streams);
        }

        if (role && roomService) {
            roomService.getSelf().getObservableRole().setValue(streams.length === 0 ? memberEnums.roles.audience.name : role);
        }

        if (activeRoom && roomService.getSelf()) {
            return updateSelfWithRetry.call(this, roomService.getSelf(), callback);
        }
    }

    function updateSelfStreamsAndRoleAndEnterRoomIfNecessary(streams, role, roomService, room, options, callback) {
        var activeRoomService = findActiveRoom.call(this, room.getRoomId(), room.getObservableAlias().getValue());
        var activeRoom = roomService ? roomService.getObservableActiveRoom().getValue() : null;
        var shouldJoinRoom = !activeRoom && !activeRoomService;
        var that = this;

        if (that._disposed) {
            return that._logger.warn('Unable to update self after express room service disposal.');
        }

        if (streams && activeRoomService) {
            that._logger.debug('Preparing member streams for update in room [%s].', room.getRoomId());

            activeRoomService.getSelf().setStreams(streams);
        }

        if (role && activeRoomService && activeRoomService.getSelf().getObservableRole().getValue() !== role) {
            that._logger.debug('Preparing member role for update in room [%s].', room.getRoomId());

            activeRoomService.getSelf().getObservableRole().setValue(role);
        }

        if (activeRoom && activeRoomService.getSelf()) {
            return updateSelfWithRetry.call(this, activeRoomService.getSelf(), callback);
        }

        if (shouldJoinRoom) {
            that._logger.info('Joining room with member [%s].', room.getRoomId());

            var joinRoomAsPresenterOptions = _.assign({
                role: role,
                alias: _.get(options, ['room', 'alias']),
                roomId: _.get(options, ['room', 'roomId'])
            }, options);

            joinRoomWithOptions.call(that, joinRoomAsPresenterOptions, function(error, response) {
                if (error) {
                    return callback(error);
                }

                if (response.status !== 'ok' && response.status !== 'already-in-room') {
                    return callback(null, response);
                }

                callback(error, response);
            });
        }
    }

    function updateSelfWithRetry(self, callback) {
        var updateSelfErrors = 0;
        var that = this;
        var maxUpdateSelfRetries = 5;

        try {
            self.commitChanges(function handleUpdateSelf(error, response) {
                if (error || !response) {
                    updateSelfErrors++;
                }

                var roomService = self.getRoomService();
                var room = roomService ? roomService.getObservableActiveRoom().getValue() : null;

                if (response && response.status === 'ok' || (!room && response.status === 'not-found')) {
                    updateSelfErrors = 0;
                    that._isHandlingTrackChange = false;

                    return !callback || callback(null, response);
                }

                if (response && response.status !== 'ok') {
                    updateSelfErrors++;
                }

                if (updateSelfErrors >= maxUpdateSelfRetries) {
                    that._logger.warn('Unable to update self after [%s] attempts.', maxUpdateSelfRetries);

                    if (_.isNumber(response.lastUpdate)) {
                        that._logger.warn('Updating self last update from [%s] to [%s] to prevent permanent failure state. Our awareness of self does not match up with the server anymore.',
                            self.getObservableLastUpdate().getValue(), response.lastUpdate);

                        self.getObservableLastUpdate().setValue(response.lastUpdate);
                    }

                    that._isHandlingTrackChange = false;

                    return callback(new Error('Unable to update self'));
                }

                if (updateSelfErrors > 0 && updateSelfErrors < maxUpdateSelfRetries) {
                    that._logger.info('Unable to update self after [%s] attempts. Retrying.', updateSelfErrors);

                    return self.commitChanges(handleUpdateSelf);
                }
            });
        } catch (error) {
            callback(error);
        }
    }

    function monitorSubsciberOrPublisher(callback, error, response) {
        if (error) {
            return callback(error);
        }

        if (response.retry) {
            return response.retry();
        }

        callback(error, response);
    }

    function getDefaultRoomDescription(type) {
        switch(type) {
        case roomEnums.types.channel.name:
            return 'Room Channel';
        case roomEnums.types.moderatedChat.name:
            return 'Moderated Chat';
        case roomEnums.types.multiPartyChat.name:
            return 'Multi Party Chat';
        case roomEnums.types.townHall.name:
            return 'Town Hall';
        case roomEnums.types.directChat.name:
            return 'Direct Chat';
        default:
            throw new Error('Unsupported Room Type');
        }
    }

    // TODO(dy) Remove backward compatibility when all publisher clients adapt to providing capabilities.
    function buildCapabilitiesFromPublisherWildcardTokens(uri) {
        var streamInfo = Stream.getInfoFromStreamUri(uri);
        var capabilities = [];

        if (streamInfo.streamTokenForLiveStream) {
            capabilities.push('streaming');
        }

        return capabilities;
    }

    function getStreamTokenForFeature(uri, feature) {
        var streamInfo = Stream.getInfoFromStreamUri(uri);

        switch(feature) {
        case 'rtmp':
        case 'hls':
        case 'dash':
            return streamInfo.streamTokenForLiveStream;
        case 'real-time':
            return streamInfo.streamToken;
        default:
            return;
        }
    }

    // TODO(dy) Remove backward compatibility when all publisher clients adapt to providing capabilities.
    function parseStreamTokenFromStreamUri(uri, capabilities) {
        var streamInfo = Stream.getInfoFromStreamUri(uri);
        var isStreaming = streamInfo.streamTokenForLiveStream && _.includes(capabilities, 'streaming');
        var isRtmp = streamInfo.streamTokenForLiveStream && _.includes(capabilities, 'rtmp');

        // Token for both not generated.
        if (_.includes(capabilities, 'drm-open-access') && _.includes(capabilities, 'drm-hollywood')) {
            return;
        }

        if (isStreaming && streamInfo.streamTokenForLiveStreamWithDrmOpenAccess && (_.includes(capabilities, 'drm-open-access') || FeatureDetector.isAndroid())) {
            return streamInfo.streamTokenForLiveStreamWithDrmOpenAccess;
        }

        if (isStreaming && streamInfo.streamTokenForLiveStreamWithDrmHollywood && _.includes(capabilities, 'drm-hollywood')) {
            return streamInfo.streamTokenForLiveStreamWithDrmHollywood;
        }

        if (isStreaming || isRtmp) {
            return streamInfo.streamTokenForLiveStream;
        }

        if (streamInfo.streamTokenForBroadcastStream && _.includes(capabilities, 'broadcast')) {
            return streamInfo.streamTokenForBroadcastStream;
        }

        if (!_.includes(capabilities, 'streaming') && !_.includes(capabilities, 'broadcast') && !_.includes(capabilities, 'rtmp')) {
            return streamInfo.streamToken;
        }
    }

    function mapStreamToMemberStream(publisher, type, streamInfo, capabilities, viewerStreamToken, viewerStreamTokenForBroadcastStream, viewerStreamTokenForLiveStream, drmStreamTokens) {
        var mediaStream = publisher.getStream();
        var audioTracks = mediaStream ? mediaStream.getAudioTracks() : null;
        var videoTracks = mediaStream ? mediaStream.getVideoTracks() : null;
        var audioTrackEnabled = audioTracks.length > 0 && audioTracks[0].enabled;
        var videoTrackEnabled = videoTracks.length > 0 && videoTracks[0].enabled;

        if (capabilities.includes('audio-only')) {
            videoTrackEnabled = false;
        }

        if (capabilities.includes('video-only')) {
            audioTrackEnabled = false;
        }

        var publishedStream = {
            uri: Stream.getPCastPrefix() + publisher.getStreamId(),
            type: type,
            audioState: audioTrackEnabled ? trackEnums.states.trackEnabled.name : trackEnums.states.trackDisabled.name,
            videoState: videoTrackEnabled ? trackEnums.states.trackEnabled.name : trackEnums.states.trackDisabled.name
        };

        var infoToAppend = _.assign({}, streamInfo, {
            streamToken: viewerStreamToken,
            streamTokenForBroadcastStream: viewerStreamTokenForBroadcastStream,
            streamTokenForLiveStream: viewerStreamTokenForLiveStream
        });

        if (!viewerStreamToken) {
            delete infoToAppend.streamToken;
        }

        if (!viewerStreamTokenForBroadcastStream) {
            delete infoToAppend.streamTokenForBroadcastStream;
        }

        if (!viewerStreamTokenForLiveStream) {
            delete infoToAppend.streamTokenForLiveStream;
        }

        if (drmStreamTokens) {
            assert.isArray(drmStreamTokens, 'drmStreamTokens');

            infoToAppend.streamTokenForLiveStreamWithDrmOpenAccess = drmStreamTokens[0];
            infoToAppend.streamTokenForLiveStreamWithDrmHollywood = drmStreamTokens[1];
        }

        var queryParamString = _.reduce(infoToAppend, function(queryParamString, currentValue, currentKey) {
            var currentPrefix = queryParamString ? '&' : '?';

            return queryParamString + currentPrefix + currentKey + '=' + currentValue;
        }, '');

        if (queryParamString.length > 0) {
            publishedStream.uri = publishedStream.uri + queryParamString;
        }

        publishedStream = addStreamInfo(publishedStream, 'capabilities', capabilities.join(','));

        return publishedStream;
    }

    function listenForTrackStateChange(publisher, room, callbackWithPublisher) {
        var that = this;
        var stream = publisher.getStream();

        if (!stream) {
            return;
        }

        var tracks = stream.getTracks();

        _.forEach(tracks, function(track) {
            var handleStateChange = function handleStateChange() {
                that._isHandlingTrackChange = true;

                var state = track.enabled ? trackEnums.states.trackEnabled.name : trackEnums.states.trackDisabled.name;
                var activeRoomService = findActiveRoom.call(that, room.getRoomId());

                if (!activeRoomService || !activeRoomService.getSelf()) {
                    return;
                }

                var selfStreams = activeRoomService.getSelf().getObservableStreams().getValue();
                var memberStream = _.find(selfStreams, function(selfStream) {
                    return selfStream.getPCastStreamId() === publisher.getStreamId();
                });
                var self = getSelfAssociatedWithStream.call(that, memberStream);

                if (!memberStream) {
                    return that._logger.warn('[%s] [%s] Unable to update member state change after track state change [%s]. Member stream no longer exists on member model.', stream.id, track.id, track.enabled);
                }

                that._logger.info('[%s] [%s] Track state changed to [%s], updating room member stream state [%s]', stream.id, track.id, track.enabled, state);

                if (track.kind === 'video') {
                    memberStream.getObservableVideoState().setValue(state);
                } else {
                    memberStream.getObservableAudioState().setValue(state);
                }

                if (self) {
                    updateSelfWithRetry.call(that, self, callbackWithPublisher);
                }
            };

            var handleStateChangeIfPossible = function handleStateChangeIfPossible() {
                if (that._handleStateChangeTimeOut) {
                    clearTimeout(that._handleStateChangeTimeOut);
                    that._handleStateChangeTimeOut = null;
                }

                if (!that._isHandlingTrackChange) {
                    handleStateChange();

                    return;
                }

                that._handleStateChangeTimeOut = setTimeout(function() {
                    handleStateChangeIfPossible();
                });
            };

            track.updateState = function(enabled) {
                this.enabled = enabled;
                handleStateChangeIfPossible();
            };
        });
    }

    function getSelfAssociatedWithStream(memberStream) {
        var roomService = _.find(this._activeRoomServices, function(roomService) {
            var self = roomService.getSelf();
            var selfStreams = self ? self.getObservableStreams().getValue() : [];

            return _.find(selfStreams, function(selfStream) {
                return memberStream === selfStream;
            });
        });

        return roomService ? roomService.getSelf() : null;
    }

    return RoomExpress;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var mostRecentStrategy = 'most-recent';
    var highAvailabilityStrategy = 'high-availability';
    var defaultBannedFailureCount = 100;
    var defaultBanMemberOnCapacityFailureCount = 5;

    function MemberSelector(selectionStrategy, logger, options) {
        if (selectionStrategy) {
            assert.isStringNotEmpty(selectionStrategy, 'selectionStrategy');
        }

        assert.isObject(logger, 'logger');

        this._selectionStrategy = selectionStrategy || mostRecentStrategy;
        this._logger = logger;
        this._failureCountForBanningAMember = _.get(options, ['failureCountForBanningAMember'], defaultBannedFailureCount);
        this._banMemberOnCapacityFailureCount = _.get(options, ['banMemberOnCapacityFailureCount'], defaultBanMemberOnCapacityFailureCount);

        this.reset();
    }

    MemberSelector.prototype.getNext = function getNext(members) {
        this._logger.info('Select member from [%s]', members);

        var newSelectedMember = getNextMember.call(this, members);

        if (!newSelectedMember) {
            this._logger.info('Unable to select new member from [%s]', members);
        } else {
            this._logger.info('Selecting new member [%s]/[%s]', newSelectedMember.getSessionId(), newSelectedMember.getObservableScreenName().getValue());
        }

        this._lastSelectedMember = newSelectedMember;

        return newSelectedMember;
    };

    MemberSelector.prototype.getStrategy = function() {
        return this._selectionStrategy;
    };

    MemberSelector.prototype.markFailed = function(options) {
        if (!this._lastSelectedMember) {
            this._logger.warn('Marking failed member but there was no recent selected member');

            return;
        }

        var memberKey = getMemberKey(this._lastSelectedMember);

        if (_.get(options, ['failedDueToCapacity'], false)) {
            var capacityFailureCount = _.get(this._capacityFailureCounts, [memberKey], 0);

            capacityFailureCount++;

            _.set(this._capacityFailureCounts, [memberKey], capacityFailureCount);

            if (capacityFailureCount >= this._banMemberOnCapacityFailureCount) {
                this._logger.info('Disabling member [%s] that has exceeded threshold due to [%s] capacity failures', memberKey, capacityFailureCount);

                return this.markDead();
            }
        }

        var failureCount = _.get(this._failureCounts, [memberKey], 0);
        failureCount++;

        this._logger.info('Failure count for member [%s] is now [%s]', memberKey, failureCount);

        _.set(this._failureCounts, [memberKey], failureCount);

        if (failureCount >= this._failureCountForBanningAMember) {
            this._logger.info('Disabling member [%s] that has exceeded threshold due to [%s] failures', memberKey, failureCount);

            return this.markDead();
        }

        this._lastSelectedMember = null;
    };

    MemberSelector.prototype.markDead = function() {
        if (!this._lastSelectedMember) {
            this._logger.warn('Marking dead member but there was no recent selected member');

            return;
        }

        var memberKey = getMemberKey(this._lastSelectedMember);

        this._logger.info('Member [%s] is now permanently removed', memberKey);

        _.set(this._deadMembers, [memberKey], true);
        this._lastSelectedMember = null;
    };

    MemberSelector.prototype.getNumberOfMembersWithFailures = function() {
        return _.keys(this._failureCounts).length;
    };

    MemberSelector.prototype.reset = function() {
        this._lastSelectedMember = null;
        this._failureCounts = {};
        this._capacityFailureCounts = {};
        this._deadMembers = {};
    };

    MemberSelector.prototype.dispose = function dispose() {
        this.reset();
    };

    MemberSelector.getSimilarMembers = function(screenName, optionalSessionId, members) {
        var otherMembers = _.filter(members, function(member) {
            return member.getObservableScreenName().getValue() !== screenName && (!optionalSessionId || member.getSessionId() !== optionalSessionId);
        });
        var primaryMembers = _.filter(otherMembers, isPrimary);
        var alternateMembers = _.filter(otherMembers, isAlternate);

        if (isPrimaryName(screenName)) {
            return primaryMembers || alternateMembers || otherMembers;
        }

        if (isAlternateName(screenName)) {
            return alternateMembers || primaryMembers || otherMembers;
        }

        return otherMembers || primaryMembers || alternateMembers;
    };

    function getMemberKey(member) {
        if (!member) {
            return '';
        }

        return member.getSessionId() + member.getObservableScreenName().getValue();
    }

    function getNextMember(members) {
        var that = this;

        switch (this._selectionStrategy) {
        case mostRecentStrategy:
            var activeMembers = _.reduce(members, function(activeMembers, member) {
                var memberKey = getMemberKey(member);
                var isDead = _.get(that._deadMembers, [memberKey], false);

                if (!isDead) {
                    activeMembers.push(member);
                }

                return activeMembers;
            }, []);

            return getMostRecentMember(activeMembers);
        case highAvailabilityStrategy:
            if (this._lastSelectedMember && _.includes(members, this._lastSelectedMember)) {
                return this._lastSelectedMember;
            }

            var selectedMember = undefined;
            var minFailureCount = Number.MAX_VALUE;

            _.forEach(members, function(member) {
                var memberKey = getMemberKey(member);
                var isDead = _.get(that._deadMembers, [memberKey], false);

                if (isDead) {
                    return;
                }

                var failureCount = _.get(that._failureCounts, [member], 0);

                if (failureCount < minFailureCount) {
                    minFailureCount = failureCount;
                    selectedMember = member;
                } else if (failureCount === minFailureCount) {
                    if (!selectedMember) {
                        selectedMember = member;
                    } else if (isPrimary(member)) {
                        if (!isPrimary(selectedMember)) {
                            selectedMember = member;
                        }
                    } else if (isAlternate(member)) {
                        if (!isPrimary(selectedMember) && !isAlternate(selectedMember)) {
                            selectedMember = member;
                        }
                    }
                }
            });

            return selectedMember;
        default:
            throw new Error('Invalid Selection Strategy');
        }
    }

    function getMostRecentMember(members) {
        return _.reduce(members, function(mostRecentMember, member) {
            if (!mostRecentMember) {
                return member;
            }

            return mostRecentMember.getLastUpdate() > member.getLastUpdate() ? mostRecentMember : member;
        });
    }

    function isPrimary(member) {
        var screenName = member.getObservableScreenName().getValue();

        return isPrimaryName(screenName);
    }

    function isAlternate(member) {
        var screenName = member.getObservableScreenName().getValue();

        return isAlternateName(screenName);
    }

    function isPrimaryName(name) {
        var primary = /primary/i;

        return primary.test(name);
    }

    function isAlternateName(name) {
        var alternate = /alternate/i;

        return alternate.test(name);
    }

    return MemberSelector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    function Channel(room) {
        assert.isObject(room, 'room');

        this._room = room;
    }

    Channel.prototype.getChannelId = function getChannelId() {
        return this._room.getRoomId.apply(this._room, arguments);
    };

    Channel.prototype.getObservableAlias = function getObservableAlias() {
        return this._room.getObservableAlias.apply(this._room, arguments);
    };

    Channel.prototype.getObservableName = function getObservableName() {
        return this._room.getObservableName.apply(this._room, arguments);
    };

    Channel.prototype.getObservableDescription = function getObservableDescription() {
        return this._room.getObservableDescription.apply(this._room, arguments);
    };

    Channel.prototype.getObservableType = function getObservableType() {
        return this._room.getObservableType.apply(this._room, arguments);
    };

    Channel.prototype.getObservableMembers = function getObservableMembers() {
        return this._room.getObservableMembers.apply(this._room, arguments);
    };

    Channel.prototype.getObservableBridgeId = function getObservableBridgeId() {
        return this._room.getObservableBridgeId.apply(this._room, arguments);
    };

    Channel.prototype.getObservablePin = function getObservablePin() {
        return this._room.getObservablePin.apply(this._room, arguments);
    };

    Channel.prototype.toString = function toString() {
        return this._room.toString.apply(this._room, arguments);
    };

    Channel.prototype.toJson = function toJson() {
        return {
            channelId: this._room.getRoomId(),
            alias: this._room.getObservableAlias().getValue(),
            name: this._room.getObservableName().getValue(),
            description: this._room.getObservableDescription().getValue(),
            type: this._room.getObservableType().getValue(),
            pin: this._room.getObservablePin().getValue(),
            bridgeId: this._room.getObservableBridgeId().getValue()
        };
    };

    Channel.prototype.commitChanges = function commitChanges() {
        return this._room.commitChanges.apply(this._room, arguments);
    };

    Channel.prototype.reload = function reload() {
        return this._room.reload.apply(this._room, arguments);
    };

    Channel.prototype._update = function update() {
        return this._room._update.apply(this._room, arguments);
    };

    Channel.prototype._addMembers = function addMembers() {
        return this._room._addMembers.apply(this._room, arguments);
    };

    Channel.prototype._removeMembers = function removeMembers() {
        return this._room._removeMembers.apply(this._room, arguments);
    };

    Channel.prototype._updateMembers = function updateMembers() {
        return this._room._updateMembers.apply(this._room, arguments);
    };

    return Channel;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(2),
    __webpack_require__(8),
    __webpack_require__(21),
    __webpack_require__(30),
    __webpack_require__(64),
    __webpack_require__(68),
    __webpack_require__(35),
    __webpack_require__(36),
    __webpack_require__(38),
    __webpack_require__(72),
    __webpack_require__(37)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(rtc, logging, PCast, RoomService, AudioSpeakerDetector, BandwidthMonitor, UserMediaResolver, PCastExpress, RoomExpress, ChannelExpress, AdminApiProxyClient) {
    'use strict';

    rtc.global.PhenixPCast = PCast;

    return {
        express: {
            PCastExpress: PCastExpress,
            RoomExpress: RoomExpress,
            ChannelExpress: ChannelExpress
        },
        lowLevel: {
            PCast: PCast,
            RoomService: RoomService
        },
        media: {
            AudioSpeakerDetector: AudioSpeakerDetector,
            UserMediaResolver: UserMediaResolver
        },
        net: {AdminApiProxyClient: AdminApiProxyClient},
        utils: {
            BandwidthMonitor: BandwidthMonitor,
            logging: logging,
            rtc: rtc
        },

        // TODO(dy) remove deprecated. Use above
        AudioSpeakerDetector: AudioSpeakerDetector,
        BandwidthMonitor: BandwidthMonitor,
        logging: logging,
        PCast: PCast,
        RoomService: RoomService,
        RTC: rtc,
        UserMediaResolver: UserMediaResolver
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(10),
    __webpack_require__(43)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, environment, TelemetryAppender) {
    function TelemetryAppenderFactory() {
        this._telemetryAppenders = {};
    }

    TelemetryAppenderFactory.prototype.getAppender = function getAppender(pcastBaseUri) {
        var env = environment.getEnvironmentFromUrl(pcastBaseUri || '');
        var telemetryServerUrl = environment.getTelemetryServerUri(pcastBaseUri);

        if (!this._telemetryAppenders[env]) {
            this._telemetryAppenders[env] = createNewAppender.call(this, telemetryServerUrl);
        }

        return this._telemetryAppenders[env];
    };

    function createNewAppender(uri) {
        var appender = new TelemetryAppender(uri);

        if (!uri) {
            appender.setEnabled(false);
        }

        return appender;
    }

    return new TelemetryAppenderFactory();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2),
    __webpack_require__(8),
    __webpack_require__(16),
    __webpack_require__(23)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, rtc, logging, proto, telemetryProto) {
    var loggingUrl = '/logs';

    function TelemetryAppender(uri) {
        assert.isString(uri, 'uri');

        this._domain = typeof location === 'object' ? location.hostname : rtc.browser + '-' + rtc.browserVersion + '-unknown';
        this._minLevel = logging.level.TRACE;
        this._isEnabled = true;
        this._browser = (rtc.browser || 'Browser') + '/' + (rtc.browserVersion || '?');
        this._mostRecentRuntime = 0;
        this._batchHttpProtocol = new proto.BatchHttpProto(uri + loggingUrl, [telemetryProto], 'telemetry.StoreLogRecords', {
            maxAttempts: 3,
            maxBufferedRecords: 1000,
            maxBatchSize: 512
        });

        this._batchHttpProtocol.on('capacity', _.bind(onCapacity, this));
    }

    TelemetryAppender.prototype.setThreshold = function setThreshold(level) {
        assert.isNumber(level, 'level');

        this._minLevel = level;
    };

    TelemetryAppender.prototype.getThreshold = function getThreshold() {
        return this._minLevel;
    };

    TelemetryAppender.prototype.isEnabled = function isEnabled() {
        return this._isEnabled;
    };

    TelemetryAppender.prototype.setEnabled = function setEnabled(enabled) {
        assert.isBoolean(enabled, 'enabled');

        this._isEnabled = enabled;
    };

    TelemetryAppender.prototype.log = function log(since, level, category, messages, sessionId, userId, environment, version, context) {
        if (context.level < this._minLevel || !this._isEnabled) {
            return;
        }

        assert.isArray(messages, 'messages');

        this._mostRecentRuntime = since;
        this._mostRecentSessionId = sessionId;
        this._mostRecentUserId = userId;
        this._mostRecentVersion = version;
        this._mostRecentEnvironment = environment;

        addMessagesToRecords.call(this, level, category, messages);
    };

    function addMessagesToRecords(level, category, messages) {
        this._batchHttpProtocol.addRecord({
            level: level,
            timestamp: _.isoString(),
            category: category,
            message: messages.join(' '),
            source: this._browser,
            fullQualifiedName: this._domain,
            sessionId: this._mostRecentSessionId,
            userId: this._mostRecentUserId,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });
    }

    function onCapacity(deleteRecords) {
        this._batchHttpProtocol.addRecordToBeginning({
            level: 'Warn',
            timestamp: _.isoString(),
            category: 'websdk/telemetryLogger',
            message: 'Deleted ' + deleteRecords + ' records',
            source: this._browser,
            fullQualifiedName: this._domain,
            sessionId: this._mostRecentSessionId,
            userId: this._mostRecentUserId,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });
    }

    return TelemetryAppender;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(16),
    __webpack_require__(2),
    __webpack_require__(45),
    __webpack_require__(46)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, proto, phenixRTC, pcastProto, chatProto) {
    'use strict';

    var apiVersion = 5;

    function PCastProtocol(uri, deviceId, version, logger) {
        assert.isStringNotEmpty(uri, 'uri');
        assert.isString(deviceId, 'deviceId');
        assert.isStringNotEmpty(version, 'version');
        assert.isObject(logger, 'logger');

        this._deviceId = deviceId;
        this._version = version;
        this._logger = logger;
        this._mqWebSocket = new proto.MQWebSocket(uri, this._logger, [pcastProto, chatProto], apiVersion);
        this._observableSessionId = new observable.Observable(null).extend({rateLimit: 0});
    }

    PCastProtocol.prototype.onEvent = function(eventName, handler) {
        return this._mqWebSocket.onEvent(eventName, handler);
    };

    PCastProtocol.prototype.disconnect = function() {
        this._observableSessionId.setValue(null);

        return this._mqWebSocket.disconnect();
    };

    PCastProtocol.prototype.authenticate = function(authToken, callback) {
        assert.isStringNotEmpty(authToken, 'authToken');
        assert.isFunction(callback, 'callback');

        var authenticate = {
            apiVersion: this._mqWebSocket.getApiVersion(),
            clientVersion: this._version,
            deviceId: this._deviceId,
            platform: phenixRTC.browser,
            platformVersion: phenixRTC.browserVersion.toString(),
            authenticationToken: authToken
        };

        if (this.getSessionId()) {
            authenticate.sessionId = this.getSessionId();
        }

        var that = this;

        return this._mqWebSocket.sendRequest('pcast.Authenticate', authenticate, function(error, response) {
            if (response) {
                var previousSessionId = that._observableSessionId.getValue();

                if (previousSessionId && previousSessionId !== response.sessionId) {
                    that._mqWebSocket.disposeOfPendingRequests();
                }

                that._observableSessionId.setValue(response.sessionId);
            }

            return callback(error, response);
        });
    };

    PCastProtocol.prototype.getSessionId = function() {
        return this._observableSessionId.getValue();
    };

    PCastProtocol.prototype.getObservableSessionId = function() {
        return this._observableSessionId;
    };

    PCastProtocol.prototype.bye = function(reason, callback) {
        assert.isStringNotEmpty(reason, 'reason');
        assert.isFunction(callback, 'callback');

        var bye = {
            sessionId: this.getSessionId(),
            reason: reason
        };

        return this._mqWebSocket.sendRequest('pcast.Bye', bye, callback);
    };

    PCastProtocol.prototype.setupStream = function(streamType, streamToken, options, rtt, callback) {
        assert.isStringNotEmpty(streamType, 'streamType');
        assert.isStringNotEmpty(streamToken, 'streamToken');
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var browser = phenixRTC.browser || 'UnknownBrowser';
        var browserWithVersion = browser + '-' + (phenixRTC.browserVersion || 0);
        var rttString = 'rtt[http]=' + rtt;
        var setupStream = {
            streamToken: streamToken,
            createStream: {
                sessionId: this.getSessionId(),
                options: ['data-quality-notifications', rttString],
                connectUri: options.connectUri,
                connectOptions: options.connectOptions || [],
                tags: options.tags || [],
                userAgent: _.get(phenixRTC, ['global', 'navigator', 'userAgent'], browserWithVersion)
            }
        };

        if (options.originStreamId) {
            setupStream.createStream.originStreamId = options.originStreamId;
        }

        if (options.negotiate) {
            setupStream.createStream.createOfferDescription = {
                streamId: '',
                options: [streamType, browser, browserWithVersion],
                apiVersion: this._mqWebSocket.getApiVersion()
            };

            if (typeof screen !== 'undefined') {
                setupStream.createStream.createOfferDescription.options.push('screen=' + screen.width + 'x' + screen.height);
            }
        }

        if (options.receiveAudio === false) {
            setupStream.createStream.options.push('no-audio');
        }

        if (options.receiveVideo === false) {
            setupStream.createStream.options.push('no-video');
        }

        return this._mqWebSocket.sendRequest('pcast.SetupStream', setupStream, callback);
    };

    PCastProtocol.prototype.setAnswerDescription = function(streamId, sdp, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isStringNotEmpty(sdp, 'sdp');
        assert.isFunction(callback, 'callback');

        var setRemoteDescription = {
            streamId: streamId,
            sessionDescription: {
                type: 'Answer',
                sdp: sdp
            },
            apiVersion: this._mqWebSocket.getApiVersion()
        };

        return this._mqWebSocket.sendRequest('pcast.SetRemoteDescription', setRemoteDescription, callback);
    };

    PCastProtocol.prototype.addIceCandidates = function(streamId, candidates, options, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isArray(candidates, 'candidates');
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var sanitizedCandidates = _.map(candidates, function(candidate, index) {
            assert.isStringNotEmpty(candidate.candidate, 'candidate[' + index + '].candidate');
            assert.isNumber(candidate.sdpMLineIndex, 'candidate[' + index + '].sdpMLineIndex');
            assert.isStringNotEmpty(candidate.sdpMid, 'candidate[' + index + '].sdpMid');

            return {
                candidate: candidate.candidate,
                sdpMLineIndex: candidate.sdpMLineIndex,
                sdpMid: candidate.sdpMid
            };
        });

        var addIceCandidates = {
            streamId: streamId,
            candidates: sanitizedCandidates,
            options: options,
            apiVersion: this._mqWebSocket.getApiVersion()
        };

        return this._mqWebSocket.sendRequest('pcast.AddIceCandidates', addIceCandidates, callback);
    };

    PCastProtocol.prototype.updateStreamState = function(streamId, signalingState, iceGatheringState, iceConnectionState, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isStringNotEmpty(signalingState, 'signalingState');
        assert.isStringNotEmpty(iceGatheringState, 'iceGatheringState');
        assert.isStringNotEmpty(iceConnectionState, 'iceConnectionState');
        assert.isFunction(callback, 'callback');

        var updateStreamState = {
            streamId: streamId,
            signalingState: signalingState,
            iceGatheringState: iceGatheringState,
            iceConnectionState: iceConnectionState,
            apiVersion: this._mqWebSocket.getApiVersion()
        };

        return this._mqWebSocket.sendRequest('pcast.UpdateStreamState', updateStreamState, callback);
    };

    PCastProtocol.prototype.destroyStream = function(streamId, reason, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isString(reason, 'reason');
        assert.isFunction(callback, 'callback');

        var destroyStream = {
            streamId: streamId,
            reason: reason
        };

        return this._mqWebSocket.sendRequest('pcast.DestroyStream', destroyStream, callback);
    };

    PCastProtocol.prototype.getRoomInfo = function(roomId, alias, callback) {
        if (roomId) {
            assert.isString(roomId, 'roomId');
        } else {
            assert.isString(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        var getRoomInfo = {
            roomId: roomId,
            alias: alias,
            sessionId: this.getSessionId()
        };

        return this._mqWebSocket.sendRequest('chat.GetRoomInfo', getRoomInfo, callback);
    };

    PCastProtocol.prototype.createRoom = function(room, callback) {
        assert.isObject(room, 'room');
        assert.isStringNotEmpty(room.name, 'room.name');
        assert.isStringNotEmpty(room.type, 'room.type');
        assert.isStringNotEmpty(room.description, 'room.description');
        assert.isFunction(callback, 'callback');

        var createRoom = {
            sessionId: this.getSessionId(),
            room: room
        };

        return this._mqWebSocket.sendRequest('chat.CreateRoom', createRoom, callback);
    };

    PCastProtocol.prototype.enterRoom = function(roomId, alias, member, options, timestamp, callback) {
        if (roomId) {
            assert.isString(roomId, 'roomId');
        } else {
            assert.isString(alias, 'alias');
        }

        assert.isObject(member, 'member');
        assert.isNumber(timestamp, 'timestamp');
        assert.isArray(options, 'options');
        assert.isFunction(callback, 'callback');

        var joinRoom = {
            roomId: roomId,
            alias: alias,
            sessionId: this.getSessionId(),
            member: member,
            options: options,
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.JoinRoom', joinRoom, callback);
    };

    PCastProtocol.prototype.leaveRoom = function(roomId, timestamp, callback) {
        assert.isString(roomId, 'roomId');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        var leaveRoom = {
            roomId: roomId,
            sessionId: this.getSessionId(),
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.LeaveRoom', leaveRoom, callback);
    };

    PCastProtocol.prototype.updateMember = function(roomId, member, timestamp, callback) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isObject(member, 'member');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        member.updateStreams = Object.prototype.hasOwnProperty.call(member, 'streams');

        var updateMember = {
            sessionId: this.getSessionId(),
            roomId: roomId,
            member: member,
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.UpdateMember', updateMember, callback);
    };

    PCastProtocol.prototype.updateRoom = function(room, timestamp, callback) {
        assert.isObject(room, 'room');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        var updateRoom = {
            sessionId: this.getSessionId(),
            room: room,
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.UpdateRoom', updateRoom, callback);
    };

    PCastProtocol.prototype.sendMessageToRoom = function(roomId, chatMessage, callback) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isObject(chatMessage, 'chatMessage');

        var sendMessage = {
            roomId: roomId,
            chatMessage: chatMessage
        };

        return this._mqWebSocket.sendRequest('chat.SendMessageToRoom', sendMessage, callback);
    };

    PCastProtocol.prototype.subscribeToRoomConversation = function(sessionId, roomId, batchSize, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isNumber(batchSize, 'batchSize');

        var fetchRoomConversation = {
            sessionId: sessionId,
            roomId: roomId,
            limit: batchSize,
            options: ['Subscribe']
        };

        return this._mqWebSocket.sendRequest('chat.FetchRoomConversation', fetchRoomConversation, callback);
    };

    PCastProtocol.prototype.getMessages = function(sessionId, roomId, batchSize, afterMessageId, beforeMessageId, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isStringNotEmpty(roomId, 'roomId');

        if (!beforeMessageId || !afterMessageId) {
            assert.isNumber(batchSize, 'batchSize');
        }

        var fetchRoomConversation = {
            sessionId: sessionId,
            roomId: roomId,
            limit: batchSize || 0,
            options: []
        };

        if (beforeMessageId) {
            assert.isStringNotEmpty(beforeMessageId, 'beforeMessageId');

            fetchRoomConversation.beforeMessageId = beforeMessageId;
        }

        if (afterMessageId) {
            assert.isStringNotEmpty(afterMessageId, 'afterMessageId');

            fetchRoomConversation.afterMessageId = afterMessageId;
        }

        return this._mqWebSocket.sendRequest('chat.FetchRoomConversation', fetchRoomConversation, callback);
    };

    PCastProtocol.prototype.toString = function() {
        return 'PCastProtocol[' + this._mqWebSocket.toString() + ']';
    };

    return PCastProtocol;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var pcastProto = {
        "package": "pcast",
        "options": {"optimize_for": "LITE_RUNTIME"},
        "messages": [
            {
                "name": "Authenticate",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 9,
                        "options": {"default": 0}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "clientVersion",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "device",
                        "id": 12
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "deviceId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "manufacturer",
                        "id": 13
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "platform",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "platformVersion",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "authenticationToken",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "connectionId",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "connectionRouteKey",
                        "id": 10
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "remoteAddress",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "applicationId",
                        "id": 8
                    }
                ]
            },
            {
                "name": "AuthenticateResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "redirect",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "roles",
                        "id": 4
                    }
                ]
            },
            {
                "name": "Bye",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 2
                    }
                ]
            },
            {
                "name": "ByeResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "SessionDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "Type",
                        "name": "type",
                        "id": 1,
                        "options": {"default": "Offer"}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sdp",
                        "id": 2
                    }
                ],
                "enums": [
                    {
                        "name": "Type",
                        "values": [
                            {
                                "name": "Offer",
                                "id": 0
                            },
                            {
                                "name": "Answer",
                                "id": 1
                            }
                        ]
                    }
                ]
            },
            {
                "name": "CreateStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "originStreamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "originStreamIds",
                        "id": 10
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "connectUri",
                        "id": 8
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "connectOptions",
                        "id": 9
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "userAgent",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "SetRemoteDescription",
                        "name": "setRemoteDescription",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "CreateOfferDescription",
                        "name": "createOfferDescription",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "CreateAnswerDescription",
                        "name": "createAnswerDescription",
                        "id": 7
                    }
                ]
            },
            {
                "name": "IceServer",
                "fields": [
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "urls",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "username",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "credential",
                        "id": 3
                    }
                ]
            },
            {
                "name": "RtcConfiguration",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "BundlePolicy",
                        "name": "bundlePolicy",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "iceCandidatePoolSize",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "IceServer",
                        "name": "iceServers",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "IceTransportPolicy",
                        "name": "iceTransportPolicy",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "peerIdentity",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "RtcpMuxPolicy",
                        "name": "rtcpMuxPolicy",
                        "id": 7
                    }
                ],
                "enums": [
                    {
                        "name": "BundlePolicy",
                        "values": [
                            {
                                "name": "BundlePolicyBalanced",
                                "id": 1
                            },
                            {
                                "name": "BundlePolicyMaxCompat",
                                "id": 2
                            },
                            {
                                "name": "BundlePolicyMaxBundle",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "name": "IceTransportPolicy",
                        "values": [
                            {
                                "name": "IceTransportPolicyAll",
                                "id": 1
                            },
                            {
                                "name": "IceTransportPolicyPublic",
                                "id": 2
                            },
                            {
                                "name": "IceTransportPolicyRelay",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "name": "RtcpMuxPolicy",
                        "values": [
                            {
                                "name": "RtcpMuxPolicyNegotiate",
                                "id": 1
                            },
                            {
                                "name": "RtcpMuxPolicyRequire",
                                "id": 2
                            }
                        ]
                    }
                ]
            },
            {
                "name": "CreateStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "instanceRouteKey",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "streamUris",
                        "id": 8
                    },
                    {
                        "rule": "optional",
                        "type": "RtcConfiguration",
                        "name": "rtcConfiguration",
                        "id": 9
                    },
                    {
                        "rule": "optional",
                        "type": "SetRemoteDescriptionResponse",
                        "name": "setRemoteDescriptionResponse",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "CreateOfferDescriptionResponse",
                        "name": "createOfferDescriptionResponse",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "CreateAnswerDescriptionResponse",
                        "name": "createAnswerDescriptionResponse",
                        "id": 6
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "offset",
                        "id": 10,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "SetLocalDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "SetLocalDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SetRemoteDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "SetRemoteDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "CreateOfferDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "CreateOfferDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "CreateAnswerDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "CreateAnswerDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "IceCandidate",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "candidate",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "sdpMLineIndex",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sdpMid",
                        "id": 3
                    }
                ]
            },
            {
                "name": "AddIceCandidates",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "IceCandidate",
                        "name": "candidates",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 4,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "AddIceCandidatesResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    }
                ]
            },
            {
                "name": "UpdateStreamState",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "signalingState",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "iceGatheringState",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "iceConnectionState",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 5,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "UpdateStreamStateResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    }
                ]
            },
            {
                "name": "DestroyStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "reason",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "DestroyStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "ConnectionDisconnected",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "connectionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "reasonCode",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "description",
                        "id": 3
                    }
                ]
            },
            {
                "name": "ConnectionDisconnectedResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "StreamStarted",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SourceStreamStarted",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    }
                ]
            },
            {
                "name": "StreamEnded",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "continuationId",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "routeKey",
                        "id": 6
                    }
                ]
            },
            {
                "name": "SourceStreamEnded",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 5
                    }
                ]
            },
            {
                "name": "StreamEndedResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "continuationId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "routeKey",
                        "id": 3
                    }
                ]
            },
            {
                "name": "StreamIdle",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    }
                ]
            },
            {
                "name": "StreamArchived",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "startTime",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SessionEnded",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "float",
                        "name": "duration",
                        "id": 3
                    }
                ]
            },
            {
                "name": "ResourceIdle",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "routeKey",
                        "id": 2
                    }
                ]
            },
            {
                "name": "ResourceIdleResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "StreamPlaylist",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "PlaylistType",
                        "name": "playlistType",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "bool",
                        "name": "isVariant",
                        "id": 5,
                        "options": {"default": true}
                    }
                ],
                "enums": [
                    {
                        "name": "PlaylistType",
                        "values": [
                            {
                                "name": "Live",
                                "id": 0
                            },
                            {
                                "name": "OnDemand",
                                "id": 1
                            }
                        ]
                    }
                ]
            },
            {
                "name": "StreamRtmp",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "height",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "bitrate",
                        "id": 4
                    }
                ]
            },
            {
                "name": "SendEventToClient",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "connectionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "type",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "bytes",
                        "name": "payload",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SendEventToClientResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "SendRequestToClient",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "connectionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "type",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "bytes",
                        "name": "payload",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SendRequestToClientResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "type",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "bytes",
                        "name": "payload",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SetupStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamToken",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "CreateStream",
                        "name": "createStream",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SetupStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "CreateStreamResponse",
                        "name": "createStreamResponse",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SetupPlaylistStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamToken",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    }
                ]
            },
            {
                "name": "PlaylistStreamManifest",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "manifest",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "bool",
                        "name": "isProtectedContent",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "drmToken",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SetupPlaylistStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "PlaylistStreamManifest",
                        "name": "manifests",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "offset",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "StreamDataQuality",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "DataQualityStatus",
                        "name": "status",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "DataQualityReason",
                        "name": "reason",
                        "id": 5
                    }
                ],
                "enums": [
                    {
                        "name": "DataQualityStatus",
                        "values": [
                            {
                                "name": "NoData",
                                "id": 0
                            },
                            {
                                "name": "AudioOnly",
                                "id": 1
                            },
                            {
                                "name": "All",
                                "id": 2
                            }
                        ]
                    },
                    {
                        "name": "DataQualityReason",
                        "values": [
                            {
                                "name": "None",
                                "id": 0
                            },
                            {
                                "name": "UploadLimited",
                                "id": 1
                            },
                            {
                                "name": "DownloadLimited",
                                "id": 2
                            },
                            {
                                "name": "PublisherLimited",
                                "id": 3
                            },
                            {
                                "name": "NetworkLimited",
                                "id": 4
                            }
                        ]
                    }
                ]
            },
            {
                "name": "StreamDataQualityResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "CallbackEvent",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 1,
                        "options": {"default": 0}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "entity",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "what",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "data",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 5
                    }
                ]
            },
            {
                "name": "Uri",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "protocol",
                        "id": 1,
                        "options": {"default": "http"}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "host",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "port",
                        "id": 3,
                        "options": {"default": 80}
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "method",
                        "id": 4,
                        "options": {"default": "POST"}
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "path",
                        "id": 5,
                        "options": {"default": "/"}
                    }
                ]
            },
            {
                "name": "SetApplicationCallback",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "Uri",
                        "name": "callback",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SetApplicationCallbackResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "endpoint",
                        "id": 2
                    }
                ]
            },
            {
                "name": "IssueAuthenticationToken",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 3
                    }
                ]
            },
            {
                "name": "IssueAuthenticationTokenResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "authenticationToken",
                        "id": 2
                    }
                ]
            },
            {
                "name": "IssueStreamToken",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "originStreamId",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "alternateOriginStreamIds",
                        "id": 6
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "bool",
                        "name": "permissive",
                        "id": 7,
                        "options": {"default": false}
                    }
                ]
            },
            {
                "name": "IssueStreamTokenResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamToken",
                        "id": 2
                    }
                ]
            },
            {
                "name": "IssueDrmToken",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "originStreamId",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 5
                    }
                ]
            },
            {
                "name": "IssueDrmTokenResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "drmToken",
                        "id": 2
                    }
                ]
            },
            {
                "name": "TerminateStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 3,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamToken",
                        "id": 5,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "reason",
                        "id": 4
                    }
                ],
                "oneofs": {
                    "streamOrToken": [
                        3,
                        5
                    ]
                }
            },
            {
                "name": "TerminateStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "DeleteStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 3,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamToken",
                        "id": 5,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "reason",
                        "id": 4
                    }
                ],
                "oneofs": {
                    "streamOrToken": [
                        3,
                        5
                    ]
                }
            },
            {
                "name": "DeleteStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "Stream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    }
                ]
            },
            {
                "name": "ListStreams",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "start",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "length",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 5
                    }
                ]
            },
            {
                "name": "ListStreamsResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "start",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "length",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "Stream",
                        "name": "streams",
                        "id": 4
                    }
                ]
            },
            {
                "name": "GetPlaylistUris",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 4
                    }
                ]
            },
            {
                "name": "GetPlaylistUrisResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "Playlist",
                        "name": "playlists",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "StreamMetadata",
                        "name": "streamInfo",
                        "id": 3
                    }
                ],
                "messages": [
                    {
                        "name": "PlaylistMetadata",
                        "fields": [
                            {
                                "rule": "optional",
                                "type": "uint32",
                                "name": "bitrate",
                                "id": 1
                            },
                            {
                                "rule": "optional",
                                "type": "uint32",
                                "name": "height",
                                "id": 2
                            },
                            {
                                "rule": "optional",
                                "type": "float",
                                "name": "framesPerSecond",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "name": "StreamMetadata",
                        "fields": [
                            {
                                "rule": "required",
                                "type": "string",
                                "name": "startTime",
                                "id": 1
                            },
                            {
                                "rule": "optional",
                                "type": "string",
                                "name": "endTime",
                                "id": 2
                            }
                        ]
                    },
                    {
                        "name": "Playlist",
                        "fields": [
                            {
                                "rule": "required",
                                "type": "string",
                                "name": "name",
                                "id": 1
                            },
                            {
                                "rule": "required",
                                "type": "PlaylistType",
                                "name": "type",
                                "id": 2
                            },
                            {
                                "rule": "required",
                                "type": "string",
                                "name": "uri",
                                "id": 3
                            },
                            {
                                "rule": "required",
                                "type": "bool",
                                "name": "isVariant",
                                "id": 4
                            },
                            {
                                "rule": "required",
                                "type": "bool",
                                "name": "isProtected",
                                "id": 5
                            },
                            {
                                "rule": "required",
                                "type": "PlaylistMetadata",
                                "name": "info",
                                "id": 6
                            }
                        ]
                    }
                ],
                "enums": [
                    {
                        "name": "PlaylistType",
                        "values": [
                            {
                                "name": "Hls",
                                "id": 0
                            },
                            {
                                "name": "Dash",
                                "id": 1
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return pcastProto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var chatProto = {
        "package": "chat",
        "options": {"optimize_for": "LITE_RUNTIME"},
        "messages": [
            {
                "name": "Room",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "alias",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "name",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "description",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "RoomType",
                        "name": "type",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "bridgeId",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "pin",
                        "id": 8
                    }
                ]
            },
            {
                "name": "Stream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "StreamType",
                        "name": "type",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "TrackState",
                        "name": "audioState",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "TrackState",
                        "name": "videoState",
                        "id": 4
                    }
                ]
            },
            {
                "name": "Member",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "screenName",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "MemberRole",
                        "name": "role",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "Stream",
                        "name": "streams",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "MemberState",
                        "name": "state",
                        "id": 5
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "lastUpdate",
                        "id": 6
                    }
                ]
            },
            {
                "name": "MemberUpdate",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "screenName",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "MemberRole",
                        "name": "role",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "bool",
                        "name": "updateStreams",
                        "id": 7,
                        "options": {"default": false}
                    },
                    {
                        "rule": "repeated",
                        "type": "Stream",
                        "name": "streams",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "MemberState",
                        "name": "state",
                        "id": 5
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "lastUpdate",
                        "id": 6
                    }
                ]
            },
            {
                "name": "ChatUser",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "screenName",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "MemberRole",
                        "name": "role",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "lastUpdate",
                        "id": 4
                    }
                ]
            },
            {
                "name": "ChatMessage",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "messageId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "ChatUser",
                        "name": "from",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "message",
                        "id": 4
                    }
                ]
            },
            {
                "name": "CreateRoom",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "Room",
                        "name": "room",
                        "id": 2
                    }
                ]
            },
            {
                "name": "CreateRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "Room",
                        "name": "room",
                        "id": 2
                    }
                ]
            },
            {
                "name": "JoinRoom",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "alias",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "Member",
                        "name": "member",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 5
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 6
                    }
                ]
            },
            {
                "name": "JoinRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "Room",
                        "name": "room",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "Member",
                        "name": "members",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "Member",
                        "name": "self",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 4
                    }
                ]
            },
            {
                "name": "UpdateRoom",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "Room",
                        "name": "room",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 3
                    }
                ]
            },
            {
                "name": "UpdateRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "UpdateMember",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "roomId",
                        "id": 5
                    },
                    {
                        "rule": "required",
                        "type": "MemberUpdate",
                        "name": "member",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 4
                    }
                ]
            },
            {
                "name": "UpdateMemberResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "lastUpdate",
                        "id": 2
                    }
                ]
            },
            {
                "name": "LeaveRoom",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 3
                    }
                ]
            },
            {
                "name": "LeaveRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "DestroyRoom",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    }
                ]
            },
            {
                "name": "DestroyRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "GetRoomInfo",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "alias",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "applicationId",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "secret",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 6
                    }
                ]
            },
            {
                "name": "GetRoomInfoResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "Room",
                        "name": "room",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "Member",
                        "name": "members",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 4
                    }
                ]
            },
            {
                "name": "RoomEvent",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "RoomEventType",
                        "name": "eventType",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "Member",
                        "name": "members",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "Room",
                        "name": "room",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 6
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 7
                    }
                ]
            },
            {
                "name": "SendMessageToRoom",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "ChatMessage",
                        "name": "chatMessage",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SendMessageToRoomResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "FetchRoomConversation",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "afterMessageId",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "beforeMessageId",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "limit",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "RoomConversationOption",
                        "name": "options",
                        "id": 6
                    }
                ]
            },
            {
                "name": "FetchRoomConversationResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "ChatMessage",
                        "name": "chatMessages",
                        "id": 2
                    }
                ]
            },
            {
                "name": "RoomConversationEvent",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "RoomConversationEventType",
                        "name": "eventType",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "ChatMessage",
                        "name": "chatMessages",
                        "id": 4
                    }
                ]
            },
            {
                "name": "RoomBridgeIdle",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "roomId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "bridgeId",
                        "id": 2
                    }
                ]
            }
        ],
        "enums": [
            {
                "name": "RoomType",
                "values": [
                    {
                        "name": "DirectChat",
                        "id": 0
                    },
                    {
                        "name": "MultiPartyChat",
                        "id": 1
                    },
                    {
                        "name": "ModeratedChat",
                        "id": 2
                    },
                    {
                        "name": "TownHall",
                        "id": 3
                    },
                    {
                        "name": "Channel",
                        "id": 4
                    }
                ]
            },
            {
                "name": "MemberRole",
                "values": [
                    {
                        "name": "Participant",
                        "id": 0
                    },
                    {
                        "name": "Moderator",
                        "id": 1
                    },
                    {
                        "name": "Presenter",
                        "id": 2
                    },
                    {
                        "name": "Audience",
                        "id": 3
                    }
                ]
            },
            {
                "name": "MemberState",
                "values": [
                    {
                        "name": "Active",
                        "id": 0
                    },
                    {
                        "name": "Passive",
                        "id": 1
                    },
                    {
                        "name": "HandRaised",
                        "id": 2
                    },
                    {
                        "name": "Inactive",
                        "id": 3
                    },
                    {
                        "name": "Offline",
                        "id": 4
                    }
                ]
            },
            {
                "name": "RoomEventType",
                "values": [
                    {
                        "name": "MemberJoined",
                        "id": 0
                    },
                    {
                        "name": "MemberLeft",
                        "id": 1
                    },
                    {
                        "name": "MemberUpdated",
                        "id": 2
                    },
                    {
                        "name": "RoomUpdated",
                        "id": 3
                    },
                    {
                        "name": "RoomEnded",
                        "id": 4
                    }
                ]
            },
            {
                "name": "TrackState",
                "values": [
                    {
                        "name": "TrackEnabled",
                        "id": 0
                    },
                    {
                        "name": "TrackDisabled",
                        "id": 1
                    },
                    {
                        "name": "TrackEnded",
                        "id": 2
                    }
                ]
            },
            {
                "name": "StreamType",
                "values": [
                    {
                        "name": "User",
                        "id": 0
                    },
                    {
                        "name": "Presentation",
                        "id": 1
                    },
                    {
                        "name": "Audio",
                        "id": 2
                    }
                ]
            },
            {
                "name": "RoomConversationOption",
                "values": [
                    {
                        "name": "Subscribe",
                        "id": 0
                    }
                ]
            },
            {
                "name": "RoomConversationEventType",
                "values": [
                    {
                        "name": "Message",
                        "id": 0
                    }
                ]
            }
        ]
    };

    return chatProto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__47__;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global chrome */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, phenixRTC) {
    'use strict';

    var defaultChromePCastScreenSharingExtensionId = 'icngjadgidcmifnehjcielbmiapkhjpn';
    var minimumSupportFirefoxVersionForUnWhiteListedScreenShare = 52;

    function ScreenShareExtensionManager(options, logger) {
        options = options || {};

        assert.isObject(options, 'options');
        assert.isObject(logger, 'logger');

        this._logger = logger;
        this._screenSharingExtensionId = options.screenSharingExtensionId || getDefaultExtensionId();
        this._eagerlyCheckScreenSharingCapabilities = options.eagerlyCheckScreenSharingCapabilities || false;
        this._screenSharingAvailable = false;
        this._isInitializedObservable = new observable.Observable(false);

        if (this._eagerlyCheckScreenSharingCapabilities) {
            checkForScreenSharingCapability.call(this, _.bind(handleCheckForScreenSharing, this));
        } else {
            handleCheckForScreenSharing.call(this, false);
        }
    }

    ScreenShareExtensionManager.prototype.checkForScreenSharingCapability = function(callback) {
        return checkForScreenSharingCapability.call(this, function(isEnabled) {
            handleCheckForScreenSharing.call(this, isEnabled);

            callback(isEnabled);
        });
    };

    ScreenShareExtensionManager.prototype.isScreenSharingEnabled = function(callback) {
        var that = this;

        return waitForInitialized.call(this, function() {
            if (that._eagerlyCheckScreenSharingCapabilities || that._screenSharingAvailable) {
                return callback(that._screenSharingAvailable);
            }

            checkForScreenSharingCapability.call(that, function(isEnabled) {
                that._screenSharingAvailable = isEnabled;

                callback(isEnabled);
            });
        });
    };

    ScreenShareExtensionManager.prototype.getScreenSharingConstraints = function(options, callback) {
        return waitForInitialized.call(this, _.bind(getScreenSharingConstraints, this, options, callback));
    };

    ScreenShareExtensionManager.prototype.toString = function() {
        return 'ScreenShareExtensionManager[' + phenixRTC.browser + ']';
    };

    function handleCheckForScreenSharing(isEnabled) {
        this._isInitializedObservable.setValue(true);

        this._screenSharingAvailable = isEnabled;
    }

    function checkForScreenSharingCapability(callback) {
        var that = this;

        if (phenixRTC.browser === 'Chrome' && that._screenSharingExtensionId) {
            var runtimeEnvironment = getRuntime.call(this);

            if (!runtimeEnvironment) {
                return callback(false);
            }

            try {
                runtimeEnvironment.sendMessage(that._screenSharingExtensionId, {type: 'version'}, function(response) {
                    if (runtimeEnvironment.lastError || !response || response.status !== 'ok') {
                        that._logger.info('Screen sharing NOT available');
                        callback(false);

                        return;
                    }

                    that._logger.info('Screen sharing enabled using version [%s]', response.version);
                    callback(true);
                });
            } catch (e) {
                if (e.message) {
                    that._logger.warn(e.message, e);
                }

                callback(false);
            }
        } else if (phenixRTC.browser === 'Firefox' && phenixRTC.browserVersion >= minimumSupportFirefoxVersionForUnWhiteListedScreenShare) {
            callback(true);
        } else if (phenixRTC.browser === 'Firefox' && _.isObject(phenixRTC.global.PCastScreenSharing)) {
            callback(true);
        } else {
            callback(false);
        }
    }

    function waitForInitialized(callback) {
        if (this._isInitializedObservable.getValue()) {
            return callback();
        }

        var initializedSubscription = this._isInitializedObservable.subscribe(function() {
            initializedSubscription.dispose();

            return callback();
        });
    }

    function getScreenSharingConstraints(options, callback) {
        switch (phenixRTC.browser) {
        case 'Chrome':
            return requestMediaSourceIdWithRuntime.call(this, function(error, response) {
                if (error || (response && response.status !== 'ok')) {
                    return callback(error, response);
                }

                // Default to allow the user to request audio if using an older extension or not providing the options
                // If it fails to request the audio the user will receive an error
                if (!response.data && !response.options) {
                    response.options = {canRequestAudioTrack: true};
                }

                callback(null, {
                    status: 'ok',
                    constraints: mapChromeConstraints(options, response.streamId, response.options)
                });
            });
        case 'Firefox':
            callback(null, {
                status: 'ok',
                constraints: mapNewerConstraints(options)
            });

            break;
        default:
            callback(new Error('not-supported'), {status: 'not-supported'});

            break;
        }
    }

    function requestMediaSourceIdWithRuntime(callback) {
        var that = this;
        var runtimeEnvironment = getRuntime.call(this);

        if (!runtimeEnvironment) {
            return callback(new Error('not-available'));
        }

        try {
            runtimeEnvironment.sendMessage(that._screenSharingExtensionId, {
                type: 'get-desktop-media',
                sources: ['screen', 'window', 'tab', 'audio']
            }, function(response) {
                var shouldCheckIfScreenShareStillInstalled = runtimeEnvironment.lastError || !response;

                if (shouldCheckIfScreenShareStillInstalled) {
                    return checkForScreenSharingCapability.call(that, function(isEnabled) {
                        handleCheckForScreenSharing.call(that, isEnabled);

                        return callback(new Error('extension-failure'));
                    });
                }

                if (response.status !== 'ok') {
                    callback(new Error(response.status), response);

                    return;
                }

                callback(null, response);
            });
        } catch (e) {
            if (e.message) {
                that._logger.warn(e.message);
            }

            callback(e, {status: 'failed'});
        }
    }

    function mapChromeConstraints(options, id, captureOptions) {
        var constraints = {};

        if (_.isObject(options) && _.isObject(options.screen)) {
            constraints.video = options.screen;
        }

        if (_.isObject(options) && _.isObject(options.screenAudio) && captureOptions.canRequestAudioTrack) {
            constraints.audio = options.screenAudio;
        }

        if (options.screen) {
            _.set(constraints, ['video', 'mandatory'], {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: id
            });
        }

        if (options.screenAudio && captureOptions.canRequestAudioTrack) {
            _.set(constraints, ['audio', 'mandatory'], {
                chromeMediaSource: 'system',
                chromeMediaSourceId: id
            });
        }

        return constraints;
    }

    function mapNewerConstraints(options, id) {
        var constraints = {video: {}};

        if (_.isObject(options) && _.isObject(options.screen)) {
            constraints.video = options.screen;
        }

        if (id) {
            constraints.video.mediaSourceId = id;
        }

        constraints.video.mediaSource = constraints.video.mediaSource || 'window';

        return constraints;
    }

    function getRuntime() {
        var that = this;

        switch (phenixRTC.browser) {
        case 'Chrome':
            if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.sendMessage) {
                that._logger.info('Screen sharing NOT available. Runtime not supported');

                return null;
            }

            return chrome.runtime;
        case 'Firefox':
        default:
            return null;
        }
    }

    function getDefaultExtensionId() {
        switch (phenixRTC.browser) {
        case 'Chrome':
            return defaultChromePCastScreenSharingExtensionId;
        case 'Firefox':
        default:
            return '';
        }
    }

    return ScreenShareExtensionManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, rtc) {
    'use strict';

    var listenForMediaStreamTrackChangesTimeout = 2000;

    function UserMediaProvider(logger, screenShareExtensionManager, onScreenShare) {
        assert.isObject(logger, 'logger');
        assert.isObject(screenShareExtensionManager, 'screenShareExtensionManager');

        if (onScreenShare) {
            assert.isFunction(onScreenShare, 'onScreenShare');
        }

        this._logger = logger;
        this._screenShareExtensionManager = screenShareExtensionManager;
        this._onScreenShare = onScreenShare;
    }

    UserMediaProvider.prototype.getUserMedia = function(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        getUserMedia.call(this, options, callback);
    };

    function getUserMedia(options, callback) {
        var that = this;

        var onUserMediaSuccess = function onUserMediaSuccess(status, stream) {
            if (that._gumStreams) {
                that._gumStreams.push(stream);
            }

            callback(that, status, stream);
        };

        var onUserMediaFailure = function onUserMediaFailure(status, stream, error) {
            if (options.screenAudio) {
                that._logger.warn('Screen capture with audio is only supported on Windows or Chrome OS.');
            }

            callback(that, status, stream, error);
        };

        var hasScreen = options.screen || options.screenAudio;
        var hasVideoOrAudio = options.video || options.audio;

        if (!(hasScreen && hasVideoOrAudio)) {
            return getUserMediaStream.call(that, options, onUserMediaSuccess, onUserMediaFailure);
        }

        return getUserMediaStream.call(that, {screen: options.screen}, function success(status, screenStream) {
            return getUserMediaStream.call(that, {
                audio: options.audio,
                video: options.video
            }, function screenSuccess(status, stream) {
                addTracksToWebRTCStream(stream, screenStream.getTracks());

                onUserMediaSuccess(status, stream);
            }, function failure(status, stream, error) {
                stopWebRTCStream(screenStream);

                onUserMediaFailure(status, stream, error);
            });
        }, onUserMediaFailure);
    }

    function getUserMediaStream(options, successCallback, failureCallback) {
        var that = this;

        var onUserMediaCancelled = function onUserMediaCancelled() {
            failureCallback('cancelled', null);
        };

        var onUserMediaFailure = function onUserMediaFailure(e) {
            failureCallback(getUserMediaErrorStatus(e), undefined, e);
        };

        var onUserMediaSuccess = function onUserMediaSuccess(stream) {
            wrapNativeMediaStream.call(that, stream);

            successCallback('ok', stream);
        };

        return getUserMediaConstraints.call(this, options, function(error, response) {
            if (_.get(response, ['status']) !== 'ok') {
                return onUserMediaFailure(error);
            }

            if (response.status === 'cancelled') {
                return onUserMediaCancelled();
            }

            var constraints = response.constraints;

            if (that._onScreenShare && (options.screen || options.screenAudio) && rtc.browser === 'Chrome') {
                constraints = that._onScreenShare(constraints);

                if (!constraints) {
                    throw new Error('onScreenShare must return an object of user media constraints');
                }
            }

            try {
                rtc.getUserMedia(constraints, onUserMediaSuccess, onUserMediaFailure);
            } catch (e) {
                onUserMediaFailure(e);
            }
        });
    }

    function getUserMediaConstraints(options, callback) {
        var that = this;

        if (options.screen) {
            return that._screenShareExtensionManager.isScreenSharingEnabled(function(isEnabled) {
                if (isEnabled) {
                    return that._screenShareExtensionManager.getScreenSharingConstraints(options, callback);
                }

                return callback(new Error('screen-sharing-not-available'));
            });
        }

        var constraints = {
            audio: options.audio || false,
            video: options.video || false
        };

        callback(null, {
            status: 'ok',
            constraints: constraints
        });
    }

    var getUserMediaErrorStatus = function getUserMediaErrorStatus(e) {
        var status;

        if (e.code === 'unavailable') {
            status = 'conflict';
        } else if (e.message === 'permission-denied') {
            status = 'permission-denied';
        } else if (e.name === 'PermissionDeniedError') { // Chrome
            status = 'permission-denied';
        } else if (e.name === 'InternalError' && e.message === 'Starting video failed') { // FF (old getUserMedia API)
            status = 'conflict';
        } else if (e.name === 'SourceUnavailableError') { // FF
            status = 'conflict';
        } else if (e.name === 'SecurityError' && e.message === 'The operation is insecure.') { // FF
            status = 'permission-denied';
        } else {
            status = 'failed';
        }

        return status;
    };

    function wrapNativeMediaStream(stream) {
        var lastTrackEnabledStates = {};
        var lastTrackReadyStates = {};
        var that = this;

        setTimeout(function listenForTrackChanges() {
            if (isStreamStopped(stream)) {
                return;
            }

            _.forEach(stream.getTracks(), function(track) {
                if (rtc.global.Event && _.hasIndexOrKey(lastTrackEnabledStates, track.id) && lastTrackEnabledStates[track.id] !== track.enabled) {
                    var trackEnabledChangeEvent = new rtc.global.Event('trackenabledchange');

                    trackEnabledChangeEvent.data = track;

                    track.dispatchEvent(trackEnabledChangeEvent);

                    that._logger.info('[%s] Detected track [%s] enabled change to [%s]', stream.id, track.id, track.enabled);
                }

                if (rtc.global.Event && _.hasIndexOrKey(lastTrackReadyStates, track.id) && lastTrackReadyStates[track.id] !== track.readyState) {
                    var readyStateChangeEvent = new rtc.global.Event('readystatechange');

                    readyStateChangeEvent.data = track;

                    track.dispatchEvent(readyStateChangeEvent);

                    that._logger.info('[%s] Detected track [%s] Ready State change to [%s]', stream.id, track.id, track.readyState);
                }

                lastTrackEnabledStates[track.id] = track.enabled;
                lastTrackReadyStates[track.id] = track.readyState;
            });

            setTimeout(listenForTrackChanges, listenForMediaStreamTrackChangesTimeout);
        }, listenForMediaStreamTrackChangesTimeout);
    }

    function addTracksToWebRTCStream(stream, tracks) {
        if (!stream || !_.isFunction(stream.addTrack)) {
            return;
        }

        _.forEach(tracks, function(track) {
            stream.addTrack(track);
        });
    }

    function isStreamStopped(stream) {
        return _.reduce(stream.getTracks(), function(isStopped, track) {
            return isStopped && isTrackStopped(track);
        }, true);
    }

    function isTrackStopped(track) {
        assert.isNotUndefined(track, 'track');

        return track.readyState === 'ended';
    }

    function stopWebRTCStream(stream) {
        if (stream && _.isFunction(stream.stop)) {
            stream.stop();
        }

        if (stream && _.isFunction(stream.getTracks)) {
            var tracks = stream.getTracks();

            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];

                track.stop();
            }
        }
    }

    return UserMediaProvider;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(10),
    __webpack_require__(51)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, environment, MetricsTransmitter) {
    function MetricsTransmitterFactory() {
        this._metricsTransmitters = {};
    }

    MetricsTransmitterFactory.prototype.createMetricsTransmitter = function createMetricsTransmitter(pcastBaseUri) {
        var env = environment.getEnvironmentFromUrl(pcastBaseUri || '');

        var telemetryServerUrl = environment.getTelemetryServerUri(pcastBaseUri);

        if (!this._metricsTransmitters[env]) {
            this._metricsTransmitters[env] = createNewTransmitter.call(this, telemetryServerUrl, env);
        }

        return this._metricsTransmitters[env];
    };

    function createNewTransmitter(uri, env) {
        var transmitter = new MetricsTransmitter(uri, env);

        if (!uri) {
            transmitter.setEnabled(false);
        }

        return transmitter;
    }

    return new MetricsTransmitterFactory();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(16),
    __webpack_require__(2),
    __webpack_require__(23)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, proto, rtc, telemetryProto) {
    var metricsUrl = '/metrics';

    function MetricsTransmitter(uri, environment) {
        assert.isString(uri, 'uri');

        this._domain = typeof location === 'object' ? location.hostname : rtc.browser + '-' + rtc.browserVersion + '-unknown';
        this._isEnabled = true;
        this._browser = (rtc.browser || 'Browser') + '/' + (rtc.browserVersion || '?');
        this._batchHttpProtocol = new proto.BatchHttpProto(uri + metricsUrl, [telemetryProto], 'telemetry.SubmitMetricRecords', {
            maxAttempts: 3,
            maxBufferedRecords: 1000,
            maxBatchSize: 512
        });

        this._mostRecentEnvironment = environment;

        this._batchHttpProtocol.on('capacity', _.bind(onCapacity, this));
    }

    MetricsTransmitter.prototype.isEnabled = function isEnabled() {
        return this._isEnabled;
    };

    MetricsTransmitter.prototype.setEnabled = function setEnabled(enabled) {
        assert.isBoolean(enabled, 'enabled');

        this._isEnabled = enabled;
    };

    MetricsTransmitter.prototype.submitMetric = function submit(metric, since, sessionId, streamId, version, value) {
        if (!this._isEnabled) {
            return;
        }

        assert.isStringNotEmpty(metric, 'metric');
        assert.isObject(value, 'value');

        this._mostRecentRuntime = since;
        this._mostRecentSessionId = sessionId;
        this._mostRecentStreamId = streamId;
        this._mostRecentVersion = version;

        addMetricToRecords.call(this, metric, value);
    };

    function addMetricToRecords(metric, value) {
        var record = _.assign({}, value, {
            metric: metric,
            timestamp: _.isoString(),
            sessionId: this._mostRecentSessionId,
            streamId: this._mostRecentStreamId,
            source: this._browser,
            fullQualifiedName: this._domain,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });

        this._batchHttpProtocol.addRecord(record);
    }

    function onCapacity(deleteRecords) {
        this._batchHttpProtocol.addRecordToBeginning({
            metric: 'MetricDropped',
            value: {uint64: deleteRecords},
            timestamp: _.isoString(),
            sessionId: this._mostRecentSessionId,
            streamId: this._mostRecentStreamId,
            source: this._browser,
            fullQualifiedName: this._domain,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });
    }

    return MetricsTransmitter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable, phenixRTC) {
    'use strict';

    var start = phenixRTC.global['__phenixPageLoadTime'] || phenixRTC.global['__pageLoadTime'] || _.now();
    var sdkVersion = '2022-04-13T15:08:08Z' || false;

    function StreamTelemetry(sessionId, logger, metricsTransmitter) {
        assert.isStringNotEmpty(sessionId, 'sessionId');

        this._version = sdkVersion;
        this._sessionId = sessionId;
        this._properties = {};
        this._logger = logger;
        this._metricsTransmitter = metricsTransmitter;
        this._start = _.now();
        this._disposables = new disposable.DisposableList();
        this._dimensionsTrackedVideos = [];
        this._rebufferingTrackedVideos = [];
        this._playTrackedVideos = [];
        this._timeOfFirstFrame = null;

        logMetric.call(this, 'Stream initializing');
    }

    StreamTelemetry.prototype.setProperty = function(name, value) {
        assert.isStringNotEmpty(name, 'name');
        assert.isStringNotEmpty(value, 'value');

        this._properties[name] = value;
    };

    StreamTelemetry.prototype.recordMetric = function(metric, value, previousValue, additionalProperties) {
        assert.isStringNotEmpty(metric, 'metric');

        var record = _.assign({}, {
            metric: metric,
            elapsed: this.elapsed(),
            value: value,
            previousValue: previousValue
        }, additionalProperties || {});

        recordMetricRecord.call(this, record, since());
    };

    StreamTelemetry.prototype.setStreamId = function(streamId) {
        assert.isStringNotEmpty(streamId, 'streamId');

        if (this._streamId) {
            throw new Error('Stream ID can only be set once.');
        }

        this._streamId = streamId;

        var now = _.now();

        recordMetricRecord.call(this, {
            metric: 'Initialized',
            elapsed: this.elapsed() - now + this._start // Adjust for delay to get the stream ID
        }, since() - (now - this._start) / 1000); // Adjust for delay to get the stream ID);
    };

    StreamTelemetry.prototype.setStartOffset = function(startOffset) {
        assert.isNumber(startOffset, 'startOffset');

        if (this._startOffset) {
            throw new Error('Start offset can only be set once.');
        }

        this._startOffset = startOffset;

        this.recordMetric('Offset', {uint64: startOffset});
    };

    StreamTelemetry.prototype.getStartOffset = function() {
        return this._startOffset;
    };

    StreamTelemetry.prototype.elapsed = function() {
        var now = _.now();

        return now - this._start;
    };

    StreamTelemetry.prototype.stop = function() {
        this._disposables.dispose();

        this.recordMetric('Stopped');

        logMetric.call(this, 'Stream stopped');
    };

    StreamTelemetry.prototype.recordTimeToFirstFrame = function(video) {
        var that = this;
        var startRecordingFirstFrame = _.now();

        // Only record first time to first frame regardless of number of times called
        var listenForFirstFrame = function() {
            if (that._timeOfFirstFrame) {
                return;
            }

            that._timeOfFirstFrame = _.now() - startRecordingFirstFrame;

            that.recordMetric('TimeToFirstFrame', {uint64: that._timeOfFirstFrame});
            logMetric.call(that, 'First frame [%s]', that._timeOfFirstFrame);

            timeToFirstFrameListenerDisposable.dispose();
        };

        _.addEventListener(video, 'loadeddata', listenForFirstFrame);
        _.addEventListener(video, 'loadedmetadata', listenForFirstFrame);

        var timeToFirstFrameListenerDisposable = new disposable.Disposable(function() {
            _.removeEventListener(video, 'loadeddata', listenForFirstFrame);
            _.removeEventListener(video, 'loadedmetadata', listenForFirstFrame);
        });

        // Ensure TTFF is not recorded if stop is called before first frame
        this._disposables.add(timeToFirstFrameListenerDisposable);

        return timeToFirstFrameListenerDisposable;
    };

    // TODO(dy) Add logging for bit rate changes using PC.getStats
    StreamTelemetry.prototype.recordVideoResolutionChanges = function(renderer, video) {
        var that = this;
        var lastResolution = {
            width: video.videoWidth,
            height: video.videoHeight
        };
        var hasListenedToVideo = _.find(this._dimensionsTrackedVideos, function(trackedVideo) {
            return trackedVideo === video;
        });

        if (hasListenedToVideo) {
            return new disposable.Disposable(_.noop);
        }

        this._dimensionsTrackedVideos.push(video);

        var dimensionChangeDisposable = renderer.addVideoDisplayDimensionsChangedCallback(function(renderer, dimensions) {
            if (lastResolution.width === dimensions.width && lastResolution.height === dimensions.height) {
                return;
            }

            that.recordMetric('ResolutionChanged', {string: dimensions.width + 'x' + dimensions.height}, {string: lastResolution.width + 'x' + lastResolution.height});

            lastResolution = {
                width: dimensions.width,
                height: dimensions.height
            };

            logMetric.call(that, 'Resolution changed: width [%s] height [%s]', dimensions.width, dimensions.height);
        });

        this._disposables.add(dimensionChangeDisposable);

        return dimensionChangeDisposable;
    };

    StreamTelemetry.prototype.recordRebuffering = function(video) {
        var that = this;
        var videoStalled;
        var lastProgress;
        var hasListenedToVideo = _.find(this._rebufferingTrackedVideos, function(trackedVideo) {
            return trackedVideo === video;
        });

        if (hasListenedToVideo) {
            return new disposable.Disposable(_.noop);
        }

        this._rebufferingTrackedVideos.push(video);

        var listenForStall = function() {
            if (videoStalled) {
                return;
            }

            that.recordMetric('Stalled');

            videoStalled = _.now();

            logMetric.call(that, '[buffering] Stream has stalled');
        };

        var listenForContinuation = function(event) {
            var bufferLength = video.buffered.length;
            var hasNotProgressedSinceLastProgressEvent = event.type === 'playing'
                                                        || bufferLength > 0 ? (event.type === 'progress'
                                                        || event.type === 'timeupdate')
                                                        && video.buffered.end(bufferLength - 1) === lastProgress : true;

            if (!videoStalled || (!bufferLength && phenixRTC.browser !== 'Edge') || hasNotProgressedSinceLastProgressEvent) {
                return;
            }

            if (event.type === 'progress') {
                lastProgress = video.buffered.end(bufferLength - 1);
            }

            var timeSinceStop = _.now() - videoStalled;

            that.recordMetric('Buffering', {uint64: timeSinceStop});

            logMetric.call(that, '[buffering] Stream has recovered from stall after [%s] milliseconds', timeSinceStop);

            videoStalled = null;
        };

        _.addEventListener(video, 'stalled', listenForStall);
        _.addEventListener(video, 'pause', listenForStall);
        _.addEventListener(video, 'suspend', listenForStall);
        _.addEventListener(video, 'play', listenForContinuation);
        _.addEventListener(video, 'playing', listenForContinuation);
        _.addEventListener(video, 'progress', listenForContinuation);
        _.addEventListener(video, 'timeupdate', listenForContinuation);

        var rebufferingDisposable = new disposable.Disposable(function() {
            _.removeEventListener(video, 'stalled', listenForStall);
            _.removeEventListener(video, 'pause', listenForStall);
            _.removeEventListener(video, 'suspend', listenForStall);
            _.removeEventListener(video, 'play', listenForContinuation);
            _.removeEventListener(video, 'playing', listenForContinuation);
            _.removeEventListener(video, 'progress', listenForContinuation);
            _.removeEventListener(video, 'timeupdate', listenForContinuation);
        });

        this._disposables.add(rebufferingDisposable);

        return rebufferingDisposable;
    };

    StreamTelemetry.prototype.recordVideoPlayingAndPausing = function(video) {
        var that = this;
        var hasListenedToVideo = _.find(this._playTrackedVideos, function(trackedVideo) {
            return trackedVideo === video;
        });

        if (hasListenedToVideo) {
            return new disposable.Disposable(_.noop);
        }

        this._playTrackedVideos.push(video);

        var listenForPlayChange = function() {
            if (video.paused) {
                that.recordMetric('Playing', {boolean: false});
            } else {
                that.recordMetric('Playing', {boolean: true});
            }
        };

        _.addEventListener(video, 'pause', listenForPlayChange);
        _.addEventListener(video, 'playing', listenForPlayChange);

        var playingDisposable = new disposable.Disposable(function() {
            _.removeEventListener(video, 'pause', listenForPlayChange);
            _.removeEventListener(video, 'playing', listenForPlayChange);
        });

        this._disposables.add(playingDisposable);

        return playingDisposable;
    };

    function logMetric() {
        var args = Array.prototype.slice.call(arguments);

        if (args.length === 0) {
            throw new Error('Invalid logging arguments.');
        }

        var streamTelemetryPrepend = '[%s] [StreamTelemetry] [%s] ';
        var message = streamTelemetryPrepend + args[0];
        var loggingArguments = args.slice(1);
        var telemetryArguments = [message, this._streamId, _.now() - this._start].concat(loggingArguments);

        this._logger.debug.apply(this._logger, telemetryArguments);
    }

    function since() {
        var now = _.now();

        return (now - start) / 1000;
    }

    function recordMetricRecord(record, since) {
        assert.isStringNotEmpty(record.metric, 'record.metric');

        var annotatedRecord = _.assign({}, this._properties, record);

        this._metricsTransmitter.submitMetric(record.metric, since, this._sessionId, this._streamId, this._version, annotatedRecord);
    }

    return StreamTelemetry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3),
    __webpack_require__(11),
    __webpack_require__(54),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable, applicationActivityDetector, NetworkMonitor, phenixRTC) {
    'use strict';

    var start = phenixRTC.global['__phenixPageLoadTime'] || phenixRTC.global['__pageLoadTime'] || _.now();
    var sdkVersion = '2022-04-13T15:08:08Z' || false;

    function SessionTelemetry(logger, metricsTransmitter) {
        this._version = sdkVersion;
        this._sessionId = null;
        this._properties = {
            resource: 'session',
            kind: 'event'
        };
        this._logger = logger;
        this._metricsTransmitter = metricsTransmitter;
        this._networkMonitor = new NetworkMonitor(this._logger);
        this._start = _.now();
        this._disposables = new disposable.DisposableList();
        this._records = [];

        this._disposables.add(applicationActivityDetector.onBackground(_.bind(recordForegroundChange, this, false)));
        this._disposables.add(applicationActivityDetector.onForeground(_.bind(recordForegroundChange, this, true)));

        if (!this._networkMonitor.isSupported()) {
            return;
        }

        this._disposables.add(this._networkMonitor.onNetworkChange(_.bind(logNetworkStatsChange, this)));
        this._disposables.add(this._networkMonitor);

        recordNetworkTypeState.call(this);
        recordNetworkDownlinkThroughputCapacity.call(this);
        recordNetworkRTT.call(this);
    }

    SessionTelemetry.prototype.setSessionId = function(sessionId) {
        if (!sessionId && this._sessionId) {
            recordMetricRecord.call(this, {
                metric: 'Stopped',
                elapsed: this.elapsed()
            }, since());
        }

        this._sessionId = sessionId;

        if (sessionId) {
            recordMetricRecord.call(this, {
                metric: 'Initialized',
                elapsed: this.elapsed()
            }, since());
            recordAllMetrics.call(this);
            recordForegroundState.call(this);

            if (this._networkMonitor.isSupported()) {
                recordNetworkTypeState.call(this);
                recordNetworkDownlinkThroughputCapacity.call(this);
                recordNetworkRTT.call(this);
            }
        }
    };

    SessionTelemetry.prototype.setProperty = function(name, value) {
        assert.isStringNotEmpty(name, 'name');
        assert.isStringNotEmpty(value, 'value');

        this._properties[name] = value;
    };

    SessionTelemetry.prototype.recordMetric = function(metric, value, previousValue, additionalProperties) {
        assert.isStringNotEmpty(metric, 'metric');

        var record = _.assign({}, {
            metric: metric,
            elapsed: this.elapsed(),
            value: value,
            previousValue: previousValue
        }, additionalProperties || {});

        recordMetricRecord.call(this, record, since());
    };

    SessionTelemetry.prototype.elapsed = function() {
        var now = _.now();

        return now - this._start;
    };

    SessionTelemetry.prototype.dispose = function() {
        this._disposables.dispose();

        this.recordMetric('Stopped');

        logMetric.call(this, 'Session telemetry stopped');
    };

    function recordForegroundState() {
        var isForeground = applicationActivityDetector.isForeground();
        var timeSinceLastChange = applicationActivityDetector.getTimeSinceLastChange();
        var metric = isForeground ? 'ApplicationForeground' : 'ApplicationBackground';

        this.recordMetric(metric, {uint64: timeSinceLastChange});

        logMetric.call(this, 'Session has started in the [%s] after [%s] ms', isForeground ? 'foreground' : 'background', timeSinceLastChange);
    }

    function recordForegroundChange(isForeground, timeSinceLastChange) {
        var metric = isForeground ? 'ApplicationForeground' : 'ApplicationBackground';

        this.recordMetric(metric, {uint64: timeSinceLastChange});

        logMetric.call(this, 'Application has gone into the [%s] after [%s] ms', isForeground ? 'foreground' : 'background', timeSinceLastChange);
    }

    function recordNetworkTypeState() {
        var type = this._networkMonitor.getEffectiveType();

        this.recordMetric('NetworkType', {string: type}, null, {resource: phenixRTC.browser});

        logMetric.call(this, '[%s] has started with Network effective type of [%s]', this._sessionId ? 'Session' : 'Application', type);
    }

    function recordNetworkTypeChange(newType, previousType) {
        var newNetworkType = newType || this._networkMonitor.getEffectiveType();
        var previousNetworkType = previousType;

        this.recordMetric('NetworkType', {string: newNetworkType}, {string: previousNetworkType}, {resource: phenixRTC.browser});

        logMetric.call(this, 'Network effective type has changed to [%s] from [%s]', newNetworkType, previousNetworkType || 'New');
    }

    function recordNetworkRTT(newValue, oldValue) {
        var newRTT = newValue || this._networkMonitor.getRoundTripTime();
        var oldRTT = oldValue || -1;

        this.recordMetric('RoundTripTime', {uint32: newRTT}, {uint32: oldRTT}, {resource: phenixRTC.browser});

        if (_.isNullOrUndefined(oldValue)) {
            return logMetric.call(this, 'Network RTT [%s]', newRTT);
        }

        logMetric.call(this, 'Network RTT changed to [%s] from [%s]', newRTT, oldRTT);
    }

    function recordNetworkDownlinkThroughputCapacity(newValue, oldValue) {
        var newCapacity = newValue || this._networkMonitor.getDownlinkThroughputCapacity();
        var oldCapacity = oldValue || -1;

        this.recordMetric('DownlinkThroughputCapacity', {float: newCapacity}, {float: oldCapacity}, {resource: phenixRTC.browser});

        if (_.isNullOrUndefined(oldValue)) {
            return logMetric.call(this, 'Network downlink throughput capacity [%s]', newCapacity);
        }

        logMetric.call(this, 'Network downlink throughput capacity changed to [%s] from [%s]', newCapacity, oldCapacity);
    }

    function logNetworkStatsChange(newStats, oldStats) {
        if (oldStats.downlinkThroughputCapacity !== newStats.downlinkThroughputCapacity) {
            recordNetworkDownlinkThroughputCapacity.call(this, newStats.downlinkThroughputCapacity, oldStats.downlinkThroughputCapacity);
        }

        if (oldStats.rtt !== newStats.rtt) {
            recordNetworkRTT.call(this, newStats.rtt, oldStats.rtt);
        }

        if (oldStats.effectiveType !== newStats.effectiveType) {
            recordNetworkTypeChange.call(this, newStats.effectiveType, oldStats.effectiveType);
        }
    }

    function logMetric() {
        var args = Array.prototype.slice.call(arguments);

        if (args.length === 0) {
            throw new Error('Invalid logging arguments.');
        }

        var sessionTelemetryPrepend = '[%s] [SessionTelemetry] [%s] ';
        var message = sessionTelemetryPrepend + args[0];
        var loggingArguments = args.slice(1);
        var telemetryArguments = [message, this._sessionId, _.now() - this._start].concat(loggingArguments);

        this._logger.info.apply(this._logger, telemetryArguments);
    }

    function since() {
        var now = _.now();

        return (now - start) / 1000;
    }

    function recordMetricRecord(record, since) {
        assert.isStringNotEmpty(record.metric, 'record.metric');

        if (!this._sessionId) {
            return this._records.push({
                record: record,
                since: since
            });
        }

        var annotatedRecord = _.assign({}, this._properties, record);

        this._metricsTransmitter.submitMetric(record.metric, since, this._sessionId, null, this._version, annotatedRecord);
    }

    function recordAllMetrics() {
        if (!this._sessionId) {
            return;
        }

        var that = this;
        var numberOfRecordsToPush = this._records.length;

        while (numberOfRecordsToPush > 0) {
            var records = this._records.splice(numberOfRecordsToPush - 1, 1);

            if (records.length === 1) {
                recordMetricRecord.call(that, records[0].record, records[0].since);
            }

            numberOfRecordsToPush--;
        }
    }

    return SessionTelemetry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(3),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, disposable, rtc) {
    function NetworkMonitor(logger) {
        assert.isObject(logger, 'logger');

        this._logger = logger;
        this._namedEvents = new event.NamedEvents();
        this._disposables = new disposable.DisposableList();

        this._disposables.add(this._namedEvents);

        if (!this.isSupported()) {
            return this._logger.info('Network monitor is not supported.');
        }

        this._lastNetworkStats = getStats.call(this);

        detectNetworkTypeChange.call(this);
    }

    NetworkMonitor.prototype.isSupported = function() {
        return rtc.global.navigator && rtc.global.navigator.connection;
    };

    NetworkMonitor.prototype.getDownlinkThroughputCapacity = function() {
        if (!this.isSupported()) {
            return -1;
        }

        return rtc.global.navigator.connection.downlink || rtc.global.navigator.connection.downlinkMax;
    };

    NetworkMonitor.prototype.getEffectiveType = function() {
        if (!this.isSupported()) {
            return 'Unknown';
        }

        return rtc.global.navigator.connection.effectiveType || rtc.global.navigator.connection.type;
    };

    NetworkMonitor.prototype.getRoundTripTime = function() {
        if (!this.isSupported()) {
            return -1;
        }

        return rtc.global.navigator.connection.rtt || rtc.global.navigator.connection.type;
    };

    NetworkMonitor.prototype.onNetworkChange = function(callback) {
        if (!this.isSupported()) {
            return;
        }

        assert.isFunction(callback, 'callback');

        return this._namedEvents.listen('NetworkChange', callback);
    };

    NetworkMonitor.prototype.dispose = function() {
        this._disposables.dispose();
    };

    function getStats() {
        return {
            downlinkThroughputCapacity: this.getDownlinkThroughputCapacity(),
            effectiveType: this.getEffectiveType(),
            rtt: this.getRoundTripTime()
        };
    }

    function detectNetworkTypeChange() {
        var that = this;

        navigator.connection.addEventListener('change', function() {
            that._namedEvents.fireAsync('NetworkChange', [getStats.call(that), that._lastNetworkStats]);

            that._lastNetworkStats = getStats.call(that);
        });
    }

    return NetworkMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, streamEnums) {
    'use strict';

    function StreamWrapper(type, stream, logger) {
        assert.isStringNotEmpty(type, 'type');
        assert.isObject(stream, 'stream');
        assert.isObject(logger, 'logger');

        this._type = type;
        this._stream = stream;
        this._logger = logger;
        this._onPlayerEnd = null;

        var that = this;

        this._stream.on(streamEnums.streamEvents.playerEnded.name, function(reason) {
            that._logger.info('[%s] [%s] player ended.', that._stream.getStreamId(), that._type);

            that._playerEnded = true;

            if (that._onPlayerEnd) {
                return that._onPlayerEnd();
            }

            that.streamEndedCallback(StreamWrapper.getStreamEndedStatus(reason), reason);
        });
    }

    StreamWrapper.prototype.toString = function() {
        return 'Stream[' + (this._stream ? this._stream.getStreamId() : '') + ']';
    };

    StreamWrapper.prototype.on = function(name, callback) {
        return this._stream.on(name, callback);
    };

    // TODO(DY) Remove once 'on' is implemented on all Phenix Stream objects
    StreamWrapper.prototype.streamErrorCallback = function(errorSource, error) {
        if (!_.isFunction(this._stream.streamErrorCallback)) {
            this._logger.error('[%s] [%s] stream error event [%s]', this._stream.getStreamId(), this._type, error);
        } else {
            this._logger.debug('[%s] [%s] stream error event [%s]', this._stream.getStreamId(), this._type, error);
            this._stream.streamErrorCallback(this._stream, errorSource, error);
        }
    };

    StreamWrapper.prototype.streamEndedCallback = function(status, reason, waitForPlayerEnd) {
        var renderer = this._stream.getRenderer();

        if (this._isStreamEnded) {
            return;
        }

        if (waitForPlayerEnd && !this._onPlayerEnd && this._stream.isActive() && renderer && !this._playerEnded) {
            this._onPlayerEnd = _.bind(this.streamEndedCallback, this, status, reason);

            this._logger.info('[%s] [%s] stream ended. Waiting for end of player.', this._stream.getStreamId(), this._type);

            if (renderer) {
                renderer.stop(reason, waitForPlayerEnd);
            }

            return;
        }

        this._isStreamEnded = true;

        if (_.isFunction(this._stream.streamEndedCallback)) {
            this._stream.streamEndedCallback(this._stream, status, reason);
        }

        this._stream.stop(reason);

        if (renderer) {
            renderer.stop(reason, waitForPlayerEnd);
        }
    };

    StreamWrapper.prototype.dataQualityChangedCallback = function(status, reason) {
        var renderer = this._stream.getRenderer();

        if (!renderer) {
            return;
        }

        if (_.isFunction(renderer.dataQualityChangedCallback)) {
            renderer.dataQualityChangedCallback(renderer, status, reason);
        }
    };

    StreamWrapper.prototype.getPhenixMediaStream = function() {
        return this._stream;
    };

    StreamWrapper.getStreamEndedStatus = function getStreamEndedStatus(value) {
        switch (value) {
        case '':
        case 'none':
        case 'ended':
            return 'ended';
        case 'server-error':
        case 'session-error':
        case 'not-ready':
        case 'error':
        case 'died':
            return 'failed';
        case 'censored':
            return 'censored';
        case 'maintenance':
            return 'maintenance';
        case 'capacity':
            return 'capacity';
        case 'app-background':
            return 'app-background';
        case 'egress-failed':
            return 'egress-failed';
        case 'egress-setup-failed':
            return 'egress-setup-failed';
        case 'overload':
            return 'overload';
        default:
            return 'custom';
        }
    };

    return StreamWrapper;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(7),
    __webpack_require__(3),
    __webpack_require__(2),
    __webpack_require__(9),
    __webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, http, disposable, rtc, DimensionsChangedMonitor, streamEnums) {
    'use strict';

    var widevineServiceCertificate = null;
    var defaultBandwidthEstimateForPlayback = 2000000; // 2Mbps will select 720p by default

    function ShakaRenderer(streamId, uri, streamTelemetry, options, shaka, logger) {
        this._logger = logger;
        this._streamId = streamId;
        this._manifestUri = encodeURI(uri).replace(/[#]/g, '%23');
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._lastProgress = {
            time: 0,
            buffered: null,
            averageLength: 0,
            count: 0
        };
        this._namedEvents = new event.NamedEvents();
        this._disposables = new disposable.DisposableList();
        this._shaka = shaka;

        this._onStalled = _.bind(stalled, this);
        this._onProgress = _.bind(onProgress, this);
        this._onEnded = _.bind(ended, this);
    }

    ShakaRenderer.prototype.on = function(name, callback) {
        return this._namedEvents.listen(name, callback);
    };

    ShakaRenderer.prototype.start = function(elementToAttachTo) {
        var that = this;

        that._player = new this._shaka.Player(elementToAttachTo);

        this._disposables.add(this._streamTelemetry.recordTimeToFirstFrame(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordRebuffering(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordVideoResolutionChanges(this, elementToAttachTo));

        var playerConfig = {
            abr: {defaultBandwidthEstimate: defaultBandwidthEstimateForPlayback},
            manifest: {retryParameters: {timeout: 10000}},
            streaming: {
                rebufferingGoal: 2,
                bufferingGoal: 10,
                bufferBehind: 30,
                retryParameters: {
                    timeout: 10000,
                    maxAttempts: 10,
                    backoffFactor: 1.1
                }
            }
        };

        if (this._options.isDrmProtectedContent) {
            checkBrowserSupportForWidevineDRM.call(that);
            unwrapLicenseResponse.call(that, that._player);
            addDrmSpecificsToPlayerConfig.call(that, playerConfig, that._options, function(err, updatedPlayerConfig) {
                if (!err) {
                    loadPlayer(updatedPlayerConfig);
                } else {
                    that._logger.error('Failed to add DRM configuration to shaka player', err);

                    throw err;
                }
            });
        } else {
            loadPlayer(playerConfig);
        }

        function loadPlayer(config) {
            that._player.configure(config);

            if (that._options.receiveAudio === false) {
                elementToAttachTo.muted = true;
            }

            _.addEventListener(that._player, 'error', function(e) {
                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['player', e]);
            });

            _.addEventListener(elementToAttachTo, 'stalled', that._onStalled, false);
            _.addEventListener(elementToAttachTo, 'pause', that._onStalled, false);
            _.addEventListener(elementToAttachTo, 'suspend', that._onStalled, false);
            _.addEventListener(elementToAttachTo, 'progress', that._onProgress, false);
            _.addEventListener(elementToAttachTo, 'ended', that._onEnded, false);

            that._player.load(that._manifestUri).then(function() {
                that._logger.info('[%s] DASH live stream has been loaded', that._streamId);

                if (_.isFunction(elementToAttachTo.play)) {
                    elementToAttachTo.play();
                }
            }).catch(function(e) {
                that._logger.error('[%s] Error while loading DASH live stream [%s]', that._streamId, e.code, e);

                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['shaka', e]);
            });

            if (!that._options.capabilities.includes('audio-only')) {
                that._dimensionsChangedMonitor.start(this, elementToAttachTo);
            }

            that._element = elementToAttachTo;
        }

        return elementToAttachTo;
    };

    ShakaRenderer.prototype.stop = function(reason, waitForLastChunk) {
        var that = this;

        if (that._waitingForFinalization) {
            return;
        }

        if (waitForLastChunk) {
            return that._waitForLastChunk = true;
        }

        this._dimensionsChangedMonitor.stop();

        this._disposables.dispose();

        if (this._player) {
            var finalizeStreamEnded = function finalizeStreamEnded() {
                var reason = '';

                if (that._element) {
                    _.removeEventListener(that._element, 'stalled', that._onStalled, false);
                    _.removeEventListener(that._element, 'pause', that._onStalled, false);
                    _.removeEventListener(that._element, 'suspend', that._onStalled, false);
                    _.removeEventListener(that._element, 'progress', that._onProgress, false);
                    _.removeEventListener(that._element, 'ended', that._onEnded, false);

                    if (rtc.browser === 'Edge') {
                        that._element.src = '';
                    }
                }

                that._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);

                that._player = null;
                that._element = null;
            };

            var destroyIgnored = that._player.destroy()
                .then(function() {
                    that._logger.info('[%s] Shaka live stream player has been destroyed', that._streamId);
                }).then(function() {
                    finalizeStreamEnded();
                }).catch(function(e) {
                    that._logger.error('[%s] Error while destroying shaka live stream player [%s]', that._streamId, e.code, e);

                    finalizeStreamEnded();

                    that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['shaka', e]);
                });

            that._waitingForFinalization = true;
        }
    };

    ShakaRenderer.prototype.getStats = function() {
        if (!this._player) {
            return {
                width: 0,
                height: 0,
                currentTime: 0,
                lag: 0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var stat = _.assign(this._player.getStats(), {
            currentTime: 0,
            lag: 0
        });
        var currentTime = _.get(this._element, ['currentTime'], 0);
        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;
        var lag = Math.max(0.0, trueCurrentTime - currentTime);

        if (this._element) {
            stat.currentTime = currentTime;
            stat.lag = lag;
        }

        if (stat.estimatedBandwidth > 0) {
            stat.networkState = streamEnums.networkStates.networkLoading.id;
        } else if (stat.playTime > 0) {
            stat.networkState = streamEnums.networkStates.networkIdle.id;
        } else if (stat.video) {
            stat.networkState = streamEnums.networkStates.networkEmpty.id;
        } else {
            stat.networkState = streamEnums.networkStates.networkNoSource.id;
        }

        return stat;
    };

    ShakaRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    ShakaRenderer.prototype.getPlayer = function() {
        return this._player;
    };

    ShakaRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        return this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function onProgress() {
        this._lastProgress.time = _.now();

        if (this._element.buffered.length === 0) {
            return this._logger.debug('[%s] Shaka live stream player progress event fired without any buffered content', this._streamId);
        }

        var bufferedEnd = this._element.buffered.end(this._element.buffered.length - 1);

        if (this._lastProgress.buffered === bufferedEnd) {
            return;
        }

        // Start and end times are unreliable for overall length of stream.
        if (this._lastProgress.buffered !== null) {
            var oldTimeElapsed = this._lastProgress.averageLength * this._lastProgress.count;
            var newTimeElapsed = oldTimeElapsed + (bufferedEnd - this._lastProgress.buffered);

            this._lastProgress.count += 1;
            this._lastProgress.averageLength = newTimeElapsed / this._lastProgress.count;
        }

        this._lastProgress.buffered = bufferedEnd;
    }

    function stalled() {
        var that = this;

        that._logger.info('[%s] Loading Shaka live stream player stream stalled.', that._streamId);

        if (that._lastProgress.time === 0) {
            return;
        }

        setTimeout(function() {
            if (_.now() - that._lastProgress.time > getTimeoutOrMinimum.call(that) && that._waitForLastChunk) {
                that.stop('ended');
            }
        }, getTimeoutOrMinimum.call(that));
    }

    function getTimeoutOrMinimum() {
        return this._lastProgress.averageLength * 1.5 < 2000 ? 2000 : this._lastProgress.averageLength * 1.5;
    }

    function ended() {
        this._logger.info('[%s] Shaka live stream player ended.', this._streamId);
    }

    function checkBrowserSupportForWidevineDRM() {
        var error;

        if (!_.isFunction(Uint8Array)) {
            error = 'Uint8Array support required for DRM';
            this._logger.error(error);

            throw new Error(error);
        }

        if (!_.isFunction(rtc.global.atob)) {
            error = 'rtc.global.atob support required for DRM';
            this._logger.error(error);

            throw new Error(error);
        }
    }

    function unwrapLicenseResponse(player) {
        var that = this;

        player.getNetworkingEngine().registerResponseFilter(function(type, response) {
            // Only manipulate license responses:
            if (type.toString() === that._shaka.net.NetworkingEngine.RequestType.LICENSE.toString()) {
                var binaryResponseAsTypedArray = new Uint8Array(response.data);
                var responseAsString = String.fromCharCode.apply(null, binaryResponseAsTypedArray);
                var parsedResponse = JSON.parse(responseAsString);
                var base64License = parsedResponse.license;
                var decodedLicense = rtc.global.atob(base64License);

                response.data = new Uint8Array(decodedLicense.length);

                for (var i = 0; i < decodedLicense.length; ++i) {
                    response.data[i] = decodedLicense.charCodeAt(i);
                }

                if (parsedResponse.trackRestrictions) {
                    player.configure({restrictions: parsedResponse.trackRestrictions});
                }
            }
        });
    }

    function addDrmSpecificsToPlayerConfig(playerConfig, options, callback) {
        if (!playerConfig.drm) {
            playerConfig.drm = {};
        }

        if (!playerConfig.drm.advanced) {
            playerConfig.drm.advanced = {};
        }

        if (!playerConfig.manifest) {
            playerConfig.manifest = {};
        }

        if (!playerConfig.manifest.dash) {
            playerConfig.manifest.dash = {};
        }

        // Add browser specific DRM calls here
        // Currently we support Widevine only
        addWidevineConfigToPlayerConfig.call(this, playerConfig, options, callback);
    }

    // ToDo pull into singleton so widevineServiceCertificate stays per browser session
    function addWidevineConfigToPlayerConfig(playerConfig, options, callback) {
        playerConfig['manifest']['dash']['customScheme'] = function(element) {
            if (element.getAttribute('schemeIdUri') === 'com.phenixrts.widevine' || element.getAttribute('schemeIdUri') === 'com.phenixp2p.widevine') {
                return [{
                    keySystem: 'com.widevine.alpha',
                    licenseServerUri: decodeURIComponent(element.getAttribute('widevineLicenseServerUrl'))
                }];
            }
        };

        function addToPlayerconfig(error, serverCertificateResponse) {
            if (error) {
                callback(error);

                return;
            }

            widevineServiceCertificate = serverCertificateResponse.data; // Cache so that we can reuse

            playerConfig.drm.advanced['com.widevine.alpha'] = {
                'serverCertificate': convertBinaryStringToUint8Array(serverCertificateResponse.data),
                'persistentStateRequired': true,
                'distinctiveIdentifierRequired': false
            };

            callback(null, playerConfig);
        }

        if (widevineServiceCertificate) {
            addToPlayerconfig(null, widevineServiceCertificate);
        } else {
            http.get(options.widevineServiceCertificateUrl, {mimeType: 'text/plain; charset=x-user-defined'}, addToPlayerconfig);
        }
    }

    function convertBinaryStringToUint8Array(bStr) {
        var len = bStr.length;
        var u8Array = new Uint8Array(len); // eslint-disable-line no-undef

        for (var i = 0; i < len; i++) {
            u8Array[i] = bStr.charCodeAt(i);
        }

        return u8Array;
    }

    return ShakaRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(8),
    __webpack_require__(5),
    __webpack_require__(7),
    __webpack_require__(3),
    __webpack_require__(2),
    __webpack_require__(9),
    __webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, logging, event, http, disposable, rtc, DimensionsChangedMonitor, streamEnums) {
    'use strict';

    var bandwidthAt720 = 3000000;
    var timeoutForStallWithoutProgressToRestart = 6000;
    var minTimeBeforeNextReload = 15000;
    var originStreamReadyDuration = 6000;

    function PhenixPlayerRenderer(streamId, uri, streamTelemetry, options, webPlayer, logger) {
        this._logger = logger;
        this._streamId = streamId;
        this._manifestUri = encodeURI(uri).replace(/[#]/g, '%23');
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._webPlayer = webPlayer;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._lastProgress = {
            time: 0,
            buffered: null,
            averageLength: 0,
            count: 0,
            lastCurrentTime: 0,
            lastCurrentTimeOccurenceTimestamp: 0
        };
        this._namedEvents = new event.NamedEvents();
        this._disposables = new disposable.DisposableList();

        this._onStalled = _.bind(stalled, this);
        this._onProgress = _.bind(onProgress, this);
        this._onEnded = _.bind(ended, this);
    }

    PhenixPlayerRenderer.isSupported = function() {
        return this._webPlayer && this._webPlayer.isSupported;
    };

    PhenixPlayerRenderer.prototype.on = function(name, callback) {
        return this._namedEvents.listen(name, callback);
    };

    PhenixPlayerRenderer.prototype.start = function(elementToAttachTo) {
        var that = this;
        var loggerAtInfoThreshold = createInfoThresholdLogger(this._logger);

        this._throttledLogger = loggerAtInfoThreshold;
        this._element = elementToAttachTo;

        this._disposables.add(this._streamTelemetry.recordTimeToFirstFrame(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordRebuffering(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordVideoResolutionChanges(this, elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordVideoPlayingAndPausing(elementToAttachTo));

        setupPlayer.call(that);

        if (that._options.receiveAudio === false) {
            elementToAttachTo.muted = true;
        }

        _.addEventListener(elementToAttachTo, 'stalled', that._onStalled, false);
        _.addEventListener(elementToAttachTo, 'pause', that._onStalled, false);
        _.addEventListener(elementToAttachTo, 'suspend', that._onStalled, false);
        _.addEventListener(elementToAttachTo, 'progress', that._onProgress, false);
        _.addEventListener(elementToAttachTo, 'ended', that._onEnded, false);

        if (!this._options.capabilities.includes('audio-only')) {
            this._dimensionsChangedMonitor.start(this, elementToAttachTo);
        }

        return elementToAttachTo;
    };

    PhenixPlayerRenderer.prototype.stop = function(reason, waitForLastChunk) {
        var that = this;

        if (that._waitingForFinalization) {
            return;
        }

        if (waitForLastChunk) {
            return that._waitForLastChunk = true;
        }

        this._dimensionsChangedMonitor.stop();

        this._disposables.dispose();

        if (this._player) {
            var finalizeStreamEnded = function finalizeStreamEnded() {
                var reason = '';

                if (that._element) {
                    _.removeEventListener(that._element, 'stalled', that._onStalled, false);
                    _.removeEventListener(that._element, 'pause', that._onStalled, false);
                    _.removeEventListener(that._element, 'suspend', that._onStalled, false);
                    _.removeEventListener(that._element, 'progress', that._onProgress, false);
                    _.removeEventListener(that._element, 'ended', that._onEnded, false);

                    if (rtc.browser === 'Edge') {
                        that._element.src = '';
                    }
                }

                that._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);

                that._player = null;
                that._element = null;
            };

            that._waitingForFinalization = true;

            try {
                that._player.dispose();

                that._logger.info('[%s] Phenix stream has been destroyed', that._streamId);

                finalizeStreamEnded();
            } catch (e) {
                that._logger.error('[%s] Error while destroying Phenix stream player [%s]', that._streamId, e.code, e);

                finalizeStreamEnded();

                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['phenix-player', e]);
            }
        }
    };

    PhenixPlayerRenderer.prototype.getStats = function() {
        if (!this._player) {
            return {
                width: 0,
                height: 0,
                currentTime: 0.0,
                lag: 0.0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var stat = this._player.getStats();
        var currentTime = stat.currentTime || this._element.currentTime;
        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;

        if (stat.isNative && stat.deliveryType === 'Hls') {
            stat.currentTime = trueCurrentTime - stat.lag;
        }

        if (!stat.isNative) {
            stat.lag = Math.max(0.0, trueCurrentTime - currentTime);
        }

        if (stat.estimatedBandwidth > 0) {
            stat.networkState = streamEnums.networkStates.networkLoading.id;
        } else if (stat.playTime > 0) {
            stat.networkState = streamEnums.networkStates.networkIdle.id;
        } else if (stat.video) {
            stat.networkState = streamEnums.networkStates.networkEmpty.id;
        } else {
            stat.networkState = streamEnums.networkStates.networkNoSource.id;
        }

        return stat;
    };

    PhenixPlayerRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    PhenixPlayerRenderer.prototype.getPlayer = function() {
        return this._player;
    };

    PhenixPlayerRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        return this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function setupPlayer() {
        var that = this;
        var playerOptions = _.assign({bandwidthToStartAt: bandwidthAt720}, that._options);

        if (_.includes(this._manifestUri, '.mpd')) {
            if (that._options.isDrmProtectedContent) {
                playerOptions.drm = {
                    'com.widevine.alpha': {
                        serverCertificateUrl: that._options.widevineServiceCertificateUrl,
                        mediaKeySystemConfiguration: {persistentState: 'required'}
                    },
                    'com.microsoft.playready': {licenseServerUrl: that._options.playreadyLicenseUrl}
                };
            }
        }

        var webPlayer = new this._webPlayer.WebPlayer(this._throttledLogger, this._element, playerOptions);
        var timeSinceOriginStreamStart = _.now() - this._options.originStartTime;

        if (timeSinceOriginStreamStart < originStreamReadyDuration && this._options.isDrmProtectedContent && _.includes(this._manifestUri, '.m3u8')) {
            setTimeout(_.bind(webPlayer.start, webPlayer, that._manifestUri), originStreamReadyDuration);
        } else {
            webPlayer.start(that._manifestUri);
        }

        that._player = webPlayer;

        _.addEventListener(that._player, 'error', _.bind(handleError, that));
    }

    function handleError(e) {
        if (canReload.call(this) && e && (e.code === 3 || e.severity === this._webPlayer.errors.severity.RECOVERABLE)) {
            this._logger.warn('Reloading unhealthy stream after error event [%s]', e);

            return reloadIfAble.call(this);
        }

        this._namedEvents.fire(streamEnums.rendererEvents.error.name, ['phenix-player', e]);
    }

    function reload() {
        this._player.dispose();

        this._player = null;

        this.start(this._element);
    }

    function reloadIfAble() {
        if (!canReload.call(this)) {
            return;
        }

        this._logger.warn('Reloading unhealthy stream that was active for at least [%s] seconds', minTimeBeforeNextReload / 1000);

        this._lastReloadTime = _.now();

        reload.call(this);
    }

    function canReload() {
        var hasElapsedMinTimeSinceLastReload = !this._lastReloadTime || _.now() - this._lastReloadTime > minTimeBeforeNextReload;

        return this._element && !this._waitForLastChunk && this._player && this._element.buffered.length !== 0 && hasElapsedMinTimeSinceLastReload;
    }

    function onProgress() {
        this._lastProgress.time = _.now();

        if (this._element.buffered.length === 0) {
            return this._logger.debug('[%s] Phenix stream player progress event fired without any buffered content', this._streamId);
        }

        var bufferedEnd = this._element.buffered.end(this._element.buffered.length - 1);

        if (this._lastProgress.buffered === bufferedEnd) {
            return;
        }

        // Start and end times are unreliable for overall length of stream.
        if (this._lastProgress.buffered !== null) {
            var oldTimeElapsed = this._lastProgress.averageLength * this._lastProgress.count;
            var newTimeElapsed = oldTimeElapsed + (bufferedEnd - this._lastProgress.buffered);
            var isStalled = this._lastProgress.lastCurrentTime === this._element.currentTime;

            this._lastProgress.count += 1;
            this._lastProgress.averageLength = newTimeElapsed / this._lastProgress.count;

            if (!isStalled) {
                this._lastProgress.lastCurrentTimeOccurenceTimestamp = _.now();
            }

            var hasExceededStallTimeout = this._lastProgress.lastCurrentTimeOccurenceTimestamp && _.now() - this._lastProgress.lastCurrentTimeOccurenceTimestamp > timeoutForStallWithoutProgressToRestart;

            if (isStalled && hasExceededStallTimeout && this._element && !this._element.paused && canReload.call(this)) {
                this._logger.warn('Reloading stream after current time has not changed for [%s] seconds due to unregistered stall.', timeoutForStallWithoutProgressToRestart / 1000);

                reloadIfAble.call(this);
            }
        }

        this._lastProgress.buffered = bufferedEnd;
        this._lastProgress.lastCurrentTime = this._element.currentTime;
    }

    function stalled(event) {
        var that = this;

        that._logger.info('[%s] Loading Phenix Live stream player stalled caused by [%s] event.', that._streamId, event.type);

        if (that._lastProgress.time === 0 || that._element.paused) {
            return;
        }

        var currentVideoTime = that._element.currentTime;

        setTimeout(function() {
            if (_.now() - that._lastProgress.time > getTimeoutOrMinimum.call(that) && that._waitForLastChunk) {
                that.stop('ended');
            }
        }, getTimeoutOrMinimum.call(that));

        setTimeout(function() {
            if (that._element && that._element.currentTime === currentVideoTime && !that._element.paused && canReload.call(that)) {
                that._logger.warn('Reloading stream after being stalled for [%s] seconds', timeoutForStallWithoutProgressToRestart / 1000);

                reloadIfAble.call(that);
            }
        }, timeoutForStallWithoutProgressToRestart);
    }

    function getTimeoutOrMinimum() {
        return this._lastProgress.averageLength * 1.5 < 2000 ? 2000 : this._lastProgress.averageLength * 1.5;
    }

    function ended() {
        this._logger.info('[%s] Phenix stream player ended.', this._streamId);
    }

    function createInfoThresholdLogger(logger) {
        var appenders = logger.getAppenders();
        var throttledLogger = new logging.Logger();

        _.forEach(appenders, function(appender) {
            if (appender instanceof logging.ConsoleAppender) {
                appender = new logging.ConsoleAppender();

                appender.setThreshold(logging.level.INFO);
            }

            throttledLogger.addAppender(appender);
        });

        throttledLogger.setUserId(logger.getUserId());
        throttledLogger.setEnvironment(logger.getEnvironment());
        throttledLogger.setApplicationVersion(logger.getApplicationVersion());
        throttledLogger.setObservableSessionId(logger.getObservableSessionId());

        return throttledLogger;
    }

    return PhenixPlayerRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(8),
    __webpack_require__(5),
    __webpack_require__(7),
    __webpack_require__(3),
    __webpack_require__(2),
    __webpack_require__(9),
    __webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, logging, event, http, disposable, rtc, DimensionsChangedMonitor, streamEnums) {
    'use strict';

    var timeoutForStallWithoutProgressToRestart = 6000;
    var minTimeBeforeNextReload = 15000;
    var mostRecentSwfFile = 'rtmp-flash-renderer-2019.2.18.swf';
    var defaultSwfFileSrcs = {
        local: 'https://local.phenixrts.com/public/rtmp/' + mostRecentSwfFile,
        staging: 'https://stg.phenixrts.com/public/rtmp/' + mostRecentSwfFile,
        production: 'https://phenixrts.com/public/rtmp/' + mostRecentSwfFile
    };

    function FlashRenderer(streamId, streamsInfo, streamTelemetry, options, logger) {
        assert.isObject(options, 'options');

        if (options.env) {
            assert.isStringNotEmpty(options.env, 'options.env');
        }

        var defaultSwfFileSrc = defaultSwfFileSrcs[options.env || 'production'];

        this._logger = logger;
        this._streamId = streamId;
        this._streamsInfo = _.map(streamsInfo, function(info) {
            info.uri = encodeURI(info.uri).replace(/[#]/g, '%23');

            return info;
        });
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._renderer = null;
        this._phenixVideo = null;
        this._playerElement = null;
        this._namedEvents = new event.NamedEvents();
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._disposables = new disposable.DisposableList();

        this._onStalled = _.bind(stalled, this);
        this._onEnded = _.bind(ended, this);
        this._onError = _.bind(handleError, this);
        this._swfSrc = options.swfSrc || defaultSwfFileSrc;
    }

    FlashRenderer.isSupported = function() {
        return detectFlashPlugin();
    };

    FlashRenderer.prototype.on = function(name, callback) {
        return this._namedEvents.listen(name, callback);
    };

    FlashRenderer.prototype.start = function(elementToAttachTo) {
        var that = this;
        var options = {
            streamId: this._streamId,
            swfSrc: this._swfSrc
        };

        this._originElement = elementToAttachTo;
        this._phenixVideo = new rtc.PhenixFlashVideo(elementToAttachTo, this._streamsInfo, options);

        this._phenixVideo.hookUpEvents();

        this._playerElement = this._phenixVideo.getElement();

        this._disposables.add(this._streamTelemetry.recordTimeToFirstFrame(this._originElement));
        this._disposables.add(this._streamTelemetry.recordRebuffering(this._originElement));
        this._disposables.add(this._streamTelemetry.recordVideoResolutionChanges(this, this._originElement));
        this._disposables.add(this._streamTelemetry.recordVideoPlayingAndPausing(this._originElement));

        if (this._playerElement) {
            this._playerElement.play();
        }

        _.addEventListener(this._originElement, 'stalled', that._onStalled, false);
        _.addEventListener(this._originElement, 'pause', that._onStalled, false);
        _.addEventListener(this._originElement, 'suspend', that._onStalled, false);
        _.addEventListener(this._originElement, 'ended', that._onEnded, false);
        _.addEventListener(this._originElement, 'error', that._onError, false);

        return elementToAttachTo;
    };

    FlashRenderer.prototype.stop = function(reason) {
        var that = this;

        this._disposables.dispose();

        if (this._phenixVideo) {
            var finalizeStreamEnded = function finalizeStreamEnded() {
                if (that._playerElement) {
                    _.removeEventListener(that._originElement, 'stalled', that._onStalled, false);
                    _.removeEventListener(that._originElement, 'pause', that._onStalled, false);
                    _.removeEventListener(that._originElement, 'suspend', that._onStalled, false);
                    _.removeEventListener(that._originElement, 'ended', that._onEnded, false);
                    _.removeEventListener(that._originElement, 'error', that._onError, false);
                }

                that._playerElement = null;
                that._originElement = null;

                that._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);
            };

            try {
                this._phenixVideo.destroy();
                this._phenixVideo = null;

                finalizeStreamEnded();

                this._logger.info('[%s] Flash player has been destroyed', this._streamId);
            } catch (e) {
                that._logger.error('[%s] Error while destroying Flash player [%s]', that._streamId, e.code, e);

                finalizeStreamEnded();

                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['flash-player', e]);
            }
        }
    };

    FlashRenderer.prototype.getStats = function() {
        if (!this._playerElement) {
            return {
                width: 0,
                height: 0,
                currentTime: 0.0,
                lag: 0.0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var stat = {};
        var currentTime = this._playerElement.currentTime;
        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;

        stat.lag = Math.max(0.0, trueCurrentTime - currentTime);

        if (stat.estimatedBandwidth > 0) {
            stat.networkState = streamEnums.networkStates.networkLoading.id;
        } else if (stat.playTime > 0) {
            stat.networkState = streamEnums.networkStates.networkIdle.id;
        } else if (stat.video) {
            stat.networkState = streamEnums.networkStates.networkEmpty.id;
        } else {
            stat.networkState = streamEnums.networkStates.networkNoSource.id;
        }

        return stat;
    };

    FlashRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    FlashRenderer.prototype.getPlayer = function() {
        return this._player;
    };

    FlashRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        return this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function handleError(e) {
        this._namedEvents.fire(streamEnums.rendererEvents.error.name, ['flash-player', e]);
    }

    function reload() {
        this._phenixVideo.destroy();

        this.start(this._originElement);
    }

    function reloadIfAble() {
        if (!canReload.call(this)) {
            return;
        }

        this._logger.warn('Reloading unhealthy stream that was active for at least [%s] seconds', minTimeBeforeNextReload / 1000);

        this._lastReloadTime = _.now();

        reload.call(this);
    }

    function canReload() {
        var hasElapsedMinTimeSinceLastReload = !this._lastReloadTime || _.now() - this._lastReloadTime > minTimeBeforeNextReload;

        return this._playerElement && !this._waitForLastChunk && this._player && this._playerElement.buffered.length !== 0 && hasElapsedMinTimeSinceLastReload;
    }

    function stalled(event) {
        var that = this;

        that._logger.info('[%s] Loading flash player stalled caused by [%s] event.', that._streamId, event.type);

        var currentVideoTime = that._playerElement.currentTime;

        setTimeout(function() {
            if (that._playerElement && that._playerElement.currentTime === currentVideoTime && !that._playerElement.paused && canReload.call(that)) {
                that._logger.warn('Reloading stream after being stalled for [%s] seconds', timeoutForStallWithoutProgressToRestart / 1000);

                reloadIfAble.call(that);
            }
        }, timeoutForStallWithoutProgressToRestart);
    }

    function ended() {
        this._logger.info('[%s] Flash player ended.', this._streamId);
    }

    var hasFlashPlugin = null;

    function detectFlashPlugin() {
        var defaultVersion = [10, 0, 0];
        var pluginName = 'Shockwave Flash';
        var mimeType = 'application/x-shockwave-flash';
        var activeX = 'ShockwaveFlash.ShockwaveFlash';
        var version = [0, 0, 0];

        if (_.isBoolean(hasFlashPlugin)) {
            return hasFlashPlugin;
        }

        // Firefox, Webkit, Opera
        if (_.get(rtc.global.navigator, ['plugins', pluginName])) {
            var description = rtc.global.navigator.plugins[pluginName].description;

            if (description && _.get(rtc.global.navigator, ['mimeTypes', mimeType, 'enabledPlugin'], false)) {
                version = description.replace(pluginName, '').replace(/^\s+/, '').replace(/\sr/gi, '.').split('.');

                for (var i = 0, total = version.length; i < total; i++) {
                    version[i] = parseInt(version[i].match(/\d+/), 10);
                }
            }
            // Internet Explorer / ActiveX
        } else if (rtc.global.ActiveXObject) {
            try {
                var ax = new rtc.global.ActiveXObject(activeX);

                if (ax) {
                    var versionString = ax.GetVariable("$version") || '';
                    var versionInfo = _.get(versionString.split(" "), [1], version).split(",");

                    version = [parseInt(versionInfo[0], 10), parseInt(versionInfo[1], 10), parseInt(versionInfo[2], 10)];
                }
            } catch (e) {
                console.error(e);
            }
        }

        hasFlashPlugin = (version[0] > defaultVersion[0] || (version[0] === defaultVersion[0] && version[1] > 0) || (version[0] === defaultVersion[0] && version[1] === 0 && version[2] >= 0));

        return hasFlashPlugin;
    }

    return FlashRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(2),
    __webpack_require__(3),
    __webpack_require__(11),
    __webpack_require__(18),
    __webpack_require__(25),
    __webpack_require__(28),
    __webpack_require__(60),
    __webpack_require__(12),
    __webpack_require__(6)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, rtc, disposable, applicationActivityDetector, PeerConnection, PeerConnectionMonitor, BitRateMonitor, PhenixRealTimeRenderer, FeatureDetector, streamEnums) {
    'use strict';

    var defaultIceConnectionTimeout = 12000;

    function PhenixRealTimeStream(streamId, streamSrc, peerConnection, streamTelemetry, options, logger) {
        this._streamId = streamId;
        this._streamSrc = streamSrc;
        this._peerConnection = peerConnection;
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._logger = logger;
        this._renderers = [];
        this._dimensionsChangedMonitor = null;
        this._namedEvents = new event.NamedEvents();
        this._childrenStreams = [];
        this._limit = 0;
        this._backgroundMonitorEventCallback = null;
        this._disposables = new disposable.DisposableList();
        this._connected = 0;
        this._iceConnectionTimeout = _.get(options, ['iceConnectionTimeout'], defaultIceConnectionTimeout);

        this._disposables.add(applicationActivityDetector.onForeground(_.bind(emitPendingBackgroundEvent, this)));

        var bandwidthAttribute = /(b=AS:([0-9]*)[\n\r]*)/gi;
        var bandwithAttribute = bandwidthAttribute.exec(peerConnection.remoteDescription);

        if (bandwithAttribute && bandwithAttribute.length >= 3) {
            this._limit = bandwithAttribute[2] * 1000;
        }

        _.addEventListener(peerConnection, 'iceconnectionstatechange', _.bind(onIceConnectionChange, this));
    }

    PhenixRealTimeStream.prototype.on = function(name, callback) {
        this._namedEvents.listen(name, callback);
    };

    PhenixRealTimeStream.prototype.createRenderer = function() {
        var that = this;
        var sdp = _.get(this._peerConnection, ['remoteDescription', 'sdp']);
        var options = Object.assign({}, this._options);

        if (sdp && !this._options.capabilities.includes('audio-only') || !this._options.capabilities.includes('video-only')) {
            if (!sdp.includes('m=audio')) {
                options.capabilities.push('video-only');
            }

            if (!sdp.includes('m=video')) {
                options.capabilities.push('audio-only');
            }

            var sdpTracks = sdp.split('m=');

            sdpTracks.forEach(function(track) {
                if (track.startsWith('audio') && track.includes('a=inactive')) {
                    options.capabilities.push('video-only');
                }

                if (track.startsWith('video') && track.includes('a=inactive')) {
                    options.capabilities.push('audio-only');
                }
            });
        }

        var renderer = new PhenixRealTimeRenderer(this._streamId, this._streamSrc, this._streamTelemetry, options, this._logger);

        renderer.on(streamEnums.rendererEvents.error.name, function(type, error) {
            that._namedEvents.fire(streamEnums.streamEvents.playerError.name, [type, error]);
        });
        renderer.on(streamEnums.rendererEvents.ended.name, function(reason) {
            that._renderers = _.filter(that._renderers, function(storedRenderer) {
                return storedRenderer !== renderer;
            });

            if (that._renderers.length === 0) {
                that._streamTelemetry.stop();
                that._namedEvents.fire(streamEnums.streamEvents.playerEnded.name, [reason]);
            }
        });

        this._renderers.push(renderer);

        return renderer;
    };

    PhenixRealTimeStream.prototype.select = function select(trackSelectCallback) {
        assert.isFunction(trackSelectCallback, 'trackSelectCallback');
        assert.isFunction(rtc.global.MediaStream, 'rtc.global.MediaStream');

        var tracks = this._streamSrc.getTracks();
        var streamToAttach = new rtc.global.MediaStream();

        for (var i = 0; i < tracks.length; i++) {
            if (trackSelectCallback(tracks[i], i)) {
                streamToAttach.addTrack(tracks[i]);
            }
        }

        if (streamToAttach.getTracks().length === 0) {
            return this._logger.warn('No tracks selected');
        }

        var that = this;
        var newMediaStream = new PhenixRealTimeStream(this._streamId, streamToAttach, this._peerConnection, this._streamTelemetry, this._options, this._logger);

        newMediaStream.on(streamEnums.streamEvents.stopped.name, function(reason) {
            if (isStreamStopped(that._streamSrc)) {
                that._namedEvents.fire(streamEnums.streamEvents.stopped.name, [reason]);
            }
        });

        this._childrenStreams.push(newMediaStream);

        return newMediaStream;
    };

    PhenixRealTimeStream.prototype.setStreamEndedCallback = function setStreamEndedCallback(callback) {
        assert.isFunction(callback, 'callback');

        this._streamEndedCallback = callback;
    };

    PhenixRealTimeStream.prototype.setStreamErrorCallback = function setStreamErrorCallback(callback) {
        assert.isFunction(callback, 'callback');

        this._streamErrorCallback = callback;
    };

    PhenixRealTimeStream.prototype.streamEndedCallback = function streamEndedCallback(stream, status, reason) {
        _.forEach(this._childrenStreams, function(childStream) {
            childStream.streamEndedCallback(status, reason);
        });

        if (_.isFunction(this._streamEndedCallback)) {
            this._streamEndedCallback(this, status, reason);
        }
    };

    PhenixRealTimeStream.prototype.streamErrorCallback = function streamErrorCallback(stream, errorSource, error) {
        _.forEach(this._childrenStreams, function(childStream) {
            childStream.streamErrorCallback(errorSource, error);
        });

        if (_.isFunction(this._streamErrorCallback)) {
            this._streamErrorCallback(stream, errorSource, error);
        }
    };

    PhenixRealTimeStream.prototype.stop = function stop(reason) {
        if (!this.isActive()) {
            return;
        }

        this._disposables.dispose();

        stopWebRTCStream(this._streamSrc);

        this._logger.info('[%s] stop [real-time] media stream with reason [%s]', this._streamId, reason);

        this._namedEvents.fire(streamEnums.streamEvents.stopped.name, [reason]);

        this._isStopped = true;
    };

    PhenixRealTimeStream.prototype.monitor = function monitor(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var that = this;
        var monitor = new PeerConnectionMonitor(that._streamId, that._peerConnection, that._logger);

        options.direction = 'inbound';

        monitor.start(options, function activeCallback() {
            return that.isActive();
        }, function monitorCallback(error, monitorEvent) {
            if (error) {
                that._logger.warn('[%s] Media stream monitor triggered unrecoverable error [%s]', that._streamId, error);
            }

            if (FeatureDetector.isIOS() && !applicationActivityDetector.isForeground()) {
                that._logger.info('[%s] Media stream monitor triggered event while app is in the background. Waiting until foreground to trigger event.', that._streamId);

                return that._backgroundMonitorEventCallback = monitorCallback.bind(null, error, monitorEvent);
            }

            that._logger.warn('[%s] Media stream triggered monitor condition for [%s] [%s]', that._streamId, monitorEvent.type, monitorEvent.reasons);

            return callback(that, 'client-side-failure', monitorEvent);
        });

        this._monitor = monitor;

        return monitor;
    };

    PhenixRealTimeStream.prototype.getMonitor = function getMonitor() {
        return this._monitor;
    };

    PhenixRealTimeStream.prototype.addBitRateThreshold = function addBitRateThreshold(threshold, callback) {
        var that = this;
        var bitRateMonitor = new BitRateMonitor('Media Stream', this._monitor, function getLimit() {
            return that._limit;
        });

        return bitRateMonitor.addThreshold(threshold, callback);
    };

    PhenixRealTimeStream.prototype.getStream = function getStream() {
        return this._streamSrc;
    };

    PhenixRealTimeStream.prototype.isActive = function isActive() {
        return !this._isStopped;
    };

    PhenixRealTimeStream.prototype.getStreamId = function getStreamId() {
        return this._streamId;
    };

    PhenixRealTimeStream.prototype.getStats = function getStats(callback) {
        assert.isFunction(callback, 'callback');

        if (!this._lastStats) {
            this._lastStats = {};
        }

        var that = this;

        return rtc.getStats(this._peerConnection, null, function(stats) {
            callback(PeerConnection.convertPeerConnectionStats(stats, that._lastStats));
        });
    };

    PhenixRealTimeStream.prototype.getRenderer = function getRenderer() {
        return _.get(this._renderers, [0], null);
    };

    PhenixRealTimeStream.prototype.toString = function toString() {
        return 'PhenixRealTimeStream[' + this._streamId + ']';
    };

    function emitPendingBackgroundEvent() {
        if (!this._backgroundMonitorEventCallback) {
            return;
        }

        var eventCallback = this._backgroundMonitorEventCallback;

        this._backgroundMonitorEventCallback = null;

        eventCallback();
    }

    function isStreamStopped(stream) {
        return _.reduce(stream.getTracks(), function(isStopped, track) {
            return isStopped && isTrackStopped(track);
        }, true);
    }

    function isTrackStopped(track) {
        assert.isObject(track, 'track');

        return track.readyState === 'ended';
    }

    function stopWebRTCStream(stream) {
        if (stream && _.isFunction(stream.stop, 'stream.stop')) {
            stream.stop();
        }

        _.forEach(stream && stream.getTracks ? stream.getTracks() : [], function(track) {
            track.stop();
        });
    }

    function onIceConnectionChange() {
        var that = this;
        var connectionState = this._peerConnection.iceConnectionState;

        switch (connectionState) {
        case 'checking':
        case 'connecting':
            if (this._checkConnectionSuccessTimeoutId) {
                return;
            }

            this._connectionStart = _.now();
            this._checkConnectionSuccessTimeoutId = setTimeout(function() {
                that._logger.warn('[%s] Stream has not connected within [%s] ms', that._streamId, that._iceConnectionTimeout);
                that._namedEvents.fire(streamEnums.streamEvents.playerError.name, ['real-time', new Error('connection-timeout')]);
            }, that._iceConnectionTimeout);

            break;
        case 'failed':
            if (this._checkConnectionSuccessTimeoutId) {
                clearTimeout(this._checkConnectionSuccessTimeoutId);

                this._checkConnectionSuccessTimeoutId = null;
            }

            this._logger.info('[%s] Stream has failed', that._streamId);
            this._namedEvents.fire(streamEnums.streamEvents.playerError.name, ['real-time', new Error('connection-failed')]);

            break;
        case 'closed':
        case 'disconnected':
            if (this._checkConnectionSuccessTimeoutId) {
                that._logger.warn('[%s] Stream closed before it was connected', that._streamId);
            }

            break;
        case 'connected':
            if (this._checkConnectionSuccessTimeoutId) {
                clearTimeout(this._checkConnectionSuccessTimeoutId);

                this._checkConnectionSuccessTimeoutId = null;
            }

            this._connected++;
            this._logger.info('[%s] Ice Connection completed after [%s] ms for [%s] time', this._streamId, _.now() - this._connectionStart, this._connected);
            this._connectionStart = null;

            break;
        default:
            this._logger.info('[%s] Unsupported Ice Connection state [%s]', this._streamId, connectionState);

            break;
        }
    }

    return PhenixRealTimeStream;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5),
    __webpack_require__(7),
    __webpack_require__(3),
    __webpack_require__(2),
    __webpack_require__(11),
    __webpack_require__(22),
    __webpack_require__(29),
    __webpack_require__(9),
    __webpack_require__(6),
    __webpack_require__(12)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, http, disposable, rtc, applicationActivityDetector, DetectBrowser, global, DimensionsChangedMonitor, streamEnums, FeatureDetector) {
    'use strict';

    var listenForPauseChangeAfterForegroundInterval = 1000;
    // Restarts less than 100ms after foregrounding cause subsequent "pause" events on the video
    var restartRendererDelay = 200;

    function PhenixRealTimeRenderer(streamId, streamSrc, streamTelemetry, options, logger) {
        this._logger = logger;
        this._streamId = streamId;
        this._streamSrc = streamSrc;
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._namedEvents = new event.NamedEvents();
        this._disposables = new disposable.DisposableList();
        this._browser = (new DetectBrowser(_.get(global, ['navigator', 'userAgent'], ''))).detect();
        this._wasPlaying = false;
        this._lastBackgroundingTimestamp = 0;
        this._lastStalledTimestamp = 0;

        this._disposables.add(applicationActivityDetector.onBackground(_.bind(checkIfWasPlayingWhenGoingToBackground, this)));
        this._disposables.add(applicationActivityDetector.onForeground(_.bind(resumeWhenEnteringForgeround, this)));

        this._onStalling = _.bind(stalling, this);
        this._onEnded = _.bind(ended, this);
    }

    PhenixRealTimeRenderer.prototype.on = function(name, callback) {
        // TODO(sbi) Remove after users have upgraded to new API
        if (name === 'userActionRequired') {
            throw new Error('"userActionRequired is no longer supported. See https://phenixrts.com/docs/web/#view-a-channel and https://phenixrts.com/docs/web/#channel-viewer');
        }

        return this._namedEvents.listen(name, callback);
    };

    PhenixRealTimeRenderer.prototype.start = function(elementToAttachTo) {
        var that = this;
        var hasAudioTrack = !!_.find(this._streamSrc.getTracks(), function(track) {
            return track.kind === 'audio';
        });

        if (!this._options.canPlaybackAudio) {
            if (this._options.disableAudioIfNoOutputFound && this._options.forcedAudioDisabled) {
                this._logger.warn('[%s] Missing audio playback device. Audio has been disabled on stream. Try setting up an audio device and re-subscribe in order to receive audio.', this._streamId);
            } else if (!this._options.disableAudioIfNoOutputFound && hasAudioTrack) {
                this._logger.warn('[%s] Missing audio playback device. May experience audio and/or video failure. Try setting up an audio device OR pass the [disableAudioIfNoOutputFound] option when subscribing to disable audio playback when no devices are attached.', this._streamId);
            }
        }

        this._element = rtc.attachMediaStream(elementToAttachTo, this._streamSrc, function(e) {
            if (!e) {
                that._logger.debug('[%s] Successfully started playing stream.', that._streamId);

                return;
            }

            if (elementToAttachTo.muted || !hasAudioTrack) {
                that._logger.warn('[%s] Failed to play muted stream.', that._streamId, e);

                return that._namedEvents.fire(streamEnums.rendererEvents.failedToPlay.name, ['failed-to-play']);
            }

            if (that._options.disableAutoMuting) {
                that._logger.warn('[%s] Failed to play unmuted stream.', that._streamId, e);

                return that._namedEvents.fire(streamEnums.rendererEvents.failedToPlay.name, ['failed-to-play-unmuted']);
            }

            that._logger.debug('[%s] Failed to start playing stream. Auto muting the playback and trying again.', that._streamId);
            elementToAttachTo.muted = true;

            that._element = rtc.attachMediaStream(elementToAttachTo, that._streamSrc, function(e) {
                if (e) {
                    that._logger.warn('[%s] Failed to play even after auto muting.', that._streamId, e);

                    // Restore muted state
                    elementToAttachTo.muted = false;

                    return that._namedEvents.fire(streamEnums.rendererEvents.failedToPlay.name, ['failed-to-play']);
                }

                that._logger.info('[%s] Successfully started playing stream after auto muting. User may manually unmute with user triggered action.', that._streamId);

                that._namedEvents.fire(streamEnums.rendererEvents.autoMuted.name, ['retry-play-muted']);
            });
        });

        this._disposables.add(this._streamTelemetry.recordTimeToFirstFrame(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordRebuffering(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordVideoResolutionChanges(this, elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordVideoPlayingAndPausing(elementToAttachTo));

        if (this._options.receiveAudio === false) {
            elementToAttachTo.muted = true;
        }

        _.addEventListener(elementToAttachTo, 'stalled', this._onStalling, false);
        _.addEventListener(elementToAttachTo, 'pause', this._onStalling, false);
        _.addEventListener(elementToAttachTo, 'suspend', this._onStalling, false);
        _.addEventListener(elementToAttachTo, 'ended', this._onEnded, false);

        if (!this._options.capabilities.includes('audio-only')) {
            this._dimensionsChangedMonitor.start(this, elementToAttachTo);
        }

        return elementToAttachTo;
    };

    PhenixRealTimeRenderer.prototype.stop = function(reason) {
        this._dimensionsChangedMonitor.stop();

        this._disposables.dispose();

        if (this._element) {
            _.removeEventListener(this._element, 'stalled', this._onStalling, false);
            _.removeEventListener(this._element, 'pause', this._onStalling, false);
            _.removeEventListener(this._element, 'suspend', this._onStalling, false);
            _.removeEventListener(this._element, 'ended', this._onEnded, false);

            if (_.isFunction(this._element.pause)) {
                this._element.pause();
            }

            if (this._browser.browser === 'Edge') {
                this._element.src = '';
            }

            if (this._element.src) {
                if (this._browser.browser === 'IE') {
                    this._element.src = null;
                } else {
                    this._element.src = '';
                }
            }

            if (this._element.srcObject) {
                this._element.srcObject = null;
            }

            this._element = null;
        }

        this._logger.info('[%s] Phenix real-time renderer has been destroyed', this._streamId);

        this._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);
    };

    PhenixRealTimeRenderer.prototype.getStats = function() {
        if (!this._element) {
            return {
                width: 0,
                height: 0,
                currentTime: 0.0,
                lag: 0.0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;
        var lag = this._options.networkLag / 1000; // Check RTC stats instead

        return {
            width: this._element.videoWidth || this._element.width,
            height: this._element.videoHeight || this._element.height,
            currentTime: trueCurrentTime,
            lag: lag,
            networkState: this._element.networkState
        };
    };

    PhenixRealTimeRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    PhenixRealTimeRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        return this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function stalling(event) {
        var isLastBackgroundingRecent = (_.now() - this._lastBackgroundingTimestamp) < listenForPauseChangeAfterForegroundInterval;

        if (event.type === 'pause' && isLastBackgroundingRecent) {
            this._wasPlaying = true;
        }

        this._lastStalledTimestamp = _.now();

        this._logger.info('[%s] Loading Phenix Real-Time stream player stalling caused by [%s] event.', this._streamId, event.type);
    }

    function ended() {
        this._logger.info('[%s] Phenix Real-Time stream ended.', this._streamId);
    }

    function checkIfWasPlayingWhenGoingToBackground() {
        if (!this._element) {
            return;
        }

        var playing = false;
        var isLastStallingRecent = _.now() - this._lastStalledTimestamp < listenForPauseChangeAfterForegroundInterval;

        if (_.isBoolean(this._element.playing)) {
            playing = this._element.playing;
        } else if (_.isBoolean(this._element.paused)) {
            playing = !this._element.paused;
        }

        if (!playing && isLastStallingRecent) {
            playing = true;
        }

        this._wasPlaying = playing;
        this._lastBackgroundingTimestamp = _.now();
    }

    function resumeWhenEnteringForgeround() {
        if (!this._element) {
            return;
        }

        var that = this;

        this._lastBackgroundingTimestamp = 0;
        this._lastStalledTimestamp = 0;

        if (!this._wasPlaying) {
            this._logger.info('[%s] Entering foreground with paused renderer [%s]', this._streamId, this._browser.browser);

            return;
        }

        this._logger.info('[%s] Resume playing after entering foreground [%s]', this._streamId, this._browser.browser);

        if (this._browser.browser === 'Safari' && FeatureDetector.isIOS()) {
            // 2020-08-19 Observed on iOS Safari/13
            var pausing = function pausing() {
                that._logger.info('Renderer was paused after entering foreground');
                that._namedEvents.fire(streamEnums.rendererEvents.failedToPlay.name, ['paused-by-background']);
            };

            _.addEventListener(that._element, 'pause', pausing);

            var timeoutId = setTimeout(function() {
                _.removeEventListener(that._element, 'pause', pausing);
            }, listenForPauseChangeAfterForegroundInterval);

            this._disposables.add(new disposable.Disposable(function() {
                clearTimeout(timeoutId);
            }));

            // Dispatch to avoid: "NotAllowedError: The request is not allowed by the user agent or the platform in the current context"
            setTimeout(function() {
                // The first video.play() typically fails with a context error.
                // Try once so the start logic can properly handle auto muting.
                that._element.play().catch(function(e) {
                    that._logger.info('[%s] Unable to resume playback after entering foreground', that._streamId, e);
                    that._element.src = '';

                    that._logger.info('[%s] (Re)starting renderer', that._streamId);
                    that.start(that._element);
                });
            }, restartRendererDelay);
        }
    }

    return PhenixRealTimeRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(32)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, Room) {
    'use strict';

    function ImmutableRoom(roomService, id, alias, name, description, type, members, bridgeId, pin) {
        this.init(roomService, id, alias, name, description, type, members, bridgeId, pin);
    }

    ImmutableRoom.prototype.init = function init(roomService, id, alias, name, description, type, members, bridgeId, pin) {
        this._room = new Room(roomService, id, alias, name, description, type, members, bridgeId, pin);

        makeArrayOrObjectObservablesImmutable(this._room, [roomService]);
    };

    ImmutableRoom.prototype.getRoomId = function getImmutableRoomId() {
        return this._room.getRoomId();
    };

    ImmutableRoom.prototype.getObservableAlias = function getObservableAlias() {
        return this._room.getObservableAlias();
    };

    ImmutableRoom.prototype.getObservableName = function getObservableName() {
        return this._room.getObservableName();
    };

    ImmutableRoom.prototype.getObservableDescription = function getObservableDescription() {
        return this._room.getObservableDescription();
    };

    ImmutableRoom.prototype.getObservableType = function getObservableType() {
        return this._room.getObservableType();
    };

    ImmutableRoom.prototype.getObservableMembers = function getObservableMembers() {
        return this._room.getObservableMembers();
    };

    ImmutableRoom.prototype.getObservableBridgeId = function getObservableBridgeId() {
        return this._room.getObservableBridgeId();
    };

    ImmutableRoom.prototype.getObservablePin = function getObservablePin() {
        return this._room.getObservablePin();
    };

    ImmutableRoom.prototype.toString = function toString() {
        return this._room.toString();
    };

    ImmutableRoom.prototype.toJson = function toJson() {
        return this._room.toJson();
    };

    ImmutableRoom.prototype.commitChanges = throwImmutableError;
    ImmutableRoom.prototype.reload = throwImmutableError;
    ImmutableRoom.prototype._update = throwImmutableError;
    ImmutableRoom.prototype._addMembers = throwImmutableError;
    ImmutableRoom.prototype._removeMembers = throwImmutableError;
    ImmutableRoom.prototype._updateMembers = throwImmutableError;

    function throwImmutableError() {
        throw new Error('ImmutableRoom is Immutable');
    }

    function throwImmutableSubscribeError() {
        throw new Error('Unable to subscribe to Immutable [ImmutableRoom]');
    }

    function makeArrayOrObjectObservablesImmutable(collection, exclude) {
        if (_.isArray(collection)) {
            _.forEach(collection, function(value) {
                wrapObservableAndAnyObservableProperties(value, exclude);
            });
        } else if (_.isObject(collection)) {
            _.forOwn(collection, function(value) {
                if (_.includes(exclude, value)) {
                    return;
                }

                wrapObservableAndAnyObservableProperties(value, exclude);
            });
        }
    }

    function wrapObservableAndAnyObservableProperties(value, exclude) {
        wrapObservable(value, exclude);
        makeArrayOrObjectObservablesImmutable(value, exclude);
    }

    function wrapObservable(value, exclude) {
        if (value instanceof observable.Observable || value instanceof observable.ObservableArray) {
            value.setValue = throwImmutableError;
            value.subscribe = throwImmutableSubscribeError;

            var observableValue = value.getValue();

            makeArrayOrObjectObservablesImmutable(observableValue, exclude);
        }
    }

    return ImmutableRoom;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(63)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, ChatService) {
    'use strict';

    var defaultBatchSize = 0;
    var maxCachedQueueSize = 100;

    function RoomChatService(roomService) {
        assert.isObject(roomService, 'roomService');
        assert.isObject(roomService._pcast, 'roomService._pcast');

        this._roomService = roomService;

        this._chatMessages = new observable.ObservableArray([]);
        this._lastChatMessage = new observable.Observable(null);
        this._disposables = new disposable.DisposableList();
        this._chatRoomId = null;

        this.setPCast(roomService._pcast);
    }

    RoomChatService.prototype.setPCast = function setPCast(pcast) {
        assert.isObject(pcast, 'pcast');
        assert.isFunction(pcast.getLogger, 'pcast.getLogger');

        this._pcast = pcast;
        this._logger = pcast.getLogger();

        if (this._chatService) {
            this._chatService.setPCast(pcast);
        } else {
            this._chatService = new ChatService(pcast);
        }
    };

    RoomChatService.prototype.getBatchSize = function getBatchSize() {
        return this._batchSize;
    };

    RoomChatService.prototype.start = function start(batchSize) {
        this._batchSize = batchSize || defaultBatchSize;
        this._chatService.start();

        setupSubscriptions.call(this);
        setupMessageSubscription.call(this);
    };

    RoomChatService.prototype.stop = function stop() {
        this._chatService.stop();

        disposeOfMessageSubscription.call(this);

        if (this._disposables) {
            this._disposables.dispose();
        }
    };

    RoomChatService.prototype.getObservableChatMessages = function getObservableChatMessages() {
        return this._chatMessages;
    };

    RoomChatService.prototype.getObservableLastChatMessage = function getObservableLastChatMessage() {
        return this._lastChatMessage;
    };

    RoomChatService.prototype.getObservableChatEnabled = function getObservableChatEnabled() {
        return this._chatService.getObservableChatEnabled();
    };

    RoomChatService.prototype.canSendMessage = function canSendMessage() {
        return this._chatService.canSendMessage();
    };

    RoomChatService.prototype.sendMessageToRoom = function sendMessageToRoom(message, callback) {
        var room = this._roomService.getObservableActiveRoom().getValue();

        if (!room) {
            return callback(new Error('Not in room'), null);
        }

        var roomId = room.getRoomId();
        var self = this._roomService._self.getValue();

        if (!self) {
            return callback(new Error('No record for oneself'), null);
        }

        var screenName = self.getObservableScreenName().getValue();
        var role = self.getObservableRole().getValue();
        var lastUpdate = self.getLastUpdate();

        this._chatService.sendMessageToRoom(roomId, screenName, role, lastUpdate, message, callback);
    };

    RoomChatService.prototype.getMessages = function getMessages(batchSize, afterMessageId, beforeMessageId, callback) {
        var room = this._roomService.getObservableActiveRoom().getValue();
        var roomId = room.getRoomId();

        return this._chatService.getMessages(roomId, batchSize, afterMessageId, beforeMessageId, callback);
    };

    RoomChatService.prototype.toString = function toString() {
        return 'RoomChatService';
    };

    function onRoomChange(room) {
        if (room && this._chatRoomId === room.getRoomId()) {
            return;
        }

        disposeOfMessageSubscription.call(this);

        if (room) {
            setupMessageSubscription.call(this);
        }
    }

    function setupSubscriptions() {
        var roomSubscription = this._roomService.getObservableActiveRoom().subscribe(_.bind(onRoomChange, this));

        this._disposables.add(roomSubscription);
    }

    function setupMessageSubscription() {
        disposeOfMessageSubscription.call(this);

        this._roomChatSubscription = subscribeAndLoadMessages.call(this, this._batchSize);
    }

    function disposeOfMessageSubscription() {
        if (this._roomChatSubscription && this._roomChatSubscription.dispose) {
            this._roomChatSubscription.dispose();
        }
    }

    function subscribeAndLoadMessages(batchSize) {
        var room = this._roomService.getObservableActiveRoom().getValue();
        var roomId = room.getRoomId();

        this._chatRoomId = roomId;

        var that = this;

        this._chatMessages.setValue([]);

        return this._chatService.subscribeAndLoadMessages(roomId, batchSize, function onReceiveMessages(error, response) {
            if (error) {
                throw error;
            }

            if (response.status !== 'ok') {
                throw new Error('Unable to subscribe to room chat. Status [' + response.status + ']');
            }

            var messages = that._chatMessages.getValue();

            _.forEach(response.chatMessages, function addMessage(message) {
                var insertIdx = messages.length;

                // Find its position in the history
                while (insertIdx > 0 && message.messageId < _.get(messages, [insertIdx - 1, 'messageId'])) {
                    insertIdx--;
                }

                if (insertIdx === 0 && messages.length > 0) {
                    that._logger.info('[%] Ignoring message [%s]/[%s] prior to current chat history to prevent gaps.',
                        roomId, message.messageId, message.timestamp);

                    return;
                }

                if (insertIdx > 0 && _.get(messages, [insertIdx - 1, 'messageId']) === message.messageId) {
                    that._logger.info('[%] Ignoring duplicate message [%s]/[%s]',
                        roomId, message.messageId, message.timestamp);

                    return;
                }

                messages.splice(insertIdx, 0, message);

                that._lastChatMessage.setValue(message);
            });

            if (messages.length > maxCachedQueueSize) {
                messages.splice(0, messages.length - maxCachedQueueSize);
            }

            that._chatMessages.setValue(messages);
        });
    }

    return RoomChatService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(31)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, AuthenticationService) {
    'use strict';

    function ChatService(pcast) {
        assert.isObject(pcast, 'pcast');
        assert.isFunction(pcast.getLogger, 'pcast.getLogger');
        assert.isFunction(pcast.getProtocol, 'pcast.getProtocol');

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._protocol = pcast.getProtocol();
        this._enabled = new observable.Observable(false);

        assert.isObject(this._logger, 'this._logger');
        assert.isObject(this._protocol, 'this._protocol');

        this._authenticationService = new AuthenticationService(pcast);
    }

    ChatService.prototype.setPCast = function setPCast(pcast) {
        assert.isObject(pcast, 'pcast');
        assert.isFunction(pcast.getLogger, 'pcast.getLogger');
        assert.isFunction(pcast.getProtocol, 'pcast.getProtocol');

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._protocol = pcast.getProtocol();

        this._authenticationService.setPCast(pcast);
    };

    ChatService.prototype.start = function start() {
        if (this._enabled.getValue()) {
            return;
        }

        this._disposables = new disposable.DisposableList();
        this._roomMessagesListeners = {};

        this._enabled.setValue(true);
        setupSubscriptions.call(this);

        var disposeOfConversationHandler = this._protocol.onEvent('chat.RoomConversationEvent', _.bind(onRoomConversationEvent, this));

        this._disposables.add(disposeOfConversationHandler);
    };

    ChatService.prototype.stop = function stop() {
        if (!this._enabled.getValue()) {
            return;
        }

        this._enabled.setValue(false);

        if (this._disposables) {
            this._disposables.dispose();
        }
    };

    ChatService.prototype.getObservableChatEnabled = function getObservableChatEnabled() {
        return this._enabled;
    };

    ChatService.prototype.canSendMessage = function canSendMessage() {
        return this._authenticationService.checkAuthorized();
    };

    ChatService.prototype.sendMessageToRoom = function sendMessageToRoom(roomId, screenName, role, lastUpdate, message, callback) {
        sendMessageRequest.call(this, roomId, screenName, role, lastUpdate, message, callback);
    };

    ChatService.prototype.subscribeAndLoadMessages = function subscribeAndLoadMessages(roomId, batchSize, onReceiveMessages) {
        var disposeOfListener = setupChatListener.call(this, roomId, onReceiveMessages);

        subscribeToRoomConversationRequest.call(this, roomId, batchSize);

        return disposeOfListener;
    };

    ChatService.prototype.getMessages = function getMessages(roomId, batchSize, afterMessageId, beforeMessageId, onReceiveMessages) {
        getMessagesRequest.call(this, roomId, batchSize, afterMessageId, beforeMessageId, onReceiveMessages);
    };

    ChatService.prototype.toString = function toString() {
        return 'ChatService';
    };

    function setupSubscriptions() {
        var pcastStatusSubscription = this._authenticationService.getObservableStatus().subscribe(_.bind(onStatusChange, this));

        this._disposables.add(pcastStatusSubscription);
    }

    function setupChatListener(roomId, onReceiveMessages) {
        var that = this;

        this._roomMessagesListeners[roomId] = onReceiveMessages;

        var disposeOfHandler = new disposable.Disposable(function() {
            if (that._roomMessagesListeners[roomId] === onReceiveMessages) {
                delete that._roomMessagesListeners[roomId];
            }
        });

        this._disposables.add(disposeOfHandler);

        return disposeOfHandler;
    }

    function onRoomConversationEvent(event) {
        assert.isObject(event, 'event');
        assert.isStringNotEmpty(event.roomId, 'event.roomId');
        assert.isStringNotEmpty(event.eventType, 'event.eventType');
        assert.isArray(event.chatMessages, 'event.chatMessages');

        switch (event.eventType) {
        case 'Message':
            this._logger.debug('[%s] Room messages [%s]', event.roomId, event.chatMessages);

            var listener = this._roomMessagesListeners[event.roomId];

            convertTimeFromLongInChatMessages(event.chatMessages);

            if (listener) {
                listener(null, {
                    status: 'ok',
                    chatMessages: event.chatMessages
                });
            }

            break;
        default:
            this._logger.warn('Unsupported room conversation event [%s]', event.eventType);
        }
    }

    function onStatusChange(status) { // eslint-disable-line no-unused-vars
        // Only reason to redo subscriptions is if sessionId changes, which infers status changed
    }

    function getMessagesRequest(roomId, batchSize, afterMessageId, beforeMessageId, callback) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isFunction(callback, 'callback');

        if (!beforeMessageId || !afterMessageId) {
            assert.isNumber(batchSize, 'batchSize');
        }

        if (beforeMessageId) {
            assert.isStringNotEmpty(beforeMessageId, 'beforeMessageId');
        }

        if (afterMessageId) {
            assert.isStringNotEmpty(afterMessageId, 'afterMessageId');
        }

        assertEnabled.call(this);
        this._authenticationService.assertAuthorized();

        var sessionId = this._authenticationService.getPCastSessionId();

        this._logger.info('Get messages from room [%s] conversation with batch size of [%s], after [%s], and before [%s]', roomId, batchSize, afterMessageId, beforeMessageId);

        var that = this;

        this._protocol.getMessages(sessionId, roomId, batchSize, afterMessageId, beforeMessageId,
            function(error, response) {
                if (error) {
                    that._logger.error('Get messages from room conversation failed with error [%s]', error);

                    return callback(error, null);
                }

                var result = {status: response.status};

                if (response.status !== 'ok') {
                    that._logger.warn('Get messages from room conversation failed with status [%s]', response.status);

                    return callback(null, result);
                }

                result.chatMessages = response.chatMessages;

                convertTimeFromLongInChatMessages(result.chatMessages);

                callback(null, result);
            }
        );
    }

    function subscribeToRoomConversationRequest(roomId, batchSize) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isNumber(batchSize, 'batchSize');

        assertEnabled.call(this);
        this._authenticationService.assertAuthorized();

        var sessionId = this._authenticationService.getPCastSessionId();

        this._logger.info('Subscribe to room [%s] conversation with batch size of [%s]', roomId, batchSize);

        var that = this;

        this._protocol.subscribeToRoomConversation(sessionId, roomId, batchSize, function(error, response) {
            var onReceiveMessages = that._roomMessagesListeners[roomId];

            if (!onReceiveMessages) {
                return that._logger.warn('No subscription callback set for room [%s]', roomId);
            }

            if (error) {
                that._logger.error('Subscribe to room conversation failed with error [%s]', error);

                return onReceiveMessages(error, null);
            }

            var result = {status: response.status};

            if (response.status !== 'ok') {
                delete that._roomMessagesListeners[roomId];

                that._logger.warn('Subscribe to room conversation failed with status [%s]', response.status);

                return onReceiveMessages(null, result);
            }

            result.chatMessages = response.chatMessages;

            convertTimeFromLongInChatMessages(result.chatMessages);

            onReceiveMessages(null, result);
        });
    }

    function sendMessageRequest(roomId, screenName, role, lastUpdate, message, callback) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isStringNotEmpty(screenName, 'screenName');
        assert.isStringNotEmpty(role, 'role');
        assert.isNumber(lastUpdate, 'lastUpdate');
        assert.isStringNotEmpty(message, 'message');
        assert.isFunction(callback, 'callback');

        assertEnabled.call(this);
        this._authenticationService.assertAuthorized();

        var sessionId = this._authenticationService.getPCastSessionId();

        var chatMessage = {
            messageId: '',
            timestamp: 0,
            from: {
                sessionId: sessionId,
                screenName: screenName,
                role: role,
                lastUpdate: lastUpdate
            },
            message: message
        };

        this._logger.info('Send message to room [%s] from [%s]', roomId, screenName);

        var that = this;

        return this._protocol.sendMessageToRoom(roomId, chatMessage, function(error, response) {
            if (error) {
                that._logger.error('Send message to room failed with error [%s]', error);

                return callback(error, null);
            }

            var result = {status: response.status};

            if (response.status !== 'ok') {
                that._logger.warn('Send message to room failed with status [%s]', response.status);
            }

            callback(null, result);
        });
    }

    function assertEnabled() {
        if (!this._enabled.getValue()) {
            throw new Error('ChatService not Enabled. Please start before performing actions.');
        }
    }

    function convertTimeFromLongInChatMessages(chatMessages) {
        _.forEach(chatMessages, function(chatMessage) {
            convertTimeFromLongInChatMessage(chatMessage);
        });
    }

    function convertTimeFromLongInChatMessage(chatMessage) {
        if (chatMessage.timestamp) {
            chatMessage.timestamp = _.utc(chatMessage.timestamp);
        }

        if (chatMessage.from) {
            chatMessage.from.lastUpdate = _.utc(chatMessage.from.lastUpdate);
        }
    }

    return ChatService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(15),
    __webpack_require__(17),
    __webpack_require__(24),
    __webpack_require__(65),
    __webpack_require__(67)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, pcastLoggerFactory, PCastEndPoint, AudioContext, AudioVolumeMeterFactory, AudioSpeakerDetectionAlgorithm) {
    'use strict';

    function AudioSpeakerDetector(userMediaStreams, options) {
        assert.isArray(userMediaStreams, 'userMediaStreams');

        options = options || {};

        this._baseUri = options.uri || PCastEndPoint.DefaultPCastUri;
        this._logger = options.logger || pcastLoggerFactory.createPCastLogger(this._baseUri);
        this._audioContext = options.audioContext || new AudioContext();
        this._nativeAudioContext = this._audioContext.getNativeAudioContext();
        this._onSpeakingChanged = null;
        this._userMediaStreams = userMediaStreams;
        this._disposeOfAudioContext = !_.isObject(options.audioContext);
        this._audioVolumeMeterFactory = new AudioVolumeMeterFactory(this._logger);

        _.forEach(this._userMediaStreams, _.bind(setupAudioVolumeMeter, this, options));
    }

    AudioSpeakerDetector.prototype.start = function start(options, callback) {
        assert.isFunction(callback, 'callback');

        this._onSpeakingChanged = callback;

        options = options || {};

        _.forEach(this._userMediaStreams, _.bind(setupSpeakingDetection, this, options));
    };

    AudioSpeakerDetector.prototype.stop = function stop() {
        _.forEach(this.getAudioVolumeMeters(), function(meter) {
            meter.onValue(function() {});
        });

        this._onSpeakingChanged = null;
    };

    AudioSpeakerDetector.prototype.getAudioVolumeMeter = function getAudioVolumeMeter(stream) {
        assert.isObject(stream, 'stream');

        return this._audioVolumeMeterFactory.getAudioVolumeMeter(stream);
    };

    AudioSpeakerDetector.prototype.getAudioVolumeMeters = function getAudioVolumeMeters() {
        return this._audioVolumeMeterFactory.getAudioVolumeMeters();
    };

    AudioSpeakerDetector.prototype.dispose = function dispose() {
        if (this._disposeOfAudioContext) {
            this._nativeAudioContext.close();
        }

        this._audioVolumeMeterFactory.stopAllMeters();

        this._userMediaStreams = null;
    };

    AudioSpeakerDetector.prototype.toString = function toString() {
        return 'AudioSpeakerDetector';
    };

    function setupAudioVolumeMeter(options, stream) {
        assert.isObject(stream, 'stream');
        assert.isObject(options, 'options');

        var audioVolumeMeter = this._audioVolumeMeterFactory.getAudioVolumeMeter(stream);

        audioVolumeMeter.init(this._nativeAudioContext, options.alpha);
        audioVolumeMeter.connect(stream);
    }

    function setupSpeakingDetection(options, stream) {
        assert.isObject(stream, 'stream');
        assert.isObject(options, 'options');

        var audioVolumeMeter = this._audioVolumeMeterFactory.getAudioVolumeMeter(stream);
        var audioSpeakerDetectionAlgorithm = new AudioSpeakerDetectionAlgorithm(this._logger);

        if (options.alpha) {
            audioVolumeMeter.setAlpha(options.alpha);
        }

        audioSpeakerDetectionAlgorithm.onValue(this._onSpeakingChanged);
        audioSpeakerDetectionAlgorithm.startDetection(audioVolumeMeter, options);
    }

    return AudioSpeakerDetector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(66)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, AudioVolumeMeter) {
    'use strict';

    function AudioVolumeMeterFactory(logger) {
        assert.isObject(logger, 'logger');

        this._logger = logger;
        this._audioVolumeMeters = {};
    }

    AudioVolumeMeterFactory.prototype.stopAllMeters = function stopAllMeters() {
        _.forOwn(this._audioVolumeMeters, function stopAudioVolumeMeters(meter) {
            meter.stop();
        });
    };

    AudioVolumeMeterFactory.prototype.getAudioVolumeMeter = function getAudioVolumeMeter(stream) {
        assert.isObject(stream, 'stream');
        assert.isStringNotEmpty(stream.id, 'streamId');

        if (!this._audioVolumeMeters[stream.id]) {
            this._audioVolumeMeters[stream.id] = new AudioVolumeMeter(this._logger);
        }

        return this._audioVolumeMeters[stream.id];
    };

    AudioVolumeMeterFactory.prototype.getAudioVolumeMeters = function getAudioVolumeMeters() {
        return _.values(this._audioVolumeMeters);
    };

    AudioVolumeMeterFactory.prototype.toString = function toString() {
        return 'AudioVolumeMeterFactory';
    };

    return AudioVolumeMeterFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var defaultAlpha = 1 / 16;

    function AudioVolumeMeter(logger) {
        assert.isObject(logger, 'logger');

        this._logger = logger;
    }

    AudioVolumeMeter.prototype.init = function init(context, alpha) {
        assert.isObject(context, 'context');
        assert.isFunction(context.createScriptProcessor, 'context.createScriptProcessor');

        alpha = parseFloat(alpha || defaultAlpha);
        assert.isNumber(alpha, 'alpha');

        this._context = context;
        this._alpha = alpha;
        this._value = 0.;
        this._smoothedValue = 0.;
        this._smoothedPeakValue = 0.;
        this._clipped = 0.;
        this._scriptProcessor = context.createScriptProcessor(4096, 1, 1);

        _.addEventListener(this._scriptProcessor, 'audioprocess', _.bind(onAudioProcess, this));
    };

    AudioVolumeMeter.prototype.onValue = function onValue(callback) {
        this._callback = callback;
    };

    AudioVolumeMeter.prototype.getValue = function getValue() {
        return this._value;
    };

    AudioVolumeMeter.prototype.getSmoothedValue = function getSmoothedValue() {
        return this._smoothedValue;
    };

    AudioVolumeMeter.prototype.getSmoothedPeakValue = function getSmoothedPeakValue() {
        return this._smoothedPeakValue;
    };

    AudioVolumeMeter.prototype.setAlpha = function setAlpha(alpha) {
        assert.isNumber(alpha, 'alpha');

        this._alpha = parseFloat(alpha);
    };

    AudioVolumeMeter.prototype.connect = function connect(stream) {
        var that = this;

        return connectToStream.call(that, stream);
    };

    AudioVolumeMeter.prototype.stop = function stop() {
        return stopConnections.call(this);
    };

    AudioVolumeMeter.prototype.toString = function toString() {
        return 'AudioVolumeMeter';
    };

    function onAudioProcess(event) {
        var input = event.inputBuffer.getChannelData(0);
        var sum = 0.;
        var clipped = 0;

        for (var i = 0; i < input.length; i++) {
            sum += input[i] * input[i];

            if (Math.abs(input[i]) > 0.99) {
                clipped++;
            }
        }

        this._value = Math.sqrt(sum / input.length);
        this._smoothedValue = this._alpha * this._value + (1. - this._alpha) * this._smoothedValue;
        this._smoothedPeakValue = Math.max(this._value, this._alpha * this._value + (1. - this._alpha) * this._smoothedPeakValue);
        this._clipped = clipped;

        if (this._callback) {
            this._callback.call(this, {
                date: _.now(),
                value: this._value,
                smoothedValue: this._smoothedValue,
                smoothedPeakValue: this._smoothedPeakValue,
                clipped: this._clipped
            });
        }
    }

    function connectToStream(stream) {
        assert.isObject(stream, 'stream');

        var that = this;

        if (stream.getAudioTracks().length > 0) {
            that._mediaStreamSource = that._context.createMediaStreamSource(stream);
            that._mediaStreamSource.connect(that._scriptProcessor);
            that._scriptProcessor.connect(that._context.destination);
        } else {
            that._logger.info('Stream has no audio tracks');
        }
    }

    function stopConnections() {
        if (this._mediaStreamSource) {
            this._mediaStreamSource.disconnect();
        }

        this._scriptProcessor.disconnect();
    }

    return AudioVolumeMeter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var defaultSpeakingHysteresisInterval = 50;
    var defaultSilenceHysteresisInterval = 1500;

    function AudioSpeakerDetectionAlgorithm(logger) {
        assert.isObject(logger, 'logger');

        this._logger = logger;

        this.init();
    }

    AudioSpeakerDetectionAlgorithm.prototype.init = function init() {

    };

    AudioSpeakerDetectionAlgorithm.prototype.onValue = function onValue(callback) {
        this._callback = callback;
    };

    AudioSpeakerDetectionAlgorithm.prototype.startDetection = function startDetection(audioVolumeMeter, options) {
        var that = this;

        return startAudioDetection.call(that, audioVolumeMeter, options);
    };

    AudioSpeakerDetectionAlgorithm.prototype.toString = function toString() {
        return 'AudioSpeakerDetection';
    };

    function startAudioDetection(audioVolumeMeter, options) {
        assert.isObject(audioVolumeMeter, 'audioVolumeMeter');

        options = options || {};

        var that = this;
        var stopped = false;
        var speakingHysteresisInterval = options.speakingHysteresisInterval || defaultSpeakingHysteresisInterval;
        var silenceHysteresisInterval = options.silenceHysteresisInterval || defaultSilenceHysteresisInterval;

        assert.isNumber(speakingHysteresisInterval, 'options.speakingHysteresisInterval');
        assert.isNumber(silenceHysteresisInterval, 'options.silenceHysteresisInterval');

        var speaking = false;
        var nextSpeakingDeadline = _.now() + speakingHysteresisInterval;
        var nextSilenceDeadline = _.now() + silenceHysteresisInterval;

        audioVolumeMeter.onValue(function(value) {
            if (stopped) {
                return;
            }

            assert.isObject(audioVolumeMeter, 'audioVolumeMeter');
            assert.isNumber(value.date, 'value.date');
            assert.isNumber(value.value, 'value.value');
            assert.isNumber(value.smoothedValue, 'value.smoothedValue');
            assert.isNumber(value.smoothedPeakValue, 'value.smoothedPeakValue');
            assert.isNumber(value.clipped, 'value.clipped');

            var speakingThreshold = value.value > 0.01 && value.value > 2 * value.smoothedValue && value.value > 0.25 * value.smoothedPeakValue;
            var speakingContinuationThreshold = value.value > 0.8 * value.smoothedValue;
            var notSpeakingThreshold = value.value < 0.5 * value.smoothedValue;
            var notSpeakingContinuationThreshold = !speakingThreshold;

            if ((speakingThreshold || (speaking && speakingContinuationThreshold)) && nextSpeakingDeadline < value.date) {
                nextSilenceDeadline = _.utc(value.date) + silenceHysteresisInterval;

                if (!speaking) {
                    speaking = true;

                    that._logger.info('Speaking detected');

                    if (that._callback) {
                        that._callback('speaking');
                    }
                }
            } else if ((notSpeakingThreshold || (!speaking && notSpeakingContinuationThreshold)) && nextSilenceDeadline < value.date) {
                nextSpeakingDeadline = _.utc(value.date) + speakingHysteresisInterval;

                if (speaking) {
                    speaking = false;

                    that._logger.info('Silence detected');

                    if (that._callback) {
                        that._callback('silence');
                    }
                }
            }
        });
    }

    return AudioSpeakerDetectionAlgorithm;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(15),
    __webpack_require__(17),
    __webpack_require__(69)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, pcastLoggerFactory, PCastEndPoint, PublisherBandwidthAdjuster) {
    'use strict';

    function BandwidthMonitor(publishers, options) {
        assert.isArray(publishers, 'userMediaStreams');

        options = options || {};

        this._baseUri = options.uri || PCastEndPoint.DefaultPCastUri;
        this._logger = options.logger || pcastLoggerFactory.createPCastLogger(this._baseUri);
        this._publisherAdjusters = [];
        this._publishers = publishers;
    }

    BandwidthMonitor.prototype.start = function start(roomService, options) {
        options = options || {};

        _.forEach(this._publishers, _.bind(setupPublisherAdjusters, this, roomService, options));
    };

    BandwidthMonitor.prototype.stop = function stop() {
        _.forEach(this._publisherAdjusters, function closePublisherAdjusters(adjuster) {
            adjuster.close();
        });

        this._publisherAdjusters = [];
    };

    BandwidthMonitor.prototype.toString = function toString() {
        return 'BandwidthMonitor';
    };

    function setupPublisherAdjusters(roomService, options, publisher) {
        var publisherAdjuster = new PublisherBandwidthAdjuster(publisher);

        publisherAdjuster.connect(roomService, options);

        this._publisherAdjusters.push(publisherAdjuster);
    }

    return BandwidthMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var defaultRoomBandwidthLimit = 5000000;

    function PublisherBandwidthAdjuster(publisher) {
        this.init(publisher);
    }

    PublisherBandwidthAdjuster.prototype.init = function init(publisher) {
        assert.isObject(publisher, 'publisher');

        this._publisher = publisher;
        this._roomMemberCount = 0;
        this._roomSubscription = null;
        this._membersSubscription = null;
    };

    PublisherBandwidthAdjuster.prototype.connect = function connect(roomService, options) {
        assert.isObject(roomService, 'roomService');

        options = options || {};

        var roomObservable = roomService.getObservableActiveRoom();
        var roomBandwidthLimit = options.roomBandwidthLimit || defaultRoomBandwidthLimit;

        this._roomSubscription = roomObservable.subscribe(_.bind(onRoomChange, this, roomBandwidthLimit), {initial: 'notify'});
    };

    PublisherBandwidthAdjuster.prototype.close = function close() {
        if (this._roomSubscription) {
            this._roomSubscription.dispose();
        }

        if (this._membersSubscription) {
            this._membersSubscription.dispose();
        }

        this._roomSubscription = null;
        this._membersSubscription = null;
    };

    PublisherBandwidthAdjuster.prototype.toString = function toString() {
        return 'PublisherBandwidthAdjuster';
    };

    function onRoomChange(roomBandwidthLimit, room) {
        if (this._membersSubscription) {
            this._membersSubscription.dispose();
        }

        if (!room) {
            return this._publisher.limitBandwidth(roomBandwidthLimit);
        }

        var membersObservable = room.getObservableMembers();

        this._membersSubscription = membersObservable.subscribe(_.bind(onRoomMembersChanged, this, roomBandwidthLimit), {initial: 'notify'});
    }

    function onRoomMembersChanged(roomBandwidthLimit, members) {
        if (members.length === this._roomMemberCount) {
            return;
        }

        this._roomMemberCount = members.length;

        var targetBitRate = roomBandwidthLimit / Math.max(1, this._roomMemberCount - 1);

        this._publisher.limitBandwidth(targetBitRate);
    }

    return PublisherBandwidthAdjuster;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var aspectRatios = [
        {
            '9x16': [
                {3840: 2160}, // 4k (UHD)
                {1920: 1080}, // 1080p (FHD)
                {1366: 768}, //
                {1280: 720}, // 720p(HD)
                {1024: 576},
                {854: 480}, // 480p
                {640: 360}, // 360p (nHD)
                {320: 180}
            ]
        },
        {
            '3x4': [
                {1600: 1200}, // UXGA
                {1440: 1080},
                {960: 720},
                {800: 600}, // SVGA
                {768: 576},
                {640: 480}, // VGA
                {480: 360},
                {352: 288}, // CIF
                {320: 240}, // QVGA
                {176: 144}, // QCIF
                {160: 120} // QQVGA
            ]
        },
        {
            '16x9': [
                {2160: 3840}, // 4k (UHD)
                {1080: 1920}, // 1080p (FHD)
                {768: 1366}, //
                {720: 1280}, // 720p(HD)
                {576: 1024},
                {480: 854}, // 480p
                {360: 640}, // 360p (nHD)
                {180: 320}
            ]
        },
        {
            '4x3': [
                {1200: 1600}, // UXGA
                {1080: 1440},
                {720: 960},
                {600: 800}, // SVGA
                {576: 768},
                {480: 640}, // VGA
                {360: 480},
                {288: 352}, // CIF
                {240: 320}, // QVGA
                {144: 176}, // QCIF
                {120: 160} // QQVGA
            ]
        }
    ];
    var resolutionSelectionStrategies = {
        fallbackToLower: {
            id: 0,
            name: 'fallbackToLower'
        },
        fallbackToHigher: {
            id: 1,
            name: 'fallbackToHigher'
        },
        fallbackToLowerThenHigher: {
            id: 2,
            name: 'fallbackToLowerThenHigher'
        },
        exact: {
            id: 3,
            name: 'exact'
        }
    };

    function ResolutionProvider(options) {
        assert.isObject(options, 'options');

        if (options.resolutionSelectionStrategy) {
            assert.isValidType(options.resolutionSelectionStrategy, resolutionSelectionStrategies, 'options.resolutionSelectionStrategy');
        }

        if (options.aspectRatio) {
            assert.isStringNotEmpty(options.aspectRatio, 'options.aspectRatio');
        }

        if (options.resolution) {
            assert.isNumber(options.resolution, 'options.resolution');
        }

        if (options.frameRate) {
            assert.isNumber(options.frameRate, 'options.frameRate');
        }

        this._resolutionSelectionStrategy = options.resolutionSelectionStrategy || resolutionSelectionStrategies.fallbackToLowerThenHigher.name;
        this._defaultAspectRatio = options.aspectRatio || '16x9';
        this._defaultResolution = parseInt(options.resolution, 10) || 720;
        this._defaultResolutionHeight = calculateHeight.call(this, this._defaultAspectRatio, this._defaultResolution);
        this._defaultFrameRate = options.frameRate || 15;
    }

    ResolutionProvider.prototype.getDefaultResolution = function getDefaultResolution() {
        var longerDimension = this.calculateLongerDimensionByAspectRatio(this._defaultResolution, this._defaultAspectRatio);

        switch (this._defaultAspectRatio) {
        // Portrait
        case '9x16':
        case '3x4':
            return {
                resolution: this._defaultResolution,
                aspectRatio: this._defaultAspectRatio,
                height: longerDimension,
                width: this._defaultResolution
            };
        // Landscape
        case '16x9':
        case '4x3':
        default:
            return {
                resolution: this._defaultResolution,
                aspectRatio: this._defaultAspectRatio,
                height: this._defaultResolution,
                width: longerDimension
            };
        }
    };

    ResolutionProvider.prototype.getDefaultFrameRate = function getDefaultFrameRate() {
        return this._defaultFrameRate;
    };

    ResolutionProvider.prototype.getNextResolution = function getNextResolution(height, aspectRatio) {
        assert.isNumber(height, 'height');
        assert.isStringNotEmpty(aspectRatio, 'aspectRatio');

        switch (this._resolutionSelectionStrategy) {
        case resolutionSelectionStrategies.fallbackToLower.name:
            return getNextLowestResolution.call(this, height, aspectRatio);
        case resolutionSelectionStrategies.fallbackToHigher.name:
            return getNextHighestResolution.call(this, height, aspectRatio);
        case resolutionSelectionStrategies.fallbackToLowerThenHigher.name:
            var nextResolution = null;

            if (height > this._defaultResolutionHeight) {
                nextResolution = getNextHighestResolution.call(this, height, aspectRatio);
            } else {
                nextResolution = getNextLowestResolution.call(this, height, aspectRatio);

                if (!nextResolution || !nextResolution.height) {
                    nextResolution = getNextHighestResolution.call(this, this._defaultResolution, this._defaultAspectRatio);
                }
            }

            return nextResolution;
        case resolutionSelectionStrategies.exact.name:
        default:
            return;
        }
    };

    ResolutionProvider.prototype.canResolveNextResolution = function() {
        return this._resolutionSelectionStrategy !== resolutionSelectionStrategies.exact.name;
    };

    ResolutionProvider.prototype.calculateLongerDimensionByAspectRatio = function calculateLongerDimensionByAspectRatio(shorterDimension, aspectRatio) {
        switch (aspectRatio) {
        case '16x9':
        case '9x16':
            return roundUpToNearestEvenNumber((16 / 9) * shorterDimension);
        case '4x3':
        case '3x4':
            return roundUpToNearestEvenNumber((4 / 3) * shorterDimension);
        default:
            throw new Error('Aspect Ratio not supported');
        }
    };

    function roundUpToNearestEvenNumber(value) {
        assert.isNumber(value, 'value');

        return 2 * Math.floor((value + 1) / 2);
    }

    function calculateHeight(aspectRatio, resolution) {
        assert.isStringNotEmpty(aspectRatio, 'aspectRatio');
        assert.isNumber(resolution, 'resolution');

        switch (aspectRatio) {
        case '16x9':
        case '4x3':
            return resolution;
        case '9x16':
            return roundUpToNearestEvenNumber((16 / 9) * resolution);
        case '3x4':
            return roundUpToNearestEvenNumber((4 / 3) * resolution);
        default:
            throw new Error('Aspect Ratio not supported');
        }
    }

    function getNextHighestResolution(height, aspectRatio) {
        var aspectRatioHeights = getObjectValueInArray(aspectRatio, aspectRatios);
        var aspectRatioIndex = getIndexInArray(aspectRatio, aspectRatios);
        var heightIndex = getIndexInArray(height.toString(), aspectRatioHeights);
        var isLargestHeight = heightIndex === 0;
        var isSmallestAspectRatio = aspectRatios.length - 1 === aspectRatioIndex;

        var newAspectRatio;
        var newAspectRatioHeights;
        var newHeight;
        var newWidth;

        if (heightIndex < 0) {
            heightIndex = getNextHighestKeyIndex(height, aspectRatioHeights);

            if (heightIndex < 0) {
                return null;
            }
        } else {
            if (isLargestHeight) {
                if (isSmallestAspectRatio) {
                    return null;
                }

                aspectRatioIndex++;

                newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
                newAspectRatioHeights = getObjectValueInArray(newAspectRatio, aspectRatios);
                heightIndex = getNextHighestKeyIndex(this._defaultResolutionHeight, newAspectRatioHeights);

                if (heightIndex < 0) {
                    return null;
                }

                newHeight = getIndexKey(heightIndex, aspectRatioHeights);
                newWidth = this.calculateLongerDimensionByAspectRatio(newHeight, newAspectRatio);

                return {
                    resolution: Math.min(newHeight, newWidth),
                    aspectRatio: newAspectRatio,
                    height: parseInt(newHeight, 10),
                    width: parseInt(newWidth, 10)
                };
            }

            heightIndex--;
        }

        newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
        newAspectRatioHeights = getIndexValue(aspectRatioIndex, aspectRatios);
        newHeight = getIndexKey(heightIndex, newAspectRatioHeights);
        newWidth = newAspectRatioHeights[heightIndex][newHeight];

        return {
            resolution: Math.min(newHeight, newWidth),
            aspectRatio: newAspectRatio,
            height: parseInt(newHeight, 10),
            width: newWidth
        };
    }

    function getNextLowestResolution(height, aspectRatio) {
        var aspectRatioHeights = getObjectValueInArray(aspectRatio, aspectRatios);
        var aspectRatioIndex = getIndexInArray(aspectRatio, aspectRatios);
        var heightIndex = getIndexInArray(height.toString(), aspectRatioHeights);
        var isSmallestHeight = heightIndex === aspectRatioHeights.length - 1;
        var isSmallestAspectRatio = aspectRatios.length - 1 === aspectRatioIndex;

        var newAspectRatio;
        var newAspectRatioHeights;
        var newHeight;
        var newWidth;

        if (!_.isNumber(heightIndex)) {
            heightIndex = getNextLowestKeyIndex(height, aspectRatioHeights);

            if (!heightIndex) {
                return;
            }
        } else {
            if (isSmallestHeight) {
                if (isSmallestAspectRatio) {
                    return null;
                }

                aspectRatioIndex++;

                newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
                newHeight = this._defaultResolutionHeight;
                newWidth = this.calculateLongerDimensionByAspectRatio(newHeight, newAspectRatio);

                return {
                    resolution: Math.min(newHeight, newWidth),
                    aspectRatio: newAspectRatio,
                    height: parseInt(newHeight, 10),
                    width: parseInt(newWidth, 10)
                };
            }

            heightIndex++;
        }

        newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
        newAspectRatioHeights = getIndexValue(aspectRatioIndex, aspectRatios);
        newHeight = getIndexKey(heightIndex, newAspectRatioHeights);
        newWidth = newAspectRatioHeights[heightIndex][newHeight];

        return {
            resolution: Math.min(newHeight, newWidth),
            aspectRatio: newAspectRatio,
            height: parseInt(newHeight, 10),
            width: parseInt(newWidth, 10)
        };
    }

    function getObjectValueInArray(value, collection) {
        var valueObject = _.find(collection, function(item) {
            return Object.prototype.hasOwnProperty.call(item, value);
        });

        return valueObject ? valueObject[value] : null;
    }

    function getIndexInArray(value, collection) {
        return _.findIndex(collection, function(item) {
            return Object.prototype.hasOwnProperty.call(item, value);
        });
    }

    function getIndexKey(index, collection) {
        var keys = _.keys(collection[index]);

        return keys[0];
    }

    function getIndexValue(index, collection) {
        var keys = _.keys(collection[index]);

        return collection[index][keys[0]];
    }

    function getNextHighestKeyIndex(value, collection) {
        if ( _.keys(collection[0])[0] < value) {
            return -1;
        }

        return _.reduce(collection, function(closestIndex, nextItem, index) {
            if (!closestIndex) {
                return index;
            }

            var currentClosestKey = _.keys(collection[closestIndex])[0];
            var nextKey = _.keys(nextItem)[0];

            if (nextKey < value) {
                return closestIndex;
            }

            return Math.abs(value - nextKey) < Math.abs(value - currentClosestKey) ? index : closestIndex;
        });
    }

    function getNextLowestKeyIndex(value, collection) {
        if ( _.keys(collection[collection.length - 1])[0] > value) {
            return null;
        }

        return _.reduce(collection, function(closestIndex, nextItem, index) {
            if (!closestIndex) {
                return index;
            }

            var currentClosestKey = _.keys(collection[closestIndex])[0];
            var nextKey = _.keys(nextItem)[0];

            if (nextKey > value) {
                return closestIndex;
            }

            return Math.abs(value - nextKey) < Math.abs(value - currentClosestKey) ? index : closestIndex;
        });
    }

    return ResolutionProvider;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var shakaEnums = {
        errorSeverity: {
            recoverable: {
                id: 1,
                name: 'RECOVERABLE'
            },
            critical: {
                id: 2,
                name: 'CRITICAL'
            }
        }
    };

    return shakaEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(38),
    __webpack_require__(73),
    __webpack_require__(40),
    __webpack_require__(39),
    __webpack_require__(19),
    __webpack_require__(14),
    __webpack_require__(13),
    __webpack_require__(20)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, RoomExpress, ChannelService, Channel, MemberSelector, Stream, roomEnums, memberEnums, streamEnums) {
    'use strict';

    var defaultOptions = {
        reconnectOptions: {
            maxOfflineTime: 24 * 60 * 60 * 1000, // 1 day
            maxReconnectFrequency: 60 * 1000 // 60 seconds
        }
    };
    var backoffIntervalOnCapacity = 5000;
    var backoffIntervalOnRetry = 100;

    function ChannelExpress(options) {
        assert.isObject(options, 'options');

        if (options.roomExpress) {
            assert.isObject(options.roomExpress, 'options.roomExpress');
        }

        this._channelExpressOptions = _.assign(_.clone(defaultOptions), options);

        this._roomExpress = options.roomExpress || new RoomExpress(this._channelExpressOptions);
        this._shouldDisposeOfRoomExpress = !options.roomExpress;
        this._logger = this._roomExpress.getPCastExpress().getPCast().getLogger();
    }

    ChannelExpress.prototype.dispose = function dispose() {
        if (this._pcastStatusSubscription) {
            this._pcastStatusSubscription.dispose();
            this._pcastStatusSubscription = null;
        }

        if (this._shouldDisposeOfRoomExpress) {
            this._roomExpress.dispose();
        }

        this._logger.info('Disposed channel express instance');
    };

    ChannelExpress.prototype.getRoomExpress = function getRoomExpress() {
        return this._roomExpress;
    };

    ChannelExpress.prototype.getPCastExpress = function getPCastExpress() {
        return this._roomExpress.getPCastExpress();
    };

    ChannelExpress.prototype.createChannel = function createChannel(options, callback) {
        assert.isObject(options, 'options');
        assert.isObject(options.channel, 'options.channel');

        var createRoomOptions = _.assign({room: options.channel}, options);

        createRoomOptions.room.type = roomEnums.types.channel.name;

        delete createRoomOptions.channel;

        this._roomExpress.createRoom(createRoomOptions, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    ChannelExpress.prototype.joinChannel = function joinChannel(options, joinChannelCallback, subscriberCallback) {
        assert.isObject(options, 'options');
        assert.isFunction(joinChannelCallback, 'joinChannelCallback');
        assert.isFunction(subscriberCallback, 'subscriberCallback');

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.streamSelectionStrategy) {
            assert.isStringNotEmpty(options.streamSelectionStrategy, 'options.streamSelectionStrategy');
        }

        var channelOptions = _.assign({
            type: roomEnums.types.channel.name,
            role: memberEnums.roles.audience.name
        }, options);
        var failureCountForBanningAMember = _.get(options, ['failureCountForBanningAMember']);
        var banMemberOnCapacityFailureCount = _.get(options, ['banMemberOnCapacityFailureCount']);
        var memberSelector = new MemberSelector(options.streamSelectionStrategy, this._logger, {
            failureCountForBanningAMember: failureCountForBanningAMember,
            banMemberOnCapacityFailureCount: banMemberOnCapacityFailureCount
        });
        var lastMediaStream;
        var lastStreamId;
        var memberSubscriptions = [];
        var channelRoomService;
        var channelId = '';
        var that = this;
        var memberSelectionBackoffTimeoutId = null;

        if (channelOptions.channelId) {
            channelOptions.roomId = channelOptions.channelId;
        }

        delete channelOptions.channelId;

        var resetListeners = function() {
            if (memberSelectionBackoffTimeoutId !== null) {
                that._logger.info('[%s] Clearing member selection backoff interval', channelId);

                clearTimeout(memberSelectionBackoffTimeoutId);
                memberSelectionBackoffTimeoutId = null;
            }

            for (var i = 0; i < memberSubscriptions.length; i++) {
                memberSubscriptions[i].dispose();
            }

            memberSubscriptions = [];
        };

        var joinRoomCallback = function(error, response) {
            var channelResponse = !response || _.assign({}, response);

            if (that._pcastStatusSubscription) {
                that._pcastStatusSubscription.dispose();
                that._pcastStatusSubscription = null;
            }

            if (response && response.roomService) {
                var leaveRoom = response.roomService.leaveRoom;
                var room = response.roomService.getObservableActiveRoom().getValue();

                channelRoomService = response.roomService;
                channelId = room ? room.getRoomId() : '';

                that._logger.info('Joined channel [%s] with [%s] selection strategy', channelId, memberSelector.getStrategy());

                channelResponse.roomService.leaveRoom = function(callback) {
                    if (lastMediaStream) {
                        lastMediaStream.stop('leave-channel');
                    }

                    resetListeners();

                    leaveRoom(callback);
                };
            }

            wrapResponseWithChannelPrefixesAndContinue(joinChannelCallback, error, channelResponse);
        };

        that._roomExpress.joinRoom(channelOptions, joinRoomCallback, function membersChangedCallback(members, streamErrorStatus) {
            resetListeners();

            that._logger.info('[%s] Members changed with status [%s]. Channel has [%s] active members.', channelId, streamErrorStatus, members.length);

            var evaluateMembers = function() {
                var presenters = _.filter(members, function(member) {
                    return member.getObservableRole().getValue() === memberEnums.roles.presenter.name && member.getObservableStreams().getValue().length > 0;
                });
                var selectedPresenter = memberSelector.getNext(presenters);
                var presenterStream = selectedPresenter ? selectedPresenter.getObservableStreams().getValue()[0] : null;
                var streamId = presenterStream ? presenterStream.getPCastStreamId() : '';

                if (!presenterStream) {
                    if (presenters.length === 0) {
                        memberSelector.reset();
                        lastMediaStream = null;
                        lastStreamId = null;

                        return subscriberCallback(null, {status: 'no-stream-playing'});
                    }

                    if (streamErrorStatus) {
                        that._logger.info('Unable to find a new presenter to replace stream [%s] that ended in channel [%s] with status [%s] and [%s] black-listed members',
                            lastStreamId, channelId, streamErrorStatus, memberSelector.getNumberOfMembersWithFailures());

                        if (lastStreamId && lastMediaStream && lastMediaStream.isActive()) {
                            lastMediaStream.stop('presenter-failure');
                        }

                        return subscriberCallback(null, {status: streamErrorStatus || 'unable-to-recover'});
                    }

                    return subscriberCallback(null, {status: 'no-stream-playing'});
                }

                if (!streamId) {
                    that._logger.info('Channel [%s] presenter has no stream', channelId);

                    return subscriberCallback(null, {status: 'no-stream-playing'});
                }

                if (lastStreamId && lastMediaStream) {
                    if (streamId === lastStreamId) {
                        if (!streamErrorStatus) {
                            // New member detected but staying on previous stream
                            return;
                        }

                        that._logger.info('[%s] Stream [%s] ended with status [%s], retrying',
                            channelId, lastStreamId, streamErrorStatus);
                        lastMediaStream.stop('same-presenter-failure');
                    } else {
                        that._logger.info('[%s] Stream [%s] ended with status [%s], failing over to stream [%s]',
                            channelId, lastStreamId, streamErrorStatus, streamId);
                        lastMediaStream.stop('change-presenter');
                    }
                }

                var tryNextMember = function(streamStatus) {
                    if (memberSelectionBackoffTimeoutId !== null) {
                        that._logger.warn('[%s] Clearing backoff interval after triggering of another unexpected failure [%s]', channelId, streamStatus);

                        clearTimeout(memberSelectionBackoffTimeoutId);
                        memberSelectionBackoffTimeoutId = null;
                    }

                    return memberSelectionBackoffTimeoutId = setTimeout(function() {
                        memberSelectionBackoffTimeoutId = null;

                        var room = channelRoomService ? channelRoomService.getObservableActiveRoom().getValue() : null;

                        if (!room) {
                            return; // No longer in room.
                        }

                        var members = room.getObservableMembers().getValue();

                        return membersChangedCallback(members, streamStatus);
                    }, streamStatus === 'capacity' ? backoffIntervalOnCapacity : backoffIntervalOnRetry);
                };

                function monitorChannelSubscriber(mediaStreamId, error, response) {
                    if (lastStreamId !== mediaStreamId) {
                        that._logger.info('[%s] Ignore old channel subscriber monitor stream [%s]. Active stream is [%s]', channelId, mediaStreamId, lastStreamId);

                        return;
                    }

                    if (error) {
                        return tryNextMember('unable-to-subscribe');
                    }

                    // Don't continue - Tell client
                    if (response.reason === 'app-background') {
                        return subscriberCallback(error, response);
                    }

                    if (response.retry && memberSelector.getStrategy() !== 'high-availability') {
                        that._logger.info('Retrying to subscribe to channel [%s] after stream [%s] failed with reason [%s]',
                            channelId, mediaStreamId, response.status);

                        return response.retry();
                    }

                    var responseStatus = _.get(response, ['status'], '');

                    if (responseStatus !== 'ok') {
                        if (response.reason === 'custom' && response.description !== 'client-side-failure') {
                            return subscriberCallback(error, response);
                        }

                        switch (responseStatus) {
                        case 'ended':
                        case 'origin-ended':
                        case 'origin-stream-ended':
                            memberSelector.markDead();

                            break;
                        default:
                            memberSelector.markFailed({failedDueToCapacity: responseStatus === 'capacity'});

                            break;
                        }

                        that._logger.info('[%s] Monitor subscriber reported status [%s]. Trying next member', mediaStreamId, responseStatus);

                        return tryNextMember(responseStatus);
                    }
                }

                var subscribeOptions = _.assign({}, {
                    monitor: {
                        callback: _.bind(monitorChannelSubscriber, this, streamId),
                        options: {conditionCountForNotificationThreshold: 8}
                    }
                }, options);
                var hadPreviousStreamReason = streamErrorStatus ? 'recovered-from-failure' : 'stream-override';
                var successReason = lastStreamId ? hadPreviousStreamReason : 'stream-started';

                lastStreamId = streamId;

                var mediaStreamCallback = function mediaStreamCallback(mediaStreamId, error, response) {
                    if (lastStreamId !== mediaStreamId) {
                        that._logger.info('[%s] Ignore old media stream callback for stream [%s]. Active stream is [%s]', channelId, mediaStreamId, lastStreamId);

                        return;
                    }

                    var responseStatus = _.get(response, ['status'], '');

                    if (responseStatus === 'ok') {
                        response.reason = successReason;
                    }

                    if (error || (responseStatus !== 'ok')) {
                        that._logger.info('[%s] Issue with stream [%s]. Trying next member', mediaStreamId, responseStatus, error);

                        switch (responseStatus) {
                        case 'unauthorized':
                        case 'not-found':
                        case 'ended':
                        case 'origin-not-found':
                        case 'origin-ended':
                        case 'origin-stream-ended':
                        case 'unsupported-features':
                            memberSelector.markDead();

                            break;
                        default:
                            memberSelector.markFailed({failedDueToCapacity: responseStatus === 'capacity'});

                            break;
                        }

                        return tryNextMember(responseStatus);
                    }

                    if (response && response.mediaStream) {
                        lastMediaStream = response.mediaStream;
                    } else {
                        lastStreamId = null;
                        lastMediaStream = null;
                    }

                    subscriberCallback(error, response);
                };

                that._roomExpress.subscribeToMemberStream(presenterStream, subscribeOptions, _.bind(mediaStreamCallback, this, streamId));
            };

            for (var i = 0; i < members.length; i++) {
                memberSubscriptions.push(members[i].getObservableScreenName().subscribe(evaluateMembers));
                memberSubscriptions.push(members[i].getObservableRole().subscribe(evaluateMembers));
                memberSubscriptions.push(members[i].getObservableStreams().subscribe(evaluateMembers));
            }

            evaluateMembers();
        });
    };

    ChannelExpress.prototype.publishToChannel = function publishToChannel(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        if (options.publishToken && options.capabilities) {
            this._logger.warn('[%s] Trying to publish with both `publishToken` and `capabilities` set. Only use one of the two options');

            callback(new Error('Publishing with both `publishToken` and `capabilities` defined'), {status: 'conflicting-options'});

            return;
        }

        if (options.streamToken && options.capabilities) {
            this._logger.warn('[%s] Trying to publish with both `streamToken` and `capabilities` set. Only use one of the two options');

            callback(new Error('Publishing with both `streamToken` and `capabilities` defined'), {status: 'conflicting-options'});

            return;
        }

        var channelOptions = _.assign({
            memberRole: memberEnums.roles.presenter.name,
            streamType: streamEnums.types.presentation.name,
            room: options.channel
        }, options);

        channelOptions.room.type = roomEnums.types.channel.name;

        delete channelOptions.channel;

        this._roomExpress.publishToRoom(channelOptions, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    ChannelExpress.prototype.publishScreenToChannel = function publishScreenToChannel(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var channelOptions = _.assign({
            memberRole: memberEnums.roles.presenter.name,
            streamType: streamEnums.types.presentation.name,
            room: options.channel
        }, options);

        channelOptions.room.type = roomEnums.types.channel.name;

        delete channelOptions.channel;

        this._roomExpress.publishScreenToRoom(channelOptions, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    function wrapResponseWithChannelPrefixesAndContinue(callback, error, response) {
        if (response && _.hasIndexOrKey(response, 'roomService')) {
            response.channelService = response.roomService ? new ChannelService(response.roomService) : null;

            delete response.roomService;
        }

        if (response && _.hasIndexOrKey(response, 'room')) {
            response.channel = response.room ? new Channel(response.room) : null;

            delete response.room;
        }

        callback(error, response);
    }

    return ChannelExpress;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2022 Phenix Real Time Solutions, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(40)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, Channel) {
    'use strict';

    function ChannelService(roomService) {
        assert.isObject(roomService, 'roomService');

        this._roomService = roomService;
    }

    ChannelService.prototype.start = function start() {
        return this._roomService.start.apply(this._roomService, arguments);
    };

    ChannelService.prototype.getChannelInfo = function getChannelInfo(channelId, alias, callback) {
        if (channelId) {
            assert.isStringNotEmpty(channelId, 'channelId');
        } else {
            assert.isStringNotEmpty(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        return this._roomService.getRoomInfo(channelId, alias, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    ChannelService.prototype.createChannel = function createChannel(channel, callback) {
        assert.isObject(channel, 'channel');
        assert.isStringNotEmpty(channel.name, 'channel.name');
        assert.isStringNotEmpty(channel.type, 'channel.type');
        assert.isString(channel.description, 'channel.description');
        assert.isFunction(callback, 'callback');

        return this._roomService.createRoom(channel, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    ChannelService.prototype.enterChannel = function enterChannel(channelId, alias, callback) {
        if (channelId) {
            assert.isStringNotEmpty(channelId, 'roomId');
        } else {
            assert.isStringNotEmpty(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        return this._roomService.enterRoom(channelId, alias, _.bind(wrapResponseWithChannelPrefixesAndContinue, null, callback));
    };

    ChannelService.prototype.leaveChannel = function leaveChannel() {
        return this._roomService.leaveRoom.apply(this._roomService, arguments);
    };

    ChannelService.prototype.getChatService = function getChatService() {
        return this._roomService.getChatService.apply(this._roomService, arguments);
    };

    ChannelService.prototype.getSelf = function getSelf() {
        return this._roomService.getSelf.apply(this._roomService, arguments);
    };

    ChannelService.prototype.getObservableActiveChannel = function getObservableActiveChannel() {
        return this._roomService.getObservableActiveRoom.apply(this._roomService, arguments);
    };

    ChannelService.prototype.updateSelf = function updateSelf() {
        return this._roomService.updateSelf.apply(this._roomService, arguments);
    };

    ChannelService.prototype.updateMember = function updateMember() {
        return this._roomService.updateMember.apply(this._roomService, arguments);
    };

    ChannelService.prototype.updateChannel = function updateChannel() {
        return this._roomService.updateRoom.apply(this._roomService, arguments);
    };

    ChannelService.prototype.revertChannelChanges = function revertChannelChanges() {
        return this._roomService.revertRoomChanges.apply(this._roomService, arguments);
    };

    ChannelService.prototype.revertMemberChanges = function revertMemberChanges() {
        return this._roomService.revertMemberChanges.apply(this._roomService, arguments);
    };

    ChannelService.prototype.isInChannel = function isInChannel() {
        return this._roomService.isInRoom.apply(this._roomService, arguments);
    };

    ChannelService.prototype.toString = function toString() {
        return 'ChannelService';
    };

    ChannelService.prototype.stop = function stop() {
        return this._roomService.stop.apply(this._roomService, arguments);
    };

    function wrapResponseWithChannelPrefixesAndContinue(callback, error, response) {
        if (response && response.room) {
            response.channel = new Channel(response.room);

            delete response.room;
        }

        return callback(error, response);
    }

    return ChannelService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);
});
//# sourceMappingURL=phenix-web-sdk-externalized.js.map