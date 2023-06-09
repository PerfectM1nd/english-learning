import React, {useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {Word} from '@prisma/client';

import WordComponent from '$/components/words/WordComponent';
import {useAppSelector} from '$/store';

const WordsList = () => {
  const classes = useStyles();
  const words = useAppSelector(state => state.words.words);
  const searchString = useAppSelector(state => state.words.searchString);
  
  const [displayingWords, setDisplayingWords] = useState<Word[]>(words);
  
  const filterWords = () => {
    if (!searchString) {
      setDisplayingWords(words);
      return;
    }
    setDisplayingWords(words.filter(word => word.text.includes(searchString)));
  };
  
  useEffect(() => {
    filterWords();
  }, [searchString]);

  return (
    <div className={classes.container}>
      {
        displayingWords?.map((word) => {
          return <WordComponent key={word.id} word={word} />;
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
    flexWrap: 'wrap',
    marginTop: 50
  }
});

export default WordsList;