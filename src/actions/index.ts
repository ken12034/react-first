// {
//   type: 'ADD_ARTICLE',
//   payload: { title: 'React Redux Tutorial', id: 1 }
// }

import { ADD_ARTICLE, FETCH_POSTS } from "../constants/action-types";

export function addArticle(payload: any) {
  return { type: ADD_ARTICLE, payload }
};

export const fetchPosts = () => async (dispatch: any, getState: any) => {
  const res = {title: "aaa"}// await jsonPlaceholder.get('/posts');

  fetch('/api/posts', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(res => {
    //console.log(res.json());
    return res.json()
  }).then(res2 => {
    console.log(res2);
    dispatch({ type: FETCH_POSTS, payload: res2 });
  })
  //dispatch({ type: FETCH_POSTS,  payload: res  });
};