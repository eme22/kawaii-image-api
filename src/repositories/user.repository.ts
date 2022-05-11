import {getRepository} from "typeorm";
import {User} from '../models'

export interface IUserPayload {
  name: string;
}

export const getUsers  = async () :Promise<Array<User>> => {
  const userRepository = getRepository(User);
  return userRepository.find()
}

export const createUser  = async (payload: IUserPayload) :Promise<User> => {
  const userRepository = getRepository(User);
  const user = new User()
  return userRepository.save({
    ...user,
    ...payload
  })
}

export const getUser  = async (id: string) :Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id)
  if (!user) return null
  return user
}

export const getAdmin  = async () :Promise<User> => {
  const userRepository = getRepository(User);
  const users = await userRepository.find({ admin: true});
  return users[Math.floor(Math.random()*users.length)]
}

export const setAdmin  = async (id: string) :Promise<boolean> => {
  const userRepository = getRepository(User);
  return (await userRepository.update( id, {admin: true})).affected != 0;
}