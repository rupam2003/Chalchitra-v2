import User from "@/app/models/user"
import { connectDB } from "@/app/utils/helpers"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectDB()
        const {email,movie} = await req.json()
        await User.findOneAndUpdate({email},{$push:{tv:item}})


        return NextResponse.json({messege : "tv updated"})
        
    } catch (error) {
        return NextResponse.json({messege : "tv is same"})

    }
}