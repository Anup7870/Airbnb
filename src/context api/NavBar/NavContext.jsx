import Context from "../context.js";
import {useState} from "react";


const NavState =(props)=>{
  const state={
     "open":false,
  }

  const [navS, setNavs] = useState(state)
  return(
      <Context.Provider value={{navS,setNavs}}>
          {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </Context.Provider>
  )
}

export default NavState;
