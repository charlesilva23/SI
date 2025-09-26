'use client'

import Button from "@/src/components/button/page";
import Modal from "@/src/components/modal/page";
import HomeTable from "@/src/components/tables/home-table/home-table";
import { useState } from "react";



export default function Home() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <div>
        <Button labelButton="Nova tarefa" setOpen={true} onClick={() => setOpen(true)} />
        <Modal withFooter={true} isOpen={!!isOpen} setOpen={setOpen} />
      </div>
      <HomeTable />
    </div>
  )
}