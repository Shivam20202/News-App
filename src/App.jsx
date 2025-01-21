import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import './Components/style.css'


const App = () => {
  const  [category,setCategory]=useState("general");
  return (
    <div className="container">
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category}/>

    </div>
  )
}

export default App
