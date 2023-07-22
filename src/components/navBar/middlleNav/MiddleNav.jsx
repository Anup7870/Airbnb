import {IconContext} from "react-icons";
import {BiSearch} from "react-icons/bi";
import './middleNav.scss'
import {useContext} from "react";
import Context from "../../../context api/context.js";

const MiddleNav = ()=>{
  const a =useContext(Context)
  console.log(a.navS?.open);
  return(
      <>
        <div className="middleMoreCont">
          <nav>
            <div className="moreNavItem active">Stays</div>
            <div  className="moreNavItem">Experiences</div>
            <div  className="moreNavItem">Online Experience</div>
          </nav>
        </div>
        <div className="middleNavCont">
          <div className="intial">
            <div className="navButtonMiddle">
              <p>Anywhere</p>
            </div>
            <span className="line"></span>
            <div className="navButtonMiddle">
              <p>Any week</p>
            </div>
            <span className="line"></span>
            <div className=" navButtonMiddle intialButton">
              <p className="addGuest">Add guest</p>
              <IconContext.Provider value={{color: "#fff", className:"logoSvg"}}>
                <div className="logoSearch">
                  <BiSearch/>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </>

  )
}

export default MiddleNav;