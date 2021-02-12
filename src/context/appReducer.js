import { 
    LOGIN, 
    LOGOUT, 
    UPDATE_LIST
} from "./types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, 
                user: action.payload.user,
                list: [...action.payload.list],
            }
        case LOGOUT: 
            return {
                ...state, 
                user: '',
                list: [],
            }
        case UPDATE_LIST:
            return {
                ...state,
                list: [...action.payload],
            }
        default: 
            return state;
    }
};