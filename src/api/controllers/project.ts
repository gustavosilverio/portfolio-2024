"use server"

import { prisma } from "../services/prisma"

export const getAllProjects = async () => {
	try {
		return await prisma.project.findMany()
	} catch (err) {
		console.error(err)
	}
}
