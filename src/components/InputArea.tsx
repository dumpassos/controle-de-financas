import { useState } from "react";
import { Item } from "../types/Item"
import { categories } from "../data/categories";

type Props = {
    onAdd: (item: Item)=> void
}

export const InputArea = ({onAdd}:Props)=>{
    const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if(titleField === '') {
      errors.push('Título vazio!');
    }
    if(valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

    return(
        <div className="bg-slate-100 p-5 mt-5 shadow-sm shadow-gray-400 rounded-xl 
        flex items-center">
            <label className="flex-1 m-3">
                <div className="font-bold">Data</div>
                <input className="w-full h-8 py-0 px-1 border border-blue-400 rounded-md" 
                type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
            </label>

            <label className="flex-1 m-3" >
            <div className="font-bold">Categoria</div>
            <select  className="w-full h-8 py-0 px-1 border border-blue-400 rounded-md"
            value={categoryField} onChange={e => setCategoryField(e.target.value)} >
                <>
                <option></option>
                {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
                </>
            </select>
            </label>

            <label className="flex-1 m-3">
                <div className="font-bold">Título</div>
                <input className="w-full h-8 py-0 px-1 border border-blue-400 rounded-md"
                type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
            </label>

            <label className="flex-1 m-3">
                <div className="font-bold">Valor</div>
                <input className="w-full h-8 py-0 px-1 border border-blue-400 rounded-md"
                type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
            </label>

            <label className="flex-1 m-3">
                <div className="font-bold">&nbsp;</div>
                <button className="w-full h-8 py-0 px-1 border border-blue-400 rounded-md font-semibold
                                        text-black cursor-pointer hover:bg-blue-400 hover:text-white"
                
                onClick={handleAddEvent}>Adicionar</button>
            </label>


        </div>
    )
}