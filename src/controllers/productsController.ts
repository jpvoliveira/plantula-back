import { Request, Response } from "express";
import * as productsService from "../services/productsService.js"

export async function findProducts(req:Request, res:Response ) {
  const products = await productsService.getProducts()
  res.send(products)
}

export async function findProductsById(req:Request, res:Response ) {
  const productId = req.params.id
  const product = await productsService.getProductsById(productId)
  res.send(product)
}