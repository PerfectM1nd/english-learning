import React, {ReactElement} from 'react';
import {wrapper} from '@/app/store';
import {AppProps} from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import {fetchLessonSentences} from '@/features/practiсe/practiceThunks';
import LessonSentencesList from '@/components/practise/LessonSentencesList';
import {NextPageWithLayout} from '@/pages/_app';
import LessonSentenceAddBlock from '@/components/practise/LessonSentenceAddBlock';

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
      <LessonSentencesList lessonId={lessonId}/>
      <LessonSentenceAddBlock lessonId={lessonId} />
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
