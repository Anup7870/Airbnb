import './App.css'
import Home from './Pages/Home/Home.jsx'
import GlobalState from './context api/GlobalContext/Global'
function App() {
  return (
    <>
    <GlobalState>
      <div className="main">
        <Home/>
      </div>
      </GlobalState>
    </>
  )
}

export default App
