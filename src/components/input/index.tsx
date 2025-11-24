import { cn } from "@/src/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string
	inputClassName?: string
}

export const Input = ({ placeholder, inputClassName, ...rest }: InputProps) => {
	return (
		<input
			type="text"
			className={cn(
				"w-full border border-gray-400 rounded-md p-2 px-4",
				inputClassName,
			)}
			{...rest}
			placeholder={placeholder}
		/>
	)
}
