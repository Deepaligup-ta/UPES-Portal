import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
<<<<<<< HEAD
import Management from "./components/Management/Management"
import Login from "./components/Login/Login"
=======
import Login1 from "./components/Login/Login1";
import Management from "./components/management/Management";
>>>>>>> a2a790920c7f4c1f37ed2dbf5ade532e30e5f279
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
