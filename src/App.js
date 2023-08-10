import './App.css';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import NavbarLeft from './Components/NavbarLeft';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavbarLeft/>
      <Dashboard/>
    </div>
  );
}

export default App;
