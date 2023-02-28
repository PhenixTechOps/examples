import { IStream } from './IStream';
export default class RealTimeStream implements IStream {
    private readonly _logger;
    private readonly _channelContext;
    private readonly _peerConnectionContext;
    private readonly _handleStreamFailure;
    constructor(channelContext: any, peerConnectionContext: any, handleStreamFailure: () => Promise<void>);
    start(uri: any, token: any, listenOnStreamSetup: any, playMediaStreamInVideoElement: any): Promise<void>;
    private applyRtcConfiguration;
    private reconnectPeerConnection;
    private mapSetRemoteDescriptionStatusToChannelStatus;
}
