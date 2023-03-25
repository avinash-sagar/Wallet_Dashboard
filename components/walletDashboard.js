import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BalanceDetails from "./balanceDetails";
import Wallet from "./wallet";

function WalletDashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            <Wallet />
          </Col>
          <Col lg={8}>
            <BalanceDetails />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WalletDashboard;
