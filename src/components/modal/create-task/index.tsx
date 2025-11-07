import { useState } from "react";
import Input from "../../input/page";

import Modal from "../page";
import Button from "../../button/page";

interface CreateTaskModalProps {
  labelButton: string
  setOpen?: boolean
}

export default function CreateTaskModal({ labelButton }: CreateTaskModalProps) {
  const [isOpen, setOpen] = useState(false)
  return (
    <>


      <button
        className="cursor-pointer border border-gray-400 rounded-md bg-blue-200 w-full p-2"
        onClick={() => setOpen(true)}
      >
        {labelButton}
      </button>
      <Modal withFooter={true} isOpen={!!isOpen} setOpen={setOpen}>
        <Input placeholder="Título" />
        <Input placeholder="Descrição" />
        <Input placeholder="Autor" />
        <Input placeholder="Status" />

        <Button labelButton="Salvar" />
      </Modal>

    </>
  )
}