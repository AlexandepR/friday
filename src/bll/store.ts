import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {logInReducer} from "./logInReducer";
import {registrationReducer} from "./registrationReducer";
import {profileReducer} from "./profileReducer";
import {resetPasswordReducer} from "./resetPasswordReducer";
import {createNewPasswordReducer} from "./createNewPasswordReducer";
import {error404Reducer} from "./error404Reducer";
import {forgotReducer} from './forgotReducer';

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    logIn: logInReducer,
    registration: registrationReducer,
    profile: profileReducer,
    resetPassword: resetPasswordReducer,
    createNewPassword: createNewPasswordReducer,
    error404: error404Reducer,
    forgot: forgotReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));