export const addItemToCart = (cartItems, CartItemToAdd) => {
  const existingCaritem = cartItems.find(
    cartItem => cartItem.id === CartItemToAdd.id
  )

  if (existingCaritem){
    return cartItems.map(cartItem =>
    cartItem.id === CartItemToAdd.id
    ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    )
  }
  return [...cartItems, {...CartItemToAdd, quantity: 1}]
};


export const removeItemFromCart = (cartItems, CartItemToRemove) => {
  const existingCaritem = cartItems.find(
    cartItem => cartItem.id === CartItemToRemove.id
  )
  if (existingCaritem.quantity === 1){
    return cartItems.filter(
      cartItem => cartItem.id !== CartItemToRemove.id)
  }
  return cartItems.map(cartItem =>
  cartItem.id === CartItemToRemove.id
  ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
  )
}
