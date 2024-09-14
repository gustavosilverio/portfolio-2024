import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@ui/tooltip"
import { Github, Instagram, Linkedin } from "lucide-react"

export const SocialMedias = () => {
	return (
		<div className="hidden z-50 lg:flex flex-col gap-4 fixed bottom-[64px] left-[30px]">
			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger asChild>
						<a
							href="https://github.com/GustavoSilverio"
							target="_blank"
							rel="noreferrer"
							className="btn-base p-2 rounded-full bg-[#0d1117]"
						>
							<span className="">
								<Github color="#cbd5e1" />
							</span>
						</a>
					</TooltipTrigger>
					<TooltipContent side="right">
						<p>github</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger asChild>
						<a
							href="https://www.linkedin.com/in/gustavosilverioo/"
							target="_blank"
							rel="noreferrer"
							className="btn-base p-2 rounded-full !bg-[#0a66c2]"
						>
							<span>
								<Linkedin color="#cbd5e1" />
							</span>
						</a>
					</TooltipTrigger>
					<TooltipContent side="right">
						<p>linkedin</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger asChild>
						<a
							href="https://www.instagram.com/sotzzz/"
							target="_blank"
							rel="noreferrer"
							className="btn-base p-2 rounded-full bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
						>
							<span>
								<Instagram color="#ffffff" />
							</span>
						</a>
					</TooltipTrigger>
					<TooltipContent side="right">
						<p>instagram</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}
