Problems with traditional Redux:
1. Too much boilerplate
2. Manually creating action types
3. Manual immutability using spread operators
4. Complex async logic with redux-thunk/saga setup

RTK solve:
1. Less Code
2. Auto action creators
3. Uses Immer for immutability
4. Built-in Thunk middleware
5. Easy async handling


Key Features:
1. Automatically combines reducers
2. Adds redux-thunk middleware by default
3. Enables Redux DevTools
4. Adds useful middleware like serializable check


Example:
1: configureStore
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

2: CreateSlice:
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload; // mutation allowed
    },
    clearUser: (state) => {
      state.data = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

3: CreateAsyncThunk (Async api call)
createAsyncThunk is a Redux Toolkit helper function used to handle async operations (like API calls) without writing redux-thunk manually.

import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId) => {
    const response = await fetch(`/api/user/${userId}`);
    return response.json();
  }
);
Async lifecycle actions created automatically:
pending
fulfilled
rejected

4: extraReducers

extraReducers: (builder) => {
  builder
    .addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchUser.rejected, (state) => {
      state.isLoading = false;
    });
}

What is Middleware in Redux?

Middleware is a function that sits between dispatch and reducer and intercepts actions before they reach the reducer.

Default Middleware in RTK
redux-thunk
redux-thunk most important
what it does
1. Allows async logic
2. Lets you dispatch a function instead of an object
3. Used internally by createAsyncThunk

dispatch(async (dispatch) => {
  const res = await fetch("/api/user");
  dispatch(setUser(res));
});

Interview line
“Redux Toolkit includes redux-thunk by default to handle async operations.”

Interview line
“Middleware is a layer between dispatch and reducer that handles side effects and async logic.”









