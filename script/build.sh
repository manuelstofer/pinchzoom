#!/bin/bash

# clean dist dir
if [ -d dist ]; then rm -rf dist; fi
mkdir dist

# UMD build
babel src/pinch-zoom.js -o dist/pinch-zoom.umd.js
