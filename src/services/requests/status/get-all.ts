import { api } from "@/src/lib/api-manager"

export type TicketStatus = {
	id: number
	code: string
	name: string
}

export const getAllStatus = async (): Promise<TicketStatus[]> => {
	const response = await api.get<TicketStatus[]>("/tickets/status")
	return response.data
}
