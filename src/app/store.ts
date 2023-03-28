import {
  Action,
  combineReducers, configureStore,
  ThunkAction
} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import snackbarSlice from '@/features/snackbar/snackbarSlice';
import wordsSlice from '@/features/words/wordsSlice';
import sentencesSlice from '@/features/sentences/sentencesSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import dialogsSlice from '@/features/dialogs/dialogsSlice';
import practiceSlice from '@/features/practiсe/practiceSlice';

const reducer = combineReducers({
  dialogs: dialogsSlice,
  sentences: sentencesSlice,
  snackbar: snackbarSlice,
  words: wordsSlice,
  practice: practiceSlice
});

export const makeStore = () =>
  configureStore({
    reducer
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper(makeStore, {debug: true});