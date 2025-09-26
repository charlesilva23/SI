
interface ButtonProps {
  labelButton?: string
  setOpen?: boolean
  onClick?: () => void
}

export default function Button({ labelButton, onClick }: ButtonProps) {
  return (
    <button className="cursor-pointer border border-gray-400 rounded-md bg-blue-200 w-full p-2" onClick={onClick}>{labelButton}</button>
  )
}