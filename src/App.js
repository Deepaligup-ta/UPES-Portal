import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Management from "./components/Management/Management"
// import Login from "./components/Login/Login"
import Login1 from "./components/Login/Login1";
// import Management from "./components/Management/Management";
import Faculty from "./components/faculty/Faculty";
          import Policies from "./Pages/Policies";
import Password from "./components/Password/Password";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<Login1 />} />
          <Route exact path = "/faculty" element={<Faculty />}/>
          <Route exact path = "/home" element={<Home />}/>
          <Route exact path = "/management" element={<Management />}/>
          {/* <Route exact path ="/new-login" element={<Password/>}/> */}

          <Route exact path = "/policies" element={<Policies />}/>



          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
