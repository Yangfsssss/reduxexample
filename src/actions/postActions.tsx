import { FETCH_POSTS } from "./types";

export const fetchPosts = () => (dispatch: any) => {
  console.log("123");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
