import PromiseHandler from './PromiseHandler';
declare class Promise {
    _state: number;
    _handled: boolean;
    _value: Promise;
    _deferreds: Array<PromiseHandler>;
    then(onFulfilled: Function, onRejected: Function): Promise | void;
    constructor(callback: any);
    doResolve(callback: Function): void;
    promiseResolve(newValue: Promise | undefined): void;
    promiseReject(newValue: Promise | undefined): void;
    finale(): void;
    handle(deferred: PromiseHandler): void;
    static all(arr: Array<Promise>): Promise;
    static resolve(value: any): Promise;
    static reject(value: any): Promise;
    static race(arr: Array<Promise>): Promise;
    static _immediate(callback: Function): void;
    static _unhandledRejection(error: any): void;
}
export default Promise;
