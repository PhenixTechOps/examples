import { TelemetryLevel, TelemetryLevelType } from './MetricsConfiguration';
export default class TelemetryLevelMapping {
    static convertTelemetryLevelToTelemetryLevelType(telemetryLevel: TelemetryLevel): TelemetryLevelType;
    static convertTelemetryLevelTypeToTelemetryLevel(telemetryLevelType: TelemetryLevelType): TelemetryLevel;
}
