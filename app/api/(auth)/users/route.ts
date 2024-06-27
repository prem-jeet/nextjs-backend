import connect from "@/app/lib/DB";
import User from "@/app/lib/models/user";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connect()
        const users = await User.find()
        return new NextResponse(JSON.stringify(users), { status: 200 })
    } catch (error: any) {
        return new NextResponse("Error in fetching users " + error.message, { status: 500 });
    }

}

export const POST = async (req: Request) => {
    try {
        await connect();
        const body = await req.json()
        const user = new User(body);
        user.save()
        return new NextResponse("Post successfull..", { status: 200 });

    } catch (error: any) {
        return new NextResponse("Some error occured " + error.message, { status: 500 });
    }
}
