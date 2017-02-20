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

```

# Events

Pinchzoom emits some custom events you can listen to

```Text

pz_zoomstart  Started to zoom
pz_zoomend    Stopped zooming
pz_dragstart  Started to drag the element
pz_dragend    Stopped to drag the element
pz_doubletap  Resetting the zoom with doubletab

```

### Methods

```Text

enable:             Enables all gesture capturing (default)
disable:            Disables all gesture capturing

```

## Licence

PinchZoom is licensed under the [MIT License](http://opensource.org/licenses/MIT).

As a special exception to the GPL, any HTML file which merely makes function calls to this code, and for that purpose includes it by reference shall be deemed a separate work for copyright law purposes. In addition, the copyright holders of this code give you permission to combine this code with free software libraries that are released under the GNU LGPL. You may copy and distribute such a system following the terms of the GNU GPL for this code and the LGPL for the libraries. If you modify this code, you may extend this exception to your version of the code, but you are not obligated to do so. If you do not wish to do so, delete this exception statement from your version.


## Github Page with demo

http://rtp-ch.github.com/pinchzoom/
