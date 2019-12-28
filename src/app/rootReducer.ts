import { combineReducers } from '@reduxjs/toolkit'
import wordsReducer from 'features/words/wordsSlice';
import wordMeaningReducer from 'features/word-meaning/wordMeaningSlice';

const rootReducer = combineReducers({
    words: wordsReducer,
    wordMeaning: wordMeaningReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
