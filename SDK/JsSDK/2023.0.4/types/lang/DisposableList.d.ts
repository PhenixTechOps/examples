import IDisposable from './IDisposable';
export default class DisposableList {
    private readonly _list;
    add(disposable: IDisposable): void;
    dispose(): void;
    toString(): string;
}
