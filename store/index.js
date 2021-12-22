import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''] // no need whitelisting reducer yet
};

const persistedReducer = persistReducer(persistConfig, reducers);


/* eslint-disable no-underscore-dangle */
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(Thunk)));
/* eslint-enable */
export const persistor = persistStore(store);
