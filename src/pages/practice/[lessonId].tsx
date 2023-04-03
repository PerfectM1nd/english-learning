import React, {ReactElement} from 'react';
import {AppProps} from 'next/app';

import {wrapper} from '$/store';
import MainLayout from '$/layouts/MainLayout';
import {fetchLessonSentences} from '$/features/practiсe/practiceThunks';
import LessonSentencesList from '$/components/practise/lessonSentences/LessonSentencesList';
import {NextPageWithLayout} from '$/pages/_app';
import LessonSentenceAddBlock from '$/components/practise/lessonSentences/LessonSentenceAddBlock';
import LessonSentencesHeader from '$/components/layout/LessonSentencesHeader';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({query}) => {
  const lessonId = Number.parseInt(query?.lessonId as string);
  await store.dispatch(fetchLessonSentences(lessonId)).unwrap();
  
  return {
    props: {lessonId}
  };
});

interface Props {
  lessonId: number
}

const LessonSentencesPage: NextPageWithLayout<Props> = ({lessonId}) => {
  return (
    <>
      <LessonSentencesHeader />
      <LessonSentenceAddBlock lessonId={lessonId} />
      <LessonSentencesList lessonId={lessonId}/>
    </>
  );
};

LessonSentencesPage.getLayout = function getLayout(pageProps: AppProps, page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default LessonSentencesPage;
