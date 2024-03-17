import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
  },
});

export const { addPosts } = postsSlice.actions;

export default postsSlice.reducer;
