import React from 'react'
import './Table.css'
import { IForm } from '../../App'
interface IProps2 {
    handlerDelete: (date: string) => void
    form: IForm[]
}


export const Table: React.FC<IProps2> = (props) => {
    console.log(props.form)
    const [{date, distance}] = props.form

    
  return (
    <table>
        <thead> 
        <tr>
            <th>Дата(ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
        </tr>
        </thead>
        <tbody>
        {props.form.map(() => (
            <tr key={date}>
                <td>{date}</td>
                <td>{distance}</td>
                <td>
                    <button className='delete' onClick={() => props.handlerDelete(date)}>X</button>
                    <button className='edit'>U</button>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
  )
}
