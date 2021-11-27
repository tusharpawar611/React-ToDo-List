import React from 'react'

export default function todo({todo,toggle}) {

    function toggleFunction(){
        toggle(todo.id)
    }
    return (
        <div>
            <label>
                <input type='checkbox' checked={todo.complete} onChange={toggleFunction} />
                {todo.name}
            </label>
        </div>



    )
}
