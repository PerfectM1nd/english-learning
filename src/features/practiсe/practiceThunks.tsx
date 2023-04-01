import {createAsyncThunk} from '@reduxjs/toolkit';
import {LessonSentenceStatus} from '@prisma/client';

import {showNetworkError} from '$/utils/snackbar';
import api from '$/utils/api';
import {
  addLesson,
  addLessonSentence, deleteLessonSentenceLocal,
  editLessonLocal, editLessonSentenceLocal,
  setLessons,
  setLessonSentences
} from '$/features/practiсe/practiceSlice';
import prisma from '$/prisma';

export const editLessonSentence = createAsyncThunk(
  'practice/createLessonSentence',
  async (createData: {
    id: number,
    lessonId: number,
    englishText: string,
    russianText: string,
    status: LessonSentenceStatus,
    commentary: string
  }, {dispatch}) => {
    try {
      const response = await api.patch('/lessonSentences', createData);
      dispatch(editLessonSentenceLocal({
        lessonId: createData.lessonId,
        lessonSentenceId: createData.id,
        lessonSentence: response.data
      }));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('createLessonSentence ERROR:', error);
      throw error;
    }
  }
);

export const deleteLessonSentence = createAsyncThunk(
  'practice/deleteLessonSentence',
  async ({lessonId, lessonSentenceId}: { lessonId: number, lessonSentenceId: number }, {dispatch}) => {
    try {
      await api.delete('/lessonSentences?lessonSentenceId=' + lessonSentenceId);
      dispatch(deleteLessonSentenceLocal({lessonId, lessonSentenceId}));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('deleteLessonSentence ERROR:', error);
      throw error;
    }
  }
);

export const createLessonSentence = createAsyncThunk(
  'practice/createLessonSentence',
  async (createData: {
    lessonId: number,
    englishText: string,
    russianText: string,
    status: LessonSentenceStatus,
    commentary: string
  }, {dispatch}) => {
    try {
      const response = await api.post('/lessonSentences', createData);
      dispatch(addLessonSentence({lessonId: createData.lessonId, lessonSentence: response.data}));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('createLessonSentence ERROR:', error);
      throw error;
    }
  }
);

export const fetchLessonSentences = createAsyncThunk(
  'practice/fetchLessonSentences',
  async (lessonId: number, {dispatch}) => {
    try {
      const lessonSentences = await prisma.lessonSentence.findMany({
        where: {
          lessonId
        },
        orderBy: [
          {
            id: 'desc'
          }
        ]
      });
      dispatch(setLessonSentences({lessonId, lessonSentences}));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('fetchLessonSentences ERROR:', error);
      throw error;
    }
  }
);

export const editLesson = createAsyncThunk(
  'practice/editLesson',
  async (editData: { id: number, title: string, level: string }, {dispatch}) => {
    try {
      const response = await api.patch('/lessons', editData);
      dispatch(editLessonLocal(response.data));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('editLesson ERROR:', error);
      throw error;
    }
  }
);

export const fetchLessons = createAsyncThunk(
  'practice/fetchLessons',
  async (_, {dispatch}) => {
    try {
      const lessons = await prisma.lesson.findMany({
        orderBy: {
          id: 'desc'
        }
      });
      dispatch(setLessons(lessons));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('fetchLessons ERROR:', error);
      throw error;
    }
  }
);

export const createNewLesson = createAsyncThunk(
  'practice/createNewLesson',
  async (createData: { title: string, level: string }, {dispatch}) => {
    try {
      const response = await api.post('/lessons', createData);
      dispatch(addLesson(response.data));
    } catch (error) {
      showNetworkError(dispatch);
      console.error('createNewLesson ERROR:', error);
      throw error;
    }
  }
);