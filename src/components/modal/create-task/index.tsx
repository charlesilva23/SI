import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useTicketStatus } from "@/src/app/home/hooks/use-ticket-status"
import { useCreateTicket } from "@/src/components/modal/create-task/hook/use-create-ticket"
import type { createTicketData } from "@/src/services/requests/ticket/create"
import Button from "../../button/page"
import Input from "../../input/page"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../ui/select"
import Modal from "../page"

interface CreateTicketModalProps {
	labelButton: string
	setOpen?: boolean
}

export const CreateTicketModal = ({ labelButton }: CreateTicketModalProps) => {
	const [isOpen, setOpen] = useState(false)
	const {
		actions: { createTicket },
	} = useCreateTicket()
	const { data: status = [] } = useTicketStatus()
	const { register, reset, handleSubmit, control } = useForm<createTicketData>()

	const onSubmit = async (data: createTicketData) => {
		console.log("submit chamado com:", data)
		await createTicket(data)
		reset()
		setOpen(false)
	}

	return (
		<>
			<button
				className="cursor-pointer border border-gray-400 rounded-md bg-blue-200 w-full p-2"
				onClick={() => setOpen(true)}
				type="button"
			>
				{labelButton}
			</button>
			<Modal withFooter={true} isOpen={!!isOpen} setOpen={setOpen}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input placeholder="Título" {...register("title")} />
					<Input placeholder="Descrição" {...register("description")} />
					<Input placeholder="Autor" {...register("author")} />
					<Controller
						name="status"
						control={control}
						render={({ field }) => (
							<Select onValueChange={field.onChange} value={field.value ?? ""}>
								<SelectTrigger className="w-full border border-black">
									<SelectValue placeholder="Selecione um status" />
								</SelectTrigger>
								<SelectContent>
									{status.map((status) => (
										<SelectItem key={status.id} value={status.id}>
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
		</>
	)
}
