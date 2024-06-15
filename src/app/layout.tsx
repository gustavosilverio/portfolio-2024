import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { GradientElipse } from "@/components/GradientElipse"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
	subsets: ["latin"],
	style: ["normal"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
})

export const metadata: Metadata = {
	title: "Gustavo Silvério",
	description: "A full-stack developer!",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<Header />
				<main className="flex justify-center items-center px-8 max-h-full h-[calc(100dvh-172px)]">
					{children}
				</main>
				<Footer />
				<GradientElipse side="bottom" />
			</body>
		</html>
	)
}
