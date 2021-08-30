import { createSelector } from 'reselect';


const selectRaw = (state) => state.main;

const selectLoading = createSelector(
    [selectRaw],
    (raw) => raw.loading,
  );
  

const mainSelectors = {
    selectLoading,   
  };
  
export default mainSelectors;