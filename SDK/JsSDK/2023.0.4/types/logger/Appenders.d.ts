import { IAppender } from './IAppender';
export default class Appenders {
    private _appenders;
    get value(): Array<IAppender>;
    add(appender: IAppender): void;
    remove(appender: any): void;
}
