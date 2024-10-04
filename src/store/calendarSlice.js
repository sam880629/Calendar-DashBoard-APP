import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";

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
        date: date.format("YYYY-MM-DD"),
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

  // 如果當月剩餘天數不足，從下個月補充
  if (displayDates.length < daysToShow) {
    const remainingDays = daysToShow - displayDates.length;

    // 下個月是12月的話，回到1月
    const nextMonth =   type=='next' ? (currentMonth + 1) % 12 : currentMonth ;
    const nextMonthDays = calendarDate[nextMonth].slice(0, remainingDays);

    // 合併當前月份和下一個月份的天數
    displayDates = [...displayDates, ...nextMonthDays];

    // 更新 startDay 和 currentMonth
    startDay = remainingDays;
    currentMonth = nextMonth;  // 更新到下個月
  } else {
    //開始日期變成結束日期
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
    // 切換到下一組天數
    nextDays(state) {
      state.startDay += state.daysToShow ;
     
      
      // 如果 startDay 超過當前月份的天數，進入下一個月份
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
    // 切換到上一組天數
    prevDays(state) {
      // 減少 daysToShow，返回上一組日期
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
      state.daysToShow = action.payload;
      const today = moment().date()-2;
     
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
    }
  },
});

// 匯出 action 和 reducer
export const { nextDays, prevDays, setDaysToShow, setToday } =
  CalendarSlice.actions;
export default CalendarSlice.reducer;
