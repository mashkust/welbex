import React, { FC, Dispatch, SetStateAction } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { SortingType } from './const';

interface ControlledRadioButtonsGroupProps {
  setValue: Dispatch<SetStateAction<SortingType>>,
  value: SortingType
}   

const ControlledRadioButtonsGroup:FC<ControlledRadioButtonsGroupProps> = ({ setValue, value }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value as SortingType);
  };

  return (
    <FormControl sx={{ marginLeft: '10px' }}>
      <FormLabel id="demo-controlled-radio-buttons-group">Сортировать по</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue=""
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value={'name'} control={<Radio />} label="Названию" />
        <FormControlLabel value={'count'} control={<Radio />} label="Количеству" />
        <FormControlLabel value={'distance'} control={<Radio />} label="Расстоянию" />
      </RadioGroup>
    </FormControl>
  );
}

export default ControlledRadioButtonsGroup;
