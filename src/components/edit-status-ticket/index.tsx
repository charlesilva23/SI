import { PencilIcon } from "lucide-react"
import { useTicketStatus } from "@/src/app/home/hooks/use-ticket-status"
import type { Ticket } from "@/src/types/ticket/ticket"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select"

export const EditStatus = ({ ticket }: { ticket: Ticket }) => {
	const { data: statusList = [] } = useTicketStatus()

	function handleStatusChange(newStatus: string) {
		console.log(ticket.statusId)
		console.log(newStatus)
	}

	return (
		<div>
			<Select
				value={ticket.statusId !== null ? String(ticket.statusId) : ""}
				onValueChange={handleStatusChange}
			>
				<SelectTrigger>
					<SelectValue>
						<PencilIcon />
					</SelectValue>
				</SelectTrigger>
				<SelectContent className="bg-gray-200 shadow-lg z-50">
					{statusList?.map((status) => (
						<SelectItem key={status.code} value={String(status.id)}>
							{status.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
