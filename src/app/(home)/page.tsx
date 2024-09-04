"use client"

import { MainContainer } from "@/components/mainContainer/mainContainer"
import { CircleHelp } from "lucide-react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { useState } from "react"

export default function Home() {
	const [showSummary, setShowSummary] = useState(false)

	const itemVariant: Variants = {
		open: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 300, damping: 24 },
		},
		closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
	}

	return (
		<MainContainer>
			<motion.div
				className="flex flex-col justify-center items-center w-full h-full"
				animate={showSummary ? "open" : "closed"}
			>
				<motion.div className="animate-fade-in flex flex-col items-center space-y-6 max-w-[454px] w-full">
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
							Working with web development for 2 years alread.
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

				<motion.div className="flex flex-col items-center justify-center w-full max-h-[372px] px-16">
					<motion.div
						className="flex flex-col gap-3 bg-slate-900 rounded-md w-full h-full p-4"
						initial={false}
						variants={{
							open: {
								opacity: 1,
								scale: 1,
								y: -38,
								display: "flex",

								transition: {
									type: "spring",
									bounce: 0.3,
									delayChildren: 0.65,
									staggerChildren: 0.05,
								},
							},

							closed: {
								display: "none",
								opacity: 0,
								scale: 0,
								y: 0,
							},
						}}
					>
						<motion.p
							variants={itemVariant}
							transition={{ type: "spring" }}
						>
							Some text here!
						</motion.p>
						<motion.p
							variants={itemVariant}
							transition={{ type: "spring" }}
						>
							Some text here!
						</motion.p>
						<motion.p
							variants={itemVariant}
							transition={{ type: "spring" }}
						>
							Some text here!
						</motion.p>
						<motion.p
							variants={itemVariant}
							transition={{ type: "spring" }}
						>
							Some text here!
						</motion.p>
						<motion.p
							variants={itemVariant}
							transition={{ type: "spring" }}
						>
							Some text here!
						</motion.p>
						<motion.p
							variants={itemVariant}
							transition={{ type: "spring" }}
						>
							Some text here!
						</motion.p>
					</motion.div>
				</motion.div>
			</motion.div>
		</MainContainer>
	)
}
