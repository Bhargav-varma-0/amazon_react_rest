// Write your code here
// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )
    const comedyMovies = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )
    console.log(moviesList)
    return (
      <div className="main">
        <div>
          <img
            className="header"
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
          />
        </div>
        <div className="slider">
          <h1>Action Movies</h1>
          <MoviesSlider moviesList={actionMovies} />
        </div>
        <div className="slider">
          <h1>Comedy Movies</h1>

          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
