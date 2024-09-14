import { createSlice } from '@reduxjs/toolkit';
// 預設資料
const initialState = {
    editLocked: false,
};

const editLockedSlice = createSlice({
    name: 'editLocked',
    initialState,
    reducers: {
        setEditLocked(state,action) {
            state.editLocked = action.payload;
        }
    }
});

export const { setEditLocked } = editLockedSlice.actions;
export default editLockedSlice.reducer;