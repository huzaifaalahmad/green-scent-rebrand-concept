import React from 'react';
import {createRoot} from 'react-dom/client';
import ClientSite from './ClientSite';
createRoot(document.getElementById('root')!).render(<React.StrictMode><ClientSite/></React.StrictMode>);
