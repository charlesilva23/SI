"use client"

import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useListAllTickets } from "@/src/app/home/hooks/use-list-all-tickets"
import type { Ticket } from "@/src/types/ticket/ticket"
// import { EditStatus } from "../../edit-status-ticket"
// import { useEditTicket } from "../../edit-status-ticket/hooks/use-edit-ticket"
import { CreateTicketModal } from "../../modal/create-task"

export const HomeTable = () => {
	const queryClient = useQueryClient()
	const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)
	const { data } = useListAllTickets()
	const [isOpen, setIsOpen] = useState(false)

	// const { actions: { editTicket } } = useEditTicket()

	// const {
	// 	actions: { editTicket },
	// } = useEditTicket()

	// const onEdit = async (data: Ticket) => {
	// 	await editTicket(data)
	// 	setOpen(false)
	// }]

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
		<div>
			<button
				className="cursor-pointer border border-gray-400 rounded-md bg-blue-200 w-full p-2"
				onClick={openCreateModal}
				type="button"
			>
				Criar Tarefa
			</button>

			<table className="w-[1300px] bg-white shadow rounded-lg overflow-hidden">
				<thead className="bg-gray-100 text-left">
					<tr>
						<th className="px-4 py-2">ID</th>
						<th className="px-4 py-2">Título</th>
						<th className="px-4 py-2">Descrição</th>
						<th className="px-4 py-2">Status</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((ticket) => (
						<tr
							key={ticket.id}
							className="border-t cursor-pointer hover:bg-gray-100"
							onClick={() => {
								openEditModal(ticket)
							}}
						>
							<td className="px-4 py-2">{ticket?.id}</td>
							<td className="px-4 py-2">{ticket?.title}</td>
							<td className="px-4 py-2">{ticket?.description}</td>
						</tr>
					))}
				</tbody>
			</table>

			<CreateTicketModal
				ticket={selectedTicket ?? undefined}
				isOpen={isOpen}
				onClose={handleModal}
			/>
		</div>
	)
}
