import { NEW_MAPPING, ALL_MAPPING } from '../types';

export default function MappingReducer(state = {}, action ={}){
    switch(action.type){
        case NEW_MAPPING:
            return {};
        case ALL_MAPPING:
            return action.mappings;
        default:
            return state;
    }
}