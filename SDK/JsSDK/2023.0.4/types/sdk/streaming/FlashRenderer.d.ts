import { LiveStreamingStatistics } from './StreamTypes';
export declare type StreamInfo = {
    uri: string;
    bitrate: string;
    resolution: string;
};
export default class FlashRenderer {
    private readonly _logger;
    private readonly _stopPlayer;
    private readonly _onStalled;
    private readonly _onEnded;
    private readonly _streamId;
    private readonly _streamsInfo;
    private readonly _swfSrc;
    private _options;
    private _phenixVideo;
    private _playerElement;
    private _originElement;
    private _player;
    private _hasFlashPlugin;
    private _lastReloadTime;
    constructor(videoElement: any, type: any, streamId: any, streamsInfo: any, options: any, stopPlayer: () => void);
    isSupported(): boolean;
    start(): HTMLVideoElement;
    dispose(): void;
    getStats(): LiveStreamingStatistics;
    getPlayer(): HTMLVideoElement;
    reload(): void;
    private detectFlashPlugin;
    private stalled;
    private ended;
    private canReload;
    private reloadIfAble;
}
