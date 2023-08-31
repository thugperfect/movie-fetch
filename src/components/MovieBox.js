const MovieBox = ({movieName}) =>{
    if(movieName)
    console.log(movieName);
    return(
        <div className="w-[150px] h-[200px] bg-black text-white rounded-lg m-3">

           { (movieName)?<img className="w-full h-full rounded-lg" src={movieName.Poster} alt={movieName.Title}/>:""}
            
        </div>
    )
}
export default MovieBox