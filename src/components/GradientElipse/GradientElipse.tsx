"use client"

import { cn } from "@/lib/utils"
import { GradientElipseProps } from "@/types/components/GradientElipse"

export const GradientElipse = ({ side }: GradientElipseProps) => {
	return (
		<div
			className={cn(
				"w-[400px] h-[400px] bg-slate-700 blur-[230px] rounded-full fixed",
				{
					"top-[-250px] left-[-250px]": side === "top",
					"bottom-[-250px] right-[-250px]": side === "bottom",
				}
			)}
		/>
	)
}
