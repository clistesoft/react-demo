export const loadState = () => {
  try {
    const serializableState = sessionStorage.getItem('state');

    if (serializableState !== null) {
      return JSON.parse(serializableState);
    }
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializableState = JSON.stringify(state);

    sessionStorage.setItem('state', serializableState);
  } catch (err) {
    // Just log the exceptions
    console.warn('An error occurred while saving the state. Error details: ', err);
  }
};

export const removeState = () => {
  try {
    sessionStorage.removeItem('state');
  } catch (err) {
    // Just log the exceptions
    console.warn('An error occurred while removing the state. Error details: ', err);
  }
}
