import { motion, Transition, Variants } from "framer-motion"
import { GenericElementProps, LinkProps, ListProps } from "./summary.types"
import { cn } from "@/lib/utils"

export const Summary = () => {
	return (
		<>
			<H2>Gustavo Silvério • Desenvolvedor Full-Stack</H2>

			<H3>Sobre mim 💻</H3>
			<P>
				Sou um desenvolvedor Full-Stack focado em transformar problemas complexos em soluções digitais que geram impacto e valor real.
				Tenho uma forte base técnica e trabalho principalmente com o ecossistema React e .NET (C#).
				Minha especialidade é projetar e desenvolver aplicações escaláveis e robustas,
				construindo desde interfaces dinâmicas no frontend até APIs estruturadas em micro-serviços no backend.
			</P>
			<P>
				Prezo muito pela qualidade e arquitetura de software,
				mantendo o foco em garantir a melhor performance e em facilitar a manutenção contínua da base de código.
				Trabalho com metodologias ágeis e busco sempre otimizar o fluxo de trabalho, garantindo produtividade e segurança em cada entrega.
			</P>

			<H3>Tecnologias no meu arsenal 🛠️</H3>

			<Stack>
				<P>
					react, next, typescript, javascript, tailwindcss, shadcn ui,
					figma, prisma
				</P>

				<Divider />

				<P>c#, petapoco, python, sql, no-sql, sql server, mongodb</P>

				<Divider />

				<P>web scraping, automation, ubuntu server, git</P>
			</Stack>
		</>
	)
}

const itemVariant: Variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
	closed: {
		opacity: 0,
		y: 20,
		transition: { duration: 0.2 },
	},
}

const itemTransition: Transition = {
	type: "spring",
	stiffness: 300,
	damping: 24,
}

const Stack = ({ children, className }: GenericElementProps) => {
	return (
		<motion.div className={cn("flex flex-col gap-2 mx-2", className)}>
			{children}
		</motion.div>
	)
}

const Divider = ({ className }: GenericElementProps) => {
	return (
		<motion.div
			className={cn("w-full h-px bg-gray-300", className)}
			variants={itemVariant}
			transition={itemTransition}
		/>
	)
}

const A = ({ children, className, href }: LinkProps) => {
	return (
		<motion.a
			className={cn(
				"text-blue-500 hover:text-blue-600 underline",
				className
			)}
			href={href}
			target="_blank"
		>
			{children}
		</motion.a>
	)
}

const H2 = ({ children, className }: GenericElementProps) => {
	return (
		<motion.h2
			className={cn("text-2xl font-bold", className)}
			variants={itemVariant}
			transition={itemTransition}
		>
			{children}
		</motion.h2>
	)
}

const H3 = ({ children, className }: GenericElementProps) => {
	return (
		<motion.h3
			className={cn("text-xl font-semibold mt-2", className)}
			variants={itemVariant}
			transition={itemTransition}
		>
			{children}
		</motion.h3>
	)
}

const P = ({ children, className }: GenericElementProps) => {
	return (
		<motion.p
			className={cn(className, "text-lg")}
			variants={itemVariant}
			transition={itemTransition}
		>
			{children}
		</motion.p>
	)
}

const List = ({ items, className }: ListProps) => {
	return (
		<motion.ul
			className={cn(className)}
			variants={{
				open: {
					transition: {
						staggerChildren: 0.05,
					},
				},
				closed: {},
			}}
		>
			{items.map((item, index) => (
				<motion.li
					className="pl-1"
					key={index}
					variants={itemVariant}
					transition={itemTransition}
				>
					• {item}
				</motion.li>
			))}
		</motion.ul>
	)
}
