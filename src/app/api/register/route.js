import User from "@/app/models/user"
import { connectDB } from "@/app/utils/helpers"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectDB()
        const {name,email,password} = await req.json()
        await User.create({name,email,password})


        return NextResponse.json({messege : "user registered"})
        
    } catch (error) {
        return NextResponse.json({messege : "user didnt get registered"})

    }
}