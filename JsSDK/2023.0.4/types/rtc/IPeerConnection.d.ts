import { ILegacyRTCStatsReport } from './RtcConnectionMonitor';
export declare type PeerConnectionEvents = 'track' | 'addstream';
interface IPeerConnection {
    readonly native: RTCPeerConnection;
    readonly currentLocalDescription: RTCSessionDescription | null;
    readonly currentRemoteDescription: RTCSessionDescription | null;
    readonly iceConnectionState: RTCIceConnectionState;
    readonly supportsGetConfiguration: boolean;
    readonly supportsSetConfiguration: boolean;
    readonly supportsAddTransceiver: boolean;
    createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    createAnswer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    setLocalDescription(description: RTCSessionDescriptionInit): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
    getStats(selector?: MediaStreamTrack | null): Promise<RTCStatsReport>;
    getSenders(): RTCRtpSender[];
    getStatsLegacy(): Promise<ILegacyRTCStatsReport>;
    addEventListener(type: PeerConnectionEvents, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: PeerConnectionEvents, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    addTransceiver(name: string, options: RTCRtpTransceiverInit): RTCRtpTransceiver;
    getConfiguration(): RTCConfiguration;
    setConfiguration(description: RTCConfiguration): void;
    addStream(mediaStream: MediaStream): void;
    ontrack: ((this: RTCPeerConnection, ev: RTCTrackEvent) => unknown) | null;
    onicecandidate: ((this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => unknown) | null;
    oniceconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => unknown) | null;
    close(): void;
}
export default IPeerConnection;
