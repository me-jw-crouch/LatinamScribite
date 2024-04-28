//import React from 'react';
import './App.css'; // Your styling file

import { TopBar } from './components/TopBar';
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { MainPanel } from './components/MainPanel';
import { Footer } from './components/Footer';

function App() {
  return (
      <div className="app-container">
        <TopBar />
        <div className="content-area">
          <LeftSidebar />
          <MainPanel />
          <RightSidebar />
        </div>
        <Footer />
      </div>
  );
}

export default App;
