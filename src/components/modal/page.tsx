"use client"

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import type { PropsWithChildren } from "react"
import { Show } from "../show/page"

interface ModalProps extends PropsWithChildren {
	isOpen: boolean
	setOpen: (value: boolean) => void
	title?: string
	trigger?: { className?: string; label?: string }
	withFooter?: boolean
}

export default function Modal({
	trigger,
	title,
	children,
	isOpen,
	setOpen,
	withFooter,
}: ModalProps) {
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
	);
}
