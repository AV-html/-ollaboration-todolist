import React from 'react';
import {FilterType, TechType} from '../App';

type PropsType = {
    title: string
    techList: TechType
    deleteTech: (id: string) => void
    changeFilter: (filter:FilterType) => void
}

export function Todolist(props: PropsType) {
    
    const techListArray = props.techList.map((t) => {
        const onClickHandler = () => {
            props.deleteTech(t.id);
        }
        return (
            <li key={t.id}>
                <button onClick={onClickHandler}>X</button>
                <span>{t.title}</span>
                <input type="checkbox" checked={t.isDone}/>

            </li>
        )
    })

    const showAllHandler = () => {
        props.changeFilter('all')
    }
    const showActiveHandler = () => {
        props.changeFilter('active')
    }
    const showCompletedHandler = () => {
        props.changeFilter('completed')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
            <div>
                <ul>
                    {techListArray}
                </ul>
            </div>
            <div>
                <button onClick={showAllHandler}>All</button>
                <button onClick={showActiveHandler}>Active</button>
                <button onClick={showCompletedHandler}>Completed</button>
            </div>
        </div>
    );
}