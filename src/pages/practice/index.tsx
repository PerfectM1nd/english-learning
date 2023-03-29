import React, {ReactElement} from 'react';
import {wrapper} from '@/app/store';
import {AppProps} from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import LessonsHeader from '@/components/layout/LessonsHeader';
import {fetchLessons} from '@/features/practiсe/practiceThunks';
import LessonsList from '@/components/practise/lesson/LessonsList';

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchLessons());

  return {props: {}};
});

export default function PractisePage() {
  return (
    <>
      <LessonsHeader />
      <LessonsList />
    </>
  );
}

PractisePage.getLayout = function getLayout(pageProps: AppProps, page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};
