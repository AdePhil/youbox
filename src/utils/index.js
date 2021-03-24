export const generateTypes = (action) => ({
  REQUEST: `${action}_REQUEST`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
});
