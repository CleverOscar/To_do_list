import React from 'react';

import TodoItems from './TodoItems';

function Todo() {
    return(
        <div>
            {/* Title */}
            <h1 className="text-3xl pt-4 text-white"> Todo List </h1>


            <div className=" bg-gray-200 w-9/12 mx-auto mt-4">
                {/* List Row */}
                <div className="flex flex-row text-xl">
                   <p className="w-8/12">Todo's</p>
                   <p className="w-4/12">Checked</p>
                </div>

                <div>
                    <TodoItems />
                </div>
                
                {/* Buttons */}
                <div className="my-6  w-10/12 mx-auto flex justify-between">
                    <button type="button" className="w-3/12 text-xs bg-blue-400">Add Todo</button>
                    <button type="button" className="w-3/12 text-xs bg-yellow-400">Edit</button>
                    <button type="button" className="w-3/12 text-xs bg-green-500"> Complete</button>
                </div>
            </div>
        </div>
    )
}


function checkedOff(){
    return console.log('clicked')
}

export default Todo