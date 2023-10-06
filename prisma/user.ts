import prisma from "./prisma";

export const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const getUserById = async (id : string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    return user
}

export const getUserByEmail = async (email : string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    return user
}

export const createUser = async (name : string, surname : string, email : string, door : string, passwordHash : string) => {
    const user = await prisma.user.create({
        data: {
            name: name,
            surname: surname,
            email: email,
            doorNumber: door,
            password: passwordHash
        }
    })
    return user
}