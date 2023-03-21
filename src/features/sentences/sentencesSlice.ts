import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Sentence} from '@prisma/client';
import {HYDRATE} from 'next-redux-wrapper';

export interface SentencesState {
  sentences: Record<number, Sentence[]>
}

const initialState: SentencesState = {
  sentences: {}
};

export const sentencesSlice = createSlice({
  name: 'sentences',
  initialState,
  reducers: {
    editSentenceLocal: (state, action: PayloadAction<Sentence>) => {
      const index = state.sentences[action.payload.wordId].findIndex((sentence) => sentence.id === action.payload.id);
      state.sentences[action.payload.wordId][index] = action.payload;
    },
    setSentences: (state, action: PayloadAction<{wordId: number, sentences: Sentence[]}>) => {
      state.sentences[action.payload.wordId] = action.payload.sentences;
    },
    addSentence: (state, action: PayloadAction<{wordId: number, sentence: Sentence}>) => {
      if (!state.sentences[action.payload.wordId]?.length) {
        state.sentences[action.payload.wordId] = [];
      }
      state.sentences[action.payload.wordId].push(action.payload.sentence);
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.sentences = {...state.sentences, ...action.payload.sentences.sentences};
    },
  },
});

export const {
  editSentenceLocal,
  setSentences,
  addSentence
} = sentencesSlice.actions;

export default sentencesSlice.reducer;
