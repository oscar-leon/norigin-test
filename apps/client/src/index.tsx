import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

export const app = <App />;

createRoot(document.getElementById('root')!).render(app);
