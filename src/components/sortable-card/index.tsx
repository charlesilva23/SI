import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import type { Ticket } from "@/src/types/ticket/ticket"
import { TicketCard } from "../cards/tickets"

interface SortableCardsProps {
	ticket: Ticket
	onClick: (ticket: Ticket) => void
	columnId: string
}

export function SortableCard({
	ticket,
	onClick,
	columnId,
}: SortableCardsProps) {
	const {
		setNodeRef,
		attributes,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: ticket.id, data: { columnId } })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0 : 1,
	}

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<TicketCard
				ticket={ticket}
				key={ticket.id}
				onClick={() => onClick(ticket)}
			/>
		</div>
	)
}
