import React, { useState } from "react";
import ButtonAdd from "../ButtonAdd";
import Textbox from "../Textbox";



export interface TaskCreatorProps{
  addTask: (arg:string)=>void
}

export default function TaskCreator({addTask}:TaskCreatorProps){
    const [task, setTask] = useState<string>("");
    console.log(task);
    return (
        <div className='new_task'>
        < Textbox value={task} onChangeHandler={setTask}/>
        < ButtonAdd onClickHandler={()=>addTask(task)}/>
      </div>
    )
}