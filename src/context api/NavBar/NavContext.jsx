import Context from "../context.js";

const NavState =(props)=>{
  const state={
      "name" : "Anup",
      "class" : "bseIT"
  }
  return(
      <Context.Provider value={{state}}>
          {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </Context.Provider>
  )
}

export default NavState;
