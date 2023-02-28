export default class PhenixFlashVideo {
    private _logger;
    private _ghost;
    private _stream;
    private _options;
    private _disposables;
    private _flashPlayer;
    private _loaded;
    private _enabled;
    private _onReady;
    private _video;
    private _ghostInitStyleCssText;
    constructor(ghost: any, stream: any, options: any);
    hookUpEvents(): void;
    getElement(): HTMLVideoElement;
    onReady(callback: any): void;
    dispose(): void;
    private addEventListener;
    private removeEventListener;
    private dispatchEvent;
    private createPhenixFlashVideoElement;
    private observeInsertion;
    initialize(): void;
    private isDescendant;
    propagateAttributeChanges(): void;
}
