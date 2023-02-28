import { IStream } from './IStream';
export default class StreamFactory {
    private static _logger;
    static create(token: string, channelContext: any, peerConnectionContext: any, handleStreamFailure: () => Promise<void>): IStream;
    constructor();
}
