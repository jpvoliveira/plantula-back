import { Request, Response } from "express";
import * as ordersService from "../services/ordersService.js"

export async function postOrder(req:Request, res:Response ) {
  const orderData = req.body.orderData
  await ordersService.postOrder(orderData)
  res.sendStatus(201)
}