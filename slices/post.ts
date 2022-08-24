import {getPosts} from '../api/getPosts';
import {Post} from '../api/types';
import {
  createAsyncThunk,
  SerializedError,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchUsers', getPosts);

interface PostState {
  posts: {
    loading: boolean;
    data: Post[] | null;
    error: Error | null;
  };
}

const initialState: PostState = {
  posts: {loading: false, data: null, error: null},
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: state => {
      state.posts = {
        loading: true,
        data: null,
        error: null,
      };
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
      state.posts.data = action.payload;
      state.posts.loading = false;
    },
    [fetchPosts.rejected.type]: (
      state,
      action: ReturnType<typeof fetchPosts.rejected>,
    ) => {
      //state.posts.error = action.error;
      state.posts.loading = false;
    },
  },
});

export default postsSlice.reducer;
