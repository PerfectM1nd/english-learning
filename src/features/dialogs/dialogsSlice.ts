import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Lesson, LessonSentence, Sentence} from '@prisma/client';

export interface DialogsState {
  wordCreateDialogOpen: boolean
  wordEditDialogOpen: boolean
  sentenceCreateDialogOpen: boolean,
  sentenceEditDialogOpen: boolean,
  editingSentence: Sentence | null,
  createLessonDialogOpen: boolean,
  editLessonDialogOpen: boolean,
  editingLesson: Lesson | null,
  addLessonSentenceDialogOpen: boolean,
  editLessonSentenceDialogOpen: boolean,
  editingLessonSentence: LessonSentence | null,
}

const initialState: DialogsState = {
  wordCreateDialogOpen: false,
  wordEditDialogOpen: false,
  sentenceCreateDialogOpen: false,
  sentenceEditDialogOpen: false,
  editingSentence: null,
  createLessonDialogOpen: false,
  editLessonDialogOpen: false,
  editingLesson: null,
  addLessonSentenceDialogOpen: false,
  editLessonSentenceDialogOpen: false,
  editingLessonSentence: null
};

export const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    setEditingLessonSentence: (state, action: PayloadAction<LessonSentence>) => {
      state.editingLessonSentence = action.payload;
    },
    setEditLessonSentenceDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.editLessonSentenceDialogOpen = action.payload;
    },
    setAddLessonSentenceDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.addLessonSentenceDialogOpen = action.payload;
    },
    setEditingLesson: (state, action: PayloadAction<Lesson>) => {
      state.editingLesson = action.payload;
    },
    setEditLessonDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.editLessonDialogOpen = action.payload;
    },
    setCreateLessonDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.createLessonDialogOpen = action.payload;
    },
    setEditingSentence: (state, action: PayloadAction<Sentence>) => {
      state.editingSentence = action.payload;
    },
    setWordCreateDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.wordCreateDialogOpen = action.payload;
    },
    setWordEditDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.wordEditDialogOpen = action.payload;
    },
    setSentenceCreateDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.sentenceCreateDialogOpen = action.payload;
    },
    setSentenceEditDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.sentenceEditDialogOpen = action.payload;
    },
  }
});

export const {
  setAddLessonSentenceDialogOpen,
  setEditLessonSentenceDialogOpen,
  setEditingLessonSentence,
  setEditingLesson,
  setEditLessonDialogOpen,
  setCreateLessonDialogOpen,
  setEditingSentence,
  setWordCreateDialogOpen,
  setWordEditDialogOpen,
  setSentenceCreateDialogOpen,
  setSentenceEditDialogOpen,
} = dialogsSlice.actions;

export default dialogsSlice.reducer;
