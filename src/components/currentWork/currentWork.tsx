import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@ui/tooltip"
import { BriefcaseBusiness } from "lucide-react"

export const CurrentWork = () => {
	return (
		<div className="hidden lg:flex fixed bottom-[16px] left-[26px]">
			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger asChild>
						<button className="btn-base">
							<span>
								<BriefcaseBusiness color="#cbd5e1" />
							</span>
						</button>
					</TooltipTrigger>
					<TooltipContent side="right">
						<p>
							Currently working at{" "}
							<a
								className="text-[#ef3f44] font-semibold cursor-pointer hover:underline"
								href="https://tecnologiaunica.com.br/"
								rel="noreferrer"
								target="_blank"
							>
								Tecnologia Única
							</a>
						</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}
