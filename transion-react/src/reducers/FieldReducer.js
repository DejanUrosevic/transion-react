import { SELECT_FIELDS_FOR_MAPPING } from '../types'

export default function UserReducer(state = {}, action ={}){
    switch(action.type){
        case SELECT_FIELDS_FOR_MAPPING:
            return action.fields;
        default:
            return state;
    }
}