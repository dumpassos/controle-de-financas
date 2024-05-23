import { categories } from "../data/categories"
import { formatDate } from "../helpers/dateFilter"
import { Item } from "../types/Item"

type Props = {
    item: Item
}

export const TableItem = ({item}: Props)=>{


    return (
        <tr>
            <td className="py-3 px-0 font-medium">{formatDate(item.date)}</td>
            <td className="py-3 px-0">
                <div className={`inline-block py-1 px-2 rounded-md text-white
                    ${categories[item.category].color === 'brown' ? 'bg-amber-900' : 'bg-slate-400'
                    && categories[item.category].color === 'blue' ? 'bg-blue-600' : 'bg-slate-400'
                    && categories[item.category].color === 'green' ? 'bg-green-600' : 'bg-slate-400'  }
                
                `}>
                    {categories[item.category].title}
                </div>
            </td>
            <td className="py-3 px-0 font-medium">{item.title}</td>
            <td className="py-3 px-0">
                <div className={`${categories[item.category].expense ? 'text-red-600 font-medium' : 
                'text-green-600 font-medium'}
                `}>
                R$ {item.value}
                </div>
                 </td>
        </tr>
    )
}