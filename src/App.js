import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Management from "./components/Management/Management"
import Login1 from "./components/Login/Login1";
import Faculty from "./components/faculty/Faculty";
import Policies from "./Pages/Policies";
import Password from "./components/Password/Password";

function App() {
  const role = 1; // replace with actual role value

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login1 />} />
          {role === 1 ? (
            <Route exact path="/home" element={<Home />} />
          ) : (
            <Navigate to="/" />
          )}
          <Route exact path="/faculty" element={<Faculty />} />
          <Route exact path="/management" element={<Management />} />
          <Route exact path="/policies" element={<Policies />} />
          {/* <Route exact path ="/new-login" element={<Password/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
