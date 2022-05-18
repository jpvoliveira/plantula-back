import {prisma} from "../database.js"

export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  cpf: string;
  cell: string;
  city: string;
  address: string;
}
export type UserInsertData = Omit<User, "id">;

export interface UserLogin {
  email: string;
  password: string;
} 

export async function findByEmail(email: string){
  const result = await prisma.users.findFirst({
    where:{
      email: email
    }
  })
  return result
}

export async function findById(id: number){
  const result = await prisma.users.findFirst({
    where:{
      id: id
    }
  })
  return result
}

export async function findByCpf(cpf: string){
  const result = await prisma.users.findFirst({
    where:{
      cpf: cpf
    }
  })
  return result
}

export async function findByCell(cell: string){
  const result = await prisma.users.findFirst({
    where:{
      cell: cell
    }
  })
  return result
}

export async function insertUser(userData: UserInsertData){
  const result = await prisma.users.create({
    data:{
      email: userData.email,
      name: userData.name,
      password: userData.password,
      cpf: userData.cpf,
      cell: userData.cell,
      city: userData.city,
      address: userData.address,
    }
  })
  return result
}

export async function findTokenById(id: number){
  const result = await prisma.sessions.findFirst({
    where:{
      userId: id
    }
  })
  return result
}

export async function findToken(token: string){
  const result = await prisma.sessions.findFirst({
    where:{
      token: token
    }
  })
  return result
}

export async function token(token: string, userId: number) {
  return prisma.sessions.create({
    data: {
      token,
      userId
    }
  })
}