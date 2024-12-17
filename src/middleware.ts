import { NextResponse } from "next/server"
import { get } from "@vercel/edge-config"

export const config = { matcher: "/api/projects" }

export async function middleware() {
	const greeting = await get("projects")
	return NextResponse.json(greeting)
}
