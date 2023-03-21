import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Word} from '@prisma/client';
import {HYDRATE} from 'next-redux-wrapper';

export interface WordsState {
  words: Word[],
  currentViewWord: Word | null,
  searchString: string
}

const initialState: WordsState = {
  words: [],
  currentViewWord: null,
  searchString: ''
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    setWordSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
    editWordLocal: (state, action: PayloadAction<Word>) => {
      const index = state.words.findIndex(word => word.id === action.payload.id);
      state.words[index] = action.payload;
      state.currentViewWord = action.payload;
    },
    setWords: (state, action: PayloadAction<Word[]>) => {
      state.words = action.payload;
    },
    addWord: (state, action: PayloadAction<Word>) => {
      state.words.push(action.payload);
    },
    setCurrentViewWord: (state, action: PayloadAction<Word | null>) => {
      state.currentViewWord = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (state.words.length === 0) {
        state.words = action.payload.words.words;
      }
      state.currentViewWord =  action.payload.words.currentViewWord;
    },
  },
});

export const {
  setWordSearchString,
  editWordLocal,
  setCurrentViewWord,
  setWords,
  addWord
} = wordsSlice.actions;

export default wordsSlice.reducer;
