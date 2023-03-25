// import {creditB } from "action.js"

const initialState = {
  walletBalance: 0,
  transactionHistory:[]
};

const  balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREDIT_BALANCE":
      return {
        ...state,
        walletBalance: state.walletBalance + action.payload,
      };

    case "DEBIT_BALANCE":
      return {
        ...state,
        walletBalance: state.walletBalance + action.payload,
      };
    case "TD":
        return{
            ...state,
            transactionHistory: [...state.transactionHistory, action.payload]
        }
    default:
      return state;
  }
};

export default balanceReducer;
