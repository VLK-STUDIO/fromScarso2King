import React, { useCallback, useMemo } from "react";
import { Box, Heading, Button } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { GoodMorning } from "../../types";
import { useImage } from "../../state/images/hooks";
import {
  useCurrentGoodMorning,
  useGoodMorning,
} from "../../state/goodMornings";
import { ImageValue } from "../../state";
import { useStyles } from "./styles";

type Props = {
  goodMorning: Partial<GoodMorning>;
  showCtas?: boolean;
};

export const GoodMorningBox: React.FC<Props> = React.memo(
  ({ goodMorning, showCtas = true }) => {
    const { setGoodMorning } = useCurrentGoodMorning();
    const { removeGoodMorning } = useGoodMorning(goodMorning.id);
    const image: ImageValue = useImage(goodMorning.imageId || "1");
    const styles = useStyles(image?.url);

    const onClickEdit = useCallback(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setGoodMorning(goodMorning);
    }, [goodMorning, setGoodMorning]);

    const onClickRemove = useCallback(() => {
      removeGoodMorning(goodMorning.id || "");
    }, [goodMorning.id, removeGoodMorning]);

    const ctaBox = useMemo(() => {
      if (showCtas) {
        return (
          <Box style={styles.ctaContainer}>
            <Button onClick={onClickEdit} style={styles.editButton}>
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button
              onClick={onClickRemove}
              backgroundColor="red"
              style={styles.button}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Box>
        );
      }

      return <></>;
    }, [
      onClickEdit,
      onClickRemove,
      showCtas,
      styles.button,
      styles.ctaContainer,
      styles.editButton,
    ]);

    if (!image) {
      return <></>;
    }

    return (
      <Box height="100%" style={styles.container} padding="20px">
        <Box>
          <Heading
            fontFamily="sans-serif"
            fontSize="25px"
            style={styles.text}
            color={image.defaultTextColor}
          >
            {goodMorning.inspirational}
          </Heading>
          <Heading
            style={styles.text}
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
