import { TelemetryLevel } from './MetricsConfiguration';
import MetricsType from './MetricsType';
export default class MetricType {
    private readonly _metrics;
    constructor(metrics: MetricsType);
    getName(): string;
    getTelemetryLevel(): TelemetryLevel;
}
