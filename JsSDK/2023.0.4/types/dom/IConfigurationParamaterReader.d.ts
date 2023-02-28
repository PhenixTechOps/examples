export interface IConfigurationParameterReader {
    getStringValue(name: string): string;
    getBooleanValue(name: string): boolean;
}
