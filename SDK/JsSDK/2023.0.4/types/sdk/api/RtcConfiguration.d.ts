export declare type RtcpMuxPolicy = 'RtcpMuxPolicyNegotiate' | 'RtcpMuxPolicyRequire';
export declare type BundlePolicy = 'BundlePolicyBalanced' | 'BundlePolicyMaxCompat' | 'BundlePolicyMaxBundle';
export declare type IceServer = {
    urls: string[];
    username?: string;
    credential?: string;
};
export declare type IceTransportPolicy = 'IceTransportPolicyAll' | 'IceTransportPolicyPublic' | 'IceTransportPolicyRelay';
export interface IRtcConfiguration {
    bundlePolicy?: BundlePolicy;
    iceCandidatePoolSize?: number;
    iceServers: IceServer[];
    iceTransportPolicy?: IceTransportPolicy;
    peerIdentity?: string;
    rtcpMuxPolicy?: RtcpMuxPolicy;
}
