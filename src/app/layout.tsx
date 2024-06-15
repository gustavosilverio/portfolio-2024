import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/assets/styles/globals.css"
import { GradientElipse } from "@/components/GradientElipse"

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
				{children}
				<GradientElipse side="bottom" />
			</body>
		</html>
	)
}
