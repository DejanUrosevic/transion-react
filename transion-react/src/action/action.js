import { USER_LOGGED_IN, USER_LOGGED_OUT, NEW_MAPPING, SELECT_FIELDS_FOR_MAPPING,
    SAVE_MAPPING, ALL_MAPPINGS} from '../types';
import userApi from '../api/user-api';
import mappingApi from '../api/mapping-api';
import fieldApi from '../api/field-api';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const newMappingAction = () => ({
    type: NEW_MAPPING
    
});

export const saveMappingAction = (mapping) => ({
    type: SAVE_MAPPING,
    mapping
})

export const fieldForMappingAction = (fields) => ({
    type: SELECT_FIELDS_FOR_MAPPING,
    fields
});

export const allMappingsAction = (mappings) => ({
    type: ALL_MAPPINGS,
    mappings
})

export const login = credentials => dispatch => 
    userApi.user.login(credentials)
        .then(user => {
            localStorage.setItem("username", user.username);
            dispatch(userLoggedIn(user));
        });


export const logout = () => dispatch => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch(userLoggedOut());
}

export const newMapping = () => dispatch => {
    dispatch(newMappingAction());
}

export const allMappings = () => dispatch => 
    mappingApi.mapping.getAll()
        .then(function(response){
            dispatch(allMappings(response));
            return response;
        });


export const saveMapping = (mapping) => dispatch => 
    mappingApi.mapping.saveMapping1(mapping)
        .then(function(response){
            dispatch(saveMappingAction(response));
        });


export const selectFieldForMapping = (mappingtype) => dispatch =>
    fieldApi.field.getAll(mappingtype)
        .then(function(response){
            dispatch(fieldForMappingAction(response));
            return response;
        });
 
