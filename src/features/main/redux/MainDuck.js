const INITIAL_STATE = {
  mainContent: 'Initial State',
};

const MOUNT_MAIN = 'MOUNT_MAIN';

export const loadMainContent = () => ({ type: MOUNT_MAIN });

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
