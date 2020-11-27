import React, { useCallback, useState } from "react";
import { Row, Col } from "react-grid-system";
import { Form } from "./Form";
import { GoodMorningBox } from "../GoodMorningBox";
import { GoodMorning } from "../../types";

const rowStyle = {
  paddingBottom: "90px",
};

export const Creator: React.FC = () => {
  const [goodMorning, setGoodMorning] = useState<Partial<GoodMorning>>({});
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
    [goodMorning]
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
