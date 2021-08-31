import { ADD_TO_HISTORY_FAILED, ADD_TO_HISTORY_REQUEST, ADD_TO_HISTORY_SUCCESS, DELETE_RECENT_HISTORY_REQUEST, DELETE_RECENT_HISTORY_SUCCESS, DELETE_RECENT_HISTORY_FAILED } from "./historyAction";

interface initialStateProp{
    newSearch:any,
    historyList:Array<String>,
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
            historyList: [...state.historyList, payload],            
        };
    }

    if (type === ADD_TO_HISTORY_FAILED) {
        return {
            ...state,
            error: payload,            
        };
    }
    
    if (type === DELETE_RECENT_HISTORY_REQUEST) {
        return {
            ...state,                        
        };
    }

    if (type === DELETE_RECENT_HISTORY_SUCCESS) {

        let historyListCopy = [...state.historyList]
        historyListCopy.pop()

        return {
            ...state,       
            historyList:historyListCopy                 
        };
    }

    if (type === DELETE_RECENT_HISTORY_FAILED) {
        return {
            ...state, 
            error:payload                       
        };
    }    



    return state;
};

export default historyReducer;
