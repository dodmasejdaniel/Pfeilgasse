import { jwtVerify } from "jose"


export function getJwtSecret() {
    const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET
    if (!jwtSecret) {
        throw new Error("JWT_SECRET not set")
    }
    return (new TextEncoder()).encode(jwtSecret)
}

export async function verifyJwtToken(token: string | Uint8Array) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecret())
        return payload
    } catch (err) {
        console.error(err)
        return null
    }
}