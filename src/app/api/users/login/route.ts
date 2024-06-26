import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel'
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function POST(request:NextRequest) {
    try{
        const reqBody= await request.json()
        const {email, password} =reqBody;
        console.log(reqBody)

        // check if user exists or not:
        const user = await User.findOne({email})
        if (!user){
            console.log("Not user")
            return NextResponse.json({error:"User does not exist."}, {status:404})
        }

        // check if password is correct/matched.
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            console.log("Invalid password.")
            return NextResponse.json({error:"Invalid password."}, {status:400})
        }

        // create token data
        const tokenData={
            id:user._id,
            username:user.username,
            email:user.email
        }
        // create token
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {expiresIn:"1d"})

        const response = NextResponse.json({
            message:"Login Successful.",
            success:true
        })

        response.cookies.set(
            "token", 
            token, {
            httpOnly:true, 
        })

        return response;

    }
    catch(error:any){
        console.log(error)
        return NextResponse.json({error:error.message}, {status:500})
    }
}