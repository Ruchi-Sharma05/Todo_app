import React, { Component } from 'react'
import Input from './Input';
import List from './List';

export default class App extends Component {
    constructor(){
        super()
        this.state={
            todos:['breakfast','lunch','dinner']
        }
    }
  render() {
    return (
        <div className='container mt-2'>
        <Input/>
     <List todos={this.state.todos}/>
   </div>
    )
  }
}
