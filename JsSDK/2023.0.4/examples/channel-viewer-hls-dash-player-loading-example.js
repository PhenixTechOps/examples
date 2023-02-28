/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* global phenix */
// Alternate ways to load the sdk directly:
// import phenix from '@phenixrts/sdk';
// import phenix from "../../dist/min/channels";

var token = new URLSearchParams(location.search).get('token') || '';
var webPlayer = new URLSearchParams(location.search).get('webPlayer');
var shakaPlayer = new URLSearchParams(location.search).get('shakaPlayer');
var hlsPlayer = new URLSearchParams(location.search).get('hlsPlayer');
var videoElement = document.getElementsByTagName('video')[0];
var initObject = {};

if ((webPlayer || webPlayer !== null) ||
  (!(shakaPlayer || shakaPlayer !== null) &&
  !(hlsPlayer || hlsPlayer !== null))
) {
  initObject['webPlayerLoader'] = function(callback) {
    var script = document.createElement('script');

    script.onload = function() {
      callback(window['phenix-web-player']);
    };
    script.src = webPlayer || 'https://dl.phenixrts.com/WebPlayer/2020.0.latest/phenix-web-player-bundled.min.js';

    document.head.appendChild(script);
  };
}

if (shakaPlayer || shakaPlayer !== null) {
  initObject['shakaPlayerLoader'] = function(callback) {
    var script = document.createElement('script');

    script.onload = function() {
      callback(window.shaka);
    };
    script.src = shakaPlayer || 'https://ajax.googleapis.com/ajax/libs/shaka-player/2.5.14/shaka-player.compiled.js';

    document.head.appendChild(script);
  };
}

if (hlsPlayer || hlsPlayer !== null) {
  initObject['hlsJsLoader'] = function(callback) {
    var script = document.createElement('script');

    script.onload = function() {
      callback(window['Hls']);
    };
    script.src = hlsPlayer || 'https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.5.21/hls.min.js';

    document.head.appendChild(script);
  };
}

phenix.SDK.init(initObject);

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