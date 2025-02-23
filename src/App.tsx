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
  bookTraining: IForms[]
}

function App() {
  const [form, setForm] = useState<IForm>({
    bookTraining: []
  });
  
  const handlerDelete = (date: string) => {
    setForm((preForm) => ({...preForm, bookTraining: [...preForm.bookTraining.filter((item) => item.date !== date)]}))
    
  }

  return (
    <div>
    <Training  setForm = {setForm} form = {form.bookTraining} />
    <Table handlerDelete={handlerDelete} form={form.bookTraining} />
    </div>
      
    
  );
}

export default App;
