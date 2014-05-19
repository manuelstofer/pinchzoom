# PinchZoom.js

PinchZoom.js is a Javascript library providing multi touch gestures for zooming and dragging on any DOM element.

## Usage

### Requirements
Its built using jQuery. Requires modern js (ECMA Script 5).

For a good proxy of ECMA 5 support, look at http://caniuse.com/use-strict.

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
lockDragAxis        Locks panning of the element to a single axis. (default false)

```

### Methods

```Text

enable:             Enables all gesture capturing
disable:            Disables all gesture capturing

```

## Licence

This is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License, either version 3 of the License, or (at your option) any later version.

## Github Page with demo

http://rtp-ch.github.com/pinchzoom/