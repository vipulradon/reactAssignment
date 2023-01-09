// import React from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import { Navigate } from "react-router-dom";
import   React  from 'react';
// import { createBrowserHistory } from "history";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      formDisabled: false,
    };
  }
  handleFormLogin(event) {
    const { email, password } = this.state;
    event.preventDefault();

    this.setState({
      formDisabled: true,
    });
    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response.data);
        this.setState({
          formDisabled: false,
        });
        this.setState({
          email: "",
          password: "",
        });
        alert("login Successful!");
       
          // this.props.navigate('/dashboard')
      
        
       
      })
      .catch(err=>{
        console.log(err.message);
      })
  }
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Encode</Navbar.Brand>
            <Nav className="d-flex">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/register">Signup</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <form
          method="POST"
          onSubmit={(e) => this.handleFormLogin(e)}
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            left: "36%",
            alignContent: "center",
            width: "400px",
            padding: "40px",
            backgroundColor: "#eee",
          }}
        >
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={(e) => {
                this.setState({
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={this.state.password}
              onChange={(e) => {
                this.setState({
                  password: e.target.value,
                });
              }}
            />
          </div>
          <button
            disabled={this.state.formDisabled}
            type="submit"
            class="btn btn-success"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

// export function AppRouter(props){
//   const navigate=createBrowserHistory()
//   navigate.push('/dashboard')
// }

export default Login;

