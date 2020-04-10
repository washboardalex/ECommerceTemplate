import IActionWithPayload from '../../types/models/IActionWithPayload';
import { SET_CURRENT_USER } from './user.types';

export const setCurrentUser = (user : any) : IActionWithPayload => ({
    type: SET_CURRENT_USER,
    payload: user
});