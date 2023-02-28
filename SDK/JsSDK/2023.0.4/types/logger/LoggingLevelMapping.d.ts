import { LoggingLevel, LoggingLevelType } from './Logger';
export default class LoggingLevelMapping {
    static convertLoggingLevelToLoggingLevelType(loggingLevel: LoggingLevel): LoggingLevelType;
    static convertLoggingLevelTypeToLoggingLevel(loggingLevelType: LoggingLevelType): LoggingLevel;
}
