/*type InitStateType = typeof initState;*/

const forgotInitialState = {

};

/*export const forgotThePasswordReducer = (
    state = initState,
    action: any
): InitStateType => {
    switch (action.type) {
        default:
            return state;
    }
};*/

/*import {forgotInitialState} from "./forgotInitialState";
import {IForgotActions, FORGOT} from "./forgotActions";*/

const FORGOT = 'FORGOT/SOME'

export const forgotReducer = (state = forgotInitialState, action: any) => {
    switch (action.type) {
        case FORGOT: { // blank
            return {
                ...state,

            }
        }

        default: {
            return state;
        }
    }
};