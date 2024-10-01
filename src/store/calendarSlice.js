import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";

const getDaysInMonth = (year, month) => {
  const mmt = moment().year(year).month(month);
  const daysInMonth = mmt.daysInMonth();
  const weekDays = [];

  // 整理日歷資料
  for (let day = 1; day <= daysInMonth; day++) {
    const date = mmt.date(day);
    weekDays.push({
      date: date.format('YYYY-MM-DD'),

    });
  }
  return weekDays;
};

// 初始化狀態
const initialState = {
  currentMonth: moment().month(), // 當前月份 
  currentYear: moment().year(), // 當前年份
  CalendarDate: getDaysInMonth(moment().year(), moment().month()), // 當前月份的日期
  startDay: 0, // 目前顯示的開始天數
  daysToShow: 7 // 要顯示的天數
};

// 建立切片
const CalendarSlice = createSlice({
  name: "Calendar",
  initialState,
  reducers: {
    // 切換到下一組天數
    nextDays(state) {
      state.startDay += state.daysToShow;
     
      
      console.log(state.startDay >= state.CalendarDate.length);
      
      // 如果 startDay 超過當前月份的天數，進入下一個月份
      if (state.startDay >= state.CalendarDate.length) {
        const daysLeftInCurrentMonth = state.CalendarDate.length - (state.startDay - state.daysToShow);
    
        // 更新為下個月份
        state.startDay = 0;
        state.currentMonth += 1;
    
        // 如果已經是12月，年份增加並回到1月
        if (state.currentMonth > 11) {
          state.currentMonth = 0;
          state.currentYear += 1;
        }
        console.log('nonex');
        // 更新下一個月份的日期
        const nextMonthDays = getDaysInMonth(state.currentYear, state.currentMonth);
    
        // 從下個月補充顯示的日期
        state.CalendarDate = [...state.CalendarDate, ...nextMonthDays];
       
        // 若當前月份剩餘天數不足，補充下個月的日期
        if (daysLeftInCurrentMonth < state.daysToShow) {
          state.startDay = daysLeftInCurrentMonth;
        }
      }
    },
    // 切換到上一組天數
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
        }
    
        // 獲取上個月份的天數
        const prevMonthDays = getDaysInMonth(state.currentYear, state.currentMonth);
        // 補充上個月份的日期
        state.CalendarDate = [...prevMonthDays, ...state.CalendarDate];

        // 確定新的 startDay，從上個月份的最後天數開始顯示
        state.startDay = prevMonthDays.length - state.daysToShow;
        if (state.startDay < 0) {
          state.startDay = 0; // 確保不會超過範圍
        }
      }
    },
    setDaysToShow(state, action) {
      state.daysToShow = action.payload;
     
      
    },
  },
});

// 匯出 action 和 reducer
export const { nextDays, prevDays, setDaysToShow } = CalendarSlice.actions;
export default CalendarSlice.reducer;
