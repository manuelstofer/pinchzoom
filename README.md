# PinchZoom.js

PinchZoom.js is a Javascript library providing multi touch gestures for zooming and dragging on any DOM element.

## Usage

### Requirements
* No dependencies, built with vanilla JS.
* ECMA 5 support (http://caniuse.com/use-strict).

### Initialisation

```Javascript

let el = document.querySelector('#my-id');
let pz = new PinchZoom(el, options);

```

### Options

```Text

tapZoomFactor:      Zoom factor that a double tap zooms to. (default 2)
zoomOutFactor:      Resizes to original size when zoom factor is below this value. (default 1.3)
animationDuration:  Animation duration in milliseconds. (default 300)
maxZoom:            Maximum zoom factor. (default 4)
minZoom:            Minimum zoom factor. (default 0.5)
lockDragAxis:       Lock panning of the element to a single axis. (default false)
```

# Events

Pinchzoom emits some custom events you can listen to:

```Text

pz_zoomstart  Started to zoom
pz_zoomend    Stopped zooming
pz_dragstart  Started to drag the element
pz_dragend    Stopped to drag the element
pz_doubletap  Resetting the zoom with double-tab

```

### Methods

```Javascript
let pz = new PinchZoom(myElement);

pz.enable(); // Enables all gesture capturing (is enabled by default)
pz.disable(); // Disables all gesture capturing

```

### Troubleshooting

- If you have issues with invisible images, make sure that the image isn't absolutely positioned.
  In some cases that will cause trouble.

## License

PinchZoom is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## Github Page with demo

http://manuelstofer.github.com/pinchzoom/
