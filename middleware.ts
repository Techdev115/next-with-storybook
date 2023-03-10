import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
	console.log("Next middlware test")
	return NextResponse.next()
}

export const config = {
	matcher: ["/"],
}
