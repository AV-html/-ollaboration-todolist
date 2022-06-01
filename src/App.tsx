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

export type FilterType = 'all' | 'active' | 'completed';


function App() {
  const [filter, setFilter] = useState<FilterType>('all')
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

  const changeFilter = (filter:FilterType) => {
    setFilter(filter);
  }

  const todoList = techList.filter((item) => {
    if (filter === 'active') return !item.isDone;
    if (filter === 'completed') return item.isDone;
    return item
  })


  const deleteTech = (id: string) => {
    setTechList(techList.filter((t) => t.id !== id))
  }



  return (
    <div className="App">
      <Todolist title={'Tech'}
                techList={todoList}
                changeFilter={changeFilter}
                deleteTech={deleteTech}
      />
    </div>
  );
}

export default App;

