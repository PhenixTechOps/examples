import { IAppender } from './IAppender';
import { LoggingLevel } from './Logger';
export default class ConsoleAppender implements IAppender {
    private readonly _threshold;
    log(logLevel: LoggingLevel, message: string, category: string, date: Date): void;
    constructor(threshold: LoggingLevel);
}
