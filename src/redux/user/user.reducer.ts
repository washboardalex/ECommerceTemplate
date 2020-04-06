import { ICurrentUserState } from './user.types';
import IActionWithPayload from '../IActionWithPayload';
import { SET_CURRENT_USER } from '../action.constants'


const INITIAL_STATE : ICurrentUserState = {
    currentUser: null
}

const userReducer = (state : ICurrentUserState = INITIAL_STATE, action: IActionWithPayload) => {
    
    switch(action.type) {
        case SET_CURRENT_USER:
            return { currentUser: action.payload }
        default:
            return state;
    }
}

export default userReducer;
 