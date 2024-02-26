import React, { Component } from 'react'

export default class Input extends Component {
    constructor(){
        super();
        this.state={
            todo : ''
        }

    }
    inputchange=(event)=>{
    this.setState({
        todo:event.target.value
    })
    }
  render() {
    return (
        <form className="row">
        <div className="col-sm-8">
          <input type="text" className="form-control" value={this.state.todo}  placeholder="enter To-Do" onChange={this.inputchange}/>
        
        </div>
        <div className="col-sm-2">
         
          <button type="submit" className="btn btn-primary mb-3">Add</button>
        </div>
      </form>
    )
  }
}
