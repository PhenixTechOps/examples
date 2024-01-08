# Channel Viewer example

## Description

Code example on how to view a stream using the PhenixRTS SDK.

## Getting Started

### Dependencies

There are no outside dependencies.

## How to use

- Run on a local webserver
- Run on JSFiddle.

# Instructions

1. Publish a stream to a channel using the customer portal.

2. Generate a viewing token in the Customer portal under the edgeAuth tab.

3. Open main.js. Replace the `AUTH_TOKEN` value with the viewing token created.

`const token = 'AUTH_TOKEN';`

4. Save, start local server and then open in a browser.

Optionally, you can add the token as a url parameter by adding `?token=AUTH_TOKEN` to the url, replaceing `AUTH_TOKEN` with your token.


1. Open [http://phenix-techops-examples.pages.dev/ChannelViewer/?token=](http://phenix-techops-examples.pages.dev/ChannelViewer/?token=)
2. Add your generated token to the end of the url and load the html page.

```
http://phenix-techops-examples.pages.dev/ChannelViewer/?token=DIGEST:...
```



## Help

Please use slack if you have any questions.

## Authors

Bob Wohl

## Version History

- 0.1
  - Initial Release

## Acknowledgments

This example was built using the PhenixRTS Web SDK Documentation.

- [Web SDK Channel Viewer Documentation](https://phenixrts.com/docs/sdk_ref/web/next-gen-channel/#channel-viewer)
