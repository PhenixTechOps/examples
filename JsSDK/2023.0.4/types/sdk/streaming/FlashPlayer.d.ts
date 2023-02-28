import { StreamInfo } from './FlashRenderer';
export default class FlashPlayer {
    private _logger;
    private _isVideo;
    private _swfSrc;
    private _id;
    private _width;
    private _height;
    private _ghost;
    private _element;
    private _eventDisposables;
    private _disposables;
    private _flashVars;
    private _isFullscreen;
    constructor(ghost: any, streamInfo: StreamInfo, options: any);
    get element(): HTMLVideoElement;
    addEventListener(name: any, listener: any): void;
    removeEventListener(name: any, listener: any): void;
    triggerFlashEvent(eventName: any, args?: any): () => void;
    dispose(): void;
    createMicrosoftFlashElement(): HTMLVideoElement;
    setupCrossBrowserFlashElement(): HTMLVideoElement;
    createParameterElement(name: string, value: string): HTMLParamElement;
    setupElement(): void;
    createEvent(eventName: any, target: any): Event;
    getValueFromFlash(name: any): string;
    setupAccessors(): void;
    finishInitializationInDom(): HTMLVideoElement;
    propagateAttributeChanges(): void;
    getElement(): HTMLVideoElement;
    setFlashValue(name: string, value: string | boolean | number): () => void;
    setupVolumeAndMutedListeners(): void;
    getMutedListener(): () => void;
    getVolumeListener(): () => void;
    findEventListenerIndex(name: any, listener: any): number;
}
