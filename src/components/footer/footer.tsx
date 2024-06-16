export const Footer = () => {
	const actualYear = new Date().getFullYear()

	return (
		<footer className="lg:absolute w-full bottom-0 flex items-center justify-center mt-6 px-4 py-[26px]">
			<p className="text-xs">{actualYear} @ Gustavo Silvério</p>
		</footer>
	)
}
