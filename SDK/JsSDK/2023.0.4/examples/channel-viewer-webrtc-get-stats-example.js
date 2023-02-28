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

// This example will show inbound stats that are returned by the browser from promise based getStats API
// Will not work with chrome v66 and smaller as it does not support promise based api
const channelGetStats = () => {
  // Getting content every 3 seconds if you want to do it more often please change the timeout value
  setTimeout(() => {
    console.log('Stats table in console:');

    if (phenix.SDK.browserDetector.browserName === 'Chrome' && phenix.SDK.browserDetector.browserMajorVersion <= 66) {
      /* eslint-disable @typescript-eslint/no-use-before-define */
      channelGetStatsLegacy();
      /* eslint-enable */

      return;
    }

    channel.peerConnection.value.getStats().then(stats => {
      const rtcStatistics = [];

      if (stats) {
        stats.forEach(i => {
          if (i.type === 'inbound-rtp') {
            rtcStatistics.push(i);
          }
        });

        // This will display content in table format for better readability
        console.table(rtcStatistics);
      }
    }).then(() => {
      channelGetStats();
    });
  }, 3000);
};

// Usage of the legacy method for the Chrome v66 and lower
const channelGetStatsLegacy = () => {
  channel.peerConnection.value.getStatsLegacy().then(stats => {
    const rtcStatistics = [];

    stats.result().forEach(report => {
      if (report.type === 'ssrc') {
        const reportObj = {};

        report.names().forEach(name => {
          reportObj[name] = report.stat(name);
        });
        rtcStatistics.push(reportObj);
      }
    });

    // This will display content in table format for better readability
    console.table(rtcStatistics);
  }).then(() => {
    channelGetStats();
  });
};

channelGetStats();