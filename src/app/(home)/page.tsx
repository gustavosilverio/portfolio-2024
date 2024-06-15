import Image from "next/image"

export default function Home() {
	return (
		<div className="flex flex-col items-center space-y-8 max-w-[454px] w-full">
			<Image
				src="/images/profile.png"
				alt="Minha foto de perfil"
				width={150}
				height={150}
			/>

			<div className="flex flex-col text-center space-y-5">
				<h1 className="text-3xl font-bold">
					Olá, sou Gustavo Silvério!
				</h1>

				<p className="leading-5">
					I'am a web developer from São Paulo, Brasil, I work with web
					developmenting for 2 years.
				</p>
			</div>
		</div>
	)
}
