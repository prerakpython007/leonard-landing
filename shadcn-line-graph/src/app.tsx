import React from 'react';
import LineGraph from './components/line-graph';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="text-center text-2xl font-bold my-4">ShadCN Line Graph</h1>
      <LineGraph />
    </div>
  );
};

export default App;