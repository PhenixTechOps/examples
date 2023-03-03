/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 * The following code is provided as an example only and is not intended for use in a production environment.
 * https://phenixrts.com/en-us/terms-of-service.html
 */

const statsDivContainer = document.createElement('div');
statsDivContainer.setAttribute('id', 'statsContainer');
statsDivContainer.style.display = 'flex';
statsDivContainer.style.width = '100%';
statsDivContainer.style.height = '100%';

document.body.appendChild(statsDivContainer);

//video stats display
const videoStatsDiv = document.createElement('div');
videoStatsDiv.style.width = '50%';
videoStatsDiv.style.height = '100%';
videoStatsDiv.setAttribute('id', 'videoStatsContainer');
videoStatsDiv.style.padding = '10px';
statsDivContainer.appendChild(videoStatsDiv);

//audio stats display
const audioStatsDiv = document.createElement('div');
audioStatsDiv.style.width = '50%';
audioStatsDiv.style.height = '220px';
audioStatsDiv.setAttribute('id', 'audioStatsContainer');
audioStatsDiv.style.padding = '10px';
statsDivContainer.appendChild(audioStatsDiv);

const videoStatsContainer = document.getElementById('videoStatsContainer');
const audioStatsContainer = document.getElementById('audioStatsContainer');
document.body.appendChild(statsDivContainer);

//subscribe to the rtc statistics callback
channel.rtcStatistics.subscribe((stats) => {
  //create views looping through the stats object - video and audio
  if (stats && stats.video) {
    videoStatsContainer.innerHTML = '';
    const myWrapperElement = document.createElement('span');
    const myTextElement = document.createTextNode('Video Stats: ');
    myWrapperElement.appendChild(myTextElement);
    myWrapperElement.classList.add('my-leader-wrapper-class');
    videoStatsContainer.appendChild(myWrapperElement);
    const br = document.createElement('br');
    videoStatsContainer.appendChild(br);
    for (let key in stats.video) {
      var value = stats.video[key];
      if (key == 'bitrate') {
        value = formatBitrate(value);
      }
      const keySpan = document.createElement('span');
      const myKeyElement = document.createTextNode(key + ': ');
      keySpan.appendChild(myKeyElement);
      keySpan.classList.add('my-key-wrapper-class');
      videoStatsContainer.appendChild(keySpan);
      const valueSpan = document.createElement('span');
      const myValueElement = document.createTextNode(value);
      valueSpan.appendChild(myValueElement);
      valueSpan.classList.add('my-value-wrapper-class');
      videoStatsContainer.appendChild(valueSpan);
      const br = document.createElement('br');
      videoStatsContainer.appendChild(br);
    }
  }
  if (stats && stats.audio) {
    audioStatsContainer.innerHTML = '';
    const myWrapperElement = document.createElement('span');
    const myTextElement = document.createTextNode('Audio Stats: ');
    myWrapperElement.appendChild(myTextElement);
    myWrapperElement.classList.add('my-leader-wrapper-class');
    audioStatsContainer.appendChild(myWrapperElement);
    const br = document.createElement('br');
    audioStatsContainer.appendChild(br);
    for (let key in stats.audio) {
      var value = stats.audio[key];
      if (key == 'bitrate') {
        value = formatBitrate(value);
      }
      const keySpan = document.createElement('span');
      const myKeyElement = document.createTextNode(key + ': ');
      keySpan.appendChild(myKeyElement);
      keySpan.classList.add('my-key-wrapper-class');
      audioStatsContainer.appendChild(keySpan);
      const valueSpan = document.createElement('span');
      const myValueElement = document.createTextNode(value);
      valueSpan.appendChild(myValueElement);
      valueSpan.classList.add('my-value-wrapper-class');
      audioStatsContainer.appendChild(valueSpan);

      const br = document.createElement('br');
      audioStatsContainer.appendChild(br);
    }
  }
});

const formatBitrate = (value) => {
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
  const valueSizeUnit =
    sizeUnits
      .slice()
      .reverse()
      .find((unit) => value >= unit.value) || sizeUnits[0];
  let formattedValue = (value / valueSizeUnit.value).toFixed(2) || 0;

  if (valueSizeUnit !== sizeUnits[0]) {
    formattedValue = String(formattedValue).substring(0, 3);

    while (formattedValue.replace('.', '').length !== 3) {
      formattedValue += '0';
    }
  }
  return `${formattedValue}${valueSizeUnit.symbol}bps`;
};

// css to style the dynamic stats
const styleElement = document.createElement('style');
styleElement.textContent = `
.my-leader-wrapper-class {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 14px;
    color: #000000;
    font-weight: 700 ;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }
  .my-key-wrapper-class {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 12px;
    color: #656565;
    font-weight: 700;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }
  .my-value-wrapper-class {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 12px;
    color: #000000;
    font-weight: 400 ;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }
`;

// Append the style element to the head of the document
document.head.appendChild(styleElement);
