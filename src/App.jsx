import './App.css'
import Body from './components/Body'
import Control from './components/Control'
import HeaderRender from './components/Header'
import { Provider } from 'react-redux';
import { configureStore} from "@reduxjs/toolkit";
import calendarSlice from './store/calendarSlice'
import darkModeSlice  from './store/darkModeSlice';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Start from './components/Start'

import index from './pages/index'
// store
const store = configureStore({
  reducer:{
    Calendar: calendarSlice,
    darkMode: darkModeSlice ,
  }
})


function App() {

  return (
    // <Provider store={store}>
    //     <div className="App">
    //         <HeaderRender />
    //         <Control />
    //         <Body />
    //     </div>
    // </Provider>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      
      </nav>
      <Routes>
        <Route exact path="/" component={index} />
        <Route path="/about" component={HeaderRender} />
      
      </Routes>
    </Router>
  )
}




export default App
