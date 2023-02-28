import IDisposable from '../../lang/IDisposable';
import { HlsPlayerType, LiveStreamingOptions, LiveStreamingStatistics, ShakaType, WebPlayerType } from './StreamTypes';
export declare class LiveStreaming {
    private static _pending;
    private static _hlsPlayer;
    private static _phenixWebPlayer;
    private static _shaka;
    private static _options;
    private static _player;
    static get hlsPlayer(): HlsPlayerType;
    static get phenixWebPlayer(): WebPlayerType;
    static get shaka(): ShakaType;
    static start(videoElement: HTMLVideoElement, streamId: string, offerSdp: string, options: LiveStreamingOptions): Promise<IDisposable>;
    static getStats(): LiveStreamingStatistics;
    private static play;
    private static loaded;
}
