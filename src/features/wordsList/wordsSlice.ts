import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Word} from "../../api/skyengAPI";
import {AppThunk} from "../../app/store";
import {skyengAPI} from "../../api";



interface WordsState {
    isLoading: boolean;
    error: string | null;
    data: Word[];
}

const wordsInitialState: WordsState = {
    data: [],
    isLoading: false,
    error: null
};

function startLoading(state: WordsState) {
    state.isLoading = true
}

function loadingFailed(state: WordsState, action: PayloadAction<string>) {
    state.isLoading = false;
    state.error = action.payload
}

function loadingSuccess(state: WordsState) {
    state.isLoading = false;
    state.error = null;
}

const words = createSlice({
    name: 'words',
    initialState: wordsInitialState,
    reducers: {
        loadWordsStart: startLoading,
        loadWordsFailure: loadingFailed,
        loadWordsSuccess: (state, {payload}: PayloadAction<Word[]>) => {
            loadingSuccess(state);
            state.data = payload;
        },

    },
});

export const {
    loadWordsFailure, loadWordsStart, loadWordsSuccess
} = words.actions;

export default words.reducer;

export const fetchWords = (
    letters: string,
): AppThunk => async dispatch => {
    try {
        dispatch(loadWordsStart());
        const words = await skyengAPI.searchWordsByLetters(letters);
        dispatch(loadWordsSuccess(words));
    } catch (err) {
        dispatch(loadWordsFailure(err.toString()))
    }
};
