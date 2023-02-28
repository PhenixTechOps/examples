import IComparable from '../lang/IComparable';
export default class Dimension implements IComparable<Dimension> {
    readonly width: number;
    readonly height: number;
    static get empty(): Dimension;
    constructor(width: number, height: number);
    equals(other: Dimension): boolean;
    toString(): string;
}
