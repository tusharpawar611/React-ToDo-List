import React from 'react'
import Todo from './Todo'
export default function ToDoList({todos, toggle}) {
    return (
            todos.map(todomap => {
                return <Todo key={todomap.id} toggle={toggle} todo={todomap} />
            })
    )
}
