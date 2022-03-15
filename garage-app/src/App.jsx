import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Blog from './Components/Blog'
import ContactUs from './Components/ContactUs'
import Forums from './Components/Forums'
import NewPage from './Components/IndividualCardPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import API from './Components/API'

const App = () => {
  return (
      <>
      <Router>
        <Navbar/>
        {/* Home or Landing Page */}

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:sid' element={<NewPage/>} />
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Forums' element={<Forums/>}/>
          <Route path='/API' element={<API/>}/>
        </Routes>

        <Footer/>
      </Router>
      
      </>
  )
}

export default App