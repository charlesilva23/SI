'use client'

import { Select, SelectItem, SelectTrigger } from "@/components/ui/select"
import { SelectContent, SelectValue } from "@radix-ui/react-select"
import { PencilIcon } from "lucide-react"
import { useState } from "react"

type Chamado = {
    id: string,
    titulo: string,
    descricao: string,
    status: string,
    statusOption?: string[],
    className?: string
}

const chamadosMock: Chamado[] = [
    { id: '1', titulo: 'Erro no login', descricao: 'aconteceu algo', status: "Aberto", statusOption: ['Aberto', 'Em andamento', 'Concluído'] },
    { id: '2', titulo: 'Sistema lento', descricao: 'aconteceu algo', status: "Em andamento", statusOption: ['Aberto', 'Em andamento', 'Concluído'] },
    { id: '3', titulo: 'Solicitar acesso', descricao: 'aconteceu algo', status: "Concluído", statusOption: ['Aberto', 'Em andamento', 'Concluído'] },
]


export default function HomeTable() {

    const [chamados, setChamados] = useState(chamadosMock)

    function handleStatusChange(id: string, newStatus: string) {
        setChamados((prevChamados) =>
            prevChamados.map((chamado) =>
                chamado.id === id ? { ...chamado, status: newStatus } : chamado
            )
        );
    }

    return (
        <div>
            <table className="w-[1300px] bg-white shadow rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Título</th>
                        <th className="px-4 py-2">Descrição</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Alterar status</th>
                    </tr>
                </thead>
                <tbody>
                    {chamados.map((chamado) => (
                        <tr key={chamado.id} className="border-t">
                            <td className="px-4 py-2">{chamado.id}</td>
                            <td className="px-4 py-2">{chamado.titulo}</td>
                            <td className="px-4 py-2">{chamado.descricao}</td>
                            <td className="px-4 py-2">
                                <span
                                    className={`px-2 py-1 rounded text-sm font-medium ${chamado.status === 'Aberto'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : chamado.status === 'Em andamento'
                                            ? 'bg-blue-100 text-blue-800'
                                            : 'bg-green-100 text-green-800'
                                        }`}
                                >
                                    {chamado.status}
                                </span>
                            </td>
                            <td>
                                <Select value={chamado.status} onValueChange={(newStatus) => handleStatusChange(chamado.id, newStatus)}>
                                    <SelectTrigger>
                                        <SelectValue>
                                            <PencilIcon />
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-200 shadow-lg z-50">
                                        {chamado.statusOption?.map((status) => (
                                            <SelectItem key={status} value={status}>
                                                {status}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}