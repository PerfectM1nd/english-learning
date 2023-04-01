import React, {ReactElement} from 'react';
import {AppProps} from 'next/app';

import MainLayout from '$/layouts/MainLayout';

export default function HomePage() {
  return (
    <>
      Главная страница, контента еще нет
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
