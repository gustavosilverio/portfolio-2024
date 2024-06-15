export const Footer = () => {
	const actualYear = new Date().getFullYear()

	return (
		<footer className="flex items-center justify-center px-4 py-[26px]">
			<p className="text-xs">{actualYear} @ Gustavo Silvério</p>
		</footer>
	)
}
