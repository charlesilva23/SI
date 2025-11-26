import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editTicket } from "@/src/services/requests/ticket/edit"
import type { Ticket } from "@/src/types/ticket/ticket"

export const useEditTicket = () => {
	const queryClient = useQueryClient()

	const mutation = useMutation<
		Ticket,
		Error,
		{ id: string; data: Partial<Ticket> }
	>({
		mutationFn: ({ id, data }) => editTicket(id, data),

		onSuccess: () => {
			queryClient.invalidateQueries()
		},
	})

	return {
		actions: {
			editTicket: (id: string, data: Partial<Ticket>) =>
				mutation.mutate({ id, data }),
		},
	}
}
