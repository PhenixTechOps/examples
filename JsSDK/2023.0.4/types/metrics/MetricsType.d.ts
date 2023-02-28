declare enum MetricsType {
    TimeToFirstFrame = 0,
    ChannelCreationTimeToFirstFrame = 1,
    Stalled = 2,
    Buffering = 3,
    SetupCompleted = 4,
    SetupFailed = 5,
    RoundTripTime = 6,
    DownlinkThroughputCapacity = 7,
    NetworkType = 8,
    ResolutionChanged = 9,
    ApplicationForeground = 10,
    ApplicationBackground = 11
}
export default MetricsType;
