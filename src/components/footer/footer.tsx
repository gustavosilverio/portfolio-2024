"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export const Footer = () => {
	const actualYear = new Date().getFullYear()
	const pathName = usePathname()

	return (
		<footer
			className={cn(
				"w-full bottom-0 flex items-center justify-center mt-6 px-4 py-[26px]",
				{
					"lg:absolute": pathName === "/projects",
					absolute: pathName !== "/projects",
				}
			)}
		>
			<p className="text-xs">{actualYear} @ Gustavo Silvério</p>
		</footer>
	)
}
