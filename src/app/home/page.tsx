"use client"
import { CreateTicketModal } from "@/src/components/modal/create-task"
import HomeTable from "@/src/components/tables/home-table/home-table"

export default function Home() {
	return (
		<div>
			<div className="flex justify-end">
				<div className="w-72 py-10">
					<CreateTicketModal labelButton="Nova tarefa" setOpen={true} />
				</div>
			</div>
			<div>
				<div className="flex justify-center py-10">
					<HomeTable />
				</div>
			</div>
		</div>
	)
}
