import React, { createRef } from 'react';
import './signup.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = createRef();
    this.emailRef = createRef();
    this.passwordRef = createRef();
    this.confirmPasswordRef = createRef();
    this.errorRef = createRef();
  }

  handleSignUp = () => {
    const name = this.nameRef.current.value;
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;
    const confirmPassword = this.confirmPasswordRef.current.value;

    // Call API to sign up
    console.log('Sign up submitted:', name, email, password, confirmPassword);
  };

  render() {
    return (
      <div className="signup-container">
        <h2>Sign up</h2>
        <form>
          <label>Name:</label>
          <input type="text" ref={this.nameRef} />
          <br />
          <label>Email:</label>
          <input type="email" ref={this.emailRef} />
          <br />
          <label>Password:</label>
          <input type="password" ref={this.passwordRef} />
          <br />
          <label>Confirm Password:</label>
          <input type="password" ref={this.confirmPasswordRef} />
          <br />
          <div ref={this.errorRef} style={{ color: 'red' }} />
          <button onClick={this.handleSignUp}>Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;