import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Body from './components/Body';
import Footer from './components/Footer';
import { useState,useEffect } from 'react';


function App() {
  const [search,setSearch] = useState("")
  const [result,setResult] = useState()
  const getSearch = (prop) =>{
    setSearch(prop.replaceAll(" ","%20"))
  }
  const getResult = (prop) =>{
    if(prop)
    setResult(prop)
  }

  return (
    <div className="h-[100vh] bg-gradient-to-r from-red-500  to-slate-600 overflow-y-scroll">
      <Topbar search={getSearch} fromBody={result}/>
      <Body fromSearch={search} bodyResult={getResult}/>
      <Footer/>
    </div>
  );
}

export default App;
