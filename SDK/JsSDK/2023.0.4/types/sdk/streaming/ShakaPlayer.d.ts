import { LiveStreamingOptions, LiveStreamingStatistics } from './StreamTypes';
declare type ShakaOptions = {
    abr: {
        defaultBandwidthEstimate: number;
    };
    manifest: {
        retryParameters: {
            timeout: number;
        };
    };
    streaming: {
        rebufferingGoal: number;
        bufferingGoal: number;
        bufferBehind: number;
        retryParameters: {
            timeout: number;
            maxAttempts: number;
            backoffFactor: number;
        };
    };
};
export interface IShaka {
    configure: (o: ShakaOptions) => void;
    load: (uri: string) => Promise<void>;
    getStats: () => LiveStreamingStatistics;
    destroy: () => void;
    unload: () => void;
}
export default class ShakaPlayer {
    private readonly _logger;
    private readonly _videoElement;
    private readonly _kind;
    private readonly _streamId;
    private readonly _manifestURI;
    private readonly _options;
    private _player;
    constructor(videoElement: HTMLVideoElement, kind: string, streamId: string, manifestURI: string, options: LiveStreamingOptions);
    start(): void;
    getStats(): LiveStreamingStatistics;
    dispose(): void;
    private loadPlayer;
}
export {};
