import './App.css';
import Screen_1 from './Pages/Screen_1/Screen_1';
import Screen_2 from './Pages/Screen_2/Screen_2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={Screen_1} />
          <Route path='/screen_2' Component={Screen_2} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
