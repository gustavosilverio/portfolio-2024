import { getAllProjects } from "@/api/controllers/project"
import { MainContainer } from "@/components/mainContainer/mainContainer"
import { Project } from "@/components/project"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { Suspense, use } from "react"

const Projects = () => {
	const projects = use(getAllProjects())

	return (
		<>
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
		</>
	)
}

export default function ProjectsPage() {
	return (
		<MainContainer className="h-auto lg:h-[calc(100dvh-172px)]">
			<Suspense
				fallback={
					<div className="grid lg:grid-cols-3 gap-8 overflow-x-hidden">
						{Array.from({ length: 6 }).map((_, index) => {
							return (
								<Skeleton
									key={index}
									className="h-[324px] w-[324px] rounded-xl"
								/>
							)
						})}
					</div>
				}
			>
				<Projects />
			</Suspense>
		</MainContainer>
	)
}
