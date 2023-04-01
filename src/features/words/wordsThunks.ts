import {createAsyncThunk} from '@reduxjs/toolkit';

import prisma from '$/prisma';
import {addWord, editWordLocal, setWords} from '$/features/words/wordsSlice';
import {showNetworkError} from '$/utils/snackbar';
import api from '$/utils/api';

export const fetchWordById = createAsyncThunk(
  'words/getWordById',
  async (id: number, {dispatch}) => {
    try {
      return await prisma.word.findFirst({
        where: {id}
      });
    } catch (error) {
      showNetworkError(dispatch);
      console.error('getWordById ERROR:', error);
      throw error;
    }
  }
);

export const fetchWords = createAsyncThunk(
  'words/fetchWords',
  async (_, {dispatch}) => {
    try {
      const words = await prisma.word.findMany();
      dispatch(setWords(words));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('fetchWords ERROR:', error);
      throw error;
    }
  }
);

export const createNewWord = createAsyncThunk(
  'words/createNewWord',
  async (createData: { text: string, audioUrl: string }, {dispatch}) => {
    try {
      const response = await api.post('/words', createData);
      dispatch(addWord(response.data));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('createNewWord ERROR:', error);
      throw error;
    }
  }
);

export const editWord = createAsyncThunk(
  'words/editWord',
  async (editData: {id: number, text: string, audioUrl: string}, {dispatch}) => {
    try {
      const response = await api.patch('/words', editData);
      dispatch(editWordLocal(response.data));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('editWord ERROR:', error);
      throw error;
    }
  }
);