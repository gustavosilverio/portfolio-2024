import { getAllProjects } from "@/api/controllers/project"
import { MainContainer } from "@/components/mainContainer/mainContainer"
import { Project } from "@/components/project"
import { cn } from "@/lib/utils"
import { use } from "react"

export default function Projects() {
	const projects = use(getAllProjects())

	return (
		<MainContainer
			className={cn({ "h-auto": projects && projects.length > 0 })}
		>
			{projects?.length === 0 || projects === undefined ? (
				<div className="flex">
					<p>No projects to show here!</p>
				</div>
			) : (
				<div className="animate-fade-in grid md lg:grid-cols-3 gap-8">
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
