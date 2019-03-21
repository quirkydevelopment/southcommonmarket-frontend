# Prerequisites
* [Install `yarn` package manager](https://yarnpkg.com/lang/en/docs/install/)

# Getting Started
* `yarn install` - install package dependencies
* `yarn start` - run only once at the very first instance to test/create initial build
* `yarn dev` - run development localhost server with browsersync
* `yarn build` - build prod files
* `yarn deploy` - deploy to gh-pages

# Troubleshooting
* **Error: `Cannot GET /`**
  * run `yarn start` before `yarn dev`

# Generic [Parcel](https://parceljs.org/) Template
* Uses Sass and the 7-1 Pattern by Hugo Giraudel.
* Uses the JavaScript Revealing Module Pattern.
* Disables responsiveness on IE9 and below.
* Shows unobtrusive bar to the visitors who is visiting your website with an IE <= 9 browser.
* Prevents auto zoom on iOS when entering an input field.
* Disables auto-formatting of possible phone numbers in a webpage in Safari on iOS.
* Removes webkit input fields outline glow on focus.
* Added breakpoint mixins for more granular control.
* Added keyframes, animation, transition and transform mixins to boil down to just a few lines of code.
* Uses Parcel to bundle, minify, and optimize HTML, CSS and JS.

# Changelog

### 1.1.2
* Explicit ES6 import on dependencies

### 1.1.1
* Remove `tether` from dependencies

### 1.1.0
* Add deploy to `gh-pages` script
* Windows support with concurrent scripts

### 1.0.0
* initial commit