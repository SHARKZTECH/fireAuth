import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const auth = getAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password || !password2) {
      alert("all fields required");
    } else if (password !== password2) {
      alert("passwords don`t match!");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Registered user: ", user);
          setEmail("");
          setPassword("");
          setPassword2("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error ocured: ", errorCode, errorMessage);
        });
    }
  };

  return (
    <Container>
      <h4>SIGN UP</h4>

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
        <Form.Group>
          <Form.Text>
            Already have an account ? Sing In <Link to="/login">here</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
}
