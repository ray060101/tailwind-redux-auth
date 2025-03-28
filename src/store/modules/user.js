import { createSlice } from '@reduxjs/toolkit'

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: ''
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload; // 更新 token
          }
    }
  });

  
export const { setToken } = userStore.actions;

const userReducer = userStore.reducer ;

export default userReducer;
  