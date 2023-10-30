//* IMPORT
import * as types from './type';

export const incrementAction = (count) => {
  return {
    type: types.INCREMENT,
    payload: count,
  };
};
