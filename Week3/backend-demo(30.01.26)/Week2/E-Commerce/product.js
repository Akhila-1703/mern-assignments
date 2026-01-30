// Product database (simulated)
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

// find and return product by id
export function getProductById(id) {
  return products.find(product => product.id === id) // return product matching id
}

// return all products
export function getAllProducts() {
  return products // return full product list
}

// Filter products by category
export function getProductsByCategory(category) {
  return products.filter(product => product.category === category) // return products based on category
}

// search products by name (case-insensitive) ignoring case
export function searchProducts(query) {
  return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase())) // match product name with search text
}

// check if product has enough stock
export function checkStock(productId, quantity) {
  let product = getProductById(productId) // get product details
  return product && product.stock >= quantity // return true if stock is enough
}

// Reduce product stock after purchase
export function reduceStock(productId, quantity) {
  let product = getProductById(productId) // get product details
  if (product) {
    product.stock = product.stock - quantity // reduce stock count
  }
}
