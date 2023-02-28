import { LoggingLevel } from '../logger/Logger';
import TelemetryConfiguration from './TelemetryConfiguration';
export default class TelemetryService {
    private readonly _telemetryConfiguration;
    private _logs;
    private _isSending;
    private _domain;
    constructor(telemetryConfiguration: TelemetryConfiguration);
    push(logLevel: LoggingLevel, message: string, category: string, timestamp: Date): void;
    private sendLogs;
    private sendLogsIfAble;
}
