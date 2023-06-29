import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import data from "./data.json";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Cards from "./components/Cards";
import Steps from "./components/Steps";

function App() {
  const [user, setuser] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const person = data.users.find((i) => i.email == email);
    if (person) {
      if (person.pass == password) {
        setuser(person);
        navigate("/profile");
      } else {
        console.log("password is wrong");
      }
    } else {
      console.log("person not found");
    }
  };

  function ch () {
    navigate('/profile')
  }

  return (
    <div className="app min-h-screen">
      <Nav user={user} />
    <button className="btn btn-secondary" onClick={ch}>Move to Profile with Navigate</button>
      <Routes>
        <Route path="/" element={[<Cards />, <Steps />]} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

     
     

      <Footer />
    </div>
  );
}

export default App;
