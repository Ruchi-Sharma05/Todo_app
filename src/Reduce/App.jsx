import React,{ useReducer} from 'react'
import Input from './Input'
import List from './List'
const initialState = {
  todos: ['breakfast', 'lunch', 'dinner','reduce'],
}
const reducer = (state, action) => {
    return state;
};
export default function App() {
  //let [todos,setTodos]=useState(['breakfast','lunch','dinner']);
    //useReducer(setTodos,intialialstate)
  const [state, dispatch] = useReducer(reducer, initialState);
  
 return (
    <div>
       <div className='container mt-4'>
            <Input/>
            <List todos={state.todos}/>
        </div>
    </div>
  )
}
