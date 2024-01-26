import { createStore } from 'redux';
import fieldReducer from './reducers';

const store = createStore(fieldReducer);

export default store;
