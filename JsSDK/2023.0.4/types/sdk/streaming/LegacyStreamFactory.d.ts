import { IStream } from './IStream';
export default class LegacyStreamFactory {
    private static _logger;
    static create(token: string, channelContext: any, peerConnectionContext: any, handleStreamFailure: () => Promise<void>): IStream;
    constructor();
}
