import React, { Component } from 'react'

export default class List extends Component {
    componentDidMount()
    {
        console.log(this.props)
    }
  render() {
    return (
      <div>
        <ul class="list-group">
            {
                this.props.todos.length > 0 ? this.props.todos.map((todos,index)=>(
                    <li class="list-group-item">{todos}</li>
                )) :   <li class="list-group-item">No todo</li>
            }
  </ul>
      </div>
    )
  }
}
