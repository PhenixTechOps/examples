export declare class StreamSetupListener {
    private readonly _logger;
    private readonly metricsService;
    private readonly _pageLoadTime;
    private readonly _startTime;
    private _metricSubmitted;
    constructor(pageLoadTime: number);
    success(streamId: any): void;
    fail(): void;
    private recordStreamMetric;
}
