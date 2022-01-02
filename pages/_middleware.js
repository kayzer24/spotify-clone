import {getToken} from "next-auth/jwt";
import {NextResponse} from "next/server";

export async function middleware(req) {
    // token exists if user is logged in
    const token = await getToken({req, secret: process.env.JWT_SECRET});

    const {pathname} = req.nextUrl;

    // Allow the requests if the following is true
    // 1. the token exists
    if (pathname.includes("/api/auth") || token) {
        if (pathname === "/login") {
            return NextResponse.redirect("/");
        }

        return NextResponse.next();
    }

    // redirect them to login if they dont have valid token And are requesting a protected route
    if (!token && pathname !== "/login") {
        return NextResponse.redirect("/login");
    }
}