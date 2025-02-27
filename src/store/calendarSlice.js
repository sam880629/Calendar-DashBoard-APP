import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";
// 待辦事項
const getTodoList =(date)=>{
 
  const day = moment(date, "YYYY-M-D").format("D");
  const month =  moment(date, "YYYY-M-D").format("MM");
  const todayDate =  moment().date(); 
  const todayMonth =  moment().month() + 1;

  // 加入待辦事項
  const todos = {
    [`${todayDate}_${todayMonth}`]: [
      { id: 0, time: '14:30', title: 'Project Kickoff' },
      { id: 1, time: '19:30', title: 'Team Meeting' },
      { id: 2, time: '12:30', title: 'Client Call' }
    ],
    [`${todayDate + 2}_${todayMonth}`]: [
      { id: 3, time: '20:30', title: 'Budget Review' },
      { id: 4, time: '20:30', title: 'Customer Follow-up' },
      { id: 5, time: '02:00', title: 'Workshop Preparation' },
      { id: 6, time: '06:00', title: 'Strategy Planning' },
      { id: 7, time: '06:30', title: 'Internal Audit' },
      { id: 8, time: '10:00', title: 'Feedback Review' }
    ],
    [`${todayDate + 3}_${todayMonth}`]: [
      { id: 9, time: '20:30', title: 'Product Demo' },
      { id: 10, time: '12:30', title: 'Stakeholder Meeting' },
      { id: 11, time: '02:00', title: 'Design Brainstorm' },
      { id: 12, time: '06:00', title: 'Testing & QA' },
      { id: 13, time: '04:30', title: 'Performance Review' },
      { id: 14, time: '10:00', title: 'Marketing Sync' }
    ],
    [`${todayDate + 6}_${todayMonth}`]: [
      { id: 15, time: '20:30', title: 'Data Analysis' },
      { id: 16, time: '12:30', title: 'Sales Strategy Meeting' },
      { id: 17, time: '02:00', title: 'New Hire Orientation' },
      { id: 18, time: '06:00', title: 'Inventory Check' },
      { id: 19, time: '04:30', title: 'Weekly Reporting' },
      { id: 20, time: '10:00', title: 'Quarterly Planning' }
    ]
  };

  // 根據傳入的日期查詢待辦事項
  return todos[`${day}_${month}`] || [];

}

const getDaysInYear = (year) => {
  const yearData = [];


  // 12 個月的日期
  for (let month = 0; month < 12; month++) {
    const mmt = moment().year(year).month(month);
    const daysInMonth = mmt.daysInMonth();
    const monthDays = [];

    // 整理該月的日曆資料
    for (let day = 1; day <= daysInMonth; day++) {
      const date = mmt.date(day);
      monthDays.push({
        date: date.format("YYYY-MM-D"),
        todoList:getTodoList(date.format("YYYY-MM-D")),
        day: date.format("D")
      });
    }

    yearData[month] = monthDays;
  }

  return yearData;
};

// 取得要顯示的日期資料
const getDisplayDates = (calendarDate, currentMonth, startDay, endDay, daysToShow, type) => {
 
  // 取得當前月份的日期
  const monthData = calendarDate[currentMonth];
  let displayDates = monthData.slice(startDay, endDay);
 
  console.log(calendarDate);
  
  // 如果當月剩餘天數不足，從下個月補充
  if (displayDates.length < daysToShow) {
    const remainingDays = daysToShow - displayDates.length;
    // 下個月是12月的話，回到1月
    let nextMonth =  0;
    let nextMonthDays = {}

    if(type=='next'){
      nextMonth = (currentMonth + 1) % 12
      nextMonthDays = calendarDate[nextMonth].slice(0, remainingDays);
      // 合併當前月份和下一個月份的天數
      displayDates = [...displayDates, ...nextMonthDays];
      currentMonth = nextMonth;  // 更新到下個月
    }else if(type=='prev'){
      nextMonth = currentMonth+1
     
      nextMonthDays = calendarDate[nextMonth].slice(0, remainingDays);
      // 合併當前月份和下一個月份的天數
      displayDates = [...displayDates, ...nextMonthDays];
    }else{
      nextMonth = (currentMonth + 1) % 12
      nextMonthDays = calendarDate[nextMonth].slice(0, remainingDays);
      // 合併當前月份和下一個月份的天數
      displayDates = [...displayDates, ...nextMonthDays];
    }

    // 更新 startDay 和 currentMonth
    startDay = remainingDays-daysToShow;
 
  } else {
    //開始日期變成結束日期;
   
    startDay == endDay;
  } 

  return { displayDates, startDay, currentMonth };
};

