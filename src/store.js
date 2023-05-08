import { configureStore } from '@reduxjs/toolkit'
import FormLoginReducer from '../src/IncrimentDecriment'


export const store = configureStore({
    reducer: {
      LoginValue: FormLoginReducer,
      

    },
  })