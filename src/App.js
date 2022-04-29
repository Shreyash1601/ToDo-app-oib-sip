import React,{useState} from 'react';
import './App.css'
import Todolist from './Todolist'
const App=()=> {
  const [inputList,setInputList]=useState(null);
  const [items,setItems]=useState([]);
  const dele=(id)=>{
    setItems((oldItems)=>{
      
      return oldItems.filter((arrE,index)=>{
        return index!==id;
      })

    })
   
    
  }
  const itemEvent=(e)=>{
    setInputList(e.target.value)
  }

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    })
    setInputList("")
  }
  return (
    <>
    <div class="main_div">
    <div class="header">
      <h1>ToDo List</h1>
    </div>
    <br/>
    <div>
    <input type="text" value={inputList}class="input" placeholder="Add Items" onChange={itemEvent}/>
    <button class="btn" onClick={listOfItems}>+</button>
    </div>
    {
      items!==null?items.map((e,i)=>{
        return <Todolist key={i} id={i}text={e} onSelect={dele}/>
      }):null
    }
    
    </div>
    </>
  );
}

export default App;
