import './App.css'
import Body from './components/Body'
import Control from './components/Control'
import HeaderRender from './components/Header'
import { Provider } from 'react-redux';
import { configureStore} from "@reduxjs/toolkit";
import editLockedSlice from './store/editLockedSlice';
import roomSlice from './store/roomSlice'
// store
const store = configureStore({
  reducer:{
    editLocked : editLockedSlice,
    room: roomSlice
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
