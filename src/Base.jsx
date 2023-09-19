import { useEffect, useState } from 'react';
import './App.css';
import { getMovie, getMovieTopRated, getMovieList, searchMovie} from "./api"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import Sidebar from './components/Sidebar';
// import { buildQueries } from '@testing-library/react';

const App = () => {
  const [popularList, setPopularList] = useState([])
  const [disList, setDisList] = useState([])
  const [topList, setTopList] = useState([])
  const gmbr = process.env.REACT_APP_BASEIMGURL
 
  // const budi =''
  
    useEffect(() => {
      getMovieList().then((result) => {
        setPopularList(result);
      })
      getMovie().then((result) =>{
        setDisList(result)
      })
      getMovieTopRated().then((result) => {
        setTopList(result)
      })
    }, []);



    const PopularMovieList = () => {
      return popularList.map((movie, i) => {
        return (
          // $budi = '${gmbr}${movie_path}'
          <div className="movie-wrapper" key={i}>          
            <img className='movie-image' src={`${gmbr}${movie.poster_path}`}/>
            <div className="movie-title">{movie.title}</div>
            <div className="movie-date">{movie.release_date}</div>
            <div className="movie-rate">&#9733; {movie.vote_average}</div>
          </div>
        )
      })
    }

    const DisMovieList = () => {
      return disList.map((dis, i) => {
        return (
          // $budi = '${gmbr}${movie_path}'
          <div className="movie-wrapper" key={i}>          
            <img className='movie-image' src={`${gmbr}${dis.poster_path}`}/>
            <div className="movie-title">{dis.title}</div>
            <div className="movie-date">{dis.release_date}</div>
            <div className="movie-rate">&#9733; {dis.vote_average}</div>
          </div>
        )
      })
    }

    const TopMovieList = () => {
      return topList.map((top, i) => {
        return (
          // $budi = '${gmbr}${movie_path}'
          <div className="movie-wrapper" key={i}>          
            <img className='movie-image' src={`${gmbr}${top.poster_path}`}/>
            <div className="movie-title">{top.title}</div>
            <div className="movie-date">{top.release_date}</div>
            <div className="movie-rate">&#9733; {top.vote_average}</div>
          </div>
        )
      })
    }
  
    const search = async (q) => {
        if(q.length >= 3) {
          const query = await searchMovie(q)
          setPopularList(query.results)
          // console.log({query:query})
        }
        // console.log(q)
      }

  //  console.log({popularList : popularList})

  return (
    <div className='App'>
      <header className='App-header'> 
      <Router>
      <Sidebar />
      <Routes>
        <Route path='#' element={"<AboutUs/>"}></Route> 
        <Route path='#' element={"<OurAim/>"} />
        <Route path='#' element={"<OurVision/>"} />
        <Route path='#' element={"<Services/>"} />
        <Route path='#' element={"<ServicesOne/>"} />
        <Route path='#' element={"<ServicesTwo/>"} />
        <Route path='#' element={"<ServicesThree/>"} />
        <Route path='#' element={"<Contact/>"} />
        <Route path='#' element={"<Events/>"} />
        <Route path='#' element={"<EventsOne/>"} />
        <Route path='#' element={"<EventsTwo/>"} />
        <Route path='#' element={"<Support/>"} />
      </Routes>
    </Router>
        <h1 className='judul'> MOVIE MANIA</h1>
        <input placeholder='cari film' className='movie-search' onChange={({target}) => search(target.value)}/> 
      </header>
      <div className="ktg-container">
          <h2 className='kategori'>Popular</h2>
          <div className="movie-container"> 
            <PopularMovieList />
          </div>
        </div>
        <div className="ktg-container">
          <h2 className='kategori'>Top Rated</h2>
          <div className="movie-container"> 
            <TopMovieList />
          </div>
        </div>
        <div className="ktg-container">
          <h2 className='kategori'>Now Playing</h2>
          <div className="movie-container"> 
            <DisMovieList />
          </div>
        </div>    
    </div>
  );
}

export default App;
