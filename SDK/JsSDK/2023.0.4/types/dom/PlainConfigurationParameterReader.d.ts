export default class PlainConfigurationParameterReader {
    getStringValue(name: string): string;
    getBooleanValue(name: string): boolean;
    private get defaultStringValue();
    private get defaultBooleanValue();
}
