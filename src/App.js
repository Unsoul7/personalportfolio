import './App.css';
import { LeftBar } from './components/LeftBar';
import { RightBar } from './components/RightBar';
import './styles/responsive.css'
import menu from './assets/menu.png'
import { useEffect, useState } from 'react';

function App() {
  const [SideOpen, setSideOpen] = useState(true)
  
  const openSidebar = () => {
    if (SideOpen == false) {
      setSideOpen(true)
    } else {
      setSideOpen(false)
    }
  }
  
  return (
    <main>
      <img onClick={() => {openSidebar()}} id='menu-btn' src={menu} alt="" />
      <LeftBar sidebar={SideOpen}/>
      <RightBar />
    </main>
  );
}

export default App;
