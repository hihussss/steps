import React, { useState } from 'react';

import './App.css';
import { Training }  from "./components/Training/Training";
import { Table }  from "./components/Table/Table";


export interface IForms {
  id: string
  date: string,
  distance: number,
  
}

export interface IForm {
  forms: IForms,
  bookTraining: IForms[]
}

function App() {
  const [form, setForm] = useState<IForm>({
    forms : {
      id: '',
      date: '',
      distance: 0
    },
    bookTraining: []

  });
  

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target

    setForm((preForm) => ({...preForm, forms: {...preForm.forms, [name]: value }}))
  }

  const handlerSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form.forms.date)
    console.log(form.forms)
    setForm((preForm) => ({...preForm, forms: {...preForm.forms, id: form.forms.date }}))
    if (form.bookTraining.find((item) => item.date === form.forms.date)) {
      form.bookTraining.forEach((item) => {
        if (item.date === form.forms.date) {
          item.distance = Number(item.distance) + Number(form.forms.distance)
        }
      })   
    }else{
      setForm((preForm) => ({...preForm, bookTraining: [form.forms, ...preForm.bookTraining]}))
    }    
  }

 

  const handlerDelete = (date: string) => {
    setForm((preForm) => ({...preForm, bookTraining: [...preForm.bookTraining.filter((item) => item.date !== date)]}))
    
  }



  return (
    <div>
    <Training handlerChange={handlerChange} handlerSubmit={handlerSubmit} form={form.forms} />
    <Table handlerDelete={handlerDelete} form={form.bookTraining} />
    </div>
      
    
  );
}

export default App;
