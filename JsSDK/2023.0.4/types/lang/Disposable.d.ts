import IDisposable from './IDisposable';
export default class Disposable implements IDisposable {
    private _disposed;
    private _disposable;
    constructor(disposable: () => void);
    dispose(): void;
}
