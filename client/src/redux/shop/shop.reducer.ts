import { IShopData }  from '../../types/models/IShopData';
import IActionWithPayload from '../../types/models/redux/IActionWithPayload';
import { 
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS 
} from './shop.types';

interface IShopState {
    collections: IShopData | null,
    isFetching: boolean,
    errorMessage?: string
}

const INITIAL_STATE : IShopState = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state : IShopState = INITIAL_STATE, action: IActionWithPayload) => {
    switch(action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }

}

export default shopReducer;
