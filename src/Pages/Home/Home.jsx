import { NavBar } from "../../components/navBar/NavBar.jsx";
import NavState from "../../context api/NavBar/NavContext.jsx";
import NavSlider from "../../components/NavSlider/NavSlider.jsx";
import "./home.scss";
import { useContext } from "react";
import Context from "../../context api/context.js";
import Modal from '../../components/PopUp/Modal.jsx'
import Filter from "../../components/PopUp/filter/Filter.jsx"
const home = () => {
  const a = useContext(Context);
  return (
    <>
        <NavState>
          <NavBar />
        </NavState>
        <div className='globalWrapper'>
          <NavSlider />
        </div>
        <Modal open={a.global.filter}>
          <Filter  />
        </Modal>
    </>
  ) 
}
export default home;
