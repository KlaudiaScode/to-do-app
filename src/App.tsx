import React, {useState, useContext, useReducer} from 'react';
import './App.css';
import ButtonAdd from './components/ButtonAdd';
import Textbox from './components/Textbox';
import List from './components/List';
import TaskCreator from './components/TaskCreator';

//export type NewUser = Omit<User, "id">
export enum TaskListType {
  add = "add",
}
export type TaskList = string[];
export interface NewTask {
  type: TaskListType.add
}
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
function App() {
  const [taskList, dispatch] = useReducer(tasksReducer, initialState);

function addTask(task:string){
  dispatch({type: TaskListType.add, task})
}

  return (
    <div className='todo_app'>
        <h1>Todo List</h1>
        <p>New task</p>
        <TaskCreator addTask={addTask} />
        <p>Todo list</p>
          <List data={taskList} />
    </div>
  );
}

export default App;
//PD. napisać hooka do przetrzymywania stanu listy za pomocą useReducer()
//PD. Prezentacja na temat przepływu danych od kliknięcia buttona dane trafiają do listy zadań
