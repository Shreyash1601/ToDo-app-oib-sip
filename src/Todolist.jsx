import React from 'react'
import './todolist.css'
const Todolist=(props)=>{

    return (
    <>
    <div className="list" >
    <div className="task">
    <button class="icon" onClick={()=>{
        props.onSelect(props.id)
    }}>X</button>
    <h1 class="item">{props.text}</h1>
    </div>
    </div>
    </>
    )
}
export default Todolist;