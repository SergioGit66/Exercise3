import './App.css';
import TextInfo from './components/Info';
import A from './components/A';
import Nav from './components/Navbar';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Title></Title>
      <TextInfo/>
      <A/>
      
    </div>
  );
}

export default App;