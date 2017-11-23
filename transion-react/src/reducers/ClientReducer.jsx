import { SELECT_CLIENTS, SELECT_CLIENTS_ON_LETTER} from '../types';

export default function AgenciesReducer(state = {}, action ={}){
    switch(action.type){
        case SELECT_CLIENTS:
            return {};
        case SELECT_CLIENTS_ON_LETTER:
            return action.agencies;
        default:
            return state;
    }
}