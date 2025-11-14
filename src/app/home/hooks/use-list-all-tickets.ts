import { useQuery } from "@tanstack/react-query"
import { listAllTickets } from "@/src/services/requests/ticket/list-all"
import type { Ticket } from "@/src/types/ticket/ticket"

export const useListAllTickets = () => {
	return useQuery<Ticket[]>({
		queryKey: ["list-all-tickets"],
		queryFn: async () => {
			const data = await listAllTickets()
			return data
		},
	})
}
