import { CHANGE_NAME } from "../types";

export const rubahNama = payload => {
  return {
    type: CHANGE_NAME,
    payload
  };
};
