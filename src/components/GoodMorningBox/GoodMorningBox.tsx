import React from 'react';
import { Box, Heading } from 'rebass';
import { GoodMorning } from '../../types';

type Props = {
  goodMorning: GoodMorning
}

const boxStyles = (imgUrl: string) => ({
  backgroundImage: `url(${imgUrl})`, borderRadius: "10px"
})

export const GoodMorningBox: React.FC<Props> = React.memo(({
  goodMorning
}) => {
  return (
    <Box height="100%" style={boxStyles(goodMorning.imageUrl)} padding="20px">
      <Heading fontFamily="sans-serif" fontSize="25px">{goodMorning.ispirational}</Heading>
      <Heading fontFamily="cursive" fontSize="60px">{goodMorning.mainTitle}</Heading>
    </Box>
  )
})