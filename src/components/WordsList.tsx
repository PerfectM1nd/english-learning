import React, {FC, useEffect} from 'react';
import {createUseStyles} from "react-jss";
import {Prisma} from "@prisma/client";
import Word from "@/components/Word";

interface Props {
  words: Prisma.WordSelect[]
}

const WordsList: FC<Props> = ({words}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {
        words?.map((word) => {
          return <Word word={word} />
        })
      }
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10
  }
});

export default WordsList;