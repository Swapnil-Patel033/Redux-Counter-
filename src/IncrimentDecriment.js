import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
    Name:"AAA"
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1
    },
    Cahname:(state)=>{
        state.Name="bbb"
    },


    decrement: (state) => {
      state.value -=1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,Cahname } = counterSlice.actions

export default counterSlice.reducer