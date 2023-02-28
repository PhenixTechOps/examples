import Subject from '../../rx/Subject';
export default class DiscoveryUri {
    private static readonly _discoveryUri;
    static get uri(): Subject<string>;
    static buildDiscoveryUrl(uri: URL): string;
    private constructor();
}
