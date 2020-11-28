import React, { useCallback } from "react";
import { Row, Col } from "react-grid-system";
import { useCurrentGoodMorning } from "../../state/goodMornings";
import { GoodMorningBox } from "../GoodMorningBox";
import { Form } from "./Form";

const rowStyle = {
  paddingBottom: "90px",
};

export const Creator: React.FC = () => {
  const { goodMorning, setGoodMorning } = useCurrentGoodMorning();
  const onInputChange = useCallback(
    (
      e: React.FormEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setGoodMorning({
        ...goodMorning,
        [e?.currentTarget?.name]: e?.currentTarget?.value,
      });
    },
    [goodMorning, setGoodMorning]
  );

  return (
    <Row style={rowStyle}>
      <Col sm={6}>
        <Form goodMorning={goodMorning} onInputChange={onInputChange} />
      </Col>
      <Col sm={6}>
        <GoodMorningBox goodMorning={goodMorning} showCtas={false} />
      </Col>
    </Row>
  );
};
