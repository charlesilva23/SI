"use client"

import type { PropsWithChildren } from "react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/src/components/ui/dialog"
import { Show } from "../show"
import { Button } from "../ui/button"

interface ModalProps extends PropsWithChildren {
	isOpen: boolean
	setOpen: (value: boolean) => void
	title?: string
	trigger?: { className?: string; label?: string }
	withFooter?: boolean
}

export const Modal = ({
	trigger,
	title,
	children,
	isOpen,
	setOpen,
	withFooter,
}: ModalProps) => {
	return (
		<Dialog open={isOpen} onOpenChange={setOpen}>
			{trigger && (
				<DialogTrigger asChild>
					<Button>{trigger?.label}</Button>
				</DialogTrigger>
			)}
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				<DialogDescription>{children}</DialogDescription>
				<Show when={withFooter}>
					<DialogFooter></DialogFooter>
				</Show>
			</DialogContent>
		</Dialog>
	)
}
