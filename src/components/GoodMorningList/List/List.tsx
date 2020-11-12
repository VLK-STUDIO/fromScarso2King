import React, { useMemo } from 'react';
import { Col } from 'react-grid-system';
import { Text } from 'rebass';
import { GoodMorning } from '../../../types';
import { GoodMorningBox } from '../../GoodMorningBox';

type Props = {
  goodMornings: GoodMorning[];
};

const boxColStyle: React.CSSProperties = {
  height: '436px',
  marginBottom: '30px'
}

const emptyStateStyle: React.CSSProperties = {
  marginTop: '30px',
  marginBottom: '30px'
}

export const List: React.FC<Props> = ({ goodMornings }) => {
  const list = useMemo(() => {
    return goodMornings.map((goodMorning) => (
      <Col sm={6} style={boxColStyle}>
        <GoodMorningBox goodMorning={goodMorning} />
      </Col>
    ));
  }, [goodMornings]);

  const emptyState = useMemo(() => {
    return <Col sm={12} style={emptyStateStyle}><Text fontFamily="sans-serif">Ancora nessun buongiornissimo 🙁</Text></Col>
  }, [])

  return <>{goodMornings.length ? list : emptyState}</>;
};
