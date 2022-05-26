import * as productsRepository from '../repositories/productsRepository.js'

export async function getProducts() {
  const products = await productsRepository.findAllProducts()
  return products
}

export async function getProductsById(productId) {
  const product = await productsRepository.findProductById(parseInt(productId))
  return product
}

export async function getProductsByType(type: string) {
  const product = await productsRepository.findProductByType(type)
  return product
}