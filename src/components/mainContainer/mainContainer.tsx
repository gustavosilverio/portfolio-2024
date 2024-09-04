import { cn } from "@/lib/utils"
import { MainContainerProps } from "@/types/components/mainContainer"

export const MainContainer = ({ children, className }: MainContainerProps) => {
	return (
		<div
			className={cn(
				"flex flex-col justify-center items-center px-3 md:px-8 max-h-full h-[calc(100dvh-172px)] animate-fade-in",
				className
			)}
		>
			{children}
		</div>
	)
}
