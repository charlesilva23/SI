"use client"

import { useQuery } from "@tanstack/react-query"
import { getAllStatus } from "@/src/services/requests/status/get-all"

export const useTicketStatus = () => {
	return useQuery({
		queryKey: ["ticket-status"],
		queryFn: async () => {
			const data = await getAllStatus()
			console.log("status:", data)
			return data
		},
		staleTime: 1000 * 60 * 10,
	})
}
