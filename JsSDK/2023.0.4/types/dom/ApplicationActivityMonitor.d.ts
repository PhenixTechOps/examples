import ReadOnlySubject from '../rx/ReadOnlySubject';
export default class ApplicationActivityMonitor {
    private readonly _disposables;
    private readonly _readOnlyIsForeground;
    private readonly _isForeground;
    private _timeOfLastTabFocusChange;
    private _documentFocusInterval;
    constructor();
    get isForeground(): ReadOnlySubject<boolean>;
    getTimeSinceLastChange(): number;
    dispose(): void;
    private detectTabFocusChange;
    private listenForDocumentFocus;
    private setFocusState;
}
