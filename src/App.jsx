import { Routes, Route } from "react-router-dom"

import Home from './components/home'
import CoinPage from "./components/coinpage"

function App() {

  return (
    <div>
      React App Crpyto-Explorer      

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/:slug" element={<CoinPage />} />
      </Routes>

    </div>
  )
}

export default App
