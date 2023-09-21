import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Management from "./components/Management/Management"
import Login from "./components/Login/Login"
import Faculty from "./components/faculty/Faculty";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<Login />} />
          <Route exact path = "/home" element={<Home />} />
          <Route exact path = "/management" element={<Management />}/>
          <Route exact path = "/faculty" element={<Faculty />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
