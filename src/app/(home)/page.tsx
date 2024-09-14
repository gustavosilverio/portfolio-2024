"use client"

import { MainContainer } from "@/components/mainContainer/mainContainer"
import { CircleHelp, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { Summary } from "@/components/summary/summary"

export default function Home() {
	const [showSummary, setShowSummary] = useState(false)

	return (
		<MainContainer>
			<motion.div
				className="flex flex-col justify-center items-center w-full h-full"
				animate={showSummary ? "open" : "closed"}
			>
				<motion.div
					className="animate-fade-in flex flex-col items-center space-y-6 px-2 max-w-[454px] w-full absolute top-auto"
					variants={{
						open: {
							opacity: 0,
							scale: 0,
						},

						closed: {
							opacity: 1,
							scale: 1,

							transition: {
								delay: .2,
							},
						},
					}}
					transition={{
						type: "spring",
						bounce: 0.3,
						duration: 0.3
					}}
				>
					<Image
						priority
						src="/images/profile.png"
						alt="My profile picture"
						width={150}
						height={150}
						quality={100}
					/>

					<div className="flex flex-col text-center space-y-5">
						<h1 className="text-3xl font-bold">
							Hey there,
							<br />
							I'm Gustavo Silvério!
						</h1>

						<p className="leading-5">
							A Full Stack developer from São Paulo, Brasil.
							Working with web development for 2 years already.
						</p>

						<div className="flex justify-center">
							<motion.button
								variants={{
									open: {
										opacity: 0,
										scale: 0,
									},
									closed: {
										opacity: 1,
										scale: 1,
									},
								}}
								className="w-min mb-4"
								transition={{ type: "spring", bounce: 0.3 }}
								whileHover={{ scale: 1.2 }}
								onClick={() => setShowSummary(true)}
							>
								<CircleHelp className="w-[20px]" />
							</motion.button>
						</div>
					</div>
				</motion.div>

				<motion.div className="flex flex-col items-center justify-center w-full max-w-screen-xl h-full max-h-[372px] px-4 md:px-16">
					<motion.div
						className="bg-gradient-to-br from-slate-950 to-[#3341553D] border border-slate-600 rounded-md w-full h-full p-4 relative"
						initial={false}
						variants={{
							open: {
								opacity: 1,
								scale: 1,
								y: -38,

								transition: {
									type: "spring",
									bounce: 0.3,
									delay: .2,
								},
							},

							closed: {
								opacity: 0,
								scale: 0,
								y: 0,

								transition: {
									type: "spring",
									bounce: 0.3,
								},
							},
						}}
					>
						<motion.button
							className="absolute right-2 top-2"
							onClick={() => setShowSummary(false)}
							whileHover={{
								scale: 1.2
							}}
							transition={{
								type: 'spring',
								bounce: 0.3,
							}}
						>
							<span>
								<X className="w-[20px]" />
							</span>
						</motion.button>

						<motion.article
							className="flex flex-col gap-2 overflow-y-auto h-full mr-4 pr-2"
							variants={{
								open: {
									transition: {
										delayChildren: 0.65,
										staggerChildren: 0.05,
									}
								},
								closed: {},
							}}
						>
							<Summary />
						</motion.article>
					</motion.div>
				</motion.div>
			</motion.div>
		</MainContainer>
	)
}
