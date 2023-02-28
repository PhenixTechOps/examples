export declare enum TelemetryLevel {
    Off = 100,
    Essential = 10,
    All = -1
}
export declare type TelemetryLevelType = 'Off' | 'Essential' | 'All';
export default class MetricsConfiguration {
    private _url;
    private _tenancy;
    private _sessionId;
    private _environment;
    private _threshold;
    get url(): string;
    set url(url: string);
    get environment(): string;
    set environment(environment: string);
    get tenancy(): string;
    set tenancy(tenancy: string);
    get sessionId(): string;
    set sessionId(sessionId: string);
    get threshold(): TelemetryLevel;
    set threshold(threshold: TelemetryLevel);
}
