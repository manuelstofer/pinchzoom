#!/bin/bash

# clean dist dir
if [ -d dist ]; then rm -rf dist; fi
mkdir dist

# UMD build
babel src/pinch-zoom.js -o dist/pinch-zoom.umd.js

# Minify
babel-minify --sourceType module src/pinch-zoom.js -o dist/pinch-zoom.min.js
babel-minify dist/pinch-zoom.umd.js -o dist/pinch-zoom.umd.min.js
