import { ADD_TO_HISTORY, DELETE_RECENT_HISTORY } from "./historyAction";

interface initialStateProp{
    historyList:Array<Object>
}

const initialState : initialStateProp= {        
    historyList:[],    
}


const historyReducer = (state = initialState, { type, payload }) => {
    
    if (type === ADD_TO_HISTORY) {
        return {
            ...state,
            historyList: [...state.historyList].push(payload),            
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
