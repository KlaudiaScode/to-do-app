import { TaskList } from "../../hooks";

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