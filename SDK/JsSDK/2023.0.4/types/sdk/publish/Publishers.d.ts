import { EdgeToken } from '../edgeAuth/EdgeToken';
import Publisher from './Publisher';
declare type CreatePublisherOptions = {
    mediaStream: MediaStream;
    token: EdgeToken;
    name?: string;
};
export default class Publishers {
    static createPublisher(options: CreatePublisherOptions): Publisher;
    private constructor();
}
export {};
