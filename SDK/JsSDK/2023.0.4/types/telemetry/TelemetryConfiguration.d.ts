import { LoggingLevel } from '../logger/Logger';
export default class TelemetryConfiguration {
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
    get threshold(): LoggingLevel;
    set threshold(threshold: LoggingLevel);
}
