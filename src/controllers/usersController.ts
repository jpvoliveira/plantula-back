import { Request, Response } from "express";
import * as usersService from "../services/usersService.js"

export async function signUp(req:Request, res:Response ) {
  const userData = req.body.userData
  await usersService.signUp(userData)
  res.sendStatus(201)
}

export async function signIn(req:Request, res:Response ) {
  const userData = req.body.userData
  const token = await usersService.signIn(userData)
  res.status(201).send(token)
}

export async function findUser(req:Request, res:Response ) {
  const token = req.headers.authorization
  const userData = await usersService.findUser(token)
  res.send(userData)
}
