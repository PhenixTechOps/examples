import IPeerConnection, { PeerConnectionEvents } from './IPeerConnection';
import { ILegacyRTCStatsReport } from './RtcConnectionMonitor';
declare class VanillaPeerConnection implements IPeerConnection {
    private readonly _logger;
    private readonly _peerConnection;
    constructor(configuration?: RTCConfiguration);
    get native(): RTCPeerConnection;
    get currentLocalDescription(): RTCSessionDescription | null;
    get currentRemoteDescription(): RTCSessionDescription | null;
    get iceConnectionState(): RTCIceConnectionState;
    get supportsGetConfiguration(): boolean;
    get supportsSetConfiguration(): boolean;
    get supportsAddTransceiver(): boolean;
    createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    createAnswer(options?: RTCAnswerOptions): Promise<RTCSessionDescriptionInit>;
    setLocalDescription(description: RTCSessionDescriptionInit): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
    getSenders(): RTCRtpSender[];
    getStats(selector?: MediaStreamTrack | null): Promise<RTCStatsReport>;
    getStatsLegacy(): Promise<ILegacyRTCStatsReport>;
    addEventListener(type: PeerConnectionEvents, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: PeerConnectionEvents, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    addTransceiver(name: string, options: RTCRtpTransceiverInit): RTCRtpTransceiver;
    addStream(mediaStream: MediaStream): void;
    getConfiguration(): RTCConfiguration;
    setConfiguration(configuration: RTCConfiguration): void;
    set ontrack(handler: ((this: RTCPeerConnection, ev: RTCTrackEvent) => unknown) | null);
    get ontrack(): ((this: RTCPeerConnection, ev: RTCTrackEvent) => unknown) | null;
    set onicecandidate(handler: ((this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => unknown) | null);
    get onicecandidate(): ((this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => unknown) | null;
    set oniceconnectionstatechange(handler: ((this: RTCPeerConnection, ev: Event) => unknown) | null);
    get oniceconnectionstatechange(): ((this: RTCPeerConnection, ev: Event) => unknown) | null;
    close(): void;
}
export default VanillaPeerConnection;
