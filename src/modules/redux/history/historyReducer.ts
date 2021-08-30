import { ADD_TO_HISTORY_FAILED, ADD_TO_HISTORY_REQUEST, ADD_TO_HISTORY_SUCCESS, DELETE_RECENT_HISTORY } from "./historyAction";

interface initialStateProp{
    newSearch:any,
    historyList:Array<Object>,
    error:any
}

const initialState : initialStateProp= {        
    newSearch:null,
    historyList:[],
    error:null

}


const historyReducer = (state = initialState, { type, payload }) => {
    
    if (type === ADD_TO_HISTORY_REQUEST) {
        return {
            ...state,
            newSearch: payload,            
        };
    }
    
    if (type === ADD_TO_HISTORY_SUCCESS) {
        return {
            ...state,
            historyList: [...state.historyList].push(payload),            
        };
    }

    if (type === ADD_TO_HISTORY_FAILED) {
        return {
            ...state,
            error: payload,            
        };
    }
    
    if (type === DELETE_RECENT_HISTORY) {
        return {
            ...state,
            historyList: [...state.historyList].pop()            
        };
    }
    


    return state;
};

export default historyReducer;
