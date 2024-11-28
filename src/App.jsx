import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'


function App() {

  

  return (
  <>
   <div align='center'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
   </div>
  </>
  )
}

export default App
