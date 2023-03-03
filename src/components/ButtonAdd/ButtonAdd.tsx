
export interface ButtonAddProps{
    onClickHandler: ()=>void
}
export default function ButtonAdd({onClickHandler}:ButtonAddProps){
    return (
        <button onClick={onClickHandler}>Add new task</button>
    )
}
