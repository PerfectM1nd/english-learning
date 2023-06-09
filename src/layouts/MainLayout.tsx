import React, {FC} from 'react';
import {createUseStyles} from 'react-jss';
import {Varela_Round} from '@next/font/google';

import Header from '$/components/layout/Header';
import CreateWordDialog from '$/components/dialogs/CreateWordDialog';
import {PRIMARY_COLOR} from '$/app/colors';
import CreateSentenceDialog from '$/components/dialogs/CreateSentenceDialog';
import EditWordDialog from '$/components/dialogs/EditWordDialog';
import EditSentenceDialog from '$/components/dialogs/EditSentenceDialog';
import CreateLessonDialog from '$/components/dialogs/CreateLessonDialog';
import EditLessonDialog from '$/components/dialogs/EditLessonDialog';
import EditLessonSentenceDialog from '$/components/dialogs/EditLessonSentenceDialog';
import useNotifier from '$/components/providers/NotificationProvider';

export const VarelaRoundedFont = Varela_Round({
  weight: ['400'],
  subsets: ['latin'],
  display: 'fallback',
  fallback: ['sans-serif']
});

interface Props {
  children: React.ReactNode;
}

const MainLayout: FC<Props> = ({children}) => {
  const classes = useStyles();

  useNotifier();

  return (
    <main className={`${classes.container} ${VarelaRoundedFont.className}`}>
      <Header />
      {children}
      <CreateWordDialog />
      <CreateSentenceDialog />
      <EditWordDialog />
      <EditSentenceDialog />
      <CreateLessonDialog />
      <EditLessonDialog />
      <EditLessonSentenceDialog />
    </main>
  );
};

const useStyles = createUseStyles({
  container: {
    padding: '0 200px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: PRIMARY_COLOR
  }
});

export default MainLayout;