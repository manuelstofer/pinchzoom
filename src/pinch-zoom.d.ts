type PinchZoomEventHandler = (target: PinchZoom, event: TouchEvent) => void;

interface IPinchZoomOptions {
    tapZoomFactor?: number;
    zoomOutFactor?: number;
    animationDuration?: number;
    maxZoom?: number;
    minZoom?: number;
    draggableUnzoomed?: boolean;
    lockDragAxis?: boolean;
    setOffsetsOnce?: boolean;
    use2d?: boolean;
    verticalPadding?: number;
    horizontalPadding?: number;

    onZoomStart?: PinchZoomEventHandler;
    onZoomEnd?: PinchZoomEventHandler;
    onZoomUpdate?: PinchZoomEventHandler;
    onDragStart?: PinchZoomEventHandler;
    onDragEnd?: PinchZoomEventHandler;
    onDragUpdate?: PinchZoomEventHandler;
    onDoubleTap?: PinchZoomEventHandler;

    zoomStartEventName?: string;
    zoomUpdateEventName?: string;
    zoomEndEventName?: string;
    dragStartEventName?: string;
    dragUpdateEventName?: string;
    dragEndEventName?: string;
    doubleTapEventName?: string;
}

declare class PinchZoom {
    constructor(element: HTMLElement, options?: IPinchZoomOptions);
    public enable(): void;
    public disable(): void;
}

export default PinchZoom;
