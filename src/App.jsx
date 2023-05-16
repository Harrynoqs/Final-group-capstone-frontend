import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import BikeModel from './pages/bikeModel';
import Sidebar from './components/sidebar';
import LoadingIcon from './components/loadingIcon';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen sm:flex-row">
        <Sidebar />
        <div className="flex-1 border-2 border-gray-200 border-dashed rounded-lg md:p-4 md:ml-64 dark:border-gray-700">
          <Suspense fallback={<LoadingIcon />}>
            <Routes>
              <Route index element={<BikeModel />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
