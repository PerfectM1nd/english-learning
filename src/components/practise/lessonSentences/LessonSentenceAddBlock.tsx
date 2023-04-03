import React, {FC, useEffect, useRef, useState} from 'react';
import {createUseStyles} from 'react-jss';
import TextareaAutosize from 'react-textarea-autosize';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import {Checkbox, FormControlLabel, Typography} from '@mui/material';
import { LessonSentenceStatus } from '@prisma/client';

import {createLessonSentence} from '$/features/practiсe/practiceThunks';
import {useAppDispatch} from '$/store';
import {theme} from '$/app/theme';
import {LanguageEnum} from '$/enums';

interface Props {
  lessonId: number
}

const LessonSentenceAddBlock: FC<Props> = ({lessonId}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [englishText, setEnglishText] = useState('');
  const [russianText, setRussianText] = useState('');
  const [status, setStatus] = useState<LessonSentenceStatus>(LessonSentenceStatus.uncertain);
  const [commentary, setCommentary] = useState('');
  const [showCommentaryField, setShowCommentaryField] = useState(false);

  const [currentVoiceInput, setCurrentVoiceInput] = useState<LanguageEnum>(LanguageEnum.russian);

  const englishInputRef = useRef<HTMLTextAreaElement>(null);
  const russianInputRef = useRef<HTMLTextAreaElement>(null);
  const commentaryInputRef = useRef<HTMLTextAreaElement>(null);

  const {
    transcript
  } = useSpeechRecognition();
  
  const handleInputBlur = () => {
    SpeechRecognition.stopListening();
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Enter': {
        event.preventDefault();
        createSentence();
        return;
      }
      case '1': {
        russianInputRef.current?.focus();
        event.preventDefault();
        setCurrentVoiceInput(LanguageEnum.russian);
        SpeechRecognition.startListening({language: 'ru'});
        return;
      }
      case '2': {
        englishInputRef.current?.focus();
        event.preventDefault();
        setCurrentVoiceInput(LanguageEnum.english);
        SpeechRecognition.startListening({language: 'en-US'});
        return;
      }
      case '3': {
        event.preventDefault();
        setStatus(LessonSentenceStatus.fluent);
        return;
      }
      case '4': {
        event.preventDefault();
        setStatus(LessonSentenceStatus.uncertain);
        return;
      }
      case '5': {
        event.preventDefault();
        setStatus(LessonSentenceStatus.mistaken);
        return;
      }
      case '6': {
        event.preventDefault();
        setStatus(LessonSentenceStatus.error);
        return;
      }
      case '7': {
        event.preventDefault();
        if (!showCommentaryField) {
          setCommentary('');
          setTimeout(() => commentaryInputRef.current?.focus(), 100);
        }
        setShowCommentaryField(!showCommentaryField);
        return;
      }
    }
  };
  
  const createSentence = () => {
    if (!status) {
      alert('Fill in the status');
      return;
    }
    dispatch(createLessonSentence({
      lessonId,
      englishText,
      russianText,
      status,
      commentary
    }));
    setEnglishText('');
    setRussianText('');
    setCommentary('');
    setStatus(LessonSentenceStatus.uncertain);
    SpeechRecognition.stopListening();
  };

  useEffect(() => {
    currentVoiceInput === LanguageEnum.russian ?
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

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className={classes.container}>
      <div className={classes.inputLabel}>Sentence in Russian</div>
      <TextareaAutosize
        onChange={(event) => setRussianText(event.target.value)}
        value={russianText}
        ref={russianInputRef}
        className={classes.input}
      />
      <div className={classes.inputLabel}>Sentence in English</div>
      <TextareaAutosize
        onChange={(event) => setEnglishText(event.target.value)}
        value={englishText}
        ref={englishInputRef}
        className={classes.input}
      />
      <div style={{display: showCommentaryField ? 'block' : 'none'}}>
        <div className={classes.inputLabel}>Commentary</div>
        <TextareaAutosize
          onChange={(event) => setCommentary(event.target.value)}
          value={commentary}
          ref={commentaryInputRef}
          className={classes.input}
        />
      </div>
      <div className={classes.checkboxContainer}>
        <FormControlLabel
          control={
            <Checkbox
              color="success"
              checked={status === LessonSentenceStatus.fluent}
              onChange={() => setStatus(LessonSentenceStatus.fluent)}
            />
          }
          label={<Typography fontWeight={700} color="#61a821" sx={{userSelect: 'none'}}>Бегло</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              checked={status === LessonSentenceStatus.uncertain}
              onChange={() => setStatus(LessonSentenceStatus.uncertain)}
            />
          }
          label={<Typography fontWeight={700} color="#ffcb14" sx={{userSelect: 'none'}}>Неуверенно</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="warning"
              checked={status === LessonSentenceStatus.mistaken}
              onChange={() => setStatus(LessonSentenceStatus.mistaken)}
            />
          }
          label={<Typography fontWeight={700} color={theme.palette.warning.main} sx={{userSelect: 'none'}}>С ошибкой</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="error"
              checked={status === LessonSentenceStatus.error}
              onChange={() => setStatus(LessonSentenceStatus.error)}
            />
          }
          label={<Typography fontWeight={700} color="error" sx={{userSelect: 'none'}}>Неправильно</Typography>}
        />
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  checkboxContainer: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    padding: 10,
    border: '1px solid rgba(0,0,0,0.3)',
    borderRadius: 3,
    width: '100%',
    boxSizing: 'border-box',
    fontSize: 18
  },
  inputLabel: {
    marginTop: 10,
    marginBottom: 10,
    color: 'white'
  },
  container: {
    padding: 20,
    paddingTop: 10,
    width: 800,
    borderRadius: 10,
    boxSizing: 'border-box'
  }
});

export default LessonSentenceAddBlock;