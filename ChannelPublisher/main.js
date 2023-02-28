/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 * The following code is provided as an example only and is not intended for use in a production environment.
 * https://phenixrts.com/en-us/terms-of-service.html
 */

// create an auth and publish token by using the customer portal in a channel's edgeAuth section.
var authToken = new URLSearchParams(location.search).get('authtoken') ||'AUTH_TOKEN';

var publishToken = new URLSearchParams(location.search).get('publishtoken') ||'PUBLISH_TOKEN';

//create reference to the Phenix SDK
var sdk = window['phenix-web-sdk'];
var videoElement = document.getElementById('myVideoId');
var publishButton = document.getElementById('publishButton');
var stopButton = document.getElementById('stopButton');
var publisher = null;

// Alias to be used to publish/create/join channel
var channelAlias = 'testAlias';

// Name of the channel
var channelName = 'testName';

// Local media to publish (camera and microphone)
var mediaConstraints = {
  video: true, // Include camera
  audio: true // Include microphone
};

// add the auth token to the channel express options
var channelExpressOptions = {
  authToken: authToken
};

// Instantiate the instance of the channel express
var channel = new sdk.express.ChannelExpress(channelExpressOptions);

// create publish options, documentation:
// https://phenixrts.com/docs/sdk_ref/web/express-channel/#publish-to-channel-options
var publishOptions = {
  room: {
    alias: channelAlias,
    name: channelName
  },
  mediaConstraints: mediaConstraints,
  videoElement: videoElement,
  authToken: authToken,
  publishToken: publishToken
};

// Publish local media to channel
function publish() {
  hideElement(publishButton);
  displayElement(stopButton);

  channel.publishToChannel(
    publishOptions,
    function subscriberCallback(error, response) {
      if (error) {
        // display user message for response status
        setUserMessage(
          'publishToChannel()::subscriberCallback(error, response) returned error=' +
            error.message
        );
        stopPublisher();

        throw error;
      }
      // display user message for response status
      setUserMessage(
        'publishToChannel()::subscriberCallback(error, response) returned response.status=' +
          response.status
      );

      if (
        response.status !== 'ok' &&
        response.status !== 'ended' &&
        response.status !== 'stream-ended'
      ) {
        stopPublisher();

        throw new Error(response.status);
      }

      if (response.status === 'ok') {
        // we have a successful publisher
        publisher = response.publisher;
      }
    }
  );
}

// Clean up publisher
function stopPublisher() {
  if (publisher) {
    publisher.stop();

    publisher = null;
  }

  hideElement(stopButton);
  displayElement(publishButton);
}

function setUserMessage(message) {
  var userMessageElement = document.getElementById('userMessage');

  userMessageElement.innerText = message;
}

function displayElement(element) {
  element.className = element.className.substring(
    0,
    element.className.indexOf(' hide')
  );
}

function hideElement(element) {
  if (element.className.indexOf('hide') === -1) {
    element.className += ' hide';
  }
}

publishButton.onclick = publish;
stopButton.onclick = stopPublisher;
