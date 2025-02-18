import React, { useState } from 'react';

import './App.css';
import { Training }  from "./components/Training/Training";
import { Table }  from "./components/Table/Table";

export interface IForm {
  date: string,
  distance: number
}

function App() {
  const [form, setForm] = useState<IForm[]>([{
    date: '2022-12-12',
    distance: 0
  }]);
  

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target

    setForm((preForm) => ({...preForm, [name]: value}))
  }

  const handlerSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(form)
  }

  const handlerDelete = (date: string) => {
    setForm((preForm) => preForm.filter((item) => item.date !== date))
    
  }



  return (
    <div>
    <Training handlerChange={handlerChange} handlerSubmit={handlerSubmit} form={form} />
    <Table handlerDelete={handlerDelete} form={form} />
    </div>
      
    
  );
}

export default App;
