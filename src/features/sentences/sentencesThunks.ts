import {createAsyncThunk} from '@reduxjs/toolkit';
import {Word} from '@prisma/client';

import {showNetworkError} from '$/utils/snackbar';
import prisma from '$/prisma';
import {addSentence, editSentenceLocal, setSentences} from '$/features/sentences/sentencesSlice';
import api from '$/utils/api';
import {RootState} from '$/store';


export const editSentence = createAsyncThunk(
  'sentences/editSentence',
  async (editData: {id: number, text: string}, {dispatch}) => {
    try {
      const response = await api.patch('/sentences', editData);
      dispatch(editSentenceLocal(response.data));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('editSentence ERROR:', error);
      throw error;
    }
  }
);

export const createNewSentence = createAsyncThunk(
  'sentences/createNewSentence',
  async (text: string, {dispatch, getState}) => {
    try {
      const currentViewWord = (getState() as RootState).words.currentViewWord as Word;
      const response = await api.post('/sentences', {
        wordId: currentViewWord.id,
        text
      });
      dispatch(addSentence({wordId: response.data.wordId, sentence: response.data}));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('createNewSentence ERROR:', error);
      throw error;
    }
  }
);

export const fetchSentencesForWord = createAsyncThunk(
  'sentences/fetchSentences',
  async (wordId: number, {dispatch}) => {
    try {
      const sentences = await prisma.sentence.findMany({
        where: {
          wordId
        }
      });
      dispatch(setSentences({wordId, sentences}));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('fetchSentences ERROR:', error);
      throw error;
    }
  }
);