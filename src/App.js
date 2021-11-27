//import logo from './logo.svg';
//import './App.css';
import ToDoList from './ToDoList';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
const [todo, settodo] = useState([]);
const ref = useRef();

const Local_storage_key = 'something'


useEffect(()=>{
  const storedtodo = JSON.parse(localStorage.getItem(Local_storage_key))
  if(storedtodo) settodo(storedtodo)
},[])


useEffect(()=>{
  localStorage.setItem(Local_storage_key,JSON.stringify(todo))
},[todo])

function toggle(id){
  const newtodo = [...todo]
  const some = newtodo.find(x=>x.id === id)
  some.complete = !some.complete
  settodo(newtodo)
}

function handleAdd(e){
  const name = ref.current.value

  if(name === '') return
  settodo(prevtodo=>{
    return [...prevtodo , {id:uuidv4(),name: name, complete: false}]
  })
  console.log(name);
  ref.current.value = null

}
function handleClear(){
  const clear = todo.filter(x => !x.complete)
  settodo(clear);
}
  return (
    <>
        <ToDoList todos={todo} toggle={toggle}/>
        <input ref={ref} type="text"/>
        <button  onClick={handleAdd}>Add</button>
        <button onClick={handleClear}>Clear</button>
        <div>{todo.filter(todo=>!todo.complete).length} To-Do Left</div>
    </>

  )
}

export default App;
