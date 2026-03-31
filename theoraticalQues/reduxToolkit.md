# 🧩 Redux Toolkit (RTK) Interview Notes

## 📌 What is Redux Toolkit?

Redux Toolkit is the official, recommended way to write Redux logic. It simplifies Redux by reducing boilerplate and providing built-in utilities.

---

## ✅ Why Use Redux Toolkit?

* Reduces boilerplate code
* Built-in best practices
* Simplifies state management
* Includes powerful tools like `createSlice`, `createAsyncThunk`

---

## 🔑 Core Concepts

### 1. configureStore

* Replaces `createStore`
* Automatically sets up Redux DevTools

```ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
```

---

### 2. createSlice

* Combines actions + reducers in one place

```ts
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', age: 0 },
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
```

---

### 3. createAsyncThunk

* Handles async operations (API calls)

```ts
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const response = await fetch('/api/user');
    return response.json();
  }
);
```

---

### 4. extraReducers

* Handle async states (pending, fulfilled, rejected)

```ts
extraReducers: (builder) => {
  builder
    .addCase(fetchUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.name = action.payload.name;
    })
    .addCase(fetchUser.rejected, (state) => {
      state.loading = false;
    });
}
```

---

## ⚛️ Using Redux in React

### useSelector

```ts
import { useSelector } from 'react-redux';

const name = useSelector((state: any) => state.user.name);
```

### useDispatch

```ts
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();
dispatch(setUser({ name: 'Deepak', age: 25 }));
```

---

## 🔒 TypeScript with Redux Toolkit

### Typed Hooks

```ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

---

## ⚖️ Advantages of Redux Toolkit

* Less boilerplate
* Better readability
* Built-in Immer (mutating syntax but immutable updates)
* Easy async handling

---

## ❌ Problems in Traditional Redux (Solved by RTK)

* Too much boilerplate
* Complex setup
* Manual immutable updates

---

## 🎯 Interview Answer (Short)

> Redux Toolkit simplifies Redux by reducing boilerplate, providing built-in utilities like createSlice and createAsyncThunk, and making state management more efficient and maintainable.

---

## 🔥 Common Interview Questions

### Q1: Difference between Redux and Redux Toolkit?

* Redux: Manual setup, more boilerplate
* RTK: Simplified, less code, built-in best practices

### Q2: What is Immer?

* Allows writing "mutating" logic safely

### Q3: What is createAsyncThunk?

* Handles async API calls with lifecycle actions

### Q4: Why use slices?

* Modular and scalable state management

---

## 🧠 Pro Tips

* Always use RTK instead of traditional Redux
* Split slices by feature
* Use RTK Query for APIs (advanced)

---

## 🚀 Final Tip

> Redux Toolkit is the modern standard for Redux. It makes your code cleaner, faster to write, and easier to maintain.
