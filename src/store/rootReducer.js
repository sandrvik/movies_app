import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import filmReducer from './reducers/filmReducer';
import filmsReducer from './reducers/filmsReducer';
import errorsReducer from './reducers/errorsReducer';

export default combineReducers({
    auth: authReducer,
    films: filmsReducer,
    film: filmReducer,
    errors: errorsReducer
})