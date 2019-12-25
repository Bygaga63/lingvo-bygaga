import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Word {
    id: string;
    value: string;
    translate: string;
};


interface WordsState {
    isLoading: boolean
    error: string | null
    data: Record<string, Word>
}

const wordsInitialState: WordsState = {
    data: {
        '1': {id: '1', value: 'Man', translate: 'Мужчина'},
        '2': {id: '2', value: 'Girl', translate: 'Девушка'}
    },
    isLoading: false,
    error: null
};


const words = createSlice({
    name: 'words',
    initialState: wordsInitialState,
    reducers: {
        addWord(state, {payload}: PayloadAction<Word>) {
            const {id} = payload;
            state.data[id] = (payload);
        },
        removeWord(state, {payload}: PayloadAction<string>) {
            delete state.data[payload]
        }
    },
});

export const {
    addWord, removeWord
} = words.actions;

export default words.reducer;
