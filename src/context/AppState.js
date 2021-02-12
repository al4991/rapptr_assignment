import React, { useReducer } from "react";
import AppContext from "./appContext";
import AppReducer from "./appReducer";
import { 
    LOGIN, 
    LOGOUT, 
    UPDATE_LIST
} from "./types";

const AppState = (props) => {
    const initialState = {
        user: '', 
        list: []
    }; 
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const login = (user) => {
        const list = JSON.parse(localStorage.getItem(user));
        dispatch({
            type: LOGIN,
            payload: {
                user, 
                list
            }
        })
    }

    const logout = () => {
        localStorage.setItem(state.user, JSON.stringify(state.list));
        dispatch({
            type: LOGOUT
        })
    }

    const updateList = (newList) => { 
        localStorage.setItem(state.user, JSON.stringify(newList));
        dispatch({
            type: UPDATE_LIST, 
            payload: newList
        })
    }

    const editItem = (ind, newValue) => {
        const newList = [...state.list];
        newList[ind] = { value: newValue, startEdit: false }; 
        updateList(newList);
    }

    const deleteItem = (ind) => {
        console.log(ind);
        const newList = ([...state.list]); 
        newList.splice(ind, 1)
        updateList(newList);
    }

    const newItem = () => {
        const newList = [ ...state.list];
        newList.push({ value: "", startEdit: true });
        updateList(newList); 
    }

    return (
        <AppContext.Provider
            value={{
                user: state.user, 
                list: state.list, 
                login, 
                logout, 
                updateList,
                newItem, 
                deleteItem, 
                editItem
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;