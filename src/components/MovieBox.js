const MovieBox = ({movieName,text}) =>{
  
    return(
        <div className="resp h-[200px] w-[150px]  text-white rounded-lg m-3 cursor-pointer">
            {(text)?<div className="w-full h-full flex justify-center items-center text-[20px] bg-black">{text}...</div>:""}
           {(movieName)?<img className="w-full h-full rounded-lg" src={movieName.Poster} alt={movieName.Title}/>:
           ""}

            
        </div>
    )
}
export default MovieBox