import { ILogger } from '../../logger/LoggerInterface';
import { IHlsPlayerType } from './IHlsPlayer';
import { NetworkStates } from './NetworkStates';
export declare type LiveStreamingStatistics = {
    width: number;
    height: number;
    currentTime: number;
    lag: number;
    networkState: NetworkStates;
    deliveryType?: string;
    isNative?: boolean;
    bufferingTime?: number;
    corruptedFrames?: number;
    decodedFrames?: number;
    droppedFrames?: number;
    estimatedBandwidth?: number;
    loadLatency?: number;
    pauseTime?: number;
    playTime?: number;
    stateHistory?: [{
        timestamp: number;
        state: string;
        duration: number;
    }];
    streamBandwidth?: number;
    video?: HTMLVideoElement;
    dataBuffered?: number;
};
export declare type LiveStreamingOptions = {
    preferNative?: boolean;
    originStartTime: number;
    lag: number;
};
export declare type WebPlayerType = {
    WebPlayer(logger: ILogger, videoElement: HTMLVideoElement, playerOptions: any): void;
    isSupported: boolean;
    errors: {
        severity: {
            RECOVERABLE: number;
        };
    };
};
export declare type HlsPlayerConfig = {
    enableWorker: boolean;
    maxBufferLength: number;
    liveBackBufferLength: number;
    liveSyncDuration: number;
    liveMaxLatencyDuration: number;
    liveDurationInfinity: boolean;
    highBufferWatchdogPeriod: number;
};
export declare type ShakaType = {
    Player(videoElement: HTMLVideoElement): void;
};
export declare type HlsPlayerType = {
    new (config: HlsPlayerConfig): IHlsPlayerType;
    isSupported(): boolean;
    loadSource: (url: string) => void;
    attachMedia: (videoElement: HTMLVideoElement) => void;
    dispose(): void;
    destroy(): void;
    getStats(): LiveStreamingStatistics;
};
