# OpenWhisk to Twitter

A serverless function for tweeting. Based on [Strongloop's Javascript example](https://github.com/StrongLoop-Evangelists/openwhisk-twitterbot-template).

## Instructions

1. [Create a Twitter application](https://apps.twitter.com)
2. [Create a Bluemix account](https://console.bluemix.net/registration/)
3. [Install the Bluemix CLI and Cloud Functions (OpenWhisk) Plugin](https://console.bluemix.net/openwhisk/learn/cli)
4. Clone this repo
5. Add your Twitter application credentials to `temp-config.js`
6. Rename `temp-config.js` to `config.js`
7. Run `npm install`
8. Zip everything together with `zip -r -X "post-to-twitter.zip" *`
9. Create a new cloud function with `bx wsk action create post-to-twitter --kind nodejs:6 post-to-twitter.zip`
10. Profit!

## Assumptions

The cloud function expects that `args` contains values for `success` and `message`. Here's an example:

```json
{
    "success": true,
    "message": "this is the message I want to tweet!"
}
```
