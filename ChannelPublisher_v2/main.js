/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 * The following code is provided as an example only and is not intended for use in a production environment.
 * https://phenixrts.com/en-us/terms-of-service.html
 */

// create viewing token by using the customer portal in a channel's edgeAuth section.
// replace AUTH_TOKEN with your own token.
const token = new URLSearchParams(location.search).get('token') || 'AUTH_TOKEN';

const videoElement = document.getElementsByTagName('video')[0];
const stopButton = document.getElementById('stop');
const startButton = document.getElementById('start');
const stateSpan = document.getElementById('state');
// set screen name
const screenName = (Math.random() + 1).toString(36).substring(2);
const PublisherState = phenix.PublisherState;
console.log('loaded');
//use browser to get media devices
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true
  })
  .then((mediaStream) => {
    // create publisher
    console.log('creating publisher');
    const publisher = phenix.Publishers.createPublisher({
      mediaStream,
      name: screenName,
      token
    });
    // set media stream
    let mediaStreamInUse = mediaStream;
    // subscribe to state changes
    const publisherStateSubscription = publisher.state.subscribe((state) => {
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

    stopButton.onclick = () => {
      publisher.stop().then(() => {
        videoElement.srcObject = null;

        if (mediaStreamInUse) {
          mediaStreamInUse.getTracks().forEach((track) => track.stop());
        }
      });
    };

    startButton.onclick = () => {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true
        })
        .then((newMediaStream) => {
          publisher.setMediaStream(newMediaStream);
          mediaStreamInUse = newMediaStream;
          publisher.start();
        });
    };
  });
