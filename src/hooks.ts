import { useReducer, useEffect, useRef } from "react";


export enum TaskListType {
  add = "add",
  delete = "delete"
}
export type TaskList = string[];

export interface ActionAddTask {
  type: TaskListType.add;
  task: string;
}

export interface ActionDeleteTask {
  type: TaskListType.delete;
  index: number;
}

export type TaskAction = ActionAddTask | ActionDeleteTask;

const initialState: TaskList = [];

export function tasksReducer(state: TaskList, action: TaskAction): TaskList{
  switch(action.type){
      case TaskListType.add:
          return [
            ...state,
            action.task
          ]
      case TaskListType.delete:
        {
          const taskListCopy = [...state]
          taskListCopy.splice(action.index,1);
          return taskListCopy;
        }
      default: 
        return state;
  }
}
export function useTaskList(){
  const [taskList, dispatch] = useReducer(tasksReducer, checkTheTaskList());

  function addTask(task: string){
    dispatch({type: TaskListType.add, task});
  }
  function deleteTask(index: number){
    dispatch({type: TaskListType.delete, index});
  }
  useEffectAfterMount(()=>{
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  return {taskList, addTask, deleteTask};
}

export function checkTheTaskList(): TaskList{
  const savedData = localStorage.getItem('taskList');
  if(savedData){
    return JSON.parse(savedData)
  }else{
    return initialState;
  }
}

export function useEffectAfterMount(fn:()=>void, dependencies:any[]){
  const functionWasCalled = useRef<boolean>(false);
  useEffect(()=>{
    if(functionWasCalled.current){
      fn();
    }else{
      functionWasCalled.current = true;
    }
  },dependencies);
}

//pd. Jako wartość domyslną do useReducera wprowadzić to co jest w localStorage lub initialState 
//pd.Zrobić button delete dzięki funkcji splice, jako argument dodać index: number