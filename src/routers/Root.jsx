import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import PageNotExist from "../pages/PageNotExist"
import Register from "../pages/Register"

const Root = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<PageNotExist/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}

export default Root