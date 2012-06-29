# Pinchzoom.js

Pinchzoom.js is a Javascript library providing pinchzoom, double tab zoom and dragging gestures on any DOM
element in multi touch enabled browsers.

## Usage

Its built using Underscore.js and jQuery. So make sure you include those.

### Initialisation

```Javascript

new PinchZoom($('#your-element'), options);

```

### Options

```Text

tabZoomFactor:      The zoom factor a doubletab zooms to. (default 2)
zoomOutFactor:      Resizes to original size when zoomfactor is below the configured value. (default 1.3)
animationDuration:  The animation duration in milliseconds. (default 300)
maxZoom:            The maximum zoom level. (default 4)
minZoom:            The minimum zoom level. (default 0.5)
use2d:              Fallback to 2d transformations after interaction, which has better quality. (default true)

```

## Examples

Checkout the [demo](demo/pinchzoom.html "Pinchzoom demo").



## Swipe

You can combine Pinchzoom with [Swipe.js](http://swipejs.com/), or other libraries: [demo](demo/swipe.html "Pinchzoom/Swipe.js demo")


## AMD

Pinchzoom.js is ready to be loaded using an AMD module loader like [require.js](demo/pinchzoom.html "require.js")
