import { formatCurrentMonth } from "../helpers/dateFilter";
import { ResumeItem } from "./ResumeItem";

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string)=> void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props)=>{

    const handlePrev = ()=>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1); 
        currentDate.setMonth(currentDate.getMonth() - 1); //Um subtrai um mês
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNext = ()=>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1); 
        currentDate.setMonth(currentDate.getMonth() + 1); //Outro adiciona um mês
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }


    return (
        <div className="bg-slate-100 p-5 -mt-10 shadow-sm shadow-gray-400 rounded-xl 
                        flex items-center"> {/*Container*/ }
        
        <div className="flex flex-1 items-center"> {/* Área do Mês */}
            <div className="w-10 text-center cursor-pointer text-2xl" onClick={handlePrev}>⬅️</div>
            <div className="flex-1 text-center text-lg font-semibold">{formatCurrentMonth(currentMonth)}</div>
            <div className="w-10 text-center cursor-pointer text-2xl" onClick={handleNext}>➡️</div>
        </div>

        <div className="flex flex-2"> {/* Área do Resumo */}
            <ResumeItem title="Receitas" value={income}/>
            <ResumeItem title="Despesas" value={expense}/>
            <ResumeItem title="Balanço" value={income - expense}/> 
        </div>

        </div>
    )
}