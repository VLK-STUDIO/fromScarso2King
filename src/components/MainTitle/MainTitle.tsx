import React from 'react';
import { Heading } from 'rebass';
import { Row, Col } from 'react-grid-system';

export const MainTitle: React.FC = () => (
  <Row>
    <Col>
      <Heading
        fontSize="40px"
        textAlign="center"
        marginTop="80px"
        marginBottom="50px"
        color=""
      >
        Super Buongiornissimo Maker Premium
      </Heading>
    </Col>
  </Row>
);
