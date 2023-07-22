import {NavBar} from "../../components/navBar/NavBar.jsx";
import NavState from "../../context api/NavBar/NavContext.jsx";
import NavSlider from '../../components/NavSlider/NavSlider.jsx'
import "./home.scss"
const home = () =>{
  return (
      <>
        <NavState>
          <NavBar/>
        </NavState>
        <div className="globalWrapper">
          <NavSlider/>
        </div>

      </>
  )
}
export default home;

