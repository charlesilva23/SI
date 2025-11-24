import { api } from "@/src/lib/api-manager"
import type { Ticket } from "@/src/types/ticket/ticket"

export const editTicket = async (ticket: Ticket) => {
	const { id, ...payload } = ticket
	const response = await api.put(`/tickets/${id}`, { payload })
	return response.data
}
