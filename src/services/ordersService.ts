import * as ordersRepository from '../repositories/ordersRepository.js'

export async function postOrder(orderData: ordersRepository.Order) {
  await ordersRepository.postOrder(orderData)
}