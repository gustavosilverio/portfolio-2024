"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ProjectProps } from "@/types/project"

export const Project = ({
	name,
	description,
	externalLink,
	githubRepo,
	imageUrl,
}: ProjectProps) => {
	const [isTooltipOpen, setIsTooltipOpen] = useState({
		name: false,
		description: false,
	})

	return (
		<Card className="shadow-base flex flex-col justify-between px-4 py-3 rounded-[8px] bg-slate-900 max-w-[324px] w-full min-h-[324px] max-h-[324px]">
			<CardHeader className="p-0">
				<CardTitle
					onClick={() =>
						setIsTooltipOpen((old) => ({
							name: true,
							description: old.description,
						}))
					}
					className="truncate leading-tight"
				>
					<p title={name}>{name}</p>
				</CardTitle>
				<CardDescription
					onClick={() =>
						setIsTooltipOpen((old) => ({
							description: true,
							name: old.name,
						}))
					}
					className={cn({
						"line-clamp-3": externalLink || githubRepo,
						"line-clamp-5": !externalLink && !githubRepo,
					})}
				>
					<p title={description}>{description}</p>
				</CardDescription>
			</CardHeader>
			<div className="flex flex-col gap-3">
				<CardContent className="p-0">
					<Image
						src={imageUrl}
						width={292}
						height={142}
						alt="Project image"
						className="w-full h-auto rounded-md"
						quality={100}
						priority
					/>
				</CardContent>
				<CardFooter
					className={cn("flex gap-4 p-0", {
						hidden: !externalLink && !githubRepo,
					})}
				>
					{externalLink && (
						<a
							href={externalLink}
							rel="noreferrer"
							target="_blank"
							className={cn(
								"flex justify-center transition ease-in-out duration-300 rounded-[6px] bg-slate-300 hover:bg-slate-50 w-full px-6 py-[6px]",
								{
									hidden: !externalLink,
								}
							)}
						>
							<ExternalLink color="#020617" />
						</a>
					)}

					{githubRepo && (
						<a
							href={githubRepo}
							rel="noreferrer"
							target="_blank"
							className={cn(
								"flex justify-center transition ease-in-out duration-300 rounded-[6px] bg-[#0D1117] hover:bg-[#050608] w-full px-6 py-[6px]",
								{
									hidden: !githubRepo,
								}
							)}
						>
							<Github color="#F1F5F9" />
						</a>
					)}
				</CardFooter>
			</div>
		</Card>
	)
}
