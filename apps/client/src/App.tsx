import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BottomNav } from '@repo/ui/components/layout';
import { Home } from '@repo/ui//pages/home';
import { Asset } from '@repo/ui/pages/asset';

import './App.css';

export const App: FC = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/asset" element={<Asset />} />
          </Routes>
          <BottomNav/>
      </BrowserRouter>
    );
};
