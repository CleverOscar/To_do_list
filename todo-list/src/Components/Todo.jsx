import React from 'react';

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
                    <ul className="text-base text-left pl-4 mt-4 tracking-wider">
                        <div className="flex flex-row items-center">
                            <li className="w-8/12">
                                Take out the trash
                            </li>
                            <input className="w-3/12" type="checkbox" />
                        </div>
                        <div className="flex flex-row items-center">
                            <li className="w-8/12">
                                Feed the cats
                            </li>
                            <input className="w-3/12" type="checkbox" />
                        </div>
                        <div className="flex flex-row items-center">
                            <li className="w-8/12">
                                Make copy of the house keys
                            </li>
                            <input className="w-3/12" type="checkbox" />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}


function checkedOff(){
    return console.log('clicked')
}

export default Todo