import { TaskList } from '../../hooks';
import ButtonDelete from '../ButtonDelete';

export interface ListProps{
  data: TaskList;
  deleteTask: (index:number)=>void;
  updateTaskDone: (index:number)=>void;
}
export default function List({data, deleteTask, updateTaskDone}:ListProps){
  console.log(data)
    return (
      <ul>
        {data.map((task, index)=>(
          <li key={index} className={task.done ? "done" : ""}>
            <input type="checkbox" checked={task.done} onChange={()=>updateTaskDone(index)} />
            {task.text}
            <ButtonDelete handleClick={()=>deleteTask(index)}/>
          </li>
        ))}
      </ul>
    )
}