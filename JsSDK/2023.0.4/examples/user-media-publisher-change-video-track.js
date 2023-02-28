/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* global phenix */
// Alternate ways to load the sdk directly:
// import phenix from '@phenixrts/sdk';
// import phenix from "../../dist/min/publish";

const token = new URLSearchParams(location.search).get('token') || '';
const mainVideoElement = document.getElementById('mainVideoElement');
const secondaryVideoElement = document.getElementById('secondaryVideoElement');
const stopButton = document.getElementById('stop');
const startButton = document.getElementById('start');
const stateSpan = document.getElementById('state');
let isScreenSharingActive = false;
const changeMediaStreamButton = document.getElementById('changeMediaStream');
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
  let cameraStream = mediaStream;
  let screenSharingMediaStream;
  // Example of how to switch media stream
  const changeMediaStream = () => {
    if (publisher.state.value === PublisherState.Publishing) {
      // Stop running stream
      if (!isScreenSharingActive) {
        if (screenSharingMediaStream) {
          publisher.setMediaStream(screenSharingMediaStream);
          mediaStreamInUse = screenSharingMediaStream;
          mainVideoElement.srcObject = screenSharingMediaStream;
          secondaryVideoElement.srcObject = cameraStream;
          isScreenSharingActive = true;

          return;
        }

        navigator.mediaDevices.getDisplayMedia().then(screenSharingMediaStream_ => {
          screenSharingMediaStream_.addTrack(publisher.mediaStream.value.getAudioTracks()[0]);
          secondaryVideoElement.srcObject = cameraStream;
          secondaryVideoElement.play();
          publisher.setMediaStream(screenSharingMediaStream_);
          screenSharingMediaStream = screenSharingMediaStream_;
          mediaStreamInUse = screenSharingMediaStream_;
          mainVideoElement.srcObject = screenSharingMediaStream_;

          secondaryVideoElement.style.display = 'inline-block';
          isScreenSharingActive = true;

          return;
        });
      }

      isScreenSharingActive = false;

      publisher.setMediaStream(cameraStream);
      mediaStreamInUse = cameraStream;
      mainVideoElement.srcObject = cameraStream;
      secondaryVideoElement.srcObject = screenSharingMediaStream;
    }
  };

  changeMediaStreamButton.onclick = () => changeMediaStream();

  // eslint-disable-next-line
  const publisherStateSubscription = publisher.state.subscribe(state => {
    stateSpan.textContent = PublisherState[state];

    if (state === PublisherState.Publishing) {
      startButton.style.display = 'none';
      stopButton.style.display = 'inline-block';
      mainVideoElement.srcObject = mediaStreamInUse;
    } else {
      mainVideoElement.srcObject = null;
      startButton.style.display = 'inline-block';
      stopButton.style.display = 'none';
    }
  });

  stopButton.onclick = () => {
    publisher.stop().then(() => {
      mainVideoElement.srcObject = null;

      if (cameraStream) {
        cameraStream.getTracks()
          .forEach(track => track.stop());
        cameraStream = null;
      }

      if (screenSharingMediaStream) {
        screenSharingMediaStream.getTracks()
          .forEach(track => track.stop());
        screenSharingMediaStream = null;
        secondaryVideoElement.style.display = 'none';
      }

      isScreenSharingActive = false;
    });
  };

  startButton.onclick = () => {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(newMediaStream => {
      publisher.setMediaStream(newMediaStream);
      mediaStreamInUse = newMediaStream;
      cameraStream = newMediaStream;

      publisher.start();
    });
  };
});