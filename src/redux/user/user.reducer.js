import {
    USER_ACTIONS
} from "./user.actions";

const DEFAULT_USER_STATE = null;

function user(state = DEFAULT_USER_STATE, {
    type,
    payload
}) {
    switch (type) {
        case USER_ACTIONS.LOGIN_USER_SUCCESS:
            return Object.assign({}, payload, {isLogged: true});
        case USER_ACTIONS.LOGOUT_USER_SUCCESS:
            return {};
        default:
            return state;
    }
}

export default user;

/** STATE
 * null - don't know the auth status
 * !"username" prop: not logged
 * "username" prop: logged
 */