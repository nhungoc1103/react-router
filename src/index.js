import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './index.css';
import App from './App';
import About from './About';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  }
  const atAboutPage = location.pathname.includes("/about");
  return atAboutPage && <button onClick={handleBackClick}>back</button>
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header /> 
      <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/about/:name" element={<About />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
