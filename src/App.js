import './App.css';
import TopNav from './components/TopNav';
import { Routes, Route } from "react-router-dom";
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { Home } from './pages/Home';

function App() {
  document.documentElement.style.setProperty('--background-color', '#1d1d1d');
  return (
    <div className="App">
      <TopNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Settings' element={<Settings/>}/>
      </Routes>
    </div>
  );
}

export default App;
