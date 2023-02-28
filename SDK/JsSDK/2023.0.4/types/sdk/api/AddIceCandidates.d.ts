export declare type AddIceCandidatesStatus = 'ok';
export interface IAddIceCandidatesRequest {
    apiVersion: number;
    sharedSecret: string;
    candidates: RTCIceCandidate[];
    discoveryCompleted: boolean;
    options: string[];
}
export interface IAddIceCandidatesResponse {
    status: AddIceCandidatesStatus;
    options: string[];
}
