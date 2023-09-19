import axios from 'axios'

    const apikey= process.env.REACT_APP_APIKEY
    const baseurl= process.env.REACT_APP_BASEURL

export const getMovieList = async () => { 
    const movieList = await axios.get(`${baseurl}/movie/popular?page=1&api_key=${apikey}`)
    // console.log({apikey})
    return movieList.data.results
}

export const getMovie = async () => { 
    const movie = await axios.get(`${baseurl}/movie/now_playing?page=1&api_key=${apikey}`)
    // console.log({apikey})
    return movie.data.results
}

export const getMovieTopRated = async () => { 
    const movietop = await axios.get(`${baseurl}/movie/top_rated?page=1&api_key=${apikey}`)
    // console.log({apikey})
    return movietop.data.results
}


// export const getMovieList = async () => { 
//     const movie = await axios.get(`${baseurl}/movie/popular?api_key=${apikey}`)
//     console.log({movieList: movie})
// }
export const searchMovie = async (q) => {
    const movie = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&page=1&api_key=66eb94cb399c36a23b9bfef8b4a821df`)
    // console.log({q})
    return movie.data
}