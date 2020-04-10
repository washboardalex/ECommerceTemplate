import ICartItem from "../../types/models/ICartItem";

export const addItemToCart = (cartItems : Array<ICartItem>, cartItemToAdd : ICartItem) => {
    
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