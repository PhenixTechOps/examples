/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* global phenix */
// Alternate ways to load the sdk directly:
// import phenix from '@phenixrts/sdk';
// import phenix from "../../dist/legacy.debug/channels";

var token = '';

var queryParameters = window.location.search.substring(1).split('&');

queryParameters.forEach(function(prarameter) {
  var decodedParameter = decodeURIComponent(prarameter);

  if (decodedParameter.match(/token=/)) {
    var prarameterValue = decodedParameter.replace('token=', '');

    token = prarameterValue;
  }
});

var videoElement = document.getElementsByTagName('video')[0];
var channel = phenix.Channels.createChannel({
  videoElement: videoElement,
  token: token
});

channel.autoMuted.subscribe(function(autoMuted) {
  if (autoMuted) {
    console.log('Playback was auto-muted by browser. Please use user action to initiate `channel.unmute()`');
  }
});

channel.autoPaused.subscribe(function(autoPaused) {
  if (autoPaused) {
    console.log('Playback was auto-paused by browser. Please use user action to initiate `channel.play()`');
  }
});