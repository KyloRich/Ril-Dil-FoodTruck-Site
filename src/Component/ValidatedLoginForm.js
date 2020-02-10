import React from "react";

class ValidatedLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      user: {
        email: "",
        password: ""
      },
      user1: {
        email: "",
        password: ""
      }
    };
  }

  handleClick = async () => {
    if (this.state.user1.email === "" || this.state.user1.password === "") {
      return;
    }

    fetch("http://localhost:8080/api/login/")
      .then(res => res.json())
      .then(data => {
        var i;
        for (i = 0; i < data.length; i++) {
          if (data[i].email === this.state.user1.email) {
            this.setState({ user: data[i] });
          }
        }
      })
      .then(() => {
        console.log(this.state.user);
        if (this.state.user.password === this.state.user1.password) {
          this.props.history.push(`/admin`);
        } else {
          alert("login failed");
          this.props.history.push(`/login`);
        }
      });
  };

  handleChange = event => {
    this.setState({
      user1: { ...this.state.user1, [event.target.name]: event.target.value }
    });
  };

  render() {
    return (
      <div className="container border rounded" style={{ width: 400 }}>
        <div className="text-center font-weight-bold mt-5">Sign in</div>
        <div className="form-row">
          <input
            type="text"
            className="form-control mt-2 mb-2 mr-3 ml-3"
            id="email1"
            name="email"
            placeholder="Email"
            value={this.state.user1.email}
            onChange={event => this.handleChange(event)}
          ></input>
        </div>
        <div className="form-row">
          <input
            type="text"
            className="form-control mt-2 mb-2 mr-3 ml-3"
            id="password"
            name="password"
            placeholder="Password"
            value={this.state.user1.password}
            onChange={event => this.handleChange(event)}
          ></input>
        </div>
        {/* <div className="form-row">
          <input
            className="form-check-input mt-2 mb-2 mr-3 ml-3"
            type="checkbox"
            id="gridCheck"
            name="password"
          ></input>
        </div> */}
        <div className="form-row">
          <button
            type="button"
            className="btn btn-info btn-lg btn-block text-light ml-3 mr-3 mt-2 mb-5"
            onClick={this.handleClick}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }
}
export default ValidatedLoginForm;
