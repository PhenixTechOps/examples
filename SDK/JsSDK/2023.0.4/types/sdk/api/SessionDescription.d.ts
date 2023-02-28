export declare type SdpType = 'Answer' | 'Offer';
export interface ISessionDescription {
    type: SdpType;
    sdp: string;
}
