import MetricsService from './MetricsService';
import { TelemetryLevel } from './MetricsConfiguration';
export default class MetricsFactory {
    private static _metricsServices;
    static getMetricsService(url: string): MetricsService;
    static setTelemetryLevel(telemetryLevel: TelemetryLevel): void;
    private constructor();
}
