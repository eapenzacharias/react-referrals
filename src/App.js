import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './assets/styles/App.css';
import LoginForm from './components/login';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignUpForm from './components/signup';
import Dashboad from './components/dashboard';
import ResponsiveAppBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="/" element={<Dashboad />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
