/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* global phenix */
// Alternate ways to load the sdk directly:
// import phenix from '@phenixrts/sdk';
// import phenix from "../../dist/min/channels";

const token = new URLSearchParams(location.search).get('token') || '';
const playButton = document.getElementsByClassName('play')[0];
const videoElement = document.getElementsByTagName('video')[0];
const channel = phenix.Channels.createChannel({
  videoElement,
  token
});

playButton.onclick = e => {
  e.preventDefault();
  e.stopPropagation();
  channel.play();
};

phenix.SDK.init({automaticallyPlayMediaStream: false});
// If instead you only want to disable automatic muting
// phenix.SDK.init({automaticallyMuteVideoOnPlayFailure: false});

channel.autoMuted.subscribe(autoMuted => {
  if (autoMuted) {
    console.log('Playback was auto-muted by browser. Please use user action to initiate `channel.unmute()`');
  }
});

channel.autoPaused.subscribe(autoPaused => {
  if (autoPaused) {
    playButton.style.display = 'block';
  } else {
    playButton.style.display = 'none';
  }
});