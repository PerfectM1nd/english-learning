import React, {FC} from 'react';
import {CircularProgress} from '@mui/material';
import {createUseStyles} from 'react-jss';

import TouchableOpacity from '$/components/ui/TouchableOpacity';
import {DISABLED_BUTTON_COLOR, LIGHTENED_PRIMARY_COLOR, PRIMARY_COLOR} from '$/app/colors';

interface Props {
  buttonText: string,
  onClick(): void,
  textClassName?: string,
  containerClassName?: string,
  loading?: boolean,
  width?: number,
  disabled?: boolean
}

const PrimaryButton: FC<Props> = ({
  buttonText,
  onClick,
  textClassName,
  containerClassName,
  loading,
  width,
  disabled
}) => {
  const classes = useStyles({theme: {disabled: !!disabled}});

  return (
    <div
      className={`${classes.container} ${containerClassName}`}
      onClick={(loading || disabled) ? () => null : onClick}
      style={width ? {width: width} : {}}
    >
      <TouchableOpacity
        className={classes.ripple}
        disabled={disabled}
      >
        {
          loading ?
            <CircularProgress sx={{color: 'white'}} size={30}/>
            : <span className={`${classes.buttonText} ${textClassName}`}>{buttonText}</span>
        }
      </TouchableOpacity>
    </div>
  );
};

const useStyles = createUseStyles(({disabled}: {disabled: boolean}) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    height: 45,
    borderRadius: 3,
    fontSize: 15,
    backgroundColor: disabled ? DISABLED_BUTTON_COLOR : PRIMARY_COLOR,
    color: 'white',
    transition: 'background-color .2s, transform .1s, box-shadow .1s',
    '&:hover': {
      backgroundColor: disabled ? DISABLED_BUTTON_COLOR : LIGHTENED_PRIMARY_COLOR
    },
    '&:active': {
      boxShadow: disabled ? DISABLED_BUTTON_COLOR : PRIMARY_COLOR + ' 0px 10px 10px -14px;'
    },
    boxShadow: disabled ? DISABLED_BUTTON_COLOR : PRIMARY_COLOR + ' 0px 10px 10px -11px;',
    '-webkit-tap-highlight-color': 'transparent',
    touchAction: 'manipulation',
    userSelect: 'none'
  },
  ripple: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 500,
  }
}));

export default PrimaryButton;
