"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTicket } from "@/src/services/requests/ticket/create"

export const useCreateTicket = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: createTicket,
		onSuccess: (data) => {
			console.log(data)
			queryClient.invalidateQueries({ queryKey: ["list-all-tickets"] })
		},
		onError: (error) => {
			console.log(error)
		},
	})

	return {
		actions: {
			createTicket: mutation.mutate,
		},
	}
}
