/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* global phenix */
// Alternate ways to load the sdk directly:
// import phenix from '@phenixrts/sdk';
// import phenix from "../../dist/min/publish";

const token = new URLSearchParams(location.search).get('token') || '';
const videoElement = document.getElementsByTagName('video')[0];
const stopButton = document.getElementById('stop');
const startButton = document.getElementById('start');
const stateSpan = document.getElementById('state');
const resolutionSpan = document.getElementById('resolution');
const videoCodecSpan = document.getElementById('video-codec');
const audioCodecSpan = document.getElementById('audio-codec');
const videoBitrateSpan = document.getElementById('video-bitrate');
const audioBitrateSpan = document.getElementById('audio-bitrate');
const framerateSpan = document.getElementById('framerate');
const screenName = new URLSearchParams(location.search).get('screenName') || (Math.random() + 1).toString(36).substring(2);
const PublisherState = phenix.PublisherState;

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(mediaStream => {
  const publisher = phenix.Publishers.createPublisher({
    mediaStream,
    name: screenName,
    token
  });
  let mediaStreamInUse = mediaStream;

  // eslint-disable-next-line
  const publisherStateSubscription = publisher.state.subscribe(state => {
    stateSpan.textContent = PublisherState[state];

    if (state === PublisherState.Publishing) {
      startButton.style.display = 'none';
      stopButton.style.display = 'inline-block';
      videoElement.srcObject = mediaStreamInUse;
    } else {
      videoElement.srcObject = null;
      startButton.style.display = 'inline-block';
      stopButton.style.display = 'none';
    }
  });

  // eslint-disable-next-line
  const publisherStatisticsSubscription = publisher.rtcStatistics.subscribe(stats => {
    if (stats && stats.video) {
      if (stats.video.frameWidth && stats.video.frameHeight) {
        const videoResolution = `${stats.video.frameWidth}w x ${stats.video.frameHeight}h`;

        if (videoResolution !== resolutionSpan.textContent) {
          resolutionSpan.textContent = videoResolution;
        }
      }

      if (stats.video.codec && stats.video.codec !== videoCodecSpan.textContent) {
        videoCodecSpan.textContent = stats.video.codec;
      }

      if (stats.video.bitrate) {
        videoBitrateSpan.textContent = formatBitrate(Math.floor(stats.video.bitrate));
      }

      if (stats.video.fps) {
        framerateSpan.textContent = `@${stats.video.fps.toFixed(2)}FPS`;
      }
    }

    if (stats && stats.audio) {
      if (stats.audio.codec) {
        audioCodecSpan.textContent = stats.audio.codec;
      }

      if (stats.audio.bitrate) {
        audioBitrateSpan.textContent = formatBitrate(Math.floor(stats.audio.bitrate));
      }
    }
  });
  stopButton.onclick = () => {
    publisher.stop().then(() => {
      videoElement.srcObject = null;

      if (mediaStreamInUse) {
        mediaStreamInUse.getTracks()
          .forEach(track => track.stop());
      }
    });
  };

  startButton.onclick = () => {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(newMediaStream => {
      publisher.setMediaStream(newMediaStream);
      mediaStreamInUse = newMediaStream;
      publisher.start();
    });
  };

  // Example of how to switch media stream
  // setTimeout(() => {
  //   mediaStream.getTracks()
  //     .forEach(track => track.stop())
  //   setTimeout(() => {
  //     navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: true
  //     }).then(newMediaStream => {
  //       if (publisher.state.value === PublisherState.Publishing) {
  //         publisher.setMediaStream(newMediaStream);
  //         videoElement.srcObject = newMediaStream;
  //       }
  //     });
  //   }, 2000);
  // }, 5000);

  // Example of how to stop and start the publisher
  // setTimeout(() => {
  //   publisher.stop();
  //   mediaStream.getTracks()
  //     .forEach(track => track.stop())
  //   setTimeout(() => {
  //     navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: true
  //     }).then(newMediaStream => {
  //       mediaStreamInUse = newMediaStream;
  //       publisher.setMediaStream(mediaStreamInUse);
  //       publisher.start();
  //     });
  //
  //   }, 5000);
  // }, 5000);

  const formatBitrate = value => {
    const sizeUnits = [
      {
        value: 1,
        symbol: ''
      },
      {
        value: 1e3,
        symbol: 'k'
      },
      {
        value: 1e6,
        symbol: 'M'
      },
      {
        value: 1e9,
        symbol: 'G'
      },
      {
        value: 1e12,
        symbol: 'T'
      },
      {
        value: 1e15,
        symbol: 'P'
      },
      {
        value: 1e18,
        symbol: 'E'
      }
    ];
    const valueSizeUnit = sizeUnits
      .slice()
      .reverse()
      .find(unit => value >= unit.value) || sizeUnits[0];
    let formattedValue = (value / valueSizeUnit.value).toFixed(2) || 0;

    if (valueSizeUnit !== sizeUnits[0]) {
      formattedValue = String(formattedValue).substring(0, 3);

      while (formattedValue.replace('.', '').length !== 3) {
        formattedValue += '0';
      }
    }

    return `${formattedValue}${valueSizeUnit.symbol}bps`;
  };
});