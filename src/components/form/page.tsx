"use client"

import Button from "../button/page"
import Input from "../input/page"

export default function Form() {
	return (
		<form>
			<div className="w-186 flex flex-col justify-center items-center gap-4">
				<div className="w-1/2">
					<Input placeholder="E-mail" />
				</div>
				<div className="w-1/2">
					<Input placeholder="Senha" />
				</div>
				<div className="w-1/4">
					<Button labelButton="Entrar" />
				</div>
			</div>
		</form>
	);
}  
