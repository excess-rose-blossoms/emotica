import { createSlice } from '@reduxjs/toolkit'

const stories_data = [
  {   
      "title": "🐷🪰", 
      "description": "🛩💥🏝👦🏼👦🏼👦🏼👦🏼🔥", 
      "author": "🧾🥇⚓️",
      "body": "🔥🔥🔥😱😱😱😱😱😱😱🔥🔥🔥🪨🧠🩸"
  },
  {   
      "title": "👔", 
      "description": "👨‍💼🏓💥😩💦💦💦", 
      "author": "❄️👸🏻🧊🐉",
      "body": "🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩"
  },
  {
    "title": "👑💍",
    "description": "💍3️⃣➡️🧝‍♂️💍7️⃣➡️🧔‍♂️🏔💍9️⃣➡️🙎‍♂️⚠️🌋👁💍",
    "author": "⤴️®️®️",
    "body": "👨‍🌾💍👨‍🌾👨‍🌾👨‍🌾🧙‍♂️🤴🧔🧔🧝‍♂️🦅🦅🌋👁",
  },
  {
    "title": "",
    "description": "",
    "author": "",
    "body": "",
  }
];

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