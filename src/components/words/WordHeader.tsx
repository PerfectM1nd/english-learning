import React from 'react';
import {createUseStyles} from 'react-jss';
import {Howl} from 'howler';
import {useAppSelector} from '@/app/store';

const WordHeader = () => {
  const classes = useStyles();
  const currentViewWord = useAppSelector(state => state.words.currentViewWord);

  const pronounceWord = () => {
    if (currentViewWord?.audioUrl) {
      const sound = new Howl({
        src: currentViewWord?.audioUrl,
        html5: true
      });
      sound.play();
    } else {
      const msg = new SpeechSynthesisUtterance(currentViewWord?.text);
      window.speechSynthesis.speak(msg);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.title} onClick={pronounceWord}>
        {currentViewWord?.text}
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  title: {
    fontSize: 60,
    cursor: 'pointer'
  },
  container: {}
});

export default WordHeader;