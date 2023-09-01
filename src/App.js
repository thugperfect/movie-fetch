import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Body from './components/Body';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const [search,setSearch] = useState("")
  const getSearch = (prop) =>{
    setSearch(prop.replaceAll(" ","%20"))
  }
 console.log(search);
  return (
    <div className="h-[100vh] bg-gradient-to-r from-red-500  to-slate-600 overflow-y-scroll">
      <Topbar search={getSearch}/>
      <Body fromSearch={search}/>
      <Footer/>
    </div>
  );
}

export default App;
