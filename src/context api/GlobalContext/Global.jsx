import Context from "../context.js";
import {useState} from "react";


const GlobalState =(props)=>{
  const globalData = {
    "filter":false,
    "filterAct":1,
    "navOpen":false
  }
  const [global,SetGlobal] = useState(globalData)
  const [filterPop, setFilterPop]= useState(false)
  return(
      <Context.Provider value={{global,SetGlobal}}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </Context.Provider>
  )
}

export default GlobalState;
