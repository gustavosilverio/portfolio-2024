import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@ui/tooltip"
import { Download } from "lucide-react"

export const DownloadCurriculum = () => {
	return (
		<div className="hidden lg:flex fixed bottom-[16px] right-[26px]">
			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger asChild>
						<button className="btn-base">
							<span>
								<Download color="#cbd5e1" />
							</span>
						</button>
					</TooltipTrigger>
					<TooltipContent side="left">
						<p>Download my curriculum!</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}
