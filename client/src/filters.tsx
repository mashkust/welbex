import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { Filter } from './const';


interface FiltersProps {
    setFilter: Dispatch<SetStateAction<Filter>>;
    filter: Filter;
}

const Filters: FC<FiltersProps> = ({ setFilter}) => {
    const [col, setCol] = useState<'' | 'dittance' | 'count'>('');
    const [сondition, setСondition] = useState<'' | '>' | '<' | '='>('');
    const [field, setField] = useState<string>('');

    useEffect(() => {
        setFilter(prev => ({ ...prev, col: col}))
        setFilter(prev => ({ ...prev, condition: сondition}))
        setFilter(prev => ({ ...prev, field: field }))
    }, [col, сondition, field]);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Колонка</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={col}
                    label="Колонка"
                    onChange={(evt) => setCol(evt.target.value as ('' | 'dittance' | 'count'))}
                >
                    <MenuItem value={'count'}>Количество</MenuItem>
                    <MenuItem value={'distance'}>Расстояние</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Условие</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={сondition}
                    label="Условие"
                    onChange={(evt) => setСondition(evt.target.value as ('' | '>' | '<' | '='))}
                >
                    <MenuItem value={'='}>Равно</MenuItem>
                    <MenuItem value={'>'}>Больше</MenuItem>
                    <MenuItem value={'<'}>Меньше</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <TextField
                    id="standard-number"
                    label="Значение"
                    type="number"
                    value={field}
                    onChange={(evt) => setField(evt.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>
        </Box>
    );
}

export default Filters;