import React, {FC} from 'react';
import {createUseStyles} from 'react-jss';
import {useAppSelector} from '@/app/store';
import LessonSentenceListComponent from '@/components/practise/LessonSentenceListComponent';
import ScrollableFeed from 'react-scrollable-feed';

interface Props {
  lessonId: number
}

const LessonSentencesList: FC<Props> = ({lessonId}) => {
  const classes = useStyles();
  const lessonSentences = useAppSelector(state => state.practice.lessonSentences)[lessonId];

  return (
    // @ts-ignore
    <ScrollableFeed className={classes.container}>
      {lessonSentences?.map(lessonSentence => (
        <LessonSentenceListComponent key={lessonSentence.id} lessonSentence={lessonSentence} />
      ))}
    </ScrollableFeed>
  );
};

const useStyles = createUseStyles({
  container: {
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
});

export default LessonSentencesList;