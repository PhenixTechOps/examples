export default class ConfigurationParameterReader {
    getStringValue(name: string): string;
    getBooleanValue(name: string): boolean;
    private get defaultStringValue();
    private get defaultBooleanValue();
    private readConfigurationParameterValue;
    private readConfigurationParameterURIValue;
}
