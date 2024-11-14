import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3001/login', {username, password})
    .then(result => {
      console.log(result)
      if(result.data.message === 'Login Berhasil'){
        navigate('/dashboard')
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* Email input */}
      <div className="form-group mb-4">
        <label className='text-start d-block'>Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name='username'
          aria-describedby="emailHelp"
          placeholder="Enter Username"
          onChange={(username) => setUsername(username.target.value)}
        />
      </div>

      {/* Password input */}
      <div className="form-group mb-4">
        <label className='text-start d-block'>Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name='password'
          placeholder="Password"
          onChange={(password) => setPassword(password.target.value)}
        />
      </div>

      {/* Submit button */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Signup;