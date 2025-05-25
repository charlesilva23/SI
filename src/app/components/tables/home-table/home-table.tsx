'use client'

type Chamado = {
    id: string,
    titulo: string,
    descricao: string,
    status: string,
    className?: string
}

const chamados: Chamado[] = [
    { id: '1', titulo: 'Erro no login', descricao: 'aconteceu algo', status: 'Aberto' },
    { id: '2', titulo: 'Sistema lento', descricao: 'aconteceu algo', status: 'Em andamento' },
    { id: '3', titulo: 'Solicitar acesso', descricao: 'aconteceu algo', status: 'Concluído' },
]


export default function HomeTable() {

    return (
        <div>
            <table className="w-[1300px] bg-white shadow rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Título</th>
                        <th className="px-4 py-2">Descrição</th>
                        <th className="px-4 py-2">Status</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}