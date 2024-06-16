"use client"

import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export const GoUp = () => {
	const [scrollTop, setScrollTop] = useState(0)

	const scrollToTop = () => {
		if (document) document.documentElement.scrollTop = 0
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY || document.documentElement.scrollTop)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<button
			onClick={() => scrollToTop()}
			className={cn(
				"btn-base opacity-100 transition ease-in-out duration-300 p-4 sticky left-6 bottom-[20px] flex lg:hidden items-center justify-center",
				{
					"opacity-0": scrollTop === 0,
				}
			)}
		>
			<ArrowUp color="#cbd5e1" />
		</button>
	)
}
