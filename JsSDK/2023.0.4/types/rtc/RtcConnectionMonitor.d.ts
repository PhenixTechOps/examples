import IPeerConnection from './IPeerConnection';
import Subject from '../rx/Subject';
import IDisposable from '../lang/IDisposable';
export interface IRtcMonitorStatistic {
    [kind: string]: IRtcStatistic;
}
export interface ILegacyRTCStatsReport {
    result: () => ILegacyRTCStatsReportItem[];
}
export interface ILegacyRTCStatsReportItem extends RTCStatsReport {
    type: string;
    names: () => string[];
    stat: (name: any) => number;
}
export interface IRtcStatistic {
    ssrc?: string;
    mediaType?: string;
    timestamp: number;
    bitrate?: number;
    bytesReceived?: number;
    framesDecoded?: number;
    packetsLost?: number;
    packetsReceived?: number;
    codec?: string;
    fps?: number;
    roundTripTime?: number;
    lastPacketReceivedTimestamp?: number;
}
export default class RtcConnectionMonitor implements IDisposable {
    private readonly _estimatedRoundTripTime;
    private readonly _estimatedVideoCodec;
    private readonly _estimatedAudioCodec;
    private readonly _rtcStatistic;
    private _peerConnection;
    private _isMonitorRunning;
    private _updateTimeOut;
    private _tracksToMonitor;
    constructor(peerConnection: IPeerConnection, mediaStream: MediaStream, estimatedRoundTripTime: number);
    get rtcStatistic(): Subject<IRtcMonitorStatistic>;
    dispose(): void;
    private updateStatistic;
    private updateStatisticLegacy;
    private getCodecByType;
}
