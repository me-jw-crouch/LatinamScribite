//import React from 'react';

import { MainPanelHeader } from '../MainPanelHeader';
import { ModuleViewer } from '../ModuleViewer';

export const MainPanel = () => {
  return (
      <div className="main-panel">
        <MainPanelHeader />
        <ModuleViewer />
      </div>
  );
};
