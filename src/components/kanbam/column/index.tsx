import { useDroppable } from "@dnd-kit/core"
import { useState } from "react"

interface ColumnsProps {
	columnId: string
	title: string
	children: React.ReactNode
	renameColumn: (columnId: string, newTitle: string) => void
	deleteColumn: (columnId: string) => void
}

export function Columns({
	columnId,
	title,
	children,
	renameColumn,
	deleteColumn,
}: ColumnsProps) {
	const { setNodeRef } = useDroppable({
		id: columnId,
		data: { type: "column", columnId, accepts: "card" },
	})

	const [isEditing, setIsEditing] = useState(false)
	const [tempValue, setTempValue] = useState(title)

	function finishEdit() {
		renameColumn(columnId, tempValue)
		setIsEditing(false)
	}

	return (
		<div
			id={columnId}
			ref={setNodeRef}
			data-column-id={columnId}
			className="w-80 bg-gray-100 rounded-xl p-4 shadow flex flex-col gap-4 relative"
		>
			<div className="flex justify-between items-center">
				{isEditing ? (
					<input
						value={tempValue}
						onChange={(e) => setTempValue(e.target.value)}
						onBlur={finishEdit}
						onKeyDown={(e) => e.key === "Enter" && finishEdit()}
						className="font-semibold bg-white px-2 py-1 rounded"
					/>
				) : (
					<h2
						className="font-semibold cursor-pointer"
						onClick={() => setIsEditing(true)}
						onKeyDown={(e) => e.key === "Enter" && setIsEditing(true)}
					>
						{title}
					</h2>
				)}

				<button type="button" onClick={() => deleteColumn(columnId)}>
					Excluir
				</button>
			</div>

			<div className="min-h-[700px] rounded-md border-2 border-dashed border-gray-300 p-2 flex flex-col gap-2">
				{children}
			</div>
		</div>
	)
}