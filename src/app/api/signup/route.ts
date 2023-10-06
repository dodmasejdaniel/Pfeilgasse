import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createUser } from "../../../../prisma/user";
interface SignupData {
    name: string;
    surname: string;
    email: string;
    door: string;
    password: string;
}

export async function POST(request: NextRequest) {
    const { email, password, door, name, surname } = await request.json() as SignupData
    const passwordHash = await bcrypt.hash(password, 10)

    try {
        const user = await createUser(name, surname, email, door, passwordHash)
        return NextResponse.json({
            ...user,
            password: undefined
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}