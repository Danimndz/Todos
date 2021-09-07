import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainContainer from "./containers/MainContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainContainer} />
      </Router>
    </div>
  );
}

export default App;
  