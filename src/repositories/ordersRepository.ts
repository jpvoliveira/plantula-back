import { prisma } from "../database.js"

export interface Order {
  userId: number;
  productId: number;
  amount: number;
  value: number;
}

export async function postOrder(orderData: Order) {
  const result = await prisma.orders.create({
    data: {
      userId: orderData.userId,
      productId: orderData.productId,
      amount: orderData.amount,
      value: orderData.value
    }
  })
  return result
}