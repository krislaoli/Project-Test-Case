// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListCard from './components/ListCard';
import DetailCard from './components/DetailCard';

// const Home = () => {
//   return <div>Ini adalah halaman utama</div>;
// };

// const About = () => {
//   return <div>Ini adalah halaman tentang kami</div>;
// };

const App = () => {
  return (
    <Routes>
      
        <Route path="/"  element={<ListCard/>} />
        <Route path="/detail/:id" element={<DetailCard />} />
    </Routes>
  );
};

export default App;
