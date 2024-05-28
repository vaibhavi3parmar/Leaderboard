import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Leaderboard from './Leaderboard';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Leaderboard />
    </AppContainer>
  );
};

export default App;
