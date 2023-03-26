import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function BalanceDetails() {
  const [filterType, setFilterType] = useState("all");
  const data = useSelector((item) => item.balance);
  console.log(data.transactionHistory);
  // transactionHistory
  //   console.log(filterType, "filterType");
  const handleChange = (e) => {
    setFilterType(e.target.value);
  };

  function transactionType() {
    switch (filterType) {
      case "all":
        return data?.transactionHistory;
      case "credit":
        return data?.transactionHistory?.filter((item) => {
          return Number(item.balance) > 0;
        });
      case "debit":
        return data?.transactionHistory?.filter((item) => {
          return Number(item.balance) < 0;
        });
    }
  }

  return (
    <div className="balance_details">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="radios">
              <div>
                <input
                  type="radio"
                  value={"all"}
                  onChange={handleChange}
                  checked={filterType === "all"}
                />
                All
              </div>
              <div>
                <input
                  type="radio"
                  value={"debit"}
                  onChange={handleChange}
                  checked={filterType == "debit"}
                />{" "}
                Debit
              </div>
              <div>
                <input
                  type="radio"
                  value={"credit"}
                  onChange={handleChange}
                  checked={filterType == "credit"}
                />{" "}
                Credit
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div>
              {transactionType().length == 0 ? (
                <h2>No Transaction Details ! </h2>
              ) : null}
              {transactionType()?.map((item) => {
                let todayDate = new Date(item.date).toISOString().slice(0, 10);
                let formateDate = todayDate.split("-").reverse().join("-");
                return (
                  <div className="expence_details_card">
                    <Container>
                      <Row>
                        <Col lg={4}>
                          <h5>{item.types}</h5>
                          <p>{formateDate} </p>
                        </Col>
                        <Col lg={7}>
                          <div className="bal_details">
                            <h4>{ Number(item.balance) < 0 ? Math.abs(item.balance): item.balance} </h4>
                          </div>
                        </Col>
                        <Col lg={1}>
                          <div
                            className={
                              Number(item.balance) < 0
                                ? "colorDiv1"
                                : "colorDiv2"
                            }
                          ></div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BalanceDetails;
