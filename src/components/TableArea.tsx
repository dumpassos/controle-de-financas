import { Item } from "../types/Item"
import { TableItem } from "./TableItem"

type Props = {
    list: Item[]
}

export const TableArea = ({list}: Props)=>{

    return (
        <div className="w-full bg-slate-100 p-5 mt-5 shadow-sm shadow-gray-400 rounded-xl ">
            <table className="w-full ">
                <thead>
                <tr>
                    <th className="py-3 px-0 text-left w-24">Data</th>
                    <th className="py-3 px-0 text-left w-32">Categoria</th>
                    <th className="py-3 px-0 text-left">Título</th>
                    <th className="py-3 px-0 text-left w-36">Valor</th>
                </tr>
                </thead>
                <tbody>
                    {list.map((item, index)=>(
                        <TableItem key={index} item={item}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}