import { SHOW_ALL_IMPORTS, NEW_IMPORT } from '../types';

export default function ImportReducer(state = {}, action ={}){
    switch(action.type){
        case SHOW_ALL_IMPORTS:
            return action.imports;
        case NEW_IMPORT:
            return state;
        default:
            return state;
    }
}