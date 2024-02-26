import React from 'react'

export default function Input() {
 // let [todo,setTodos]=useState("");
  const submit=(event)=>{
    event.preventDefault()
   }


  return (
    <div>
       <form className="row" onSubmit={submit}>
            <div className="col-10">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Todo"
                    value />
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">
                Add
                </button>
            </div>
        </form>
    </div>
  )
}
