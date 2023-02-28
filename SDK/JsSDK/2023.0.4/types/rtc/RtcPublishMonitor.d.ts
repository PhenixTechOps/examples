import IPeerConnection from './IPeerConnection';
import Subject from '../rx/Subject';
import IDisposable from '../lang/IDisposable';
export interface IRtcPublishMonitorStatistic {
    [kind: string]: IRtcPublishStatistic;
}
export interface ILegacyRTCStatsReport {
    result: () => ILegacyRTCStatsReportItem[];
}
export interface ILegacyRTCStatsReportItem extends RTCStatsReport {
    type: string;
    names: () => string[];
    stat: (name: any) => number;
}
export interface IRtcPublishStatistic {
    lastPacketSentTimestamp?: number;
    ssrc: string;
    mediaType: string;
    timestamp: number;
    bitrate?: number;
    bytesSent: number;
    packetsSent: number;
    retransmittedBytesSent?: number;
    firCount?: number;
    frameHeight?: number;
    frameWidth?: number;
    framesEncoded?: number;
    framesSent?: number;
    headerBytesSent?: number;
    hugeFramesSent?: number;
    pliCount?: number;
    qpSum?: number;
    totalEncodeTime?: number;
    totalEncodedBytesTarget?: number;
    codec: string;
    fps?: number;
    roundTripTime: number;
}
export default class RtcPublishMonitor implements IDisposable {
    private readonly _estimatedRoundTripTime;
    private readonly _estimatedVideoCodec;
    private readonly _estimatedAudioCodec;
    private readonly _rtcStatistic;
    private _peerConnection;
    private _isMonitorRunning;
    private _updateTimeOut;
    private _availableTracks;
    constructor(peerConnection: IPeerConnection, mediaStream: MediaStream, estimatedRoundTripTime: number);
    get rtcStatistic(): Subject<IRtcPublishMonitorStatistic>;
    dispose(): void;
    private updateStatistic;
    private getCodecByType;
}
