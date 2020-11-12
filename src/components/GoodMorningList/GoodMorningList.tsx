import React from 'react';
import { Col, Row } from 'react-grid-system';
import { Heading } from 'rebass';
import { List } from './List';

const DEFAULT_GOOD_MORNING = {
  imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2017/03/sawa-flower-coffee-3.jpg',
  mainTitle: 'Un Buongiorno Speciale',
  ispirational: 'A gli amici veri e non falsi',
}

export const GoodMorningList = React.memo(() => {
  return (
    <>
      <Row>
        <Col sm={12}>
          <Heading fontSize="30px" textAlign="center" marginBottom="40px">I miei buongiornissimi</Heading>
        </Col>
      </Row>
      <Row>
        <List goodMornings={[DEFAULT_GOOD_MORNING,DEFAULT_GOOD_MORNING,DEFAULT_GOOD_MORNING]} />
      </Row>
    </>
  );
});
