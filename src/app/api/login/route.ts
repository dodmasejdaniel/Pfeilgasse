import { NextRequest, NextResponse } from "next/server";
import { getUserByEmail } from "../../../../prisma/user";
import bcrypt from "bcrypt";
export async function POST(request: NextRequest) {
    const { email, password } = await request.json()

    try {
        const user = await getUserByEmail(email)
        if (!user) {
            return NextResponse.json({ error: "Credentials incorrect" }, { status: 401 })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return NextResponse.json({ error: "Credentials incorrect" }, { status: 401 })
        }

        return NextResponse.json({
            ...user,
            password: undefined
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}