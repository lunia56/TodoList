import React from "react";
import {filterValueType} from "./App";

export type ToDoListPropsType = {
    title: string
    body?: number
    tasks: Array<InArrayPropsType>
    onRemove: (id: number) => void
    changeFilter: (value: filterValueType) => void
}
type InArrayPropsType = {
    id: number,
    title: string
    isDone: boolean

}
export const Todolist = (props: ToDoListPropsType) => {

    return (
        <div>

            <h3>{props.title}</h3>
            <h3>{props.body}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el => {
                        return (
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                                <button onClick={() => {
                                    props.onRemove(el.id)
                                }}>X
                                </button>
                            </li>
                        )
                    }
                )}
            </ul>

            <button onClick={() => console.log("hello")}>+</button>
            <div>
                <button onClick={() => props.changeFilter("all")}>All</button>
                <button onClick={() => props.changeFilter("active")}>Active</button>
                <button onClick={() => props.changeFilter("completed")}>Completed</button>
            </div>
        </div>
    )
}
