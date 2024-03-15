import { Route, Routes } from "react-router-dom"
import Search from "../pages/search"
import Favorates from "../pages/Favorates"
import Navbars from "../pages/Navbar"


function AllRoutes() {
  return (
    <div>
        <Navbars/>
      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path="/fav" element={<Favorates/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
