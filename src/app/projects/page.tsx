import { MainContainer } from "@/components/mainContainer/mainContainer"
import { Project } from "@/components/project"
import { Project as TProject } from "@/types/projects"

export default function Projects() {
	const projects: TProject[] = [
		{
			name: "Pequenos talentos",
			description:
				"Participei dos pequenos talentos como professor e padrinho, esse projeto é um projeto beneficente que ajuda crianças com renda baixa e com muito potêncial, ensinamos para eles um pouco de programação/robótica e matérias que vão cair no vestibulinho da etec.",
			imageUrl: "/images/projects/pequenos-talentos.png",
			externalLink: "https://pequenostalentos.tecnologiaunica.com.br/",
		},
		{
			name: "Apita mais",
			description:
				"O Apita mais foi meu TCC do 3º ano da Etec, a plataforma é uma central de notícias e resultados de partidas de futebol com o objetivo de trazer mais visibilidade para o futebol feminino.",
			imageUrl: "/images/projects/apita-mais.png",
			externalLink: "https://sobre.apitamais.com.br",
		},
		{
			name: "Manga-scraper",
			description:
				"Desenvolvi um web-scraper em Python que busca imagens de mangas e armazena em um JSON, está detalhado no repositório como pode executa-lo.",
			imageUrl: "/images/projects/manga-scraper.png",
			githubRepo: "https://github.com/GustavoSilverio/manga-scraper",
		},
	]

	return (
		<MainContainer className="h-auto">
			<div className="animate-fade-in grid md lg:grid-cols-3 gap-8">
				{projects.map((project, index) => {
					return (
						<Project
							key={index}
							{...project}
						/>
					)
				})}
			</div>
		</MainContainer>
	)
}
