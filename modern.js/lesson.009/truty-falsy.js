// Falsy values: null, undefined, 0, '', NaN

const products = []
const product = products[0] // undefined

if (product) {
  console.log("Product is available")
} else {
  console.log("No products available")
}