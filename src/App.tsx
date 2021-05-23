import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/globals';
import Routes from './routes';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      {/* GlobalStyles 全局样式 组件的方式带入 */}
      <GlobalStyles />
    </>
  );
}

export default App;
