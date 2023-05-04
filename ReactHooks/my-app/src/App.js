import "./App.css";
import React, { lazy, Suspense } from "react";
import UseMemo from "./component/UseMemo";
import HOC from "./component/HOC";
import UseRef from "./component/UseRef";
import Home from "./component/ForwardRef/Home";
import Usecallback from "./component/UseCallBackHooks/Usecallback";
import Main from './component/TodoList/Main'

const LazyLoading = lazy(() =>
  import("./component/ReactLazyLoading/LazyLoading")
);

function App() {
  return (
    <div className="App">
     {/* <Suspense fallback={<div>Loading...</div>}>
        <h1>Lazy Loading</h1>
        <LazyLoading />
      </Suspense>
      <HOC />
      <UseMemo />
      <UseRef />
      <Home />
    <Usecallback />*/}
      <Main/>
    </div>
  );
}
export default App;
