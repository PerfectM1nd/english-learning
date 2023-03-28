import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Lesson, LessonSentence} from '@prisma/client';
import {HYDRATE} from 'next-redux-wrapper';

export interface PracticeState {
  lessons: Lesson[],
  lessonSentences: Record<number, LessonSentence[]>
}

const initialState: PracticeState = {
  lessons: [],
  lessonSentences: {}
};

export const practiceSlice = createSlice({
  name: 'practice',
  initialState,
  reducers: {
    deleteLessonSentenceLocal: (state, action: PayloadAction<{lessonId: number, lessonSentenceId: number}>) => {
      state.lessonSentences[action.payload.lessonId] = state.lessonSentences[action.payload.lessonId]
        .filter(sentence => sentence.id !== action.payload.lessonSentenceId);
    },
    addLessonSentence: (state, action: PayloadAction<{lessonId: number, lessonSentence: LessonSentence}>) => {
      if (state.lessonSentences[action.payload.lessonId]?.length) {
        state.lessonSentences[action.payload.lessonId].push(action.payload.lessonSentence);
      } else {
        state.lessonSentences[action.payload.lessonId] = [action.payload.lessonSentence];
      }
    },
    editLessonLocal: (state, action: PayloadAction<Lesson>) => {
      const index = state.lessons.findIndex((lesson) => lesson.id === action.payload.id);
      state.lessons[index] = action.payload;
    },
    setLessonSentences: (state, action: PayloadAction<{lessonId: number, lessonSentences: LessonSentence[]}>) => {
      state.lessonSentences[action.payload.lessonId] = action.payload.lessonSentences;
    },
    setLessons: (state, action: PayloadAction<Lesson[]>) => {
      state.lessons = action.payload;
    },
    addLesson: (state, action: PayloadAction<Lesson>) => {
      state.lessons.push(action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (state.lessons.length === 0) {
        state.lessons = action.payload.practice.lessons;
      }
      state.lessonSentences = {...state.lessonSentences, ...action.payload.practice.lessonSentences};
    },
  },
});

export const {
  deleteLessonSentenceLocal,
  addLessonSentence,
  editLessonLocal,
  addLesson,
  setLessonSentences,
  setLessons
} = practiceSlice.actions;

export default practiceSlice.reducer;
