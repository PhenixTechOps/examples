import Channel from './Channel';
import { EdgeToken } from '../edgeAuth/EdgeToken';
import { Millisecond } from '../../units/Units';
declare type CreateChannelOptions = {
    videoElement: HTMLVideoElement;
    token: EdgeToken;
    targetLag?: Millisecond;
};
export default class Channels {
    static createChannel(options: CreateChannelOptions): Channel;
    private constructor();
}
export {};
