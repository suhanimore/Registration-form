import React, { createRef } from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = createRef();
    this.passwordRef = createRef();
    this.errorRef = createRef();
  }

  handleClick = () => {
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;
    // Call API to login
    console.log('Login submitted:', email, password);
  };

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" ref={this.emailRef} />
          <br />
          <label>Password:</label>
          <input type="password" ref={this.passwordRef} />
          <br />
          <div ref={this.errorRef} style={{ color: 'red' }} />
          <button onClick={this.handleClick}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;