import React, {ReactElement} from 'react';
import {AppProps} from 'next/app';

import {wrapper} from '$/store';
import {fetchWordById} from '$/features/words/wordsThunks';
import MainLayout from '$/layouts/MainLayout';
import WordHeader from '$/components/layout/WordHeader';
import {fetchSentencesForWord} from '$/features/sentences/sentencesThunks';
import SentenceList from '$/components/sentences/SentenceList';
import {setCurrentViewWord} from '$/features/words/wordsSlice';
import WordsPageHeader from '$/components/layout/WordsPageHeader';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({query}) => {
  const wordId = Number.parseInt(query?.wordId as string);
  const word = await store.dispatch(fetchWordById(wordId)).unwrap();
  store.dispatch(setCurrentViewWord(word));
  await store.dispatch(fetchSentencesForWord(wordId)).unwrap();

  return {props: {word}};
});

const WordPage = () => {
  return (
    <>
      <WordsPageHeader />
      <WordHeader/>
      <SentenceList/>
    </>
  );
};

WordPage.getLayout = function getLayout(pageProps: AppProps, page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  );
};

export default WordPage;
