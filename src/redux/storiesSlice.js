import { createSlice } from '@reduxjs/toolkit'

export const storiesSlice = createSlice({
  name: 'stories',
  initialState: {
    value: []
  },
  reducers: {
    addStory: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

export const { addStory } = storiesSlice.actions

export default storiesSlice.reducer