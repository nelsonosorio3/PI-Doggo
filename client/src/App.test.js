import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Dog from './components/dogs/dog';
import Welcome from "./components/welcome/welcome";
import * as React from "react";
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import { Pagination } from './components/bottomBar/pagination';
import { SearchBar } from './components/nav/SearchBar';
import { Home} from "./components/home/home";
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

;test('renders welcome button', () => {
  render(<MemoryRouter><Welcome /></MemoryRouter>);
  const linkElement = screen.getByText(/enter/i);
  expect(linkElement).toBeInTheDocument();
});


;test("creates a dog with the correct data", ()=>{
  const component = render(<MemoryRouter>
    <Dog 
    name = "test name"
    img = "www.google.com"
    temperaments = {["a", "b"]}
    id = {1}
    />
  </MemoryRouter>);
  component.getByText("test name");
  component.getByAltText(/a test name/i);
  component.getAllByText("a");
  component.getAllByText("b");
});

// test("clicking advanced search works", ()=>{
//   const component = render(<MemoryRouter>
//     <SearchBar/>
//   </MemoryRouter>)

//   const button = component .getByText("Advanced Search")
//   fireEvent.click(button)
//   component.getByPlaceholderText(/playful/i)

// })

// test("clicking >Order Search works", ()=>{
//   const component = render(<MemoryRouter>
//     <SearchBar/>
//   </MemoryRouter>)

//   const button = component .getByText("Order Search")
//   fireEvent.click(button)
//   component.getByText(/\[A-Z\]/i)
//   component.getByText(/\[Z-A\]/i)
//   component.getByText(/ascending/i)
//   component.getByText(/descending/i)
// })

