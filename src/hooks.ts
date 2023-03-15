import { useReducer, useEffect, useRef } from "react";


export enum TaskListType {
  add = "add",
  delete = "delete",
  updateDone = "updateDone",
}

export interface Task {
  text: string;
  done: boolean;
}

export type TaskList = Task[];

export interface ActionAddTask {
  type: TaskListType.add;
  task: Task;
}

export interface ActionDeleteTask {
  type: TaskListType.delete;
  index: number;
}

export interface ActionUpdateTaskDone {
  type: TaskListType.updateDone;
  index: number;
}

export type TaskAction = ActionAddTask | ActionDeleteTask | ActionUpdateTaskDone;

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
      case TaskListType.updateDone:
        {
          const taskListCopy = [...state];
          taskListCopy[action.index] = {
            ...taskListCopy[action.index],
            done: !taskListCopy[action.index].done
          }
          return taskListCopy;
        }
      default: 
        return state;
  }
}
export function useTaskList(){
  const [taskList, dispatch] = useReducer(tasksReducer, checkTheTaskList());

  function addTask(taskText: string){
    dispatch({type: TaskListType.add, task:{text:taskText, done:false}});
  }
  function deleteTask(index: number){
    dispatch({type: TaskListType.delete, index});
  }
  function updateTaskDone(index: number){
    dispatch({type: TaskListType.updateDone, index});
  }
  useEffectAfterMount(()=>{
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  return {taskList, addTask, deleteTask, updateTaskDone};
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

//pd.Jak przepływają dane (checkbox, buttonDelete)