import { createSlice } from "@reduxjs/toolkit";

let initialState ={
  Tables: [],
}

export const criptoTablesReducerSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    addCriptoTable: (state, action) => {
        state.Tables = [...state.Tables, action.payload]
    },
    updateCriptoTable: (state, action) => {
    
       const isItemBySymbol = state.Tables.find(item=> item.symbol === action.payload.symbol)

       if(isItemBySymbol){
            let newData = [...state.Tables]
            const indexComment = newData.findIndex((item) => item.symbol === action.payload.symbol);
            newData[indexComment].data = action.payload.data
           
            return void(newData)
       }

       return void(state.Tables)
    },
  },
});

export const { addCriptoTable,updateCriptoTable } = criptoTablesReducerSlice.actions;

export const selectCriptoTables = (state) => state.Tables.criptoTables;
export const selectCriptoTableBySymbol  = symbol => state => state.criptoTables.Tables.find(item=> item.symbol === symbol)

export default criptoTablesReducerSlice.reducer;
