
import { ADD_ARTICLE, FETCH_POSTS } from "../constants/action-types";

const initialState: any = {
  articles: "",
  posts: []
};

function rootReducer(state = initialState, action: any) {
  if (action.type === ADD_ARTICLE) {
    // state.articles.push(action.payload);
    return Object.assign({}, state, {
      // articles: state.articles.concat(action.payload.title)
      articles: action.payload.title
    })
  }
  else if (action.type === FETCH_POSTS) {
    return Object.assign([], state, {
      posts: (action.payload)
    })
  }
  return state;
};

export default rootReducer;


