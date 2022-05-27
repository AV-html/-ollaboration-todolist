import React from 'react';
import {TechType} from '../App';

type PropsType = {
    title: string
    techList: TechType
}

export function Todolist(props: PropsType) {
    
    const techListArray = props.techList.map((t) => {
        const onClickHandler = () => {
            console.log('delete')
        }
        return (
            <li key={t.id}>
                <button onClick={onClickHandler}>X</button>
                <span>{t.title}</span>
                <input type="checkbox" checked={t.isDone}/>

            </li>
        )
    })
    
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}