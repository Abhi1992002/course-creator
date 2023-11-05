import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import CreateCourse from "./components/CreateCourse";

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/admin/createCourse" element={<CreateCourse />} />
        <Route path="/courses"/>
        <Route path="/courses/purchased"/>
        <Route path="/courses/:id"/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/signin"  element={<Signin />}/>
      </Routes>
    </>
  );
}

export default App;
