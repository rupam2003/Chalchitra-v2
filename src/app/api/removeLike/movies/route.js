import User from "@/app/models/user"
import { connectDB } from "@/app/utils/helpers"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        await connectDB()
        const {email,item} = await req.json()
        await User.findOneAndUpdate({email},{$pull:{movies:item}})


        return NextResponse.json({messege : "favs updated"})
        
    } catch (error) {
        return NextResponse.json({messege : "favs is same"})

    }
}