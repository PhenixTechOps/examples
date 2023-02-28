export default class SdpParser {
    private readonly _sdp;
    private readonly _audioCodec;
    private readonly _videoCodec;
    private readonly _isAudioTrackEnabled;
    private readonly _isVideoTrackEnabled;
    constructor(sdp: string);
    get audioCodec(): string;
    get videoCodec(): string;
    get isAudioTrackEnabled(): boolean;
    get isVideoTrackEnabled(): boolean;
    private isTrackByTypeEnabled;
    private applyCodec;
}
