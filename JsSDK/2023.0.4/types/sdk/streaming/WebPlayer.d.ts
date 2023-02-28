import { LiveStreamingOptions, LiveStreamingStatistics } from './StreamTypes';
declare type EventListenerForWebPlayer = (evt: WebPlayerEvent) => void;
declare type WebPlayerEvent = {
    code: number;
    severity: number;
    error: string;
};
export interface IWebPlayer {
    start: (url: string) => void;
    addEventListener(name: string, listener: EventListenerForWebPlayer): void;
    dispose(): void;
    errors: {
        severity: {
            RECOVERABLE: number;
        };
    };
    getStats(): LiveStreamingStatistics;
}
export default class WebPlayer {
    private readonly _logger;
    private readonly _videoElement;
    private readonly _kind;
    private readonly _streamId;
    private readonly _manifestURI;
    private readonly _options;
    private _player;
    private _lastReloadTime;
    constructor(videoElement: HTMLVideoElement, kind: string, streamId: string, manifestURI: string, options: LiveStreamingOptions);
    start(): void;
    isSupported(): boolean;
    getStats(): LiveStreamingStatistics;
    dispose(): void;
    private canReload;
    private reloadIfAble;
    private reload;
}
export {};
