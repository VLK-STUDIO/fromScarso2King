import React, { useCallback, useMemo } from "react";
import { Box, Heading, Button } from "rebass";
import { GoodMorning } from "../../types";
import { useImage } from "../../state/images/hooks";
import { ImageValue } from "../../state";
import { useStyles } from "./styles";

type Props = {
  goodMorning: Partial<GoodMorning>;
  showCtas?: boolean;
};

const textCommonStyle = {
  textShadow: "1px 1px 5px rgba(0,0,0,1)",
};

export const GoodMorningBox: React.FC<Props> = React.memo(
  ({ goodMorning, showCtas = true }) => {
    const image: ImageValue = useImage(goodMorning.imageId || "1");
    const styles = useStyles(image.url);
    const onClickEdit = useCallback(() => {
      // TODO: set the current goodMorning inside the form
      // TODO: scroll to top
    }, []);

    const ctaBox = useMemo(() => {
      if (showCtas) {
        return (
          <Box style={styles.ctaContainer}>
            <Button onClick={onClickEdit} style={styles.editButton}>
              Modifica
            </Button>
            <Button>Elimina</Button>
          </Box>
        );
      }

      return <></>;
    }, [onClickEdit, showCtas, styles.ctaContainer, styles.editButton]);

    if (!image) {
      return <></>;
    }

    return (
      <Box height="100%" style={styles.container} padding="20px">
        <Box>
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
        {ctaBox}
      </Box>
    );
  }
);
