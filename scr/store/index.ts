import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {expenseSlice} from './reducers';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  expense: expenseSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// sagaMiddleware.run(FbRootSaga);

export type RootStateType = ReturnType<typeof rootReducer>;
