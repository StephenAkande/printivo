import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Hero'
import Flex from './components/Flex'
import Iroko from './components/Iroko'
import Fetch from './components/Fetch'
import Fetch2 from './components/Fetch2'
import Fetch3 from './components/Fetch3'
// import { BrowserRouter,Route, Routes } from 'react-router-dom'




function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div>
    // <Flex></Flex>
    // <BrowserRouter>
    //     <Routes>
    //       <Route path ="/" element={<Carousel/>}/>
    //       <Route path='/iroko' element={<Iroko/>}/>
    //     </Routes>
    // </BrowserRouter> 
    // </div>
    <div>
    <Navbar/>
    <Carousel/>
    <Flex/>
    <Iroko/>
    <Fetch/>
    <Fetch2/>
    <Fetch3/>
    </div>

   
  )
}

export default App
