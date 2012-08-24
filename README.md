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

## Examples

- Checkout the [demo](demo/pinchzoom.html "PinchZoom demo").
- You can combine PinchZoom with [Swipe.js](http://swipejs.com/), or other libraries: [demo](demo/swipe.html "PinchZoom/Swipe.js demo")



## AMD

PinchZoom.js is ready to be loaded using an AMD module loader like [require.js](http://requirejs.org/ "require.js")
