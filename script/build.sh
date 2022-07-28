#!/bin/bash

# clean dist dir
if [ -d dist ]; then rm -rf dist; fi
mkdir dist

# UMD build
npx babel src/pinch-zoom.js -o dist/pinch-zoom.umd.js

# Minify
npx babel-minify --sourceType module src/pinch-zoom.js -o dist/pinch-zoom.min.js
npx babel-minify dist/pinch-zoom.umd.js -o dist/pinch-zoom.umd.min.js

echo "Build completed, see dist directory"
