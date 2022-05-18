import * as usersRepository from '../repositories/usersRepository.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export async function signUp(userData: usersRepository.UserInsertData) {
  const existingUser = await usersRepository.findByEmail(userData.email)
  if (existingUser)
    throw { type: 'Conflict', message: 'Este email já esta cadastrado' }

  const existingCpf = await usersRepository.findByCpf(userData.cpf)
  if (existingCpf)
    throw { type: 'Conflict', message: 'Este CPF já esta cadastrado' }

  const existingCell = await usersRepository.findByCell(userData.cell)
  if (existingCell)
    throw { type: 'Conflict', message: 'Este telefone já esta cadastrado' }

  await usersRepository.insertUser(userData)
}

export async function signIn(userData: usersRepository.UserLogin) {
  const existingUser = await usersRepository.findByEmail(userData.email)
  if (!existingUser)
    throw { type: 'Conflict', message: 'Dados Invalidos' }
  if (existingUser.password !== userData.password)
    throw { type: 'Conflict', message: 'Senha Invalida' }

  let token = ''
  const existingSession = await usersRepository.findTokenById(existingUser.id)
  if (existingSession) {
    token = existingSession.token
  } else {
    const key = process.env.JWT_SECRET
    token = jwt.sign(userData.email, key)
    await usersRepository.token(token, existingUser.id)
  }

  return token
}

export async function findUser(token: string) {
  const existingToken = await usersRepository.findToken(token)
  if (!existingToken)
    throw { type: 'Unauthorized', message: 'Voce não esta logado' }
  
  const existingUser = await usersRepository.findById(existingToken.userId)
  if (!existingUser)
    throw { type: 'Conflict', message: 'Usuario invalido' }

  return existingUser
}