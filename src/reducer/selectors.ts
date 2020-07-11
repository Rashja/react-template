import { createSelector } from "reselect";

interface selectLoaderTypes {
  base: {
    loader: boolean;
  };
}

/*----------------------------- success orders --------------------------- */
const selectLoader = ({ base: { loader } }: selectLoaderTypes) => loader;

export const loaderSelector = createSelector(
  selectLoader,
  (allSuccessList) => allSuccessList
);
