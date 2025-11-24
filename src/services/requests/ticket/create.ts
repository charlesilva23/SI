import { api } from "@/src/lib/api-manager"
import type { Ticket } from "@/src/types/ticket/ticket"

export type createTicketData = Omit<Ticket, "id" | "createdAt" | "updatedAt">

export const createTicket = async (data: createTicketData) => {
	const response = await api.post("/tickets", data)
	console.log(data)
	return response.data
}
