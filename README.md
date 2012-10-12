# PinchZoom.js

PinchZoom.js is a Javascript library providing multi touch gestures for zooming and dragging on any DOM element.

## Usage

### Requirements
Its built using Underscore.js and jQuery.

### Initialisation

```Javascript

new PinchZoom($('#your-element'), options);

```

### Options

```Text

tapZoomFactor:      The zoom factor a double tap zooms to. (default 2)
zoomOutFactor:      Resizes to original size when zoom factor is below the configured value. (default 1.3)
animationDuration:  The animation duration in milliseconds. (default 300)
maxZoom:            The maximum zoom factor. (default 4)
minZoom:            The minimum zoom factor. (default 0.5)

```

## Licence

This is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License, either version 3 of the License, or (at your option) any later version.

## Github Page with demo

http://rtp-ch.github.com/PinchZoom/