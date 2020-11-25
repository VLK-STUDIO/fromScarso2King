import React from "react";
import { Box, Heading } from "rebass";
import { GoodMorning } from "../../types";
import { useImage } from "../../state/images/hooks";
import { ImageValue } from "../../state";

type Props = {
  goodMorning: Partial<GoodMorning>;
};

const boxStyles = (imgUrl: string) => ({
  backgroundImage: `url(${imgUrl})`,
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

const textCommonStyle = {
  textShadow: "1px 1px 5px rgba(0,0,0,1)",
};

export const GoodMorningBox: React.FC<Props> = React.memo(({ goodMorning }) => {
  const image: ImageValue = useImage(goodMorning.imageId || "1");
  if (!image) {
    return <></>;
  }

  return (
    <Box height="100%" style={boxStyles(image.url)} padding="20px">
      <Heading
        fontFamily="sans-serif"
        fontSize="25px"
        style={textCommonStyle}
        color={image.defaultTextColor}
      >
        {goodMorning.inspirational}
      </Heading>
      <Heading
        style={textCommonStyle}
        fontFamily="cursive"
        fontSize="60px"
        color={image.defaultTextColor}
      >
        {goodMorning.mainTitle}
      </Heading>
    </Box>
  );
});
