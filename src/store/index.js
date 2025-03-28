import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user';  

const store = configureStore({
  reducer: {
    user: userReducer  // 設定 userReducer
  }
});

export default store;