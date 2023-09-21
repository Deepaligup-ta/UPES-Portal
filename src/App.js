import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login1 from "./components/Login/Login1";
import Management from "./components/management/Management";
import Faculty from "./components/faculty/Faculty";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<Login1 />} />
          <Route exact path = "/home" element={<Home />}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
