import {prisma} from "../database.js"

export async function findAllProducts(){
  const result = await prisma.products.findMany()
  return result
}

export async function findProductById(productId: number){
  const result = await prisma.products.findMany({
    where:{
      id: productId
    }
  })
  
  return result
}

export async function findProductByType(type: string){
  const result = await prisma.products.findMany({
    where:{
      type: type
    }
  })
  
  return result
}