
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
