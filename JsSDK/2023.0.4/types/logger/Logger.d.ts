import Appenders from './Appenders';
import LoggingThreshold from './LoggingThreshold';
export declare enum LoggingLevel {
    All = -1,
    Trace = 10,
    Debug = 20,
    Info = 30,
    Warn = 40,
    Error = 50,
    Fatal = 60,
    Off = 100
}
export declare type LoggingLevelType = 'Off' | 'Trace' | 'Debug' | 'Info' | 'Warn' | 'Error' | 'Fatal' | 'All';
export default class Logger {
    private readonly _category;
    private readonly _appenders;
    private readonly _threshold;
    get category(): string;
    get appenders(): Appenders;
    get threshold(): LoggingThreshold;
    trace(...args: any): void;
    debug(...args: any): void;
    info(...args: any): void;
    warn(...args: any): void;
    error(...args: any): void;
    fatal(...args: any): void;
    private log;
    private replacePlaceholders;
    private stringify;
    private replaceArgument;
    private toString;
    constructor(category: string, appenders: Appenders, threshold: LoggingThreshold);
}
