import { TaskList } from '../../hooks';
import ButtonDelete from '../ButtonDelete';

export interface ListProps{
  data: TaskList;
  deleteTask: (index:number)=>void
}
export default function List({data, deleteTask}:ListProps){
    return (
      <ul>
        {data.map((task, index)=>(
          <li key={index}>{task}<ButtonDelete handleClick={()=>deleteTask(index)}/></li>
        ))}
      </ul>
    )
}