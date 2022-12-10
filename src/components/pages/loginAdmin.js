import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import config from '../config/config';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginUser, reset } from "../../features/authSlice";
import { Form, Button } from "react-bootstrap";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (user || isSuccess) {
      history.push("/homeAdmin");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, history]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password }));
  };
  // const Auth = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(config.ROOT_URL + "/login", {
  //       username: username,
  //       password: password,
  //     });
  //     history.push("/homeAdmin");
  //   } catch (error) {
  //     if (error.response) {
  //       setMsg(error.response.data.msg);
  //     }
  //   }
  // };
  return (
    <div className="countainer">
      <Form className="box" onSubmit={Auth}>
        {isError && <p className="has-text-centered">{message}</p>}
        <h1 className="title is-2 mt-5">Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Masukkan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          className=" mt-5 "
          variant="primary"
          type="submit"
          style={{ width: "23rem" }}
        >
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </Form>
    </div>
  );
};

export default LoginAdmin;
