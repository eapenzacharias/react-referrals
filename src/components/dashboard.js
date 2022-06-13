import {
  Container, Button, FormControl, TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { signIn } from '../store/users';
import MyText from './typography';

const Dashboad = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [state, setState] = React.useState({
    email: '',
    copySuccess: '',

  });

  const isSignedIn = useSelector(
    (state) => state.usersReducer.currentUser.isSignedIn,
  );

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    } else {
      navigate('/login');
    }
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
    // dispatch(signIn(state));
  };

  const currentUser = useSelector((state) => state.usersReducer.currentUser);
  return (
    <>
      <MyText text={`Hello ${currentUser.attributes.name}!`} type="h1" />
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
        <MyText text="Invite your friends!" type="h4" />
        <MyText text="Share this link or send an invite." type="p" />
        <MyText text={`http://localhost:3000/?ref=${currentUser.attributes.id}`} type="link" />
        <form onSubmit={submitForm}>
          <FormControl sx={{ width: '100%' }}>
            <TextField
              margin="dense"
              required
              label="Email"
              name="email"
              variant="standard"
              type="email"
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" sx={{ margin: '2rem 0' }}>Send Invite</Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
};

export default Dashboad;
