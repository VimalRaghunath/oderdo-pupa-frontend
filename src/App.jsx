import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import Home from "./Home"
import HomeFooter from "./HomeFooter"
import HomeBody from "./HomeBody"
import { createContext, useState } from "react"
export const Data = createContext()


function App() {

  const [logindetails,setLogindetails]=useState([])
 

  return (
    <Data.Provider value={{logindetails, setLogindetails}}>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/homebody" element={<HomeBody/>} />
      <Route path="/homefooter" element={<HomeFooter/>}/>
     </Routes>
    </BrowserRouter>
    </Data.Provider>
  )
}

export default App
