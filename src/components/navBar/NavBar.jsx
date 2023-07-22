import logo from "../../assets/Logo/long-logo.png"
import './navBar.scss'
import {createContext, useEffect, useState} from "react";
import {IconContext} from "react-icons";
import {TbWorld} from "react-icons/tb"
import {FaBars} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import {Setting} from "./Setting.jsx";
import MiddleNav from "./middlleNav/MiddleNav.jsx";
import {ActiveMiddleNav} from "./middlleNav/ActiveMiddleNav.jsx";

// Sub component parts

const EndNav = () =>{
  const [setting, setSetting]= useState(false)

  return (
      <>
        <div className="endNav">
          <div className="buttonNavEnd">
            <p>Airbnb Your Home</p>
          </div>
          <IconContext.Provider value={{className:"worldLogo"}}>
            <TbWorld/>
          </IconContext.Provider>
          <div className="mainProfileCont" onClick={()=> {
            let event= !setting ? true : false;
            setSetting(event)
          }}>
            <div className="profileCont">
              <FaBars className="bars"/>
              <CgProfile className="profileLogo"/>
            </div>
            <Setting values={setting}/>
          </div>
        </div>
      </>
  )
}

export function NavBar() {
  return (
      <>
        <div className="navBarcont">
          <nav>
            <img src={logo} alt="AirBab Logo" className="logo"/>
            <MiddleNav/>
            <EndNav/>
          </nav>
          <ActiveMiddleNav/>
        </div>
      </>
  )
}

