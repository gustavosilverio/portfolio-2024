import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { GradientElipse } from "@/components/GradientElipse"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CurrentWork } from "@/components/currentWork"
import { DownloadCurriculum } from "@/components/downloadCurriculum"
import { SocialMedias } from "@/components/socialMedias"

const inter = Inter({
	subsets: ["latin"],
	style: ["normal"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
})

export const metadata: Metadata = {
	title: "Gustavo Silvério",
	description: "A full-stack developer!",
	authors: [{ name: "Gustavo Silvério", url: "https://www.gsilverio.com/" }],
	creator: "Gustavo Silvério",
	keywords:
		"Gustavo Silvério, Gustavo Oliveira, developer, desenvolvedor, full-stack, frontend, backend, programador",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<meta
					property="og:image"
					content="https://imgur.com/a/MzpGJfM"
				/>
				<meta
					property="og:site_name"
					content="Gustavo Silvério | Portfolio"
				/>
				<meta
					property="og:title"
					content="Gustavo Silvério | Portfolio"
				/>
				<meta
					property="og:description"
					content="A full-stack developer!"
				/>
				<meta
					property="og:url"
					content="https://www.gsilverio.com/"
				/>
			</head>
			<body className={inter.className}>
				<Header />
				<main className="flex justify-center items-center px-8 max-h-full h-[calc(100dvh-172px)]">
					{children}
				</main>
				<GradientElipse side="bottom" />
				<SocialMedias />
				<CurrentWork />
				<DownloadCurriculum />
				<Footer />
			</body>
		</html>
	)
}
