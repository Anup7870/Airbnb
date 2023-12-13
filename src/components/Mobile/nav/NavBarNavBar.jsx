import React from "react";
import "./navBarMobile.scss";
import { LuSettings2 } from "react-icons/lu";
import SearchIcon from "@mui/icons-material/Search";
import Context from "../../../context api/context";
import { useContext } from "react";
export default function NavBar() {
  const a = useContext(Context);

  return (
    <div className='mobileNav'>
      <div className='wrapper'>
        <div
          className='logo'
          onClick={() => {
            a.SetGlobal({ ...a.global, filter: true });
          }}>
          <SearchIcon />
        </div>
        <div className='in'></div>
        <div className='disaprear'>
          <p className='bold'>Anywhere</p>
          <p className='light'>Any week - Add guest</p>
        </div>
        <div className='filter'>
          <LuSettings2 />
        </div>
      </div>
    </div>
  );
}
