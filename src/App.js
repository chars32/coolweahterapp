//Components
// import Home from "./components/Home";

import "./App.css";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      {process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_MODE
        : process.env.OPENWEAHTER_ACCES_KEY}
      {/* <Home /> */}
    </div>
  );
}

export default App;
