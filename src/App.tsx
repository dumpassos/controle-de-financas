import { useEffect, useState } from "react"
import { items } from "./data/items"
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { Item } from "./types/Item";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { categories } from "./data/categories";
import { InputArea } from "./components/InputArea";

function App() {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth ));
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
        if(categories[filteredList[i].category].expense){ //se for despesa
          expenseCount += filteredList[i].value;
        } else { //se não é despesa então é receita
          incomeCount += filteredList[i].value;
        }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string)=>{
    setCurrentMonth(newMonth)
  };

  const handleAddItem = (item: Item)=>{
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }
  
  return (
    <div> {/*Container*/ }
      <div className="bg-sky-700 h-40 text-center"> {/*Header*/ }
      <h1 className="font-bold text-4xl text-gray-100 m-0 p-0 pt-8">Finanças Pessoais</h1>
      </div>
      <div className="m-auto max-w-5xl mb-14"> {/*Body*/ }
      
        <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        /> {/*Area de Informações*/ }

        <InputArea onAdd={handleAddItem}/>  {/*Area de Inserção*/ }

        <TableArea list={filteredList}/>  {/*Tabela de Itens*/ }

      </div>
    </div>
  )
}

export default App
