import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile-reducer";
import dialogReducer from "./dialogReducer";


let reducers = combineReducers(
    {
        profile:profileReducer,
        dialogs:dialogReducer,

    });

let store = createStore(reducers);



















export default store;