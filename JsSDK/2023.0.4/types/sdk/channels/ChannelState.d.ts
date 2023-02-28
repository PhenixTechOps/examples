declare enum ChannelState {
    Offline = 1,
    Starting = 2,
    Paused = 3,
    Playing = 4,
    Recovering = 5,
    Reconnecting = 6,
    StandBy = 7,
    Stopped = 8,
    Unauthorized = 9,
    GeoRestricted = 10,
    GeoBlocked = 11,
    Error = 12,
    UnsupportedFeature = 13
}
export default ChannelState;
