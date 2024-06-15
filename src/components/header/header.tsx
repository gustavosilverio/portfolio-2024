"use client"

import {
	Download,
	Ellipsis,
	FolderOpenDot,
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
					alt="Minha logo"
					quality={100}
				/>
			</Link>

			<nav className="hidden sm:flex">
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
					className="sm:hidden btn-base p-1"
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
										<p>sobre mim</p>
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
										<p>projetos</p>
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
										<p>contato</p>
									</a>
								</DrawerClose>
							</li>

							<li className="py-3">
								<DrawerClose asChild>
									<button className="flex space-x-2 items-center">
										<Download className="w-4 h-4" />
										<p>currículo</p>
									</button>
								</DrawerClose>
							</li>
						</ul>
					</DrawerHeader>
				</DrawerContent>
			</Drawer>
		</header>
	)
}
