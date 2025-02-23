import React , { SetStateAction, useState} from 'react'
import './Training.css'
import { IForms,IForm } from '../../App'

interface IProps {
    setForm: React.Dispatch<SetStateAction<IForm>>
    form: IForms[]
}

export  const Training: React.FC<IProps> = ({setForm, form}) => {
    
    const [state , setState] = useState<IForms>({
        id: '',
        date: '',
        distance: 0
    })
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setState((item) => ({...item, [name]: value }))
      }
    
    const handlerSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        setState((item) => ({...item, id: state.date}))
        
        
        if (form.find((item) => item.date === state.date)) {
            form.forEach((item) => {
              if (item.date === state.date) {
                item.distance = Number(item.distance) + Number(state.distance)
                setForm((preForm) => ({...preForm, bookTraining: [...preForm.bookTraining]}))
              }
            })   
          }else{
            setForm((preForm) => ({...preForm, bookTraining: [state, ...preForm.bookTraining]}))
          }

         
      }

    return (
   <form className='form' onSubmit={handlerSubmit}>
    <div className='inputBox'>
    <label htmlFor='date'>Дата(ДД.ММ.ГГ)</label>
    <input 
        id = 'date' 
        type = 'date'
        name = 'date'
        value = {state.date}
        onChange = {handlerChange}    
    />
    </div>
    <div className='inputBox'>
    <label htmlFor='distance'>Пройдено км</label>
    <input 
        id = 'distance' 
        type = 'number'
        name = 'distance'
        value = {state.distance}
        onChange = {handlerChange}
        />
    </div>
    <div className='inputBox'>
    <button type='submit'>OK</button>
    </div>
   </form>
  )
}
