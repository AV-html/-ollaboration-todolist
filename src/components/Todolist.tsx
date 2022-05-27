import React from 'react';
import {TechType} from '../App';

type PropsType = {
    title: string
    techList: TechType
}

export function Todolist(props: PropsType) {
    
    const techListArray = props.techList.map((t) => {
        return (
            <li key={t.id}>
                <button>X</button>
                <span>{t.title}</span>
                <input type="checkbox" checked={t.isDone}/>

            </li>
        )
    })

    const showAllHandler = () => {}
    const showActiveHandler = () => {}
    const showCompletedHandler = () => {}

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