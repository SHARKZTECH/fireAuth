import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { app, db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import "./styles.css";

export default function App() {
  // const usersColl = collection(db, "users");

  let user = sessionStorage.getItem("user");

  // const createUser = async (e) => {
  //   await addDoc(usersColl, { email: email });
  // };
  return (
    <div className="App">
      <div className="main">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
