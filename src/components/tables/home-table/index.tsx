"use client"

import {
	DndContext,
	DragOverlay,
	PointerSensor,
	rectIntersection,
	useSensor,
	useSensors,
} from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useListAllTickets } from "@/src/app/home/hooks/use-list-all-tickets"
import type { Ticket } from "@/src/types/ticket/ticket"
import { TicketCard } from "../../cards/tickets"
import { Columns } from "../../kanbam/column"
import { CreateTicketModal } from "../../modal/create-task"
import { SortableCard } from "../../sortable-card"
import { useKanban } from "./use-kanban"

export const HomeTable = () => {
	const queryClient = useQueryClient()
	const { data: tickets } = useListAllTickets()
	const { columns, activeTicket, handlers, columnActions } = useKanban(tickets)

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 10,
			},
		}),
	)

	const [isOpen, setIsOpen] = useState(false)
	const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

	const handleModal = () => {
		setIsOpen(false)
		setSelectedTicket(null)
		queryClient.invalidateQueries({ queryKey: ["list-all-tickets"] })
	}

	const openCreateModal = () => {
		setSelectedTicket(null)
		setIsOpen(true)
	}

	const openEditModal = (ticket: Ticket) => {
		setSelectedTicket(ticket)
		setIsOpen(true)
	}

	return (
		<div className="w-full px-16">
			<div className="flex gap-4 mb-4">
				<button
					className="cursor-pointer border border-gray-400 rounded-md bg-blue-200 px-4 py-2"
					onClick={openCreateModal}
					type="button"
				>
					Criar Tarefa
				</button>
				<button
					className="cursor-pointer border bg-green-200 px-4 py-2 rounded"
					onClick={columnActions.createColumn}
					type="button"
				>
					Criar Coluna
				</button>
			</div>

			{tickets && (
				<DndContext
					sensors={sensors}
					onDragStart={handlers.handleDragStart}
					onDragEnd={handlers.handleDragEnd}
					onDragOver={handlers.handleDragOver}
					onDragCancel={handlers.handleDragCancel}
					collisionDetection={rectIntersection}
				>
					<div className="flex gap-4 items-start w-full overflow-x-auto py-4 justify-center">
						<SortableContext items={columns.map((c) => c.id)}>
							{columns.map((col) => (
								<Columns
									key={col.id}
									columnId={col.id}
									title={col.title}
									renameColumn={columnActions.renameColumn}
									deleteColumn={columnActions.deleteColumn}
								>
									<SortableContext
										items={col.ticketIds}
										strategy={verticalListSortingStrategy}
									>
										{col.ticketIds.map((ticketId) => {
											const ticket = tickets.find((t) => t.id === ticketId)
											if (!ticket) return null
											return (
												<SortableCard
													key={ticket?.id}
													ticket={ticket}
													columnId={col.id}
													onClick={openEditModal}
												/>
											)
										})}
									</SortableContext>
								</Columns>
							))}
						</SortableContext>
					</div>
					<DragOverlay>
						{activeTicket ? (
							<TicketCard ticket={activeTicket} onClick={() => {}} />
						) : null}
					</DragOverlay>
				</DndContext>
			)}

			<CreateTicketModal
				ticket={selectedTicket ?? undefined}
				isOpen={isOpen}
				onClose={handleModal}
			/>
		</div>
	)
}
