import React, { Suspense } from 'react';
import './App.css';
import BikeModel from './pages/bikeModel';
import Sidebar from './components/sidebar';
import LoadingIcon from './components/loadingIcon';

function App() {
  return (
    <div className="flex flex-col min-h-screen sm:flex-row">
      <Sidebar />
      <div className="flex-1 border-2 border-gray-200 border-dashed rounded-lg md:p-4 md:ml-64 dark:border-gray-700">
        <Suspense fallback={<LoadingIcon />}>
          <BikeModel />
        </Suspense>
      </div>
    </div>
  );
}
export default App;
