interface CardProps {
	variant: "smCard" | "mdCard"
	children?: React.ReactNode
	className?: string
	onClick?: () => void
}
const cardTypes: Record<CardProps["variant"], string> = {
	smCard: "w-65 h-62 text-sm",
	mdCard: "w-115 h-100",
}

export const Card = ({ variant, children, className }: CardProps) => {
	const cardClass = cardTypes[variant] || cardTypes.mdCard

	return (
		<div
			className={`${cardClass} ${className} border border-[var(--brand-blue-3)] rounded-2xl shadow-xl flex flex-col items-center`}
		>
			{children}
		</div>
	)
}
