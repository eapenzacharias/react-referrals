import {
  Container, Button, FormControl, TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { signIn } from '../store/users';
import MyText from './typography';
import { getReferrals, sendInvite } from '../store/referrals';
// import ReferralTable from './referrals';

const Dashboad = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.usersReducer.currentUser);

  const referralData = useSelector((state) => state.referralReducer);
  console.log(referralData.referrals);

  const [state, setState] = React.useState({
    email: '',
  });

  const isSignedIn = useSelector(
    (state) => state.usersReducer.currentUser.isSignedIn,
  );

  useEffect(() => {
    dispatch(getReferrals(currentUser));
  }, []);

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
    dispatch(sendInvite(state, currentUser));
  };

  return (
    <>
      <MyText text={`Hello ${currentUser.attributes.name}!`} type="h1" />
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
        <MyText text="Invite your friends!" type="h4" />
        <MyText text="Share this link or send an invite." type="p" />
        <MyText text={`https://eapenzacharias.github.io/react-referrals/#/ref/${currentUser.attributes.id}`} type="link" />
        <CopyToClipboard
          text={`https://eapenzacharias.github.io/react-referrals/#/ref/${currentUser.attributes.id}`}
          onCopy={() => alert('Copied')}
        >
          <Button variant="outlined" size="small">Copy Link</Button>
        </CopyToClipboard>
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
        <MyText text={`You have ${referralData.count} successful referral`} type="h4" />
      </Container>
    </>
  );
};

export default Dashboad;
