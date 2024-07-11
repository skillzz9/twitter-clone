import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signUpModalOpen: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
        state.signUpModalOpen = true
    },
    closeSignupModal: (state) => {
        state.signUpModalOpen = false
    }
  }
});

export const {openSignupModal, closeSignupModal} = modalSlice.actions

export default modalSlice.reducer