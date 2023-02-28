import { ISessionDescription } from './SessionDescription';
import { ISetRemoteDescriptionRequest } from './SetRemoteDescription';
import { IRtcConfiguration } from './RtcConfiguration';
export declare type SubscribeStatus = 'ok' | 'no-stream';
export interface ISubscribeRequest {
    apiVersion: number;
    clientVersion: string;
    edgeAuthToken: string;
    failureCount: number;
    httpRoundTripTime: number;
}
export interface ISubscribeWithOfferRequest extends ISubscribeRequest {
    setRemoteDescription: ISetRemoteDescriptionRequest;
    createAnswerDescription: {
        apiVersion: number;
    };
}
export interface ISubscribeWithoutOfferRequest extends ISubscribeRequest {
    createOfferDescription: {
        apiVersion: number;
    };
}
export interface ISubscribeResponse {
    status: SubscribeStatus;
    streamId?: string;
    sharedSecret?: string;
    lag?: number;
    rtcConfiguration?: IRtcConfiguration;
    setRemoteDescriptionResponse?: {
        sessionDescription: ISessionDescription;
    };
    createOfferDescriptionResponse?: {
        sessionDescription: ISessionDescription;
    };
    createAnswerDescriptionResponse?: {
        sessionDescription: ISessionDescription;
    };
}
