import React, { useCallback, useState } from 'react';
import { Row, Col } from 'react-grid-system';
import { Form } from './Form';
import { GoodMorningBox } from '../GoodMorningBox';
import { GoodMorning } from '../../types';

const DEFAULT_GOOD_MORNING = {
  imageId: '1',
  mainTitle: 'Un Buongiorno Speciale',
  ispirational: 'A gli amici veri e non falsi',
}

const rowStyle = {
  paddingBottom: '90px'
}

export const Creator: React.FC = () => {
  const [goodMorning, setGoodMorning] = useState<GoodMorning>(DEFAULT_GOOD_MORNING);
  const onInputChange = useCallback(
    (
      e: React.FormEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setGoodMorning(({
        ...goodMorning,
        [e?.currentTarget?.name]: e?.currentTarget?.value,
      }));
    },
    [goodMorning],
  );

  return (
    <Row style={rowStyle}>
      <Col sm={6}>
        <Form goodMorning={goodMorning} onInputChange={onInputChange} />
      </Col>
      <Col sm={6}>
        <GoodMorningBox goodMorning={goodMorning} />
      </Col>
    </Row>
  );
};
