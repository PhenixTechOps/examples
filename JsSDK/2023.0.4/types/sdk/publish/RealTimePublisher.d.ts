import PublisherContext from './PublisherContext';
import PeerConnectionContext from '../../context/PeerConnectionContext';
export default class RealTimePublisher {
    private readonly _logger;
    private readonly _publisherContext;
    private readonly _peerConnectionContext;
    private readonly _handleStreamFailure;
    constructor(publisherContext: PublisherContext, peerConnectionContext: PeerConnectionContext, handleStreamFailure: () => Promise<void>);
    start(uri: any, token: any, listenOnStreamSetup: any): Promise<void>;
    private applyRtcConfiguration;
    private reconnectPeerConnection;
    private mapSetRemoteDescriptionStatusToPublisherStatus;
}
