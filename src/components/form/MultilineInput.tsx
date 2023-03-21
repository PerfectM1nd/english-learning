import React, {ChangeEvent, FC, useState} from 'react';
import {TextField} from '@mui/material';
import {createUseStyles} from 'react-jss';
import {INPUT_PLACEHOLDER_COLOR} from '@/app/colors';

interface Props {
  label: string,
  setFunction(value: string): void,
  required?: boolean,
  value: string,
  placeholder?: string,
  minRows?: number,
  autoFocus?: boolean
}

const MultilineInput: FC<Props> = ({
  label,
  setFunction,
  required,
  value,
  placeholder,
  minRows,
  autoFocus
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
      <div className={classes.inputLabel}>
        <span>{label}</span>
      </div>
      <TextField
        autoFocus={autoFocus}
        value={value}
        variant="outlined"
        fullWidth
        multiline
        required={required}
        minRows={minRows || 5}
        onChange={handleTextChange}
        InputProps={{
          classes: {
            input: classes.inputSeparatePlaceholder
          }
        }}
        inputProps={{
          maxLength: 10000
        }}
        onBlur={handleOnBlur}
        error={error}
        helperText={error && 'Поле обязательно для заполнения'}
      />
      {
        !value &&
          <div className={classes.placeholder}>
            <span className={classes.inputPlaceholder}>
              {placeholder === '' ? '' : placeholder || 'Введите текст'}
            </span>
          </div>
      }
    </div>
  );
};

const useStyles = createUseStyles({
  inputPlaceholder: {
    color: INPUT_PLACEHOLDER_COLOR,
    paddingLeft: 4
  },
  placeholder: {
    position: 'absolute',
    top: 56,
    left: 15,
    zIndex: -1
  },
  inputSeparatePlaceholder: {
    '&::placeholder': {
      color: INPUT_PLACEHOLDER_COLOR,
      paddingLeft: 4
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
  mobilePlaceholder: {
    position: 'absolute',
    top: 42,
    left: 15,
    zIndex: -1
  },
  desktopPlaceholder: {
    position: 'absolute',
    top: 56,
    left: 15,
    zIndex: -1
  },
});

export default MultilineInput;
