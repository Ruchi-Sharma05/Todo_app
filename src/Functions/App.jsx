import React, { useState } from 'react';
import Input from './Input';
import List from './List';
export default function App() {
    let [todos,setTodos]=useState(['breakfast','lunch','dinner']);
    let [edittodos,seteditDetails]=useState({
      index:-1,
      data: ""
    });
    //console.log(todos);
    const addtodo=(value)=>{
      //console.log(value);
     
      //  console.log(todos);
      //    setTodos(todos);
      // 1
        todos.push(value);
      //setTodos([...todos]);
      // rule 2
      setTodos([...todos],value);
    }
    const onclickdelete=(value)=>{
      let filterTodos=todos.filter(todo => todo !== value)
      //console.log(filterTodos);
      setTodos(filterTodos)

    }
    const onclickEdit=(index,value)=>{
     //console.log(index,value);
     seteditDetails({
      index,
      value,
     })
    }
    const updatetodo=(index,value)=>{
      todos.splice(index,1,value);
      setTodos([...todos]);
      seteditDetails({
        index:-1,
        value:'',
       })
    }
  return (
    <div className='container mt-2'>
         <Input  addtodo={addtodo} editdata={edittodos} updatetodo={updatetodo}/>
      <List todos={todos} deletetodo={onclickdelete} edittodos={onclickEdit}/>
    </div>


  )
}


