
export interface TextboxProps {
    value: string;
    onChangeHandler: (arg:string)=>void;
}
export default function Textbox({value, onChangeHandler}:TextboxProps){
    return (
        <input name="textbox" type="text" placeholder="Task content.." value={value} onChange={(e)=>onChangeHandler(e.target.value)} />
    )
}
