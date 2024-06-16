import { cn } from "@/lib/utils"
import { MainContainerProps } from "@/types/components/mainContainer"

export const MainContainer = ({ children, className }: MainContainerProps) => {
	return (
		<div
			className={cn(
				"animate-fade-in flex justify-center items-center px-8 max-h-full h-[calc(100dvh-172px)]",
				className
			)}
		>
			{children}
		</div>
	)
}
