import React from 'react';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <div>
      Simulation 1: One Error Boundary for Two Components
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      Simulation 2: Separate Error Boundaries for Each Component
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      Simulation 3: No Error Boundary
      <BuggyCounter />
    </div>
  );
}

export default App;