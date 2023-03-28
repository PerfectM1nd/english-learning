import React, {FC} from 'react';
import {createUseStyles} from 'react-jss';
import Link from 'next/link';

interface Props {

}

const Header: FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link href="/" className={classes.link}>
        WORDS
      </Link>
      <Link href="/practice" className={classes.link}>
        PRACTISE
      </Link>
    </div>
  );
};

const useStyles = createUseStyles({
  link: {
    color: 'aqua',
    fontSize: 25,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  container: {
    minHeight: 100,
    maxHeight: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  }
});

export default Header;