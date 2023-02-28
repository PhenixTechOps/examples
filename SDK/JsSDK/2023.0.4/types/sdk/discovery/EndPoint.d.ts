import { BitrateMode, BitrateState } from '../api/SetTemporaryMaximalBitrate';
import { BitsPerSecond, Millisecond } from '../../units/Units';
export declare type SubscribeStatus = 'ok' | 'no-stream' | 'not-found' | 'unauthorized' | 'geo-restricted' | 'geo-blocked' | 'rate-limited' | 'capacity' | 'timeout' | 'failed';
export declare type SetRemoteDescriptionStatus = 'ok' | 'not-found' | 'unauthorized' | 'rate-limited' | 'capacity' | 'timeout' | 'failed';
export declare type SetTemporaryMaximalBitrateStatus = 'ok' | 'not-found' | 'unauthorized' | 'rate-limited' | 'capacity' | 'timeout' | 'failed';
export declare type RemoveTemporaryMaximalBitrateStatus = 'ok' | 'not-found' | 'unauthorized' | 'rate-limited' | 'capacity' | 'timeout' | 'failed';
export declare type AddIceCandidatesStatus = 'ok' | 'not-found' | 'unauthorized' | 'rate-limited' | 'capacity' | 'timeout' | 'failed';
export declare type DestroyStreamStatus = 'ok' | 'not-found' | 'unauthorized' | 'rate-limited' | 'capacity' | 'timeout' | 'failed';
export interface IStream {
    streamId: string;
    sharedSecret: string;
    tenancy: string;
}
export interface ISubscribeResponseInit {
    status: SubscribeStatus;
    stream?: IStream;
    lag?: Millisecond;
    rtcConfiguration?: RTCConfiguration;
    setRemoteDescriptionResponse?: {
        sessionDescription: RTCSessionDescriptionInit;
    };
    createOfferDescriptionResponse?: {
        sessionDescription: RTCSessionDescriptionInit;
    };
    createAnswerDescriptionResponse?: {
        sessionDescription: RTCSessionDescriptionInit;
    };
}
export declare type IPublishResponseInit = ISubscribeResponseInit;
interface ISetRemoteDescriptionResponseInit {
    status: SetRemoteDescriptionStatus;
    sessionDescription?: RTCSessionDescriptionInit;
}
interface IAddIceCandidatesResponseInit {
    status: AddIceCandidatesStatus;
    options?: string[];
}
interface ISetTemporaryMaximalBitrateResponseInit {
    status: SetTemporaryMaximalBitrateStatus;
}
interface IDestroyStreamResponseInit {
    status: DestroyStreamStatus;
}
export default class EndPoint {
    private readonly _logger;
    private readonly _uri;
    private readonly _timeout;
    private _roundTripTime;
    constructor(uri: string, timeout: number);
    get roundTripTime(): number;
    toString(): string;
    ping(): Promise<number>;
    subscribe(token: string, localSessionDescription: RTCSessionDescriptionInit, failureCount: number): Promise<ISubscribeResponseInit>;
    publish(name: string, token: string, localSessionDescription: RTCSessionDescriptionInit, failureCount: number): Promise<IPublishResponseInit>;
    setRemoteDescription(stream: IStream, sessionDescription: RTCSessionDescriptionInit): Promise<ISetRemoteDescriptionResponseInit>;
    limitBitrate(stream: IStream, elapsedInMilliseconds: number, bitrateInBitsPerSecond: BitsPerSecond, bitrateState: BitrateState, bitrateMode: BitrateMode): Promise<ISetTemporaryMaximalBitrateResponseInit>;
    addIceCandidates(stream: IStream, candidates: RTCIceCandidate[], discoveryCompleted: boolean, options?: string[]): Promise<IAddIceCandidatesResponseInit>;
    destroyStream(stream: IStream, reason: string): Promise<IDestroyStreamResponseInit>;
    private buildUrl;
    private buildPingUrl;
    private mapHttpStatusToPublishStatus;
    private mapHttpStatusToSubscribeStatus;
    private mapHttpStatusToSetRemoteDescriptionStatus;
    private mapHttpStatusToSetTemporaryMaximalBitrateStatus;
    private mapHttpStatusToAddIceCandidatesStatus;
    private mapHttpStatusToSetDestroyStreamStatus;
    private convertHttpResponseToSubscribeResponse;
    private convertHttpResponseToPublishResponse;
    private convertIRtcConfigurationToRTCConfiguration;
    private convertISessionDescriptionToRTCSessionDescription;
    private convertHttpResponseToSetRemoteDescriptionResponse;
    private convertHttpResponseToAddIceCandidatesResponse;
    private convertHttpResponseToDestroyStreamResponse;
    private convertRTCSdpTypeToSdpType;
}
export {};
