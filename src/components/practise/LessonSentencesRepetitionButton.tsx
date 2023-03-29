import React from 'react';
import {createUseStyles} from 'react-jss';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {useAppDispatch, useAppSelector} from '@/app/store';
import {setRepetitionModeEnabled} from '@/features/practiсe/practiceSlice';

const LessonSentencesRepetitionButton = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const repetitionModeEnabled = useAppSelector(state => state.practice.repetitionModeEnabled);

  const handleButtonClick = () => {
    repetitionModeEnabled ?
      dispatch(setRepetitionModeEnabled(false)) :
      dispatch(setRepetitionModeEnabled(true));
  };

  return (
    <div className={classes.container}>
      <PrimaryButton
        buttonText={repetitionModeEnabled ? 'DISABLE REPETITION' : 'ENABLE REPETITION'}
        onClick={handleButtonClick}
        containerClassName={classes.buttonContainer}
        textClassName={classes.buttonText}
      />
    </div>
  );
};

const useStyles = createUseStyles({
  buttonText: {
    color: 'black'
  },
  buttonContainer: {
    backgroundColor: 'white',
    width: 200,
    '&:hover': {
      backgroundColor: 'white',
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});

export default LessonSentencesRepetitionButton;