import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './assets/styles/App.css';
import LoginForm from './components/login';
import Sample from './components/sample';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SignUpForm from './components/signup';

function App() {
  return (
    <div className="App">
      <Container>
        <Sample />
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
