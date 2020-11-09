//Components
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      {process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_MODE
        : process.env.REACT_APP_PRO_MODE}
      <Home />
    </div>
  );
}

export default App;
