import React, {FC, useEffect, useRef, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {useAppDispatch} from '@/app/store';
import {createLessonSentence} from '@/features/practiсe/practiceThunks';
import TextareaAutosize from 'react-textarea-autosize';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import {Checkbox, FormControlLabel, Typography} from '@mui/material';
import {theme} from '@/app/theme';
import {LessonSentenceStatus} from '@/types/Lesson';

interface Props {
  lessonId: number
}

const LessonSentenceAddBlock: FC<Props> = ({lessonId}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [englishText, setEnglishText] = useState('');
  const [russianText, setRussianText] = useState('');
  const [status, setStatus] = useState<LessonSentenceStatus | null>(null);
  const [commentary, setCommentary] = useState('');
  const [showCommentaryField, setShowCommentaryField] = useState(false);

  const [currentVoiceInput, setCurrentVoiceInput] = useState<'russian' | 'english'>('russian');

  const englishInputRef = useRef<HTMLTextAreaElement>(null);
  const russianInputRef = useRef<HTMLTextAreaElement>(null);
  const commentaryInputRef = useRef<HTMLTextAreaElement>(null);

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
    if (event.key === '1') {
      event.preventDefault();
      setStatus('fluent');
    }
    if (event.key === '2') {
      event.preventDefault();
      setStatus('uncertain');
    }
    if (event.key === '3') {
      event.preventDefault();
      setStatus('mistaken');
    }
    if (event.key === '4') {
      event.preventDefault();
      setStatus('error');
    }
    if (event.key === '\\') {
      event.preventDefault();
      if (!showCommentaryField) {
        setCommentary('');
        setTimeout(() => commentaryInputRef.current?.focus(), 100);
      }
      setShowCommentaryField(!showCommentaryField);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
  
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
    setStatus(null);
    SpeechRecognition.stopListening();
  };

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
              checked={status === 'fluent'}
              onChange={(event) => setStatus(event.target.checked ? 'fluent' : null)}
            />
          }
          label={<Typography fontWeight={700} color="#61a821" sx={{userSelect: 'none'}}>Бегло</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              checked={status === 'uncertain'}
              onChange={(event) => setStatus(event.target.checked ? 'uncertain' : null)}
            />
          }
          label={<Typography fontWeight={700} color="#ffcb14" sx={{userSelect: 'none'}}>Неуверенно</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="warning"
              checked={status === 'mistaken'}
              onChange={(event) => setStatus(event.target.checked ? 'mistaken' : null)}
            />
          }
          label={<Typography fontWeight={700} color={theme.palette.warning.main} sx={{userSelect: 'none'}}>С ошибкой</Typography>}
        />
        <FormControlLabel
          control={
            <Checkbox
              color="error"
              checked={status === 'error'}
              onChange={(event) => setStatus(event.target.checked ? 'error' : null)}
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
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