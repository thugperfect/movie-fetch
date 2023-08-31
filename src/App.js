import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Body from './components/Body';

function App() {
  return (
    <div className="h-[100vh] bg-gradient-to-r from-red-500  to-slate-600 overflow-y-scroll  
   
    ">
      <Topbar/>
      <Body/>
      
    </div>
  );
}

export default App;
