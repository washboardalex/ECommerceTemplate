import { SET_CURRENT_USER, ICurrentUserState } from './user.types';
import IActionWithPayload from '../../types/models/IActionWithPayload';


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
 