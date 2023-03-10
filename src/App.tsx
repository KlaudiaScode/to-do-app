import './App.css';
import List from './components/List';
import TaskCreator from './components/TaskCreator';
import {useTaskList} from './hooks';

function App() {
  const { taskList, addTask } = useTaskList();
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

