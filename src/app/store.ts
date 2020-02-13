import { configureStore, Action, DeepPartial } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import rootReducer, { RootState } from './rootReducer'

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default function makeStore(preloadedState: DeepPartial<RootState>) {
    return configureStore<RootState>({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
        //redux wrapper закидывает  сюда preloaded state
        preloadedState
    });
}
