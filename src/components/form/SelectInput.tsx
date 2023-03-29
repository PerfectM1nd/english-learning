import React, {FC} from 'react';
import {Select, SelectChangeEvent} from '@mui/material';
import {createUseStyles} from 'react-jss';

interface Props {
  label: string,
  setFunction(value: string | number): void,
  value: string,
  required?: boolean,
  containerStyle?: any,
  children: React.ReactNode
}

const SelectInput: FC<Props> = ({
  label,
  setFunction,
  value,
  required,
  containerStyle,
  children
}) => {
  const classes = useStyles();

  const handleValueChange = (event: SelectChangeEvent) => {
    setFunction(event.target.value);
  };

  return (
    <div className={classes.relative}>
      <div className={classes.inputContainer}>
        <div className={classes.inputLabel}>
          <span>{label}</span>
        </div>
        <Select
          value={value}
          fullWidth
          required={required}
          defaultValue=""
          onChange={handleValueChange}
          sx={{zIndex: 2, height: '40px', ...containerStyle}}
        >
          {children}
        </Select>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  relative: {
    position: 'relative'
  },
  inputLabel: {
    marginBottom: 20,
    fontWeight: 500,
    position: 'relative'
  },
  inputContainer: {
    position: 'relative'
  }
});

export default SelectInput;
