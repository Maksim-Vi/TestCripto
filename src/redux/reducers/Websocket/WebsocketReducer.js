import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    loaded: false,
    subscribedMessages: []
}

export const websocketReducerSlice = createSlice({
  name: 'websocket',
  initialState,
  reducers: {
    setLoaded: (state, action) =>{
      state.loaded = action.payload
    },
    addSubscribeMassage:  (state, action) =>{
      state.subscribedMessages = [...state.subscribedMessages, action.payload]
    },
    deleteSubscribedMassageById:  (state, action) =>{
      state.subscribedMessages = state.subscribedMessages.filter(item => item.chanId !== action.payload)
    },
  },
});

export const { setLoaded, addSubscribeMassage,deleteSubscribedMassageById } = websocketReducerSlice.actions;

export const selectLoaded = state => state.websocketMessages.loaded;
export const selectSubscribedMassages = state => state.websocketMessages.subscribedMessages;

export const searchSubscribedMassageByChanId = chanId => state => state.websocketMessages.subscribedMessages.find(item=> item.chanId === chanId)
export const searchSubscribedMassageBySymbol = symbol => state => state.websocketMessages.subscribedMessages.find(item=> item.symbol === symbol)

export default websocketReducerSlice.reducer;

