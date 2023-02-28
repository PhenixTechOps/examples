export default class BrowserDetector {
    private static readonly _browserNameAndVersionRegex;
    private static readonly _browserNameAndVersion;
    private static readonly _browserName;
    private static readonly _browserMajorVersion;
    private static readonly _isChrome69;
    private static readonly _isChrome70;
    private static readonly _isChrome71;
    private static readonly _isChrome72;
    private static readonly _isChrome74;
    private static readonly _isChrome75;
    private static readonly _isChrome76;
    private static readonly _isChrome77;
    static get browserNameAndVersion(): string;
    static get browserName(): string;
    static get browserMajorVersion(): number;
    static get isChrome69(): boolean;
    static get isChrome70(): boolean;
    static get isChrome71(): boolean;
    static get isChrome72(): boolean;
    static get isChrome74(): boolean;
    static get isChrome75(): boolean;
    static get isChrome76(): boolean;
    static get isChrome77(): boolean;
    private static parseBrowserNameAndVersion;
    private static parseBrowserName;
    private static parseBrowserMajorVersion;
    private static parseBrowserNameAndVersionForIE;
}
