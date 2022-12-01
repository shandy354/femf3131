import React, { useState } from 'react'
import axios from 'axios'
import config from '../config/config';
import {useHistory} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'


const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();
  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post(config.ROOT_URL + "/login", {
        username: username,
        password: password,
      });
      history.push("/homeAdmin");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
    return (
      <div className='countainer'>
      <Form className="box" onSubmit={Auth}>
      <p className="has-text-centered">{msg}</p>
        <h1 className='title is-2 mt-5'>Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Masukkan Username" value={username} 
          onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button className=" mt-5 " variant="primary" type="submit" style={{ width: "23rem" }}>
          Login
        </Button>
      </Form>
      </div>
    )
   };

export default LoginAdmin;
