import React from "react";
import { Col, Row } from "react-grid-system";
import { Heading } from "rebass";
import { useGoodMornings } from "../../state/goodMornings";
import { List } from "./List";

export const GoodMorningList = React.memo(() => {
  const { goodMornings } = useGoodMornings();
  return (
    <>
      <Row>
        <Col sm={12}>
          <Heading fontSize="30px" textAlign="center" marginBottom="40px">
            I miei buongiornissimi
          </Heading>
        </Col>
      </Row>
      <Row>
        <List goodMornings={goodMornings} />
      </Row>
    </>
  );
});
