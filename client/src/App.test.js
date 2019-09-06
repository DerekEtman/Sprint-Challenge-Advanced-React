import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import Display from './components/Display';
import PlayerCard from './components/PlayerCard'

// This 
test('should have Name Alex Morgan & Country United States',  async ()=>{
  const {findByText} = rtl.render(<App />);
  findByText(/alex morgan/i);
  findByText(/united states/i);
  findByRole
});

