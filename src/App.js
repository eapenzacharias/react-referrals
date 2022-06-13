import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './assets/styles/App.css';
import { useSelector } from 'react-redux';
import LoginForm from './components/login';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignUpForm from './components/signup';
import Dashboad from './components/dashboard';
import ResponsiveAppBar from './components/navbar';

function App() {
  const isSignedIn = useSelector(
    (state) => state.usersReducer.currentUser.isSignedIn,
  );
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container sx={{ margin: '2rem auto' }}>
        <Routes>
          {!isSignedIn && (
            <>
              <Route path="login" element={<LoginForm />} />
              <Route path="signup" element={<SignUpForm />} />
              <Route path="/" element={<LoginForm />} />
            </>
          )}
          {isSignedIn && (<Route path="*" element={<Dashboad />} />)}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
