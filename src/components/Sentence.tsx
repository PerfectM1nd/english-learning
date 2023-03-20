import React, {FC, useState} from 'react';
import {Prisma} from "@prisma/client";
import {createUseStyles} from "react-jss";

interface Props {
  sentence: Prisma.SentenceSelect
}

const Word: FC<Props> = ({sentence}) => {
  const classes = useStyles();

  const playSound = () => {
    const msg = new SpeechSynthesisUtterance(sentence.sentence);
    window.speechSynthesis.speak(msg);
  }

  return (
    <div className={classes.container} onClick={playSound}>
      {sentence.sentence}
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize: 20,
    color: 'black',
    padding: 5,
    marginBottom: 5,
    cursor: 'pointer'
  }
});

export default Word;