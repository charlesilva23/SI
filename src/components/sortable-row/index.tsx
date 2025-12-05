import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import type { PropsWithChildren } from "react"
import type { Ticket } from "@/src/types/ticket/ticket"

interface SortableRowProps {
	ticket: Ticket
	onClick: () => void
}

export const SortableRow = ({
	onClick,
	ticket,
}: PropsWithChildren<SortableRowProps>) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: ticket.id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	return (
		<tr
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			onClick={onClick}
		>
			<td>{ticket.id}</td>
			<td>{ticket.title}</td>
			<td>{ticket.description}</td>
		</tr>
	)
}
