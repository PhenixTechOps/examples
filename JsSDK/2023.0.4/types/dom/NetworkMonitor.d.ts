import IDisposable from '../lang/IDisposable';
import Subject from '../rx/Subject';
export default class NetworkMonitor implements IDisposable {
    private readonly _disposables;
    private readonly _isSupported;
    private readonly _rtt;
    private readonly _effectiveType;
    private readonly _downlinkThroughputCapacity;
    constructor();
    get isSupported(): boolean;
    get rtt(): Subject<number>;
    get effectiveType(): Subject<string>;
    get downlinkThroughputCapacity(): Subject<number>;
    dispose(): void;
    private getDownlinkThroughputCapacity;
    private getEffectiveType;
    private getRoundTripTime;
    private setupNetworkChangeListeners;
    private updateStatistics;
}
