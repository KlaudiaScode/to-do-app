import React, { useState } from "react";
import Textbox from "../Textbox";


export interface ButtonAddProps{
    onClickHandler: ()=>void
}
export default function ButtonAdd({onClickHandler}:ButtonAddProps){
    return (
        <button onClick={onClickHandler}>Add new task</button>
    )
}
