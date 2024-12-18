export const dynamic = "force-static";

import { MainContainer } from "@/components/mainContainer/mainContainer"
import { Project } from "@/components/project"
import { cn } from "@/lib/utils"
import { ProjectProps } from "@/types/project"
import { get } from "@vercel/edge-config"

async function getProjects() {
	const projects = await get("projects") as ProjectProps[]
	return projects || []
}

export default async function ProjectsPage() {

	const projects = await getProjects()

	return (
		<MainContainer className="h-auto lg:h-[calc(100dvh-172px)]">
			{projects?.length === 0 || projects === undefined ? (
				<div className="flex">
					<p>No projects to show here!</p>
				</div>
			) : (
				<div
					className={cn("grid gap-8 overflow-x-hidden lg:pr-2", {
						"lg:grid-cols-3 lg:h-[calc(100dvh-172px)]":
							projects.length > 3,
						"lg:flex": projects.length <= 3,
					})}
				>
					{projects.map((project) => {
						return (
							<Project
								key={project.id}
								{...project}
							/>
						)
					})}
				</div>
			)}
		</MainContainer>
	)
}
