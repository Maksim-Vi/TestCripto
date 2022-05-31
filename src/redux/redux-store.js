import { configureStore } from '@reduxjs/toolkit';
import CriptoTablesReducer from './reducers/CriptoTables/CriptoTablesReducer';
import WebsocketReducer from './reducers/Websocket/WebsocketReducer';

export const store = configureStore({
  reducer: {
    websocketMessages: WebsocketReducer,
    criptoTables: CriptoTablesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
