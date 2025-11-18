import { api } from "@/src/lib/api-manager"

export type TicketStatus = {
	id: number
	code: string
	name: string
}

export const getAllStatus = async (): Promise<TicketStatus[]> => {
	const response = await api.get<TicketStatus[]>("/api/v1/tickets/status")
	return response.data
}
