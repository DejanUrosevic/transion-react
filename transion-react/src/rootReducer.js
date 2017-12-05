import { combineReducers } from 'redux';
import user from './reducers/UserReducer';
import mapping from './reducers/MappingReducer';
import fields from './reducers/FieldReducer';
import clients from './reducers/ClientReducer';
import imports from './reducers/ImportReducer';

export default combineReducers({
    user,
    mapping,
    fields,
    clients,
    imports
});