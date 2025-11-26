import { api } from "@/src/lib/api-manager"
import type { Ticket } from "@/src/types/ticket/ticket"

export const editTicket = async (id: string, data: Partial<Ticket>) => {
	const response = await api.patch(`/tickets/${id}`, data)
	return response.data
}
