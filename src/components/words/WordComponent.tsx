import React, {FC} from 'react';
import {useRouter} from 'next/router';
import {Word} from '@prisma/client';
import {createUseStyles} from 'react-jss';
import {Howl} from 'howler';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import TouchableOpacity from '$/components/ui/TouchableOpacity';

interface Props {
  word: Word
}

const WordComponent: FC<Props> = ({word}) => {
  const classes = useStyles();
  const router = useRouter();

  const pronounceWord = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (word.audioUrl) {
      const sound = new Howl({
        src: word.audioUrl,
        html5: true
      });
      sound.play();
    } else {
      const msg = new SpeechSynthesisUtterance(word.text);
      window.speechSynthesis.speak(msg);
    }
  };

  return (
    <TouchableOpacity
      className={classes.container}
      onClick={() => router.push('sentences/' + word.id)}
    >
      <div className={classes.label}>
        {word.text}
      </div>
      <TouchableOpacity onClick={pronounceWord} className={classes.button}>
        <VolumeUpIcon sx={{height: 25, width: 25}}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const useStyles = createUseStyles({
  button: {
    position: 'absolute',
    right: 5,
    top: 0,
    minHeight: 40,
    maxHeight: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    color: 'rgba(0,0,0,0.5)',
    zIndex: 2
  },
  label: {
    marginRight: 5
  },
  container: {
    position: 'relative',
    paddingRight: 30,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize: 22,
    color: 'black',
    padding: 5,
    cursor: 'pointer',
    marginRight: 20,
    marginBottom: 20,
    minHeight: 40,
    maxHeight: 40,
    boxSizing: 'border-box',
    width: 'max-content'
  }
});

export default WordComponent;