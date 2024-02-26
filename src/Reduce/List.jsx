import React from 'react'

export default function Button(props) {
  return (
    <div>
      <ul class="list-group">
        {
              props.todos.length > 0 ? props.todos.map((value,index,arr) =>
        <li className="list-group-item d-flex justify-content-between" aria-current="true" key={index}><div>{value}</div>
            </li>
        ) : <li className='list-group-item'>No Todos</li>
        }
  
</ul>
      
    </div>
  )
}
