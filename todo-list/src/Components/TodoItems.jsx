import React from 'react';

function TodoItems (){
    return(
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
    )
}


export default TodoItems