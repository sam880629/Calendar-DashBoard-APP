import Body from '../components/Body'
import Control from '../components/Control'
import HeaderRender from '../components/Header'
import { Provider } from 'react-redux';
import { configureStore} from "@reduxjs/toolkit";
import calendarSlice from '../store/calendarSlice'
import darkModeSlice  from '../store/darkModeSlice';

// store
const store = configureStore({
    reducer:{
      Calendar: calendarSlice,
      darkMode: darkModeSlice ,
    }
  })

  const DashBoard = ()=>{

     return (
        <Provider store={store}>
            <div className="App">
              <div className='m-8 rounded-xl border-[10px] border-gray-400  dark:border-gray-950 z-10'>
                <HeaderRender />
                <Control />
                <Body />
              </div>
            </div>
        </Provider>
     )
  }


  export default DashBoard