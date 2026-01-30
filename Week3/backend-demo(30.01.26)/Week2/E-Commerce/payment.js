import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

// check if payment method is valid
export function validatePaymentMethod(method) {
  return method === "card" || method === "upi" || method === "cod" // allow only valid methods
}

// process payment
export function processPayment(paymentMethod, couponCode = null) {
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" }
  }

  let items = getCartItems() // get cart items
  let subtotal = getCartTotal() // get cart total

  let discountDetails
  if (couponCode) {
    discountDetails = applyDiscount(subtotal, couponCode, items) // apply coupon
  } else {
    discountDetails = { discount: 0, finalTotal: subtotal }
  }

  items.forEach(item => {
    reduceStock(item.id, item.quantity) // reduce stock for each product
  })

  clearCart() // clear cart after payment

  return {
    orderId: generateOrderId(),
    items: items,
    subtotal: subtotal,
    discount: discountDetails.discount,
    total: discountDetails.finalTotal,
    paymentMethod: paymentMethod,
    status: "success",
    message: "Order placed successfully"
  }
}

// generate order id
function generateOrderId() {
  return "ORD" + Date.now() // create unique order id
}
