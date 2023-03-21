import React, {ReactElement} from 'react';
import WordsList from '@/components/words/WordsList';
import {wrapper} from '@/app/store';
import {fetchWords} from '@/features/words/wordsThunks';
import {AppProps} from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import WordsSearchBar from '@/components/search/WordsSearchBar';

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchWords());

  return {props: {}};
});

export default function HomePage() {
  return (
    <>
      <WordsSearchBar />
      <WordsList />
    </>
  );
}

HomePage.getLayout = function getLayout(pageProps: AppProps, page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};
