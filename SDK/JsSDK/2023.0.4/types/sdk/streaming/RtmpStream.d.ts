import FlashRenderer from './FlashRenderer';
import { IStream } from './IStream';
export default class RtmpStream implements IStream {
    private readonly _logger;
    private readonly _channelContext;
    private readonly _monitorDisposables;
    private readonly _handleStreamFailure;
    private _originElement;
    private _monitorFailureCount;
    constructor(channelContext: any, handleStreamFailure: () => Promise<void>);
    start(uri: any, token: any): Promise<void>;
    onEnded(player: FlashRenderer): void;
    private monitor;
    dispose(): void;
}
