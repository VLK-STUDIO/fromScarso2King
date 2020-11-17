import React, { useMemo } from 'react';
import { Heading, Box, Button } from 'rebass';
import { Input, Label, Select, Textarea } from '@rebass/forms';
import { GoodMorning } from '../../../types';
import { useImages } from '../../../state/images';

const inputsMarginBottom = '20px';

type Props = {
  goodMorning: GoodMorning;
  onInputChange: (
    e: React.FormEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
};

const boxStyle = {
  borderRadius: '10px',
  backgroundImage:
    'url(https://static2-living.corriereobjects.it/wp-content/uploads/2018/11/villeroy3-660x440.jpg)',
  overflow: 'hidden',
};

const buttonStyle = { cursor: 'pointer', backgroundColor: '#F365B5' };

export const Form: React.FC<Props> = ({ onInputChange, goodMorning }) => {

  const { images } = useImages();

  const options = useMemo(() => {
    return images.map((image) => (
      <option value={image.id} key={image.id}>
        {image.label}
      </option>
    ));
  }, [images]);

  return (
    <Box style={boxStyle}>
      <Box backgroundColor="rgba(255, 255, 255, 0.8)" padding="20px">
        <Heading marginBottom={inputsMarginBottom}>
          Nuovo Buongiornissimo
        </Heading>
        <Box marginBottom={inputsMarginBottom}>
          <Label htmlFor="imageId">Sfondi caffettosi e romanticoni</Label>
          <Select
            value={goodMorning.imageId}
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
            value={goodMorning.mainTitle}
            backgroundColor="white"
            id="mainTitle"
            name="mainTitle"
            type="text"
            placeholder="Es. Buongiorno Amici di Facebook"
          />
        </Box>
        <Box marginBottom={inputsMarginBottom}>
          <Label htmlFor="ispirational">
            Ispira i tuoi amici con una frase ad effetto
          </Label>
          <Textarea
            onChange={onInputChange}
            id="ispirational"
            name="ispirational"
            maxLength={100}
            backgroundColor="white"
            rows={6}
            value={goodMorning.ispirational}
          />
        </Box>
        <Button variant="primary" width="100%" style={buttonStyle}>
          Crea Buongiornissimo
        </Button>
      </Box>
    </Box>
  );
};
