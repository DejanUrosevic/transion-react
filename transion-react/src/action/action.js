import { USER_LOGGED_IN, USER_LOGGED_OUT, 
    NEW_MAPPING, SELECT_FIELDS_FOR_MAPPING, SAVE_MAPPING, ALL_MAPPINGS, 
    SELECT_CLIENTS, SELECT_CLIENTS_ON_LETTER,
    SHOW_ALL_IMPORTS, IMPORT_STATE, NEW_IMPORT } from '../types';
import userApi from '../api/user-api';
import mappingApi from '../api/mapping-api';
import fieldApi from '../api/field-api';
import clientApi from '../api/client-api';
import importApi from '../api/import-api';

//USER
export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

//MAPPING
export const newMappingAction = () => ({
    type: NEW_MAPPING
});

export const saveMappingAction = (mapping) => ({
    type: SAVE_MAPPING,
    mapping
});

export const fieldForMappingAction = (fields) => ({
    type: SELECT_FIELDS_FOR_MAPPING,
    fields
});

export const allMappingsAction = (mappings) => ({
    type: ALL_MAPPINGS,
    mappings
});

//CLIENT
export const selectClientsAction = () => ({
    type: SELECT_CLIENTS
});

export const selectClientsOnLetterAction = (clients) => ({
    type: SELECT_CLIENTS_ON_LETTER,
    clients
});

//IMPORT
export const selectAllImportAction = (imports) => ({
    type: SHOW_ALL_IMPORTS,
    imports
})

export const importStateAction = () => ({
    type: IMPORT_STATE
})

export const newImport = () => ({
    type: NEW_IMPORT
})

//********************************************************** 
//ACTIONS

//USER
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


//MAPPING
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
 
//CLIENT
export const selectClientsOnLetter = (letter) => dispatch =>
    clientApi.client.getByLetters(letter)
        .then(function(response){
            dispatch(selectClientsOnLetterAction(response));
            return response;
        });

export const selectClients = () => dispatch => {
    dispatch(selectClientsAction());
}

//IMPORT
export const importState = () => dispatch => {
    dispatch(importStateAction());
}

export const selectAllImport = () => dispatch =>
    importApi.import.getAll()
        .then(function(response){
            dispatch(selectAllImportAction(response));
            return response;
        });

export const saveImport = (data) => dispatch =>
    importApi.import.saveImport(data)
        .then(function(response){
            dispatch(newImport());
        })