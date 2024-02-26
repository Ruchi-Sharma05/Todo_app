import React,{ useEffect, useState } from 'react'

export default function Input(props) {
  //console.log(props);
  let [todo,setTodos]=useState("");
  let [error,setError]=useState(false);
    const inputchange=(event)=>{
      //console.log(event.target.value);  -> get value 
     setTodos(event.target.value); // settotoday or state mai value insert kr di
     if(event.target.value.length>0)
     {
      setError(false)
     }
     else{
      setError(true)
     }
     
     }
    // button event
    const submit=(event)=>{
      event.preventDefault()
     
      if(todo.length>0){
        if(props.editdata.index === -1)
        {
          props.addtodo(todo); 
        }
        else{
          props.updatetodo(props.editdata.index,todo)
        }
       
       
      }

      else{
        setError(true);
      }
    
     
      setTodos('');
     // setTodos(event.target.value); // settotoday or state mai value insert kr di

    }
    useEffect(()=>{
      setTodos(props.editdata.value);
    },[props.editdata.index,props.editdata.value,setTodos]);
   
  return (
   <form className="row" onSubmit={submit}>
  <div className="col-sm-8">
    <input type="text" className="form-control"  placeholder="enter To-Do" value={todo} onChange={inputchange}/>
  {
    error && <p class="text-danger">Please Enter to do</p>
  }
  </div>
  <div className="col-sm-2">
   
    <button type="submit" className="btn btn-primary mb-3"> {
      props.editdata.index === -1 ? 'Add' :'Update'
    }</button>
  </div>
</form>
   
  )
}
