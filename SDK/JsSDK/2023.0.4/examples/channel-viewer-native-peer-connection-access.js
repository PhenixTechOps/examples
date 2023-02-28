/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* global phenix */
// Alternate ways to load the sdk directly:
// import phenix from '@phenixrts/sdk';
// import phenix from "../../dist/min/channels";

const nativeStatisticsPollInterval = 3000;
const token = new URLSearchParams(location.search).get('token') || '';
const videoElement = document.getElementsByTagName('video')[0];
const channel = phenix.Channels.createChannel({
  videoElement,
  token
});
let nativeStatisticsPollTimeout;

// Example of getting to native PeerConnection object and displaying native statistics
// Subscribing to PeerConnection observable
channel.peerConnection.subscribe(peerConnection => {
  if (nativeStatisticsPollTimeout) {
    clearTimeout(nativeStatisticsPollTimeout);
    nativeStatisticsPollTimeout = null;
  }

  if (peerConnection) {
    // Getting native PeerConnection object (Must be used in read-only mode otherwise it may interfere with the state management)
    const nativePeerConnection = peerConnection.native;
    const trackNativeStatistics = () => {
      nativeStatisticsPollTimeout = setTimeout(() => {
        // Getting native statistics reports and display them in console
        nativePeerConnection.getStats().then(stats => {
          stats.forEach(report => {
            console.log('Report Type: ', report.type);
            console.table(report);
          });

          trackNativeStatistics();
        });
      }, nativeStatisticsPollInterval);
    };

    trackNativeStatistics();
  }
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