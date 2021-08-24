import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Dog from './components/dogs/dog';
import Welcome from "./components/welcome/welcome";
import * as React from "react";
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import { Pagination } from './components/bottomBar/pagination';
import rootReducer from './reducer';
import { MemoryRouter } from 'react-router-dom';

test('renders Home', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders add your own', () => {
  render(<App />);
  const linkElement = screen.getByText(/add your own/i);
  expect(linkElement).toBeInTheDocument();
})
;test('renders welcome button', () => {
  render(<App />);
  const linkElement = screen.getByText(/enter/i);
  expect(linkElement).toBeInTheDocument();
});


;test("crestes a dog with the correct name", ()=>{
  const {getByText} = render(
    <MemoryRouter>
      <Dog 
      name = "test name"
      img = "www.google.com"
      temperaments = {["a", "b"]}
      id = "1"
      key = "1" 
      />
    </MemoryRouter>
    
  )
  expect(getByText(/name/i).textContent).toBe("test name");
});
