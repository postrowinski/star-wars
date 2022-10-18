import { combineReducers, configureStore, Reducer, Action, ThunkDispatch } from '@reduxjs/toolkit'
import moviesReducer from "./movies/reducer";
import storage from "redux-persist/lib/storage/session";
import {persistReducer, PERSIST} from "redux-persist";
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {InitialMoviesState } from './movies/reducer';

interface RootState {
 moviesData: InitialMoviesState
}

const persistConfig = { key: 'root', storage };

const allReducers = combineReducers({
  moviesData: moviesReducer
});

const rootReducer: Reducer = (
  state: RootState,
  action: Action
) => {
  return allReducers(state, action)
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST]
      }
    })
  ]
})

export type AppDispatch = typeof store.dispatch;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppDispatch = () => useDispatch<ThunkAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

