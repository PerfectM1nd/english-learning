import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Lesson, LessonSentence} from '@prisma/client';
import {HYDRATE} from 'next-redux-wrapper';
import {shuffleArray} from '@/utils/array';

export interface PracticeState {
  lessons: Lesson[],
  lessonSentences: Record<number, LessonSentence[]>,
  shuffledLessonSentences: Record<number, LessonSentence[]>,
  repetitionModeEnabled: boolean
}

const initialState: PracticeState = {
  lessons: [],
  shuffledLessonSentences: {},
  lessonSentences: {},
  repetitionModeEnabled: false
};

export const practiceSlice = createSlice({
  name: 'practice',
  initialState,
  reducers: {
    shuffleLessonSentences: (state, action: PayloadAction<number>) => {
      state.shuffledLessonSentences[action.payload] = [...state.lessonSentences[action.payload]];
      shuffleArray(state.shuffledLessonSentences[action.payload]);
    },
    setRepetitionModeEnabled: (state, action: PayloadAction<boolean>) => {
      state.repetitionModeEnabled = action.payload;
    },
    deleteLessonSentenceLocal: (state, action: PayloadAction<{lessonId: number, lessonSentenceId: number}>) => {
      state.lessonSentences[action.payload.lessonId] = state.lessonSentences[action.payload.lessonId]
        .filter(sentence => sentence.id !== action.payload.lessonSentenceId);
    },
    editLessonSentenceLocal: (state, action: PayloadAction<{lessonId: number, lessonSentenceId: number, lessonSentence: LessonSentence}>) => {
      const index = state.lessonSentences[action.payload.lessonId]
        .findIndex(lessonSentence => lessonSentence.id === action.payload.lessonSentenceId);
      state.lessonSentences[action.payload.lessonId][index] = action.payload.lessonSentence;

      if (state.shuffledLessonSentences[action.payload.lessonId]) {
        const shuffleIndex = state.shuffledLessonSentences[action.payload.lessonId]
          .findIndex(lessonSentence => lessonSentence.id === action.payload.lessonSentenceId);
        state.shuffledLessonSentences[action.payload.lessonId][shuffleIndex] = action.payload.lessonSentence;
      }
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
      state.shuffledLessonSentences[action.payload.lessonId] = [...action.payload.lessonSentences];
      shuffleArray(state.shuffledLessonSentences[action.payload.lessonId]);
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
  shuffleLessonSentences,
  editLessonSentenceLocal,
  setRepetitionModeEnabled,
  deleteLessonSentenceLocal,
  addLessonSentence,
  editLessonLocal,
  addLesson,
  setLessonSentences,
  setLessons
} = practiceSlice.actions;

export default practiceSlice.reducer;
