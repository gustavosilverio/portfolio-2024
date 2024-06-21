import { prisma } from "../services/prisma"

export const getAllProjects = async () => {
	try {
		return await prisma.project.findMany({
			where: {
				active: true,
			},
		})
	} catch (err) {
		console.error(err)
	}
}
