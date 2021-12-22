import { SET_HOME_CONTENT } from "./actionsTypes"

export const setHomeContent = (payload) => {
    return function (dispatch) {
        dispatch({ type: SET_HOME_CONTENT, payload })
    }
}