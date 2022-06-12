import {
  Button, Container, FormControl, Link, TextField,
} from '@mui/material';
import MyText from './typography';

const LoginForm = () => {
  const userId = '';
  return (
    <>
      <Container
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
        <form>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              margin="dense"
              required
              id="standard-required"
              label="Email"
              variant="standard"
              type="email"
              autoComplete="email"
            />
            <TextField
              required
              margin="dense"
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Button variant="contained" sx={{ margin: '2rem 0' }}>Sign In</Button>
          </FormControl>
          <Link href="#signup" underline="always" sx={{ fontWeight: 500 }}>
            Sign Up
          </Link>
          <br />
          <Link href="#forgot" underline="always" sx={{ fontWeight: 500 }}>
            Forgot your password?
          </Link>
        </form>
        {userId}
      </Container>
    </>
  );
};

export default LoginForm;