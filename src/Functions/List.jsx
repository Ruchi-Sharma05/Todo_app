import React from 'react'

export default function List(props) {
    //console.log(props.todos);

    
  return (
    <ul className="list-group">
     {
      // 1 rule
        // props.todos.length > 0 ? props.todos.map((value,index,arr) =>{
        //   return <li className="list-group-item" aria-current="true" key={index}>{value}</li>;
        // }) : <li className='list-group-item'>No Todos</li>
        //2 rule
      props.todos.length > 0 ? props.todos.map((value,index,arr) =>
        <li className="list-group-item d-flex justify-content-between" aria-current="true" key={index}><div>{value}</div>
        <div>
        <button className='btn btn-primary' onClick={()=>props.edittodos(index,value)}>Edit</button>&nbsp;
         
          <button className='btn btn-danger' onClick={()=>props.deletetodo(value)}>Delete</button>
          </div></li>
        ) : <li className='list-group-item'>No Todos</li>
        
   }
    </ul>

  )
}
