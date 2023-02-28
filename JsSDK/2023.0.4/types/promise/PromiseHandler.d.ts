import Promise from './Promise';
export default class PromiseHandler {
    onFulfilled: Function;
    onRejected: Function;
    promise: Promise;
    constructor(onFulfilled: any, onRejected: any, promise: any);
}
