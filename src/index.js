import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Event from './components/Event'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Booking from './components/Booking'
import CheckBooking from './components/CheckBooking'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css' 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/event" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/checkBooking" element={<CheckBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
