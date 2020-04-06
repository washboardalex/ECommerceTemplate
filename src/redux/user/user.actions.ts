import IActionWithPayload from '../IActionWithPayload';
import { SET_CURRENT_USER } from '../actions.constants';

export const setCurrentUser = (user : any) : IActionWithPayload => ({
    type: SET_CURRENT_USER,
    payload: user
});