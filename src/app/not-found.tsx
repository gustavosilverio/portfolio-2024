import { MainContainer } from "@/components/mainContainer"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
	return (
		<MainContainer>
			<div className="flex space-x-2 items-center justify-center">
				<h1 className="text-2xl">Hey, nothing to see here!</h1>

				<Link
					className="flex justify-center items-center p-2 rounded-full bg-slate-300"
					href="/"
				>
					<ExternalLink
						color="#020617"
						className="w-4 h-4"
					/>
				</Link>
			</div>
		</MainContainer>
	)
}
