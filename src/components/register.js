import React from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: 0,
      email:"",
      password: "",
      formDisabled: false,
    };
  }
  handleFormSubmit(event) {
    const { name, phone, email, password } = this.state;
    event.preventDefault();
    // // login API call
    // const tempRegistrationData =
    //   JSON.parse(localStorage.getItem("registrationData")) || [];

    // tempRegistrationData.push({ name, age, password });
    // localStorage.setItem(
    //   "registrationData",
    //   JSON.stringify(tempRegistrationData)
    // );
    this.setState({
      formDisabled: true,
    });
    axios
      .post("http://localhost:5000/register", {
        name,
        phone,
        email,
        password,
      })
      .then((response) => {
        console.log("response", response.data);
        this.setState({
          formDisabled: false,
        });
        this.setState({
          name: "",
          phone: "",
          email:'',
          password: "",
        });
        alert("Registration Successful!");
      });
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
      </Navbar><br />
        <h2 className="text1">RegisterForm </h2>
        <form className="card-box" method="POST"
          onSubmit={(event) => this.handleFormSubmit(event)}
          style={{
            display:"flex",
            flexDirection:"column",
            position:"relative",
            left:"36.5%",
            alignContent:"center",
            width:"400px",
            padding: "40px",
            backgroundColor: "#eee",
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="your name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              phone
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="your phone"
              value={this.state.phone}
              onChange={(e) => {
                this.setState({
                  phone: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="your email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({
                  email: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="your password"
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
            className="btn btn-primary mb-3"
          >
            Submit
          </button>

          {this.state.formDisabled && (
            <p> Form is being submitted please wait.</p>
          )}
        </form>

      </div>
    );
  }
}

export default RegisterForm;