import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import BikeModel from './pages/bikeModel';
import Sidebar from './components/sidebar';
import LoadingIcon from './components/loadingIcon';
import Login from './components/login';
import AddMotorcycle from './components/addMotorcycle';
import AddReservation from './components/addReservation';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row justify-center main-container">
        <Sidebar />
        <div className="swiper-container">
          <Suspense fallback={<LoadingIcon />}>
            <Routes>
              <Route index element={<BikeModel />} />
              <Route path="/login" element={<Login />} />
              <Route path="/add-motorcycle" element={<AddMotorcycle />} />
              <Route path="/add-reservations" element={<AddReservation />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
