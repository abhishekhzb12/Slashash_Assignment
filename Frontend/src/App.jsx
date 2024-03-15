import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './routes/Allroutes'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <BrowserRouter>
    <AllRoutes/>
    </BrowserRouter>
  )
}

export default App
