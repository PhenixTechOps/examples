export declare type BitrateStateType = 'Keep' | 'Reset';
export declare type BitrateModeType = 'Normal' | 'Force' | 'Reset';
export declare enum BitrateState {
    Keep = 0,
    Reset = 1
}
export declare enum BitrateMode {
    Normal = 0,
    Force = 1,
    Reset = 2
}
export interface ISetTemporaryMaximalBitrate {
    apiVersion: number;
    sharedSecret: string;
    elapsedInMilliseconds: number;
    bitrateInBitsPerSecond: number;
    bitrateState: BitrateStateType;
    bitrateMode: BitrateModeType;
}
