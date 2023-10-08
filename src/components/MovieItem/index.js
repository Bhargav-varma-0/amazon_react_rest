// Write your code here

// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  console.log(movie)
  return (
    <Popup
      modal
      trigger={
        <div className="movie-card">
          <img src={movie.thumbnailUrl} alt="thumbnail" />
        </div>
      }
    >
      {close => (
        <>
          <div>
            <ReactPlayer url={movie.videoUrl} />
          </div>
          <button
            type="button"
            className="trigger-button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
        </>
      )}
    </Popup>
  )
}
export default MovieItem
