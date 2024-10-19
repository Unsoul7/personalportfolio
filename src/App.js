import './App.css';
import { LeftBar } from './components/LeftBar';
import { RightBar } from './components/RightBar';
import './styles/responsive.css'
import menu from './assets/menu.png'

function App() {
  return (
    <main>
        <img id='menu-btn' src={menu} alt="" />
        <LeftBar />
        <RightBar />
    </main>
  );
}

export default App;
