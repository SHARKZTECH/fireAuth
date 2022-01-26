import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("all fields required!");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Singed in user: ", user);
          sessionStorage.setItem("user", {
            email: user.email,
            token: user.accessToken
          });
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("An error occured: ", errorCode, errorMessage);
          setEmail("");
          setPassword("");
        });
    }
  };
  return (
    <Container>
      <h4>SIGN IN</h4>
      <Form onSubmit={handleLogin}>
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

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Group>
          <Form.Text>
            Don`t have an account ? Sing Up <Link to="/register">here</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
}
