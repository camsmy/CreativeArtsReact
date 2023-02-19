import { useState } from 'react'
import Root from './routers/Root'
import {BrowserRouter} from "react-router-dom"
import Navigation from './layout/Navigation'
import Footer from './layout/Footer'

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
        <Navigation/>
        <Root/>
        <Footer/>
      </BrowserRouter>
      </>
    </div>
  )
}

export default App
