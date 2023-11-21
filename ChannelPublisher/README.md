# Channel Publisher example

## Description

Code example on how to publish a stream using the PhenixRTS SDK.

## Getting Started

### Dependencies

There are no outside dependencies.

## How to use

- Run on a local webserver

# Instructions

1. Generate a publish token in the Customer portal under the edgeAuth tab by selecting "publish".

2. Open main.js.
3. Replace the `TOKEN` value with the publish token created.

```
var token = new URLSearchParams(location.search).get('token') || 'TOKEN';
```

Optionally, you can add the tokens as a url parameter by adding `?token=TOKEN` to the url, replaceing `TOKEN` with the token generated.

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
