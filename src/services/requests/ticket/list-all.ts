import { api } from "@/src/lib/api-manager"
import type { Ticket } from "@/src/types/ticket/ticket"

export const listAllTickets = async (): Promise<Ticket[]> => {
	const response = await api.get("api/v1/tickets")
	return response.data
}
