export const SET_AUTHUSER = "SET_AUTHUSER"
export const LOGOUT = "LOGOUT"

export function setAuthUser(id) {
    return {
        type: SET_AUTHUSER,
        id
    }
}

export function logout() {
    return {
        type: LOGOUT,
    }
}