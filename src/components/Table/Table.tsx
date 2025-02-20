import React from 'react'
import './Table.css'
import { IForms } from '../../App'
interface IProps2 {
    handlerDelete: (date: string) => void
    form: IForms[]
}


export const Table: React.FC<IProps2> = (props) => {
    
    if (props.form.length === 0) {
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
                <tr>
                    <td>Нет данных</td>
                    <td>Нет данных</td>
                    <td>Нет данных</td>
                </tr>
                </tbody>
            </table>
        )
    }else {
   
    let count = 0
   
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
         
        {props.form.map((item) => (
            <tr key={count++}>
                <td>{item.date}</td>
                <td>{item.distance}</td>
                <td>
                    <button className='delete' onClick={() => props.handlerDelete(item.date)}>X</button>
                    <button className='edit'>U</button>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
  )
    }
}
