import { TOGGLE_ADD_POST, TOGGLE_EDIT_POST } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showEditPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    case TOGGLE_EDIT_POST:
      return {
        ...state,
        showEditPost: !state.showEditPost,
      };

    default:
      return state;
  }
};

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Export Reducer
export default AppReducer;


export const getShowEditPost = state => state.app.showEditPost;
