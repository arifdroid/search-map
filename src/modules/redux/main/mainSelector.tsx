import { createSelector } from 'reselect';


const selectRaw = (state) => state.main;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => raw.loading,
);

const selectStateAutoCompleteInstance = createSelector(
  [selectRaw],
  (raw) => raw.autoCompleteInstance,
);

const selectSearchAddress = createSelector(
  [selectRaw],
  (raw) => raw.autoCompleteInstance?.getPlace().formatted_address,
);



const mainSelectors = {
  selectLoading,
  selectStateAutoCompleteInstance,
  selectSearchAddress
};

export default mainSelectors;