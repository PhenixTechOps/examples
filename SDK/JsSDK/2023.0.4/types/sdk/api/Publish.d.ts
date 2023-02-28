import { ISessionDescription } from './SessionDescription';
import { ISetRemoteDescriptionRequest } from './SetRemoteDescription';
import { IRtcConfiguration } from './RtcConfiguration';
export declare type PublishStatus = 'ok' | 'no-stream' | 'not-found' | 'unauthorized' | 'geo-restricted' | 'geo-blocked' | 'rate-limited' | 'capacity' | 'timeout' | 'failed';
export interface IPublishRequest {
    apiVersion: number;
    clientVersion: string;
    edgeAuthToken: string;
    failureCount: number;
    httpRoundTripTime: number;
    name: string;
    options?: string[];
}
export interface IPublishWithOfferRequest extends IPublishRequest {
    setRemoteDescription: ISetRemoteDescriptionRequest;
    createAnswerDescription: {
        streamId: string;
        options: string[];
        apiVersion: number;
    };
}
export interface IPublishWithoutOfferRequest extends IPublishRequest {
    createOfferDescription: {
        streamId: string;
        options: string[];
        apiVersion: number;
    };
}
export interface IPublishResponse {
    status: PublishStatus;
    streamId?: string;
    sharedSecret?: string;
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
