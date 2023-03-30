import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  authId: '',
  userId: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      console.log(action)
      state.isAuthenticated = true
      state.authId = action.payload.authId
      state.userId = action.payload.userId
    },
    logOut: (state, action) => {
      state.isAuthenticated = false
      state.authId = ''
      state.userId = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer
