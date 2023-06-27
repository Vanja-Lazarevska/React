import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { People } from './Pages/People/People'
import Planets from './Pages/Planets/Planets'
import Navbar from './Components/Navbar/Navbar'
import SingleCharacter from './Components/SingleCharacter/SingleCharacter'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/people' element={<People/>}/>
      <Route path='/planets' element={<Planets/>}/>
      <Route path='/character/:id' element={<SingleCharacter/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
