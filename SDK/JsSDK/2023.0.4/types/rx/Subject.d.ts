import IDisposable from '../lang/IDisposable';
export default class Subject<T> {
    private readonly _listeners;
    private _value;
    constructor(value: T);
    set value(value: T);
    get value(): T;
    subscribe(listener: (T: any) => void): IDisposable;
}
