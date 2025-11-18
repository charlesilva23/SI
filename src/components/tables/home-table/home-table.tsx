"use client"

// import { SelectContent, SelectValue } from "@radix-ui/react-select"
// import { PencilIcon } from "lucide-react"
import { useListAllTickets } from "@/src/app/home/hooks/use-list-all-tickets"
// import { useTicketStatus } from "@/src/app/home/hooks/use-ticket-status"
// import { Select, SelectItem, SelectTrigger } from "@/src/components/ui/select"

export default function HomeTable() {
	const { data } = useListAllTickets()
	// const { data: statusList = [] } = useTicketStatus()

	// function handleStatusChange(id: string, newStatus: string) {
	// 	setChamados((prevChamados) =>
	// 		prevChamados.map((chamado) =>
	// 			chamado.id === id ? { ...chamado, status: newStatus } : chamado,
	// 		),
	// 	);
	// }

	return (
		<div>
			<table className="w-[1300px] bg-white shadow rounded-lg overflow-hidden">
				<thead className="bg-gray-100 text-left">
					<tr>
						<th className="px-4 py-2">ID</th>
						<th className="px-4 py-2">Título</th>
						<th className="px-4 py-2">Descrição</th>
						<th className="px-4 py-2">Status</th>
						<th className="px-4 py-2">Alterar status</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((ticket) => (
						<tr key={ticket.id} className="border-t">
							<td className="px-4 py-2">{ticket?.id}</td>
							<td className="px-4 py-2">{ticket?.title}</td>
							<td className="px-4 py-2">{ticket?.description}</td>
							<td className="px-4 py-2">
								<span
									className={`px-2 py-1 rounded text-sm font-medium ${
										ticket.statusId === 2
											? "bg-yellow-100 text-yellow-800"
											: ticket.statusId === 1
												? "bg-blue-100 text-blue-800"
												: "bg-green-100 text-green-800"
									}`}
								>
									{ticket.statusName}
								</span>
							</td>
							{/* <td>
								<Select
									value={ticket.statusCode}
									onValueChange={(newStatus) =>
										handleStatusChange(ticket.id, newStatus)
									}
								>
									<SelectTrigger>
										<SelectValue>
											<PencilIcon />
										</SelectValue>
									</SelectTrigger>
									<SelectContent className="bg-gray-200 shadow-lg z-50">
										{statusList?.map(() => (
											<SelectItem key={ticket.statusCode} value={ticket.statusCode}>
												{ticket.statusName}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</td> */}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
