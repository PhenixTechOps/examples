export default class FeatureEnablement {
    static get clientOfferDisabled(): boolean;
    static get addTranceiverDisabled(): boolean;
    static get getStatsPromiseBasedDisabled(): boolean;
    static get getCurrentOfferDisabled(): boolean;
    static get onTrackDisabled(): boolean;
    static get webkitRTCPeerConnectionEnabled(): boolean;
    static get promiseBasedPCMethodsDisabled(): boolean;
    static get shouldUseNativeHls(): boolean;
    static get isRTMPEnabled(): boolean;
    static get isPrecachingEnabled(): boolean;
}
