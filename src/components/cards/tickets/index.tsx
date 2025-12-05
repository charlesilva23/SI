import { Card } from "@/src/components/cards"
import { cn } from "@/src/lib/utils"
import type { Ticket } from "@/src/types/ticket/ticket"

interface TicketCardProps {
	ticket: Ticket
	onClick: (ticket: Ticket) => void
	titleClassName?: string
	statusColor?: string
}

export const TicketCard = ({
	ticket,
	onClick,
	titleClassName,
	statusColor,
}: TicketCardProps) => {
	return (
		<button
			type="button"
			onClick={() => onClick(ticket)}
			className="w-full text-left p-0 bg-transparent border-0 cursor-pointer"
		>
			<Card variant="smCard">
				<div className="flex justify-start ps-6 pt-2 w-full">{ticket.id}</div>
				<div>
					<h1
						className={`text-2xl font-bold p-2 text-[var(--brand-blue-5)] text-center ${titleClassName}`}
					>
						{ticket.title}
					</h1>
				</div>
				<div>{ticket.author}</div>

				<div>
					<p
						className={cn(
							"text-xs text-center mt-2 text-orange-400 font-bold",
							statusColor,
						)}
					>
						{ticket.statusName}
					</p>
				</div>
			</Card>
		</button>
	)
}
