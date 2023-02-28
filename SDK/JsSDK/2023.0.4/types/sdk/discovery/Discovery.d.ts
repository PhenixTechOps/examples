import EndPoint from './EndPoint';
export default class Discovery {
    private static _cache;
    static precacheClosestEndPointDiscovery(): Promise<EndPoint>;
    static discoverClosestEndPointWithCaching(uri: URL): Promise<EndPoint>;
    private constructor();
}
