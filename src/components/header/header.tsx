"use client"

import Image from "next/image"

export const Header = () => {
	return (
		<header className="flex min-h-[104px] px-12 py-6 justify-center lg:px-32 sm:justify-between items-center">
			<span
				onClick={() => console.log("open drawer...")}
				className="cursor-pointer"
			>
				<Image
					src="/logo/logo.svg"
					width={40}
					height={40}
					priority
					alt="Minha logo"
					quality={100}
				/>
			</span>

			<nav className="hidden sm:flex">
				<ul className="flex space-x-5 p-2">
					<li className="btn-base">projects</li>

					<li className="btn-base">about me</li>

					<li className="btn-base">contact</li>
				</ul>
			</nav>
		</header>
	)
}
