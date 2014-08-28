# PinchZoom.js

PinchZoom.js is a Javascript library providing multi touch gestures for zooming and dragging on any DOM element.

## Usage

### Requirements
* jQuery or Zepto.
* ECMA 5 support (http://caniuse.com/use-strict).

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
zoomStartEventName  Registers a custom handler to be triggered by the ZoomStart event (default pz_zoomstart)
zoomEndEventName    Registers a custom handler to be triggered by the ZoomEnd event (default pz_zoomend)
dragStartEventName  Registers a custom handler to be triggered by the DragStart event (default pz_dragstart)
dragEndEventName    Registers a custom handler to be triggered by the DragEnd event (default pz_dragend)
doubleTapEventName  Registers a custom handler to be triggered by the DoubleTap event (default pz_doubletap)

```

### Methods

```Text

enable:             Enables all gesture capturing (default)
disable:            Disables all gesture capturing

```

## Licence

PinchZoom is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## Github Page with demo

http://rtp-ch.github.com/pinchzoom/