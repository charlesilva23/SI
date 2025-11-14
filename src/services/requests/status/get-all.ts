import { api } from "@/src/lib/api-manager"
import type { Ticket } from "@/src/types/ticket/ticket"

export const getAllStatus = async (): Promise<Ticket[]> => {
	const response = await api.get<Ticket[]>("/api/v1/tickets/status")
	return response.data
}
