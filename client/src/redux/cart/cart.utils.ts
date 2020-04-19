import ICartItem from "../../types/models/ICartItem";

export const addItemToCart = (cartItems : Array<ICartItem>, cartItemToAdd : ICartItem) : Array<ICartItem> => {
    
    const existingCartItem = cartItems.find((cartItem: ICartItem) => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === existingCartItem.id
                ? { ...cartItem, quantity: ++cartItem.quantity }
                : cartItem
        )
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems : Array<ICartItem>, cartItemToRemove : ICartItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (existingCartItem) {
        if (existingCartItem.quantity === 1) 
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
        
        return cartItems.map(
            cartItem => 
                cartItem.id === cartItemToRemove.id
                    ? { ...cartItem, quantity: --cartItem.quantity }
                    : cartItem
        );
    }
}