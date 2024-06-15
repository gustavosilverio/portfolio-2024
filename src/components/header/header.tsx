"use client"

import {
	Download,
	Ellipsis,
	FolderOpenDot,
	Github,
	Instagram,
	Linkedin,
	Mail,
	UserRound,
} from "lucide-react"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "../ui/drawer"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
	return (
		<header className="flex min-h-[104px] px-12 py-6 lg:px-32 justify-between items-center">
			<Link
				href="/"
				className="cursor-pointer"
			>
				<Image
					src="/logo/logo.svg"
					width={40}
					height={40}
					priority
					alt="My logo"
					quality={100}
				/>
			</Link>

			<nav className="hidden lg:flex">
				<ul className="flex space-x-5 p-2">
					<li>
						<Link
							href="/"
							className="btn-base flex space-x-2 items-center"
						>
							<UserRound className="w-4 h-4" />
							<p>about me</p>
						</Link>
					</li>

					<li>
						<Link
							href="projects"
							className="btn-base flex space-x-2 items-center"
						>
							<FolderOpenDot className="w-4 h-4" />
							<p>projects</p>
						</Link>
					</li>

					<li>
						<a
							href="mailto:gustavosk290905@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="btn-base flex space-x-2 items-center"
						>
							<Mail className="w-4 h-4" />
							<p>contact</p>
						</a>
					</li>
				</ul>
			</nav>

			<Drawer>
				<DrawerTrigger
					asChild
					className="lg:hidden btn-base p-1"
				>
					<span>
						<Ellipsis />
					</span>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Navigation</DrawerTitle>
						<ul
							role="list"
							className="divide-y divide-slate-300"
						>
							<li className="py-3 flex space-x-2 items-center">
								<DrawerClose asChild>
									<Link
										href="/"
										className="flex space-x-2 items-center"
									>
										<UserRound className="w-4 h-4" />
										<p>about me</p>
									</Link>
								</DrawerClose>
							</li>
							<li className="py-3 flex space-x-2 items-center">
								<DrawerClose asChild>
									<Link
										href="projects"
										className="flex space-x-2 items-center"
									>
										<FolderOpenDot className="w-4 h-4" />
										<p>projects</p>
									</Link>
								</DrawerClose>
							</li>

							<li className="py-3">
								<DrawerClose asChild>
									<a
										href="mailto:gustavosk290905@gmail.com"
										target="_blank"
										rel="noreferrer"
										className="flex space-x-2 items-center"
									>
										<Mail className="w-4 h-4" />
										<p>contact</p>
									</a>
								</DrawerClose>
							</li>

							<li className="py-3">
								<DrawerClose asChild>
									<button className="flex space-x-2 items-center">
										<Download className="w-4 h-4" />
										<p>curriculum</p>
									</button>
								</DrawerClose>
							</li>
						</ul>
						<div className="flex space-x-4 mt-2">
							<a
								href="https://github.com/GustavoSilverio"
								target="_blank"
								rel="noreferrer"
								className="btn-base bg-[#0d1117] rounded-xl p-4 w-full flex justify-center"
							>
								<Github color="#cbd5e1" />
							</a>

							<a
								href="https://www.linkedin.com/in/gustavosilverioo/"
								target="_blank"
								rel="noreferrer"
								className="btn-base bg-[#0a66c2] rounded-xl p-4 w-full flex justify-center"
							>
								<Linkedin color="#cbd5e1" />
							</a>

							<a
								href="https://www.instagram.com/sotzzz/"
								target="_blank"
								rel="noreferrer"
								className="btn-base bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-xl p-4 w-full flex justify-center"
							>
								<Instagram color="#020617" />
							</a>
						</div>
					</DrawerHeader>
				</DrawerContent>
			</Drawer>
		</header>
	)
}
