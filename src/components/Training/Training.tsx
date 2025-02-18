import React from 'react'
import './Training.css'
import { IForm } from '../../App'

interface IProps {
    handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handlerSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    form: IForm[]
}

export  const Training: React.FC<IProps> = (props) => {

    console.log(props.form)
    const {handlerChange, handlerSubmit} = props
    const [{date, distance}] = props?.form
  return (
   <form className='form' onSubmit={handlerSubmit}>
    <div className='inputBox'>
    <label htmlFor='date'>Дата(ДД.ММ.ГГ)</label>
    <input 
        id = 'date' 
        type = 'date'
        name = 'date'
        value = {date}
        onChange = {handlerChange}    
    />
    </div>
    <div className='inputBox'>
    <label htmlFor='distance'>Пройдено км</label>
    <input 
        id = 'distance' 
        type = 'number'
        name = 'distance'
        value = {distance}
        onChange = {handlerChange}
        />
    </div>
    <div className='inputBox'>
    <button type='submit'>OK</button>
    </div>
   </form>
  )
}
