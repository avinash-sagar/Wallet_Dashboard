import {
  creditBalance,
  debitBalance,
  transactionDetails,
} from "@/redux/action";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Wallet() {
  const dispatch = useDispatch();
  const data = useSelector((item) => item.balance);
  //   const [itemList, setItemList] = useState([]);
  console.log(data);
  // transactionHistory
  const [amounts, setAmounts] = useState({
    types: "",
    balance: "",
    date: Date.now(),
  });

  const handleDebit = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    // let temp = [...itemList];
    // temp.push(amounts);
    dispatch(transactionDetails(amounts));
    if (Number(amounts.balance) < 0) {
      dispatch(debitBalance(Number(amounts.balance)));
    } else if (Number(amounts.balance) >= 0) {
      dispatch(creditBalance(Number(amounts.balance)));
    }
    setAmounts({
      types: "",
      balance: "",
      date: Date.now(),
    });
    // console.log(Number(amounts.balance) <0);
  };

  function incomeDetails() {
    return data?.transactionHistory?.filter((item) => {
      return Number(item.balance) > 0;
    });
  }
  function expenceDetails() {
    return data?.transactionHistory?.filter((item) => {
      return Number(item.balance) < 0;
    });
  }

  console.log(incomeDetails(), "incomeDetails");
  return (
    <div className="main_wallet">
      <h1>Wallet </h1>
      <div className="bal_div">
        <p className="bal">YOUR BALANCE</p>
        <h3>{data?.walletBalance} </h3>
      </div>
      <div className="income_div">
        <p className="in_ex">INCOME</p>
        <p className="income_bal">
          {incomeDetails()?.reduce(
            (a, it) => {
              return Number(a) + Number(it?.balance);
            },
            incomeDetails().length == 0 ? 0 : ""
          )}{" "}
        </p>
        {}
      </div>
      <div className="expense_div">
        <p className="in_ex">EXPENCE </p>
        <p className="expence_bal">
          {expenceDetails()?.reduce(
            (a, it) => {
              return Math.abs((-Number(a) + Number(it?.balance)))
            },
            expenceDetails().length == 0 ? 0 : ""
          )}{" "}
        </p>
      </div>
      <div>
        <p className="add_tx">Add new transaction</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="text_in">
            <label>Text </label>
            <input
              type="text"
              required
              value={amounts.types}
              onChange={(e) =>
                setAmounts({ ...amounts, types: e.target.value })
              }
            />
          </div>
          <div className="text_in">
            <label>Amount </label>
            <input
              type="text"
              //   pattern = "(?=.*[a-z]{2})(?=.*[A-Z]{2})"
              required
              value={amounts.balance}
              onChange={(e) =>
                setAmounts({ ...amounts, balance: e.target.value })
              }
            />
          </div>
          <Button type="submit" className="add_btn">
            Add transaction
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Wallet;
