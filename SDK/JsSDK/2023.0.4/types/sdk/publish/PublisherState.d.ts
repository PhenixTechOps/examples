declare enum PublisherState {
    Offline = 1,
    Starting = 2,
    Publishing = 3,
    Recovering = 4,
    Reconnecting = 5,
    StandBy = 6,
    Stopped = 7,
    Unauthorized = 8,
    GeoRestricted = 9,
    GeoBlocked = 10,
    UnsupportedFeature = 11,
    Error = 12
}
export default PublisherState;
