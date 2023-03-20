import React, {FC, useEffect} from 'react';
import {createUseStyles} from "react-jss";
import {Prisma} from "@prisma/client";
import Word from "@/components/Word";
import Sentence from "@/components/Sentence";

interface Props {
  sentences: Prisma.SentenceSelect[]
}

const WordsList: FC<Props> = ({sentences}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {
        sentences?.map((sentence) => {
          return <Sentence sentence={sentence} />
        })
      }
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    width: '50vw',
    padding: 20,
    gap: 10
  }
});

export default WordsList;