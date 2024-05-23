type Props = {
    title: string;
    value: number
}

export const ResumeItem = ({title, value}: Props)=>{
    return (
        <div className="flex-1">
            <div className="text-center font-bold text-gray-700 mb-1">{title}</div>
            <div className="text-center font-bold">R$ {value}</div>
        </div>
    )
}