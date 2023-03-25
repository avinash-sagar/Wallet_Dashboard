export const creditBalance = (payload) => {
  return {
    type: "CREDIT_BALANCE",
    payload: payload,
  };
};

export const debitBalance = (payload) => {
  return {
    type: "DEBIT_BALANCE",
    payload: payload,
  };
};

export const transactionDetails = (payload) => {
  return {
    type: "TD",
    payload: payload,
  };
};
