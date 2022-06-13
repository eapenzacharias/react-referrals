import {
  Button, Container, FormControl, Link, TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyText from './typography';
import { signIn } from '../store/users';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  const isSignedIn = useSelector(
    (state) => state.usersReducer.currentUser.isSignedIn,
  );

  useEffect(() => {
    if (isSignedIn) navigate('/');
  }, [isSignedIn]);

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    dispatch(signIn(state));
  };
  return (
    <>
      <Container
        className="centralized"
        margin="dense"
        maxWidth="xs"
        sx={{
          bgcolor: '#fff',
          padding: '2rem',
          borderRadius: 2,
          margin: 'auto',
        }}
      >
        <MyText text="Log In" type="h4" />
        <form onSubmit={submitForm}>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              margin="dense"
              required
              label="Email"
              name="email"
              variant="standard"
              type="email"
              autoComplete="email"
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" sx={{ margin: '2rem 0' }}>Sign In</Button>
          </FormControl>
          <Link href="/signup" underline="always" sx={{ fontWeight: 500 }}>
            Sign Up
          </Link>
          <br />
          <Link href="#forgot" underline="always" sx={{ fontWeight: 500 }}>
            Forgot your password?
          </Link>
        </form>
      </Container>
    </>
  );
};

export default LoginForm;
