import IActionWithPayload from '../IActionWithPayload';
import { SET_CURRENT_USER } from '../action.constants';

export const setCurrentUser = (user : any) : IActionWithPayload => {
    
    console.log('setCurrentUser called');

    console.log('payload is : ');
    console.log(user)
    
    return ({
        type: SET_CURRENT_USER,
        payload: user
    })
};