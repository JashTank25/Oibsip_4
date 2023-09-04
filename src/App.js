import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingIn from "./SignIn";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
