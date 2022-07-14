import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
    <PersonCard firstName="John" lastName="Smith" age={21} hairColor="Black"/>
    <PersonCard firstName="Jane" lastName="Doe" age={21} hairColor="Red"/>
    <PersonCard firstName="Millard" lastName="Fillmore" age={58} hairColor="Brown"/>
    <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    
  </div>
  );
}

export default App;
