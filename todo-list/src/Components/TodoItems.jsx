import React from 'react';

function TodoItems (props){

    const items = props.todos.map((item) => {
        return <div key={item.id} className="flex flex-row items-center">
                <li className="w-8/12">
                    {item.task}
                </li>
                <input type="checkbox" />
            </div>
    })

    return(
        <div>
                <ul className="text-base text-left pl-4 mt-4 tracking-wider">
                    {items}
                </ul>
        </div>
    )
}


export default TodoItems