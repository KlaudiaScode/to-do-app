import { useReducer, useEffect, useRef } from "react";


export enum TaskListType {
    add = "add",
  }
  export type TaskList = string[];

  export interface ActionAddTask {
    type: TaskListType.add;
    task: string;
  }
  export type TaskAction = ActionAddTask;
  
  const initialState: TaskList = [];
  
  export function tasksReducer(state: TaskList, action: TaskAction){
    console.log(action);
    switch(action.type){
        case TaskListType.add:
            return [
              ...state,
              action.task
            ]
            default: 
              return state;
    }
  }
  export function useTaskList(){
    const [taskList, dispatch] = useReducer(tasksReducer, initialState);

    function addTask(task: string){
      dispatch({type: TaskListType.add, task})
    }
    useEffectAfterMount(()=>{
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList])
    return {taskList, addTask};
}

export function useEffectAfterMount(fn:()=>void, dependencies:any[]){
  const functionWasCalled = useRef<boolean>(false)
  useEffect(()=>{
    if(functionWasCalled.current){
      fn();
    }else{
      functionWasCalled.current = true
    }
  },dependencies)
}
//pd. Jako wartość domyslną do useReducera wprowadzić to co jest w localStorage lub initialState 