// 初始化狀態
const initialState = {
  currentDay: moment().day(),//現在星期
  currentMonth: moment().month(), // 現在月份
  currentYear: moment().year(), // 現在年份
  CalendarDate: getDaysInYear(moment().year()), // 當前月份的日期
  startDay: 0, // 目前顯示的開始天數
  daysToShow: 7, // 要顯示的天數
  showData: [],
};

const CalendarSlice = createSlice({
  name: "Calendar",
  initialState,
  reducers: {
    // 切換到下一組日期
    nextDays(state) {
      state.startDay += state.daysToShow ;
    
      // 如果 startDay 超過當前月份的天數，切到下一個月份
      if (state.startDay >= state.CalendarDate[state.currentMonth].length) {

        // 如果已經是12月，年份增加並回到1月
        if (state.currentMonth > 11) {
          state.currentMonth = 0;
          state.currentYear += 1;
          state.CalendarDate = getDaysInYear(state.currentYear);
        }
      }
      const result = getDisplayDates(
        state.CalendarDate,
        state.currentMonth,
        state.startDay,
        (state.startDay+ state.daysToShow),
        state.daysToShow,
        'next'
      );
      // 更新狀態
      state.showData = result.displayDates;
      state.startDay = result.startDay;
      state.currentMonth = result.currentMonth;
   
    },
    // 切換到上一組日期
    prevDays(state) {
     
      state.startDay -= state.daysToShow;
      // 如果 startDay 小於 0，進入上一個月份
      if (state.startDay < 0) {
        // 更新為上個月份
        state.currentMonth -= 1;
    
        // 如果已經是1月，年份減少並回到12月
        if (state.currentMonth < 0) {
          state.currentMonth = 11;
          state.currentYear -= 1;
          state.CalendarDate = getDaysInYear(state.currentYear);
        }
    
        // 更新 startDay 為上個月份的最後幾天
        const prevMonthDays = state.CalendarDate[state.currentMonth].length;
        state.startDay = prevMonthDays + state.startDay; // 計算上個月份的開始日
      }
    
      // 計算結束日
      const endDay = state.startDay + state.daysToShow;
   
      const result = getDisplayDates(
        state.CalendarDate,
        state.currentMonth,
        state.startDay,
        endDay,
        state.daysToShow,
        'prev'
      );
    
      // 更新狀態
      state.showData = result.displayDates;
      // state.startDay = result.startDay;
      state.currentMonth = result.currentMonth;
    },
    // 設定顯示筆數
    setDaysToShow(state, action) {
      const {daysToShow, init} =action.payload;
      //傳入值更新天數
      if(daysToShow) state.daysToShow = daysToShow;
      
      const startDay = init?state.startDay:moment().date()-2;
   
    
      const result = getDisplayDates(
        state.CalendarDate,
        state.currentMonth,
        startDay,
        (startDay+ state.daysToShow),
        state.daysToShow
      );
      // 更新狀態
      
      state.showData = result.displayDates;
      state.startDay = startDay
      state.currentMonth = result.currentMonth ;
    },
    // 返回今日
    setToday(state, action){
      const today = moment().date()-2;
      state.currentMonth= moment().month()
      const result = getDisplayDates(
        state.CalendarDate,
        state.currentMonth,
        today,
        (today+ state.daysToShow),
        state.daysToShow
      );
      // 更新狀態
      state.showData = result.displayDates;
      state.startDay = today
      
    },
    // 設定日曆資料
    setCalendarDate(state, action) {
     const { currentMonth, newBookingData, target_date } = action.payload;
   
        // 先獲取該月份的資料
        const monthData = state.CalendarDate[currentMonth];
        
        //更新
        monthData.forEach(dayData => {
          if (dayData.date === target_date) { 
            dayData.todoList = Array.isArray(newBookingData) ? [...newBookingData] : []; // 更新 todoList
          }
        });

    },
    // 新增資料
    addCalendarDate(state, action) {
        const { currentMonth, newBookingData, target_date } = action.payload;
    
         // 先獲取該月份的資料
        const monthData = state.CalendarDate[currentMonth];
    
         //新增
         monthData.forEach(dayData => {
           if (dayData.date === target_date) { 
              // 新增
             dayData.todoList = [ ...dayData.todoList ,...newBookingData] ; // 
           }
         });
 
     },
  },
});



// 匯出 action 和 reducer
export const { nextDays, prevDays, setDaysToShow, setToday, setCalendarDate,addCalendarDate } =
  CalendarSlice.actions;
export default CalendarSlice.reducer;
