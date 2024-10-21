import { configureStore } from '@reduxjs/toolkit'
import displayTextSlice from '../slice/slice'

export default configureStore({
  reducer: {
    displayText : displayTextSlice
  }
});