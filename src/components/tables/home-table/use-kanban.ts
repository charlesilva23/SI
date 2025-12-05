import type { DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { useEffect, useState } from "react"
import type { Ticket } from "@/src/types/ticket/ticket"

export function useKanban(initialTickets: Ticket[] | undefined) {
	const [columns, setColumns] = useState<
		{ id: string; title: string; ticketIds: string[] }[]
	>([
		{ id: "backlog", title: "Backlog", ticketIds: [] },
		{ id: "doing", title: "Desenvolvimento", ticketIds: [] },
		{ id: "done", title: "Concluído", ticketIds: [] },
	])
	const [activeTicket, setActiveTicket] = useState<Ticket | null>(null)

	useEffect(() => {
		if (initialTickets?.length) {
			setColumns((prev) => {
				const copy = [...prev]
				const backlog = copy.find((col) => col.id === "backlog")
				if (backlog) {
					const existingTicketIds = new Set(
						copy.flatMap((col) => col.ticketIds),
					)
					const newTicketIds = initialTickets
						.map((t) => t.id)
						.filter((id) => !existingTicketIds.has(id))
					backlog.ticketIds = [...backlog.ticketIds, ...newTicketIds]
				}
				return copy
			})
		}
	}, [initialTickets])

	const handlers = {
		handleDragStart: (event: DragStartEvent) => {
			const { active } = event
			const ticket = initialTickets?.find((t) => t.id === active.id)
			if (ticket) {
				setActiveTicket(ticket)
			}
		},
		handleDragOver: (event: DragOverEvent) => {
			const { active, over } = event
			if (!over) return

			const activeId = active.id as string
			const overId = over.id as string

			const fromColumn = columns.find((col) => col.ticketIds.includes(activeId))
			let toColumn = columns.find((col) => col.ticketIds.includes(overId))

			if (!toColumn) {
				toColumn = columns.find((col) => col.id === overId)
			}

			if (!fromColumn || !toColumn || fromColumn.id === toColumn.id) return

			setColumns((prev) => {
				const fromTicketIds = fromColumn.ticketIds.filter(
					(id) => id !== activeId,
				)
				const toTicketIds = [...toColumn.ticketIds, activeId]

				return prev.map((col) => {
					if (col.id === fromColumn.id) {
						return { ...col, ticketIds: fromTicketIds }
					}
					if (col.id === toColumn.id) {
						return { ...col, ticketIds: toTicketIds }
					}
					return col
				})
			})
		},
		handleDragEnd: (event: DragEndEvent) => {
			setActiveTicket(null)
			const { active, over } = event
			if (!over) return

			const activeId = active.id as string
			const overId = over.id as string

			const fromColumn = columns.find((col) => col.ticketIds.includes(activeId))
			const toColumn = columns.find((col) => col.ticketIds.includes(overId))

			if (!fromColumn || !toColumn || fromColumn.id !== toColumn.id) return

			const activeIndex = fromColumn.ticketIds.indexOf(activeId)
			const overIndex = toColumn.ticketIds.indexOf(overId)

			if (activeIndex !== overIndex) {
				setColumns((prev) =>
					prev.map((col) => {
						if (col.id === fromColumn.id) {
							return {
								...col,
								ticketIds: arrayMove(col.ticketIds, activeIndex, overIndex),
							}
						}
						return col
					}),
				)
			}
		},
		handleDragCancel: () => {
			setActiveTicket(null)
		},
	}

	const columnActions = {
		createColumn: () => {
			const id = `col-${Date.now()}`
			setColumns((prev) => [
				...prev,
				{ id, title: "Nova Coluna", ticketIds: [] },
			])
		},
		deleteColumn: (columnId: string) => {
			setColumns((prev) => prev.filter((col) => col.id !== columnId))
		},
		renameColumn: (columnId: string, newTitle: string) => {
			setColumns((prev) =>
				prev.map((col) =>
					col.id === columnId ? { ...col, title: newTitle } : col,
				),
			)
		},
	}

	return { columns, activeTicket, handlers, columnActions }
}
