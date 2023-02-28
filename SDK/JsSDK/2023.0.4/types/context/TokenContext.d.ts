import { EdgeToken } from '../sdk/edgeAuth/EdgeToken';
import Subject from '../rx/Subject';
export default class TokenContext {
    token: Subject<EdgeToken>;
    tokenExpiring: Subject<boolean>;
    constructor(token: string);
}
