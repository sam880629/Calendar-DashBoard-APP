import './App.css'
import Body from './components/Body'
import Control from './components/Control'
import HeaderRender from './components/Header'
import { Provider } from 'react-redux';
import { configureStore} from "@reduxjs/toolkit";

import calendarSlice from './store/calendarSlice'
import darkModeSlice  from './store/darkModeSlice';

// store
const store = configureStore({
  reducer:{
    Calendar: calendarSlice,
    darkMode: darkModeSlice ,
  }
})


function App() {

  return (
    <Provider store={store}>
        <div className="App">
            <HeaderRender />
            <Control />
            <Body />
        </div>
    </Provider>
  )
}

export default App
