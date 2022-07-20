
import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [taskList, setTaskList] = useState([]);
  const addNewTask=newTaskInput => {
    setTaskList([...taskList, newTaskInput])
  };
  const completeHandler = (index) => {
    console.log("Task Clicked" , index);
    taskList[index].isTaskDone = !taskList[index].isTaskDone;
    setTaskList([...taskList]);
  };
  const deleteHandler = (index) => {
    setTaskList([...taskList.slice(0,index),...taskList.slice(index+1)]);
  }
  return (
    <div className="App">
      <Form newTaskList={addNewTask}/>
      <Results myTasks={taskList} handler={completeHandler} delete={deleteHandler}/>

    </div>
  );
}

export default App;
