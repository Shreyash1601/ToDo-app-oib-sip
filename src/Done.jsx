import React from 'react'
import './Done.css'
const Done=(props)=>{

    return (
    <>
    <div className="list" >
    <div className="task">
    <button class="icon" onClick={()=>{
        props.onSelect(props.id,props.text)
    }}>&#10003;</button>
    <h1 class="item">{props.text}</h1>
    </div>
    </div>
    </>
    )
}
export default Done;