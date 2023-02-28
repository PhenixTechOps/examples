import IDisposable from '../../lang/IDisposable';
import { IStream } from './IStream';
export default class ChunkedStream implements IStream {
    private readonly _logger;
    private readonly _channelContext;
    private readonly _monitorDisposables;
    private readonly _handleStreamFailure;
    private _streamStatistics;
    private _monitorFailureCount;
    constructor(channelContext: any, handleStreamFailure: () => Promise<void>);
    start(uri: URL, token: string): Promise<void | IDisposable>;
    private monitor;
    dispose(): void;
}
