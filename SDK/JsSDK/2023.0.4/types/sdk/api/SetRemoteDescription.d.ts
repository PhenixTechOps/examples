import { ISessionDescription } from './SessionDescription';
export declare type SetRemoteDescriptionStatus = 'ok';
export declare type SdpType = 'Answer' | 'Offer';
export interface ISetRemoteDescriptionRequest {
    apiVersion: number;
    sharedSecret?: string;
    sessionDescription: ISessionDescription;
}
export interface ISetRemoteDescriptionResponse {
    status: SetRemoteDescriptionStatus;
    sessionDescription: ISessionDescription;
}
