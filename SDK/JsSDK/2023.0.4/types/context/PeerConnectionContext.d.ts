import Subject from '../rx/Subject';
import IPeerConnection from '../rtc/IPeerConnection';
export default class PeerConnectionContext {
    mediaStream: Subject<MediaStream>;
    peerConnection: Subject<IPeerConnection>;
    peerConnectionReconnectAttempts: number;
    constructor();
}
