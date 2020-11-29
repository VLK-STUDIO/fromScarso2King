import React, { useCallback, useMemo } from "react";
import { Heading, Box, Button } from "rebass";
import { Input, Label, Select, Textarea } from "@rebass/forms";
import { GoodMorning } from "../../../types";
import { useImages } from "../../../state/images";
import { useCurrentGoodMorning } from "../../../state/goodMornings";
import { styles } from "./styles";

const inputsMarginBottom = "20px";

type Props = {
  goodMorning: Partial<GoodMorning>;
  onInputChange: (
    e: React.FormEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
};

export const Form: React.FC<Props> = ({ onInputChange, goodMorning }) => {
  const { images } = useImages();
  const {
    isEdit,
    resetCurrentGoodMorning,
    submitGoodMorning,
  } = useCurrentGoodMorning();

  const onSubmit = useCallback(() => {
    submitGoodMorning();
    resetCurrentGoodMorning();
  }, [resetCurrentGoodMorning, submitGoodMorning]);

  const options = useMemo(() => {
    return images.map((image) => (
      <option value={image.id} key={image.id}>
        {image.label}
      </option>
    ));
  }, [images]);

  const prefix = useMemo(() => (isEdit ? "Modifica" : "Crea"), [isEdit]);

  const disabled = useMemo(() => {
    return !goodMorning.mainTitle;
  }, [goodMorning.mainTitle]);

  return (
    <Box style={styles.boxStyle}>
      <Box backgroundColor="rgba(255, 255, 255, 0.8)" padding="20px">
        <Heading marginBottom={inputsMarginBottom}>
          {prefix} Buongiornissimo
        </Heading>
        <Box marginBottom={inputsMarginBottom}>
          <Label htmlFor="imageId">Sfondi caffettosi e romanticoni</Label>
          <Select
            value={goodMorning.imageId || "1"}
            onChange={onInputChange}
            id="imageId"
            name="imageId"
            backgroundColor="white"
          >
            {options}
          </Select>
        </Box>
        <Box marginBottom={inputsMarginBottom}>
          <Label htmlFor="mainTitle">Buongiornissimo Principale</Label>
          <Input
            onChange={onInputChange}
            value={goodMorning.mainTitle || ""}
            backgroundColor="white"
            id="mainTitle"
            name="mainTitle"
            type="text"
            placeholder="Es. Buongiorno Amici di Facebook"
          />
        </Box>
        <Box marginBottom={inputsMarginBottom}>
          <Label htmlFor="inspirational">
            Ispira i tuoi amici con una frase ad effetto
          </Label>
          <Textarea
            onChange={onInputChange}
            id="inspirational"
            name="inspirational"
            maxLength={100}
            backgroundColor="white"
            rows={6}
            value={goodMorning.inspirational || ""}
          />
        </Box>
        <Box style={styles.buttonsContainer}>
          <Button
            variant="primary"
            width="100%"
            disabled={disabled}
            marginRight={isEdit ? "5px" : undefined}
            style={styles.mainButtonStyle(disabled)}
            onClick={onSubmit}
          >
            {prefix} Buongiornissimo
          </Button>
          {isEdit ? (
            <Button
              variant="primary"
              width="100%"
              marginLeft={isEdit ? "5px" : undefined}
              style={styles.buttonStyle}
              onClick={resetCurrentGoodMorning}
            >
              Annulla
            </Button>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};
