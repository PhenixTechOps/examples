import EndPoint from './EndPoint';
export default class DiscoveryService {
    private _logger;
    private _metricsService;
    private _uri;
    constructor(uri: URL);
    discoverNearbyEndPoints(uri: URL, timeout: number): Promise<EndPoint[]>;
    discoverClosestEndPoint(timeout?: number): Promise<EndPoint>;
}
