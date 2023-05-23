import React,{useContext} from "react";
import { AppContext } from "./App";


function Button() {
    const [count, setCount] = useContext(AppContext)
  return (
    <div>
        <button className="add" onClick={(()=>{
            setCount(count+1)
        })}>Add</button>
        <button className="sub" onClick={(()=>{
            setCount(count-1)
        })}>sub</button>
    </div>
    
  )
}

export default Button