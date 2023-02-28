import MetricsConfiguration from './MetricsConfiguration';
import MetricsType from './MetricsType';
interface IValue {
    string?: string;
    uint64?: number;
    float?: number;
}
interface IMetric {
    streamId?: string;
    metricType: MetricsType;
    value?: IValue;
    previousValue?: IValue;
    runtime: number;
    resource?: string;
    kind?: string;
}
export default class MetricsService {
    private readonly _metricsConfiguration;
    private _metrics;
    private _isSending;
    private _domain;
    constructor(metricsConfiguration: MetricsConfiguration);
    get metricsConfiguration(): MetricsConfiguration;
    push(metric: IMetric): void;
    private sendMetrics;
    private sendMetricsIfAble;
}
export {};
