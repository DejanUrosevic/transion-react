import { combineReducers } from 'redux';
import user from './reducers/UserReducer';
import mapping from './reducers/MappingReducer';

export default combineReducers({
    user,
    mapping
});