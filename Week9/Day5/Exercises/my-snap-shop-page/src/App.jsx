import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Import components (we'll create these next)
import Gallery from './components/Gallery';
import Search from './components/Search';


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Snap Shot</h1>
          <nav>
            <ul>
              <li><Link to="/mountains">Mountains</Link></li>
              <li><Link to="/beaches">Beaches</Link></li>
              <li><Link to="/birds">Birds</Link></li>
              <li><Link to="/food">Food</Link></li>
            </ul>
          </nav>
          <Search setSearchQuery={setSearchQuery} />
        </header>

        <Routes>
          <Route path="/" element={<Gallery category="nature" />} />
          <Route path="/mountains" element={<Gallery category="mountains" />} />
          <Route path="/beaches" element={<Gallery category="beaches" />} />
          <Route path="/birds" element={<Gallery category="birds" />} />
          <Route path="/food" element={<Gallery category="food" />} />
          <Route path="/search" element={<Gallery category={searchQuery} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;