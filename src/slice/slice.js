import { createSlice } from "@reduxjs/toolkit";

export const displayTextSlice = createSlice({
    name: 'displayText', 
    initialState : {
        value: 'Default text value'
    },
    reducers: {
        changeValue: (state,actions) => {
            state.value = action.payload; 
        },
    },
});


export const { changeValue } = displayTextSlice.actions;

export default displayTextSlice.reducer;