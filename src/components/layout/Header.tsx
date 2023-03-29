import React, {FC} from 'react';
import {createUseStyles} from 'react-jss';
import Link from 'next/link';
import {useRouter} from 'next/router';

interface Props {

}

const Header: FC<Props> = () => {
  const classes = useStyles();
  const router = useRouter();
  
  const getClassName = (path: string) => {
    if (router.pathname === path) {
      return `${classes.link} ${classes.activeLink}`;
    }
    return classes.link;
  };

  return (
    <div className={classes.container}>
      <Link href="/" className={getClassName('/')}>
        HOME
      </Link>
      <Link href="/practice" className={getClassName('/practice')}>
        PRACTISE
      </Link>
      <Link href="/words" className={getClassName('/words')}>
        WORDS
      </Link>
    </div>
  );
};

const useStyles = createUseStyles({
  activeLink: {
    textDecoration: 'underline !important',
  },
  link: {
    color: 'aqua',
    fontSize: 25,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    margin: '0 15px'
  },
  container: {
    minHeight: 100,
    maxHeight: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Header;