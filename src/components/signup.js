import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Container, FormControl, Link, TextField,
} from '@mui/material';
import { signUp } from '../store/users';
import MyText from './typography';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    date_of_birth: '',
  });

  const isSignedUp = useSelector(
    (state) => state.usersReducer.currentUser.isSignedUp,
  );

  useEffect(() => {
    if (isSignedUp) console.log('signed up');
  }, [isSignedUp]);

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
    dispatch(signUp(state));
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
        <MyText text="Sign Up" type="h4" />
        <form onSubmit={submitForm}>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              name="name"
              margin="dense"
              required
              label="Name"
              variant="standard"
              type="text"
              autoComplete="Name"
              onChange={handleChange}
            />
            <TextField
              name="email"
              margin="dense"
              required
              label="Email"
              variant="standard"
              type="email"
              autoComplete="email"
              onChange={handleChange}
            />
            <TextField
              name="password"
              required
              margin="dense"
              label="Password"
              type="password"
              autoComplete="new-password"
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              name="passwordConfirm"
              required
              margin="dense"
              label="Confirm Password"
              type="password"
              autoComplete="new-password"
              variant="standard"
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" sx={{ margin: '2rem 0' }}>Sign Up</Button>
          </FormControl>
          <Link href="/login" underline="always" sx={{ fontWeight: 500 }}>
            Login In
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

export default SignUpForm;
