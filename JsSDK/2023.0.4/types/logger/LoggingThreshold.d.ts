import { LoggingLevel } from './Logger';
export default class LoggingThreshold {
    private _threshold;
    get value(): LoggingLevel;
    setThreshold(threshold: LoggingLevel): void;
}
