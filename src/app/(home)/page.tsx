"use client"

import { MainContainer } from "@/components/mainContainer/mainContainer"
import Image from "next/image"

export default function Home() {
	return (
		<MainContainer>
			<div className="animate-fade-in flex flex-col items-center space-y-6 max-w-[454px] w-full">
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
						I'am Gustavo Silvério!
					</h1>

					<p className="leading-5">
						I'am a web developer from São Paulo, Brasil, I work with
						web developmenting for 2 years.
					</p>
				</div>
			</div>
		</MainContainer>
	)
}
