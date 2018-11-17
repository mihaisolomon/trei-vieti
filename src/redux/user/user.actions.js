const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";

export const USER_ACTIONS = {
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS
}

export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});

export const logoutUserSuccess = () => ({
    type: LOGOUT_USER_SUCCESS,
    payload: null
});
