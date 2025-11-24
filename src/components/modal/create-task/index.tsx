import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { useTicketStatus } from "@/src/app/home/hooks/use-ticket-status"
import { useCreateTicket } from "@/src/components/modal/create-task/hook/use-create-ticket"
import type { createTicketData } from "@/src/services/requests/ticket/create"
import type { Ticket } from "@/src/types/ticket/ticket"
import Button from "../../button"
import { Input } from "../../input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../ui/select"
import { Modal } from ".."

interface CreateTicketModalProps {
	ticket?: Ticket
	onClose: () => void
	isOpen: boolean
}

export const CreateTicketModal = ({
	ticket,
	onClose,
	isOpen,
}: CreateTicketModalProps) => {
	const {
		actions: { createTicket },
	} = useCreateTicket()
	const { data: status = [] } = useTicketStatus()
	const { register, reset, handleSubmit, control } = useForm<createTicketData>({
		defaultValues: {
			title: ticket?.title ?? "",
			description: ticket?.description ?? "",
			author: ticket?.author ?? "",
			statusId: ticket?.statusId ?? null,
		},
	})

	useEffect(() => {
		if (ticket) {
			reset({
				title: ticket.title,
				description: ticket.description,
				author: ticket.author,
				statusId: ticket.statusId,
			})
		}
	}, [ticket, reset])

	const onSubmit = async (data: createTicketData) => {
		console.log("submit chamado com:", data)
		await createTicket(data)
		reset()
		onClose()
	}

	return (
		<Modal withFooter={true} isOpen={isOpen} setOpen={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input placeholder="Título" {...register("title")} />
				<Input placeholder="Descrição" {...register("description")} />
				<Input placeholder="Autor" {...register("author")} />
				<Controller
					name="statusId"
					control={control}
					render={({ field }) => (
						<Select
							value={field.value !== null ? String(field.value) : ""}
							onValueChange={(value) =>
								field.onChange(value ? Number(value) : null)
							}
						>
							<SelectTrigger className="w-full border border-black">
								<SelectValue placeholder="Selecione um status" />
							</SelectTrigger>
							<SelectContent>
								{status.map((status) => (
									<SelectItem key={status.id} value={String(status.id)}>
										{status.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>

				<Button labelButton="Salvar" onClick={handleSubmit(onSubmit)} />
			</form>
		</Modal>
	)
}
