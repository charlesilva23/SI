import { cn } from "@/lib/utils"


interface InputProps {
  placeholder?: string
  inputClassName?: string
}

export default function Input({ placeholder, inputClassName }: InputProps) {
  return (
    <input type="text" className={cn("w-full border border-gray-400 rounded-md p-2 px-4", inputClassName)} placeholder={placeholder} />
  )
} 