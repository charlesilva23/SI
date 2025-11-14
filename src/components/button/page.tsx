import { useState } from "react"
import Modal from "../modal/page"
import { Show } from "../show/page"

interface ButtonProps {
	labelButton?: string
	setOpen?: boolean
	onClick?: () => void
	withModal?: boolean
}

export default function Button({
	labelButton,
	onClick,
	withModal = false,
}: ButtonProps) {
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<button
				className="cursor-pointer border border-gray-400 rounded-md bg-blue-200 w-full p-2"
				onClick={onClick}
				type="button"
			>
				{labelButton}
			</button>
			<Show when={withModal}>
				<Modal withFooter={true} isOpen={!!isOpen} setOpen={setOpen} />
			</Show>
		</>
	)
}
