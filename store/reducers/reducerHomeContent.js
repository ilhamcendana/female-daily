import { SET_HOME_CONTENT } from "../actionsTypes";

const initialState = {
    homeContent: {}
};

const reducerHomeContent = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_HOME_CONTENT:
            return {
                ...state,
                homeContent: payload
            }

        default:
            return state
    }
};

export default reducerHomeContent;

