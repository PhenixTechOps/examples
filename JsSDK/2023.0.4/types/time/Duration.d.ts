export default class Durations {
    private readonly _duration;
    constructor(duration?: number);
    toIsoString(): string;
    padStart(item: string, targetLength: number, padString: string): string;
}
