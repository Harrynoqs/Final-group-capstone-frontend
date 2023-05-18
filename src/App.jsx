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
import MotorcycleDetails from './components/motorcycleDetails';
import DeleteBike from './components/deleteBike';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row justify-center main-container">
        <Sidebar />
          <Suspense fallback={<LoadingIcon />}>
            <Routes>
              <Route index element={<BikeModel />} />
              <Route path="/motorcycles/:id" element={<MotorcycleDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/delete-motorcycle" element={<DeleteBike />} />
              <Route path="/add-motorcycle" element={<AddMotorcycle />} />
              <Route path="/add-reservations" element={<AddReservation />} />
            </Routes>
          </Suspense>
        </div>
    </BrowserRouter>
  );
}
export default App;
