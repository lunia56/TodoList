import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./ToDoList";


export type filterValueType = "all" | "active" | "completed"



const tasks1 = [
  {id: 1, title: "HTML&CSS", isDone: true},
  {id: 2, title: "JS", isDone: true},
  {id: 3, title: "ReactJS", isDone: false},
  {id: 4, title: "ReactJS111", isDone: true}

]
const tasks2 = [
  {id: 1, title: "Hello world", isDone: true},
  {id: 2, title: "I am Happy", isDone: false},
  {id: 3, title: "Yo", isDone: false}
]


function App() {
  let [tasks, setTasks] = useState(tasks1)
  let [filter, setFilter] = useState<filterValueType>("all")


  function onRemove(id: number) {
    let resultArr = tasks.filter((e) => {
      return e.id != id
    })
    setTasks(resultArr)
  }

  function changeFilter(value: filterValueType) {
    setFilter(value)
  }

  let tasksForTodoLost = tasks;
  if (filter === "active") {
    tasksForTodoLost = tasks.filter(t => t.isDone == false)
  }
  if (filter === "completed") {
    tasksForTodoLost = tasks.filter(t => t.isDone == true)
  }
  return (
      <div className="App">
        <Todolist title={"What to learn111"}
                  body={123}
                  tasks={tasksForTodoLost}
                  onRemove={onRemove}
                  changeFilter={changeFilter}
        />
        {/*<Todolist title={"What to learn222"} tasks={tasks2}/>*/}
      </div>
  );
}

export default App;
