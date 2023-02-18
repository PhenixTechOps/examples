/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 * The following code is provided as an example only and is not intended for use in a production environment.
 * https://phenixrts.com/en-us/terms-of-service.html
 */

// create viewing token by using the customer portal in a channel's edgeAuth section.
// replace AUTH_TOKEN with your own token.
const token = 'AUTH_TOKEN';

// create a reference to the html video element
const videoElement = document.getElementById('myVideoId');

// create channel passing the video element and token
const channel = phenix.Channels.createChannel({
  videoElement,
  token
});

channel.autoMuted.subscribe((autoMuted) => {
  if (autoMuted) {
    console.log(
      'Playback was auto-muted by browser. Please use user action to initiate `channel.unmute()`'
    );
  }
});

channel.autoPaused.subscribe((autoPaused) => {
  if (autoPaused) {
    console.log(
      'Playback was auto-paused by browser. Please use user action to initiate `channel.play()`'
    );
  }
});
