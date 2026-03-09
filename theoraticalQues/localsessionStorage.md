 sessionStorage

 1:sessionStorage stores data only for the current browser tab/session.
 2:Data is deleted automatically when the tab or browser is closed.
 3:Each tab has its own separate sessionStorage.
 4:Also stores data as key–value pairs (string format).

 sessionStorage.setItem("token", "12345");
const token = sessionStorage.getItem("token");

sessionStorage.removeItem("token");

sessionStorage.clear();


localStorage
1:localStorage stores data without expiration time.
2:Data remains even after the browser is closed and reopened.
3:It is useful for long-term storage like user preferences, theme mode, tokens, etc.
4:Data is stored as key–value pairs (string format).
5:Storage limit is usually ~5MB depending on the browser.

localStorage.setItem("username", "Deepak");

const name = localStorage.getItem("username");

localStorage.removeItem("username");

localStorage.clear();


HttpOnly Secure Cookies

import axios from "axios";

const loginUser = async () => {
  const res = await axios.post(
    "https://api.example.com/login",
    {
      email: "user@gmail.com",
      password: "123456"
    },
    {
      withCredentials: true
    }
  );

  console.log(res.data);
};