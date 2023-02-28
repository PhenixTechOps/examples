import Subject from '../rx/Subject';
export default class StateContext {
    isStarting: Subject<boolean>;
    isDisposed: boolean;
    constructor();
}
