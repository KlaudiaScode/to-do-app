import DeleteIcon from '@mui/icons-material/Delete';

export interface ButtonDeleteProps{
    handleClick: ()=>void;
}
export default function ButtonDelete({handleClick}:ButtonDeleteProps){
    return (
        <button onClick={handleClick}><DeleteIcon /></button>
    )
}