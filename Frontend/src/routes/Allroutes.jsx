import { Route, Routes } from "react-router-dom"
import Favorates from "../pages/Favorates"
import Navbars from "../pages/Navbar"
import Search from "../pages/Search"


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

