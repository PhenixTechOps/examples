export interface IHlsPlayerType {
    media: HTMLVideoElement;
    streamController: {
        state: 'STOPPED' | 'STARTING' | 'IDLE' | 'PAUSED' | 'KEY_LOADING' | 'FRAG_LOADING' | 'FRAG_LOADING_WAITING_RETRY' | 'WAITING_TRACK' | 'PARSING' | 'PARSED' | 'BUFFER_FLUSHING' | 'ENDED' | 'ERROR' | 'WAITING_INIT_PTS' | 'WAITING_LEVEL';
    };
    HlsPlayer(): void;
    isSupported(): boolean;
    destroy(): void;
    loadSource: (url: string) => void;
    attachMedia: (videoElement: HTMLVideoElement) => void;
    Events: {
        FRAG_BUFFERED: string;
        VIDEO_TRACK_LOADED: string;
        FRAG_LOADED: string;
    };
}
