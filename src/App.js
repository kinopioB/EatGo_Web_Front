import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaverLogin from "./components/login/NaverLogin";
import Main from "./pages/Main";
import "./App.css";
import RedirectURI from "./components/login/RedirectURI";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<NaverLogin />}></Route>
          <Route path="/oauth" element={<RedirectURI />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
