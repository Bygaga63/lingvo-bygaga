import { combineReducers } from '@reduxjs/toolkit'
import wordsReducer from '../features/wordsList/wordsSlice';

const rootReducer = combineReducers({
    words: wordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
