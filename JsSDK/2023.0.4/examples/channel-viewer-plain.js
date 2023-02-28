/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* global phenix */
// Alternate ways to load the sdk directly:
// import phenix from '@phenixrts/sdk';
// import phenix from "../../dist/min/channels";

const token = new URLSearchParams(location.search).get('token') || '';
const videoElement = document.getElementsByTagName('video')[0];
const channel = phenix.Channels.createChannel({
  videoElement,
  token
});

channel.autoMuted.subscribe(autoMuted => {
  if (autoMuted) {
    console.log('Playback was auto-muted by browser. Please use user action to initiate `channel.unmute()`');
  }
});

channel.autoPaused.subscribe(autoPaused => {
  if (autoPaused) {
    console.log('Playback was auto-paused by browser. Please use user action to initiate `channel.play()`');
  }
});

// Example how to stop and start the channel
// setTimeout(() => {
//   channel.stop();
//
//   setTimeout(() => {
//     channel.start();
//   }, 5000);
// }, 600000);