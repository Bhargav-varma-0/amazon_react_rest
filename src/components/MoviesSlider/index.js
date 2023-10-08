// Write your code here
// Write your code here
// import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  console.log(moviesList)
  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // nextArrow: <FiArrowLeftCircle />,
    // prevArrow: <FiArrowRightCircle />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="movie-carousel">
      <Slider {...settings}>
        {moviesList.map(ele => (
          <div>
            <MovieItem movie={ele} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
