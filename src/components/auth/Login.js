import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import bgVideo from '../../assets/videos/home.mp4'; // Import your background video

// Styled components
const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const FormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h2`
  color: #065809;
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #065809;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #065809;
    box-shadow: 0 0 10px rgba(255, 126, 95, 0.5);
  }

  &::placeholder {
    color: #065809;
  }
`;

const Button = styled(motion.button)`
  background-color: #065809;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #feb47b;
  }

  &:focus {
    outline: none;
  }
`;

const Ripple = styled(motion.span)`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 250, 255, 0.3);
  width: 200%;
  height: 200%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const Error = styled.div`
  color: red;
  text-align: center;
  margin-top: 10px;
`;

const LoginLinks = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const LinkStyled = styled.a`
  color: #065809;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

// Component
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Check if email is for admin login
      if (email === 'admin@gmail.com'& password=='admin') {
        // Admin login logic
        // For simplicity, directly navigate to AdminDashboard if admin email is used
        navigate('/admindashboard');
        return;
      }

      // Make a POST request to the backend for regular login
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password
      });

      if (response.status === 200) {
        navigate('/'); // Redirect to profile page on successful login
      }
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const handleButtonClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    e.target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <VideoBackground autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </VideoBackground>
      <FormContainer
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Password:</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </FormGroup>
          {error && <Error>{error}</Error>}
          <Button
            type="submit"
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Ripple
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
            />
            Login
          </Button>
        </form>
        <LoginLinks>
          <LinkStyled href="/forgotpass">Forgot Password?</LinkStyled>
          <LinkStyled href="/register">Create an Account</LinkStyled>
        </LoginLinks>
      </FormContainer>
    </Container>
  );
};

export default Login;
