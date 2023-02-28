import { IEdgeAuth } from './EdgeAuthToken';
import { EdgeToken } from './EdgeToken';
export default class EdgeAuth {
    private static _logger;
    static parseToken(token: EdgeToken): IEdgeAuth;
    static getUri(parsedToken: IEdgeAuth): URL;
    static getTenancy(parsedToken: IEdgeAuth): string;
    static isValidToken(token: EdgeToken): boolean;
}
