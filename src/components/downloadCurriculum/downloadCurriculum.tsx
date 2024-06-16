import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@ui/tooltip"
import { Download } from "lucide-react"
import Link from "next/link"

export const DownloadCurriculum = () => {
	return (
		<div className="hidden lg:flex z-50 fixed bottom-[16px] right-[26px]">
			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger asChild>
						<Link
							className="btn-base"
							prefetch={false}
							href="/documents/curriculum.pdf"
							target="_blank"
						>
							<span>
								<Download color="#cbd5e1" />
							</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="left">
						<p>Download my curriculum!</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}
