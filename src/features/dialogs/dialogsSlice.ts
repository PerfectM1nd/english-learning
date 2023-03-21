import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Sentence} from '@prisma/client';

export interface DialogsState {
  wordCreateDialogOpen: boolean
  wordEditDialogOpen: boolean
  sentenceCreateDialogOpen: boolean,
  sentenceEditDialogOpen: boolean,
  editingSentence: Sentence | null
}

const initialState: DialogsState = {
  wordCreateDialogOpen: false,
  wordEditDialogOpen: false,
  sentenceCreateDialogOpen: false,
  sentenceEditDialogOpen: false,
  editingSentence: null
};

export const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
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
  setEditingSentence,
  setWordCreateDialogOpen,
  setWordEditDialogOpen,
  setSentenceCreateDialogOpen,
  setSentenceEditDialogOpen,
} = dialogsSlice.actions;

export default dialogsSlice.reducer;
