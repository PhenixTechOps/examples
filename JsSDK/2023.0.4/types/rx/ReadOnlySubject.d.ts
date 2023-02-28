import Subject from './Subject';
import IDisposable from '../lang/IDisposable';
export default class ReadOnlySubject<T> {
    private readonly _subject;
    constructor(subject: Subject<T>);
    get value(): T;
    subscribe(listener: (T: any) => void): IDisposable;
}
