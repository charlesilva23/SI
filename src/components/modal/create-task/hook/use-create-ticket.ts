"use client"

import { useMutation } from "@tanstack/react-query"
import { createTicket } from "@/src/services/requests/ticket/create"

export const useCreateTicket = () => {
	const mutation = useMutation({
		mutationFn: createTicket,
		onSuccess: (data) => {
			console.log(data)
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
