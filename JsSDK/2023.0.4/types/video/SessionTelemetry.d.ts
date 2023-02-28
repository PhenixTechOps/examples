import { StreamSetupListener } from '../dom/StreamSetupListener';
import IDisposable from '../lang/IDisposable';
import MetricsService from '../metrics/MetricsService';
export default class SessionTelemetry implements IDisposable {
    private readonly _logger;
    private readonly _metricsService;
    private readonly _applicationActivityMonitor;
    private readonly _networkMonitor;
    private readonly _pageLoadTime;
    private readonly _disposables;
    private _lastNetworkStatistics;
    constructor(pageLoadTime: number, metricsService: MetricsService);
    listenOnStreamSetup(): StreamSetupListener;
    dispose(): void;
    private recordForegroundChange;
    private recordNetworkRTTUpdate;
    private recordNetworkTypeChangeUpdate;
    private recordNetworkDownlinkThroughputCapacityUpdate;
}
