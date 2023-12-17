import { FETCH_BUTTON_CLICKED } from './types'
const fetchPosts = () => {
  return {
    type: FETCH_BUTTON_CLICKED,
    payload: [
      { userId: 1, id: 1, title: 'Post 1', body: 'This is the body of Post 1' },
      { userId: 2, id: 2, title: 'Post 2', body: 'This is the body of Post 2' },
      { userId: 3, id: 3, title: 'Post 3', body: 'This is the body of Post 3' },
      { userId: 4, id: 4, title: 'Post 4', body: 'This is the body of Post 4' },
      { userId: 5, id: 5, title: 'Post 5', body: 'This is the body of Post 5' },
    ]
  }
}

export default fetchPosts;
