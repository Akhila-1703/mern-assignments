import { getProductById, checkStock } from "./product.js";

let cartItems = [] // array to store cart items

export function addToCart(productId, quantity) {  // add product to cart
  let product = getProductById(productId) // get product details

  if (!product) return "Product not found" // check product exists

  if (!checkStock(productId, quantity)) return "Insufficient stock" // check stock availability

  let existingItem = cartItems.find(item => item.productId === productId) // check item in cart

  if (existingItem) {
    existingItem.quantity = existingItem.quantity + quantity // update quantity if exists
  } else {
    cartItems.push({ productId: productId, quantity: quantity }) // add new item to cart
  }

  return "Item added to cart"
}

// remove product from cart
export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId) // remove matching item
  return "Item removed from cart"
}

// Update quantity of product in cart and Check stock before updating
export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) return "Insufficient stock" // check stock before update

  cartItems = cartItems.map(item => {
    if (item.productId === productId) {
      return { ...item, quantity: newQuantity } // update quantity for matched item
    }
    return item // return item unchanged
  })

  return "Quantity updated"
}

// return cart items with product details
export function getCartItems() {
  return cartItems.map(item => {
    let product = getProductById(item.productId) // get product details
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      quantity: item.quantity
    } 
  })
}

// Calculate total price of all items in cart and Return total
export function getCartTotal() {
  let items = getCartItems() // get full cart items
  let total = 0 // start total as 0

  items.forEach(item => {
    total = total + item.price * item.quantity // add price * quantity
  })

  return total
}

// Empty the cart
export function clearCart() {
  cartItems = [] // empty cart array
}
