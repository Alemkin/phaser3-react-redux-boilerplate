import { compose } from 'redux'
import createMiddleware from './middleware'

import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../reducers/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice
  }
},
compose(createMiddleware()))

if (process.env.NODE_ENV !== 'production') window.store = store

export default store
