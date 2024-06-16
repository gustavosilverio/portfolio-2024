export interface ProjectProps {
	id: number
	name: string
	description: string
	externalLink: string | null
	githubRepo: string | null
	imageUrl: string
}

export interface ProjectsProps {
	setProjectsCount: (n: number | undefined) => void
}
