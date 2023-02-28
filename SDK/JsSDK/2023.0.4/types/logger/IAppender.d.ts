import { LoggingLevel } from './Logger';
export interface IAppender {
    log: (logLevel: LoggingLevel, message: string, category: string, date: Date) => void;
}
