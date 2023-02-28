import IPeerConnection from './IPeerConnection';
export interface IPeerConnectionOfferInit {
    audioTransceiver?: RTCRtpTransceiver;
    videoTransceiver?: RTCRtpTransceiver;
    peerConnection: IPeerConnection;
    localOffer: RTCSessionDescriptionInit;
}
export default class PeerConnectionService {
    private static _logger;
    private static _cached;
    static initiateInitialPrecaching(): void;
    static precacheCreatePeerConnectionOffer(): Promise<{
        peerConnection: Promise<IPeerConnectionOfferInit | void>;
    }>;
    static createPeerConnectionOffer(direction?: RTCRtpTransceiverDirection): Promise<IPeerConnectionOfferInit>;
    private constructor();
}
