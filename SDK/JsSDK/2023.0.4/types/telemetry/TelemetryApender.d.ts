import TelemetryConfiguration from './TelemetryConfiguration';
import { IAppender } from '../logger/IAppender';
import { LoggingLevel } from '../logger/Logger';
export default class TelemetryAppender implements IAppender {
    private readonly _telemetryService;
    private readonly _tenancy;
    private readonly _sessionId;
    private readonly _threshold;
    constructor(telemetryConfiguration: TelemetryConfiguration);
    log(logLevel: LoggingLevel, message: string, category: string, date: Date): void;
}
