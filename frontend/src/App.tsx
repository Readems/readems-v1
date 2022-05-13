import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';

const App: FC = (): ReactElement => (
  <Router>
    <Header homepage />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
