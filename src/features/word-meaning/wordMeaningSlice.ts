import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WordMeaning} from "api/skyengAPI";
import {AppThunk} from "app/store";
import {skyengAPI} from "api";

interface WordMeaningState {
    isLoading: boolean;
    error: string | null;
    data: WordMeaning | {};
}

const wordsInitialState: WordMeaningState = {
    data: {},
    isLoading: false,
    error: null
};

function startLoading(state: WordMeaningState) {
    state.isLoading = true
}

function loadingFailed(state: WordMeaningState, action: PayloadAction<string>) {
    state.isLoading = false;
    state.error = action.payload
}

function loadingSuccess(state: WordMeaningState) {
    state.isLoading = false;
    state.error = null;
}

const words = createSlice({
    name: 'wordMeaning',
    initialState: wordsInitialState,
    reducers: {
        loadWordMeaningStart: startLoading,
        loadWordMeaningFailure: loadingFailed,
        loadWordMeaningSuccess: (state, {payload}: PayloadAction<WordMeaning>) => {
            loadingSuccess(state);
            state.data = payload;
        },

    },
});

export const {
    loadWordMeaningStart, loadWordMeaningFailure, loadWordMeaningSuccess,
} = words.actions;

export default words.reducer;

export const fetchWordMeaning = (
    id: string,
): AppThunk => async dispatch => {
    try {
        dispatch(loadWordMeaningStart());
        const wordMeaning = await skyengAPI.getMeaning(id);
        dispatch(loadWordMeaningSuccess(wordMeaning));
    } catch (err) {
        dispatch(loadWordMeaningFailure(err.toString()))
    }
};


