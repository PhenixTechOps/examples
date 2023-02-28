import { ILogger } from './LoggerInterface';
import TelemetryConfiguration from '../telemetry/TelemetryConfiguration';
export default class LoggerFactory {
    private static _configurationParameterReader;
    private static _loggers;
    private static _appenders;
    private static _threshold;
    private static _telemetryConfiguration;
    static get telemetryConfiguration(): TelemetryConfiguration;
    static getLogger(category: string): ILogger;
    static applyLoggerConfigFromParameterConfiguration(): void;
    private static applyLoggingLevel;
    private static applyAppenderLoggingLevel;
    private static applyConsoleLogger;
    private static applyTelemetryLogger;
    private constructor();
}
