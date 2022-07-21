
import './App.css';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/People/:id" element={<People />} />
        <Route path="/Planets/:id" element={<Planets />} />
      </Routes>

    </div>
  );
}

export default App;
