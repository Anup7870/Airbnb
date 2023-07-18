import './App.css'
import {NavBar} from "./components/navBar/NavBar.jsx";
import NavContext from "./context api/NavBar/NavContext.jsx";
function App() {

  return (
    <>
      <NavContext>
        <NavBar/>
      </NavContext>

    </>
  )
}

export default App
