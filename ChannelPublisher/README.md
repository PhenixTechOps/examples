# Channel Publisher example

## Description

Code example on how to publish a stream using the PhenixRTS SDK.

## Getting Started

### Dependencies

There are no outside dependencies.

## How to use

- Run on a local webserver

# Instructions

1. Generate an auth token and publish token in the Customer portal under the edgeAuth tab by selecting "publish".

2. Open main.js.
3. Replace the `AUTH_TOKEN` value with the auth token created.
4. Replace the `PUBLISH_TOKEN` value with the publishing token created.

```
var authToken = new URLSearchParams(location.search).get('authtoken') || 'AUTH_TOKEN';
var publishToken = new URLSearchParams(location.search).get('publishtoken') ||'PUBLISH_TOKEN';
```

Optionally, you can add the tokens as a url parameter by adding `?authtoken=AUTH_TOKEN&publishtoken=PUBLISH_TOKEN` to the url, replaceing `AUTH_TOKEN` and `PUBLISH_TOKEN` with the tokens generated.

1. Save, start local server and then open in a browser.

## Help

Please use slack if you have any questions.

## Authors

Bob Wohl

## Version History

- 0.1
  - Initial Release

## Acknowledgments

This example was built using the PhenixRTS Web SDK Documentation.

- [Web SDK Channel Publishing Documentation](https://phenixrts.com/docs/sdk_ref/web/express-channel/#publish-to-a-channel)
