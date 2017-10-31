import { combineReducers } from 'redux';
import user from './reducers/UserReducer';
import mapping from './reducers/MappingReducer';
import fields from './reducers/FieldReducer';

export default combineReducers({
    user,
    mapping,
    fields
});