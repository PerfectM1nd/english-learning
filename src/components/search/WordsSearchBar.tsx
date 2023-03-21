import React from 'react';
import {createUseStyles} from 'react-jss';
import {TextField} from '@mui/material';
import {VarelaRoundedFont} from '@/layouts/MainLayout';
import {setWordSearchString} from '@/features/words/wordsSlice';
import {useAppDispatch, useAppSelector} from '@/app/store';

const WordsSearchBar = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const searchString = useAppSelector(state => state.words.searchString);
  
  const handleInputChange = (event: any) => {
    dispatch(setWordSearchString(event.target.value));
  };

  return (
    <TextField
      autoComplete="off"
      inputProps={{min: 0, style: {textAlign: 'center'}}}
      variant="outlined"
      value={searchString}
      fullWidth
      onChange={handleInputChange}
      InputLabelProps={{
        style: {
          color: 'white'
        }
      }}
      InputProps={{
        classes: {
          notchedOutline: classes.notchedOutline,
          input: classes.input
        }
      }}
      sx={{
        '.MuiInputBase-input': {
          fontSize: 25,
          ...VarelaRoundedFont.style
        },
      }}
    />
  );
};

const useStyles = createUseStyles({
  input: {
    color: 'white !important'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important'
  }
});
export default WordsSearchBar;