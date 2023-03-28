import React, {FC, useEffect, useRef, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {useAppDispatch} from '@/app/store';
import {createLessonSentence} from '@/features/practiсe/practiceThunks';
import TextareaAutosize from 'react-textarea-autosize';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import {Checkbox, FormControlLabel} from '@mui/material';

interface Props {
  lessonId: number
}

const LessonSentenceAddBlock: FC<Props> = ({lessonId}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [englishText, setEnglishText] = useState('');
  const [russianText, setRussianText] = useState('');
  const [mistaken, setMistaken] = useState(false);

  const [currentVoiceInput, setCurrentVoiceInput] = useState<'russian' | 'english'>('russian');

  const englishInputRef = useRef<HTMLTextAreaElement>(null);
  const russianInputRef = useRef<HTMLTextAreaElement>(null);

  const {
    transcript
  } = useSpeechRecognition();

  useEffect(() => {
    currentVoiceInput === 'russian' ?
      setRussianText(transcript.charAt(0).toUpperCase() + transcript.substring(1)) :
      setEnglishText(transcript.charAt(0).toUpperCase() + transcript.substring(1));
  }, [transcript]);
  
  useEffect(() => {
    russianInputRef.current?.addEventListener('blur', handleInputBlur);
    englishInputRef.current?.addEventListener('blur', handleInputBlur);
    return () => {
      russianInputRef.current?.removeEventListener('blur', handleInputBlur);
      englishInputRef.current?.removeEventListener('blur', handleInputBlur);
    };
  }, []);
  
  const handleInputBlur = () => {
    SpeechRecognition.stopListening();
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      createSentence();
      return;
    }
    if (event.key === '<') {
      russianInputRef.current?.focus();
      event.preventDefault();
      setCurrentVoiceInput('russian');
      SpeechRecognition.startListening({language: 'ru'});
    }
    if (event.key === '/') {
      englishInputRef.current?.focus();
      event.preventDefault();
      setCurrentVoiceInput('english');
      SpeechRecognition.startListening({language: 'en-US'});
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
  
  const createSentence = () => {
    dispatch(createLessonSentence({
      lessonId,
      englishText,
      russianText,
      mistaken
    }));
    setEnglishText('');
    setRussianText('');
    setMistaken(false);
    SpeechRecognition.stopListening();
  };

  return (
    <div className={classes.container}>
      <div className={classes.inputLabel}>
        Sentence in Russian
      </div>
      <TextareaAutosize
        onChange={(event) => setRussianText(event.target.value)}
        value={russianText}
        ref={russianInputRef}
        className={classes.input}
      />
      <div className={classes.inputLabel}>
        Sentence in English
      </div>
      <TextareaAutosize
        onChange={(event) => setEnglishText(event.target.value)}
        value={englishText}
        ref={englishInputRef}
        className={classes.input}
      />
      <div className={classes.checkboxContainer}>
        <FormControlLabel
          control={<Checkbox
            checked={mistaken}
            onChange={(event) => setMistaken(event.target.checked)}
          />}
          label="Ошибся / Новая конструкция"
          className={classes.mistakenText}
        />
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  mistakenText: {
    backgroundColor: 'whitesmoke',
    color: 'black'
  },
  checkboxContainer: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    border: '1px solid rgba(0,0,0,0.3)',
    borderRadius: 3,
    width: '100%',
    boxSizing: 'border-box',
    fontSize: 18
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  inputLabel: {
    marginTop: 10,
    marginBottom: 10,
    color: 'black'
  },
  container: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: 'whitesmoke',
    width: 800,
    borderRadius: 10,
    boxSizing: 'border-box'
  }
});

export default LessonSentenceAddBlock;