import React from 'react';
import {createUseStyles} from 'react-jss';
import SentenceComponent from '@/components/sentences/SentenceComponent';
import {Word} from '@prisma/client';
import {useAppSelector} from '@/app/store';

const SentenceList = () => {
  const classes = useStyles();
  const currentViewWord = useAppSelector(state => state.words.currentViewWord) as Word;
  const sentences = useAppSelector(state => state.sentences.sentences)[currentViewWord?.id];

  return (
    <div className={classes.container}>
      {
        sentences?.map((sentence) => {
          return <SentenceComponent key={sentence.id} sentence={sentence} />;
        })
      }
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    width: '50vw',
    padding: 20
  }
});

export default SentenceList;