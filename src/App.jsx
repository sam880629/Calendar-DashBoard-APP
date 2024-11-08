import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './home/Home'
import DashBoard from './dashBoard/DashBoard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/dashBoard" element={ <DashBoard />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
