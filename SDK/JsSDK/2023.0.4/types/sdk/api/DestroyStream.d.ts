export declare type DestroyStreamStatus = 'ok';
export interface IDestroyStreamRequest {
    apiVersion: number;
    sharedSecret: string;
    reason: string;
    options: string[];
}
export interface IDestroyStreamResponse {
    status: DestroyStreamStatus;
}
