import Appenders from './Appenders';
import LoggingThreshold from './LoggingThreshold';
export interface ILogger {
    readonly category: string;
    readonly appenders: Appenders;
    readonly threshold: LoggingThreshold;
    trace: (...args: any) => void;
    debug: (...args: any) => void;
    info: (...args: any) => void;
    warn: (...args: any) => void;
    error: (...args: any) => void;
    fatal: (...args: any) => void;
}
