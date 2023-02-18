/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 * The following code is provided as an example only and is not intended for use in a production environment.
 * https://phenixrts.com/en-us/terms-of-service.html
 */

var phenix = window['phenix'];
var channelArray = [];
var videoElements = [];
var addChannelButton = document.getElementById('addChannelButton');

var vidsTotal = 0;
function createVideo() {
  vidsTotal++;
  videoElements[vidsTotal] = 'myVideoId' + vidsTotal;
  var vid =
    '<video id="myVideoId' +
    vidsTotal +
    '" width="480" height="320" muted controls autoplay playsinline></video>';

  const newDiv = document.createElement('div' + vidsTotal);
  newDiv.innerHTML = vid;
  const currentDiv = document.getElementById('div' + vidsTotal);
  document.body.insertBefore(newDiv, currentDiv);
  channelArray[vidsTotal] = phenix.Channels.createChannel({
    videoElement: document.getElementById(videoElements[vidsTotal]),
    token: document.getElementById('channelId').value
  });
}

addChannelButton.onclick = createVideo;
