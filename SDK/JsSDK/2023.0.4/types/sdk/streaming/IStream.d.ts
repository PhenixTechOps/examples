import IDisposable from '../../lang/IDisposable';
export interface IStream {
    start(uri: any, token: any, handleStreamFailure?: any, listenOnStreamSetup?: any, playMediaStreamInVideoElement?: any): Promise<void | IDisposable>;
}
