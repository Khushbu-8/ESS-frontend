import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'

function App() {
  return (
  <>
   <div align='center'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
   </div>
  </>
  )
}

export default App
