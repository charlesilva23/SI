import { useMutation } from "@tanstack/react-query"
import { editTicket } from "@/src/services/requests/ticket/edit"
import type { Ticket } from "@/src/types/ticket/ticket"

export const useEditTicket = () => {
	const mutation = useMutation<Ticket, Error, Ticket>({
		mutationFn: editTicket,
		onSuccess: (data) => {
			console.log("editado:", data)
		},
		onError: (error) => {
			console.log("erro edit:", error)
		},
	})

	return {
		actions: {
			editTicket: mutation.mutate,
		},
	}
}
