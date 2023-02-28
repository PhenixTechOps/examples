import { LiveStreamingOptions, LiveStreamingStatistics } from './StreamTypes';
export default class HlsPlayer {
    private readonly _videoElement;
    private readonly _kind;
    private readonly _streamId;
    private readonly _manifestURI;
    private readonly _options;
    private _player;
    constructor(videoElement: HTMLVideoElement, kind: string, streamId: string, manifestURI: string, options: LiveStreamingOptions);
    start(): void;
    isSupported(): boolean;
    getStats(): LiveStreamingStatistics;
    dispose(): void;
}
