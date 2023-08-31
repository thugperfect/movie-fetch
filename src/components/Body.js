import MovieBox from "./MovieBox";
import {useState,useEffect} from 'react'
const Body = () => {
  const api_key = 'http://www.omdbapi.com/?i=tt3896198&apikey=68ec0e63'


  useEffect(()=>{
    const fetchMovie =async () =>{
      const movies =await fetch(api_key)
      const cont = await movies.json()
      console.log(cont);
    }
    fetchMovie()
  },[])
  return (
    <div className=" container bg-gray-500 bg-opacity-30  h-auto mx-auto w-[80%]">
      <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Latest Movies</div>
      <div className="flex  overflow-x-scroll  transparent-scroll">
        <div className="flex ">
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
        </div>
      </div>
      <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Action</div>
      <div className="flex  overflow-x-scroll transparent-scroll">
        <div className="flex gap-3">
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
        </div>
      </div>
      <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Romance</div>
      <div className="flex  overflow-x-scroll transparent-scroll">
        <div className="flex ">
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />

          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
        </div>
      </div>
      <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Comedy</div>
      <div className="flex  overflow-x-scroll transparent-scroll">
        <div className="flex ">
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />

          <MovieBox />
          <MovieBox />
          <MovieBox />
        </div>
        </div>
        <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Horror</div>
        <div className="flex  overflow-x-scroll transparent-scroll">
          <div className="flex ">
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
            <MovieBox />
          </div>
        </div>
      </div>
   
  );
};
export default Body;
