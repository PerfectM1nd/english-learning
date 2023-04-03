import React, {ChangeEvent, FC, useState} from 'react';
import {TextField} from '@mui/material';
import {createUseStyles} from 'react-jss';

import {INPUT_PLACEHOLDER_COLOR} from '$/app/colors';

interface Props {
  label: string,
  setFunction(value: string): void,
  required?: boolean,
  value: string,
  disabled?: boolean,
  height?: number,
  maxLength?: number,
  autocomplete?: string,
  placeholder?: string
}

const TextInput: FC<Props> = ({
  label,
  setFunction,
  required,
  value,
  disabled,
  height,
  maxLength,
  autocomplete,
  placeholder
}) => {
  const classes = useStyles();

  const [error, setError] = useState(false);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value);
    setError(false);
  };

  const handleOnBlur = () => {
    if (required && value.length === 0) {
      setError(true);
    }
  };

  return (
    <div className={classes.inputContainer}>
      {
        label &&
          <div className={classes.inputLabel}>
            {label}
          </div>
      }
      <TextField
        inputProps={{
          style: {
            height: height ?? '40px',
            borderRadius: 0,
            boxSizing: 'border-box',
            fontSize: 'inherit'
          },
          maxLength: maxLength || 524288
        }}
        InputProps={{
          classes: {
            input: classes.inputRoot
          },
          autoComplete: 'off'
        }}
        value={value}
        fullWidth
        disabled={disabled}
        onChange={handleTextChange}
        onBlur={handleOnBlur}
        required={required}
        autoComplete={autocomplete}
        error={error}
        helperText={error && 'Поле обязательно для заполнения'}
        placeholder={placeholder}
      />
    </div>
  );
};

const useStyles = createUseStyles({
  inputRoot: {
    '&::placeholder': {
      color: INPUT_PLACEHOLDER_COLOR,
      opacity: 1
    }
  },
  inputLabel: {
    marginBottom: 20,
    fontWeight: 500,
    position: 'relative'
  },
  inputContainer: {
    position: 'relative'
  },
});

export default TextInput;
