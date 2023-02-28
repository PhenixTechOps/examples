export interface IEdgeAuth {
    applicationId?: string;
    token: IEdgeAuthToken;
}
export interface IEdgeAuthToken {
    uri?: string;
    capabilities?: string[];
}
