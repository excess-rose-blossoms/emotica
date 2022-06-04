import { createSlice } from '@reduxjs/toolkit'
import { stories_data } from '../data/stories'

export const storiesSlice = createSlice({
  name: 'stories',
  initialState: {
    value: stories_data
  },
  reducers: {
    addStory: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

export const { addStory } = storiesSlice.actions

export default storiesSlice.reducer