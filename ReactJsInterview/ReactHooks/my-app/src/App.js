import "./App.css";
import React, { lazy, Suspense } from "react";
// import UseMemo from "./component/UseMemo";
// import HOC from "./component/HOC";
// import UseRef from "./component/UseRef";
// import Home from "./component/ForwardRef/Home";
// import Usecallback from "./component/UseCallBackHooks/Usecallback";
// import Main from "./component/TodoList/Main";
// import ExpensiveCalculationComponent from "./component/useMemo1";
// import MobileValidaton from "./component/MobileValidaton";
// import Counter from "./component/Counter";
// import CounterComponent from "./component/CustomHooks";
// import OnlineOffline from "./component/ShowOnline_Offline/Online_Offline";
import CatFriends from "./component/UseRef/UseRefmanipulation"

// const LazyLoading = lazy(() =>
//   import("./component/ReactLazyLoading/LazyLoading")
// );

function App() {
  return (
    <div className="App">
      {/* <Suspense fallback={<div>Loading...</div>}>
        <h1>Lazy Loading</h1>
        <LazyLoading />
      </Suspense>
       <HOC />  */}
      {/* <UseMemo /> */}
      {/* <ExpensiveCalculationComponent /> */}
      {/* <UseRef />  */}
      {/* <Home />  */}
      {/* <Usecallback /> */}
      {/* <Main/> */}
      {/* <MobileValidaton />
       < Counter /> */}
      {/* < CounterComponent/> */}
      {/* <OnlineOffline /> */}
      < CatFriends />
    </div>
  );
}
export default App;
