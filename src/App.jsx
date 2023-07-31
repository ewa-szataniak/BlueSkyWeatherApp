import "./CSS/styles.css"
import "./firebase.jsx"
import {Auth} from "./components/auth"
import Weather from "./components/Climate"

function App() {
  return (
    <div className='App'>
    <Auth/>
      <Weather defaultCity ={"New York City"}/>
    </div>
  )
}

export default App
