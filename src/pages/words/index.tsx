import React, {ReactElement} from 'react';
import {AppProps} from 'next/app';

import WordsList from '$/components/words/WordsList';
import {wrapper} from '$/store';
import {fetchWords} from '$/features/words/wordsThunks';
import MainLayout from '$/layouts/MainLayout';
import WordsSearchBar from '$/components/search/WordsSearchBar';
import WordsPageHeader from '$/components/layout/WordsPageHeader';

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  await store.dispatch(fetchWords());

  return {props: {}};
});

export default function HomePage() {
  return (
    <>
      <WordsPageHeader />
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
