import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {v1} from 'uuid';

export type TechType = Array<Tech>
export interface Tech {
  id: string,
  title: string
  isDone: boolean
}


function App() {
  const [techList, setTechList] = useState<TechType>([
    {id: v1(), title: 'React', isDone: true},
    {id: v1(), title: 'Redux', isDone: true},
    {id: v1(), title: 'C#', isDone: false},
    {id: v1(), title: 'Java', isDone: false},
    {id: v1(), title: 'TS', isDone: true},
    {id: v1(), title: 'HTML', isDone: true},
    {id: v1(), title: 'CSS', isDone: true},
    {id: v1(), title: 'SCSS', isDone: true},
    {id: v1(), title: 'Python', isDone: false}
  ])

  const deleteTech = (id: string) => {
    setTechList(techList.filter((t) => t.id !== id))
  }



  return (
    <div className="App">
      <Todolist title={'Tech'} techList={techList} deleteTech={deleteTech}/>
    </div>
  );
}

export default App;

