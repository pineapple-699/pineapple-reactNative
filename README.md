# Pineapple React-Native
[![Build Status](https://travis-ci.com/pineapple-699/pineapple-reactNative.svg?branch=master)](https://travis-ci.com/pineapple-699/pineapple-reactNative)
[![codecov](https://codecov.io/gh/pineapple-699/pineapple-reactNative/branch/master/graph/badge.svg)](https://codecov.io/gh/pineapple-699/pineapple-reactNative)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Development

### Application Development
This project is built with [React-Native](https://facebook.github.io/react-native/). 

Here are some quick commands to get started:

- `npm install`: Install Node dependencies.
- `npm run web`: Start the hot reloading development server.
- `npm run test`: Run the test suit and watch for changes.
- `npm run lint`: Run the lint suit to make sure code is up to standard. 

### Component Development
This project is uses [Storybook.js](https://storybook.js.org/docs/basics/introduction/) to test components.

Here's a guide to get started:
- `npm run storybook` will bring up the Storybook UI in the browser. Note that no components are showing in the left-hand panel. That's intended behavior for React-Native.
- In `App.js`, set the constant `SHOW_STORYBOOK` to true. 
- `npm run start` in ANOTHER terminal. This will bring up the storybook UI on the device/device simulator. Note that components you've registered as stories in the folder `storybook` now show up in the Storybook UI.

If you want to run the app normally, set `SHOW_STORYBOOK` to false in App.js.

 
## Standards
![](https://camo.githubusercontent.com/ac39e55435127da9f093723cb83e5e17ca951220/687474703a2f2f692e696d6775722e636f6d2f413258614e71632e706e67)


## Resources
[Dev Stack](https://dev.to/newbiebr/my-react-native-stack-after-1-year-37j)

[Collecting Coverage Reports](https://github.com/codecov/example-node)
