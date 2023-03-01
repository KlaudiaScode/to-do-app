import React, {useState} from "react";
import Textbox from "../Textbox";
import ButtonAdd from "../ButtonAdd";
import { TaskList } from "../../App";



export interface ListProps{
  data: TaskList
}
export default function List({data}:ListProps){
    return (
      <ul>
        {data.map((task)=>(
          <li>{task}</li>
        ))}
      </ul>
    )
}