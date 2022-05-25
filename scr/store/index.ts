import {combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {expenseSlice, loginSlice} from './reducers';
import {RootSaga} from './sagas/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  expenseReducer: expenseSlice.reducer,
  loginReducer: loginSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(RootSaga);

export type RootStateType = ReturnType<typeof rootReducer>;
