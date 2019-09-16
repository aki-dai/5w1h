import React from 'react';
import Contents from './component/Content'
import {StoreProvider} from './Store'

const App: React.FC = () => {
  return (
    <div className="App">
      <StoreProvider>
        <Contents />
      </StoreProvider>
    </div>
  );
}

export default App;
