import { NEW_MAPPING, ALL_MAPPING, SAVE_MAPPING } from '../types';

export default function MappingReducer(state = {}, action ={}){
    switch(action.type){
        case NEW_MAPPING:
            return {};
        case ALL_MAPPING:
            return action.mappings;
        case SAVE_MAPPING:
            return action.mapping;
        default:
            return state;
    }
}