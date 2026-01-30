// Available coupons
const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 },
  ELECTRONICS20: { type: "percentage", value: 20, minAmount: 10000, category: "electronics" }
};

// validate coupon conditions
export function validateCoupon(couponCode, cartTotal, cartItems) {
  let coupon = coupons[couponCode] // get coupon details

  if (!coupon) return { valid: false, message: "Invalid coupon" } // check coupon exists

  if (cartTotal < coupon.minAmount)
    return { valid: false, message: "Minimum amount not met" } // check minimum amount requirement

  if (coupon.category) {
    let categoryMatch = cartItems.some(item => item.category === coupon.category) // check category
    if (!categoryMatch)
      return { valid: false, message: "Coupon not applicable" }
  }

  return { valid: true, message: "Coupon valid" }
}

// calculate discount value
export function calculateDiscount(couponCode, cartTotal) {
  let coupon = coupons[couponCode] // get coupon details

  if (coupon.type === "percentage") {
    return (cartTotal * coupon.value) / 100 // calculate percentage discount
  }

  if (coupon.type === "flat") {
    return coupon.value // return flat discount
  }

  return 0
}

// apply discount to cart
export function applyDiscount(cartTotal, couponCode, cartItems) {
  let validation = validateCoupon(couponCode, cartTotal, cartItems) // validate coupon

  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    }
  }

  let discount = calculateDiscount(couponCode, cartTotal) // calculate discount
  let finalTotal = cartTotal - discount // calculate final amount

  return {
    originalTotal: cartTotal,
    discount: discount,
    finalTotal: finalTotal,
    message: "Discount applied"
  }
}
