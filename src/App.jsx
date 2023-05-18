import React, { Suspense, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter, Routes, Route, useLocation,
} from 'react-router-dom';
import BikeModel from './pages/bikeModel';
import Sidebar from './components/sidebar';
import LoadingIcon from './components/loadingIcon';
import Login from './components/login';
import AddMotorcycle from './components/addMotorcycle';
import AddReservation from './components/addReservation';
import MotorcycleDetails from './components/motorcycleDetails';
import DeleteBike from './components/deleteBike';

const isLogged = JSON.parse(localStorage.getItem('state'))?.length > 0 || false;

function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/login'; 
  useEffect(() => {
    if (!isLogged && window.location.pathname !== '/login') {
      window.location = '/login';
    }
  }, [location]);

  return (
      <div className="flex flex-row justify-center main-container">
        {showSidebar && <Sidebar />}
          <Suspense fallback={<LoadingIcon />}>
            <Routes>
            <Route path="/login" element={<Login />} />
              <Route index element={<BikeModel />} />
              <Route path="/motorcycles/:id" element={<MotorcycleDetails />} />
              <Route path="/delete-motorcycle" element={<DeleteBike />} />
              <Route path="/add-motorcycle" element={<AddMotorcycle />} />
              <Route path="/add-reservations" element={<AddReservation />} />
            </Routes>
          </Suspense>
        </div>
  );
}
export default App;
