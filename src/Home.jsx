import React, { useContext } from 'react'
import oderdoHome from "../src/assets/oderdo-3.jpg"
import oderdoLogo from "../src/assets/oderdoLogo.jpg"
import NavBar from './NavBar'
import HomeBody from './HomeBody'
import HomeFooter from './HomeFooter'
import { Data } from './App'

function Home() {
    const {logindetails}=useContext(Data)
    console.log(logindetails,'dataaaaaaaaaa')
   
  return (
   <>
      <NavBar/> 
    <div className="bg-[url('../src/assets/oderdo-3.jpg')] bg-cover bg-center h-[43.4rem] w-full flex items-center justify-center text-white">
      <div className="p-6 rounded-lg sm:mx-auto sm:w-full sm:max-w-lg text-white" >
        <div className="flex flex-col items-center">
         <img 
           className="absolute top-0 left-0 w-40 h-auto mb-40 mr-35 rounded-lg max-w-lg" 
           src={oderdoLogo} 
           alt="odergoLogo.jpg"
         />
        </div>
        <h1 className="ml-4 text-black text-7xl font-extrabold text-opacity-50 mb-14" >"Good food, fast delivery, happy you!</h1>
      </div>
    </div>
    <div>
        <HomeBody/>
    </div>
    <div>
        <HomeFooter/>
    </div>
   </> 
  )
}

export default Home
