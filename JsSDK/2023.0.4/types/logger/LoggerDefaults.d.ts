import { LoggingLevel } from '../logger/Logger';
export default class LoggerDefaults {
    static get defaultLoggingLevel(): LoggingLevel;
    static get defaultConsoleLoggingLevel(): LoggingLevel;
    static get defaultTelemetryLoggingLevel(): LoggingLevel;
}
