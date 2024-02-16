import User from "@/app/models/user"
import { connectDB } from "@/app/utils/helpers"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectDB()
        const {email} = await req.json()
        const user = await User.findOne({email})
        return NextResponse.json({user})

        
    } catch (error) {
        return NextResponse.json({messege : "error finding user"})

    }
}