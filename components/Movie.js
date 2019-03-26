import React from 'react';
import CONSTS from '../utils/consts';

export default class Movie extends React.PureComponent {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie">
        <img
          src={CONSTS.themoviedb_img_path + movie.poster_path}
          alt={movie.title}
        />
        <div className="movie-detail">
          <div>
            <h2>{movie.title}</h2>
            <span>Accion, suspenso,...</span>
          </div>
          <div>
            <div className="rate">{movie.vote_average}</div>
          </div>
        </div>
      </div>
    );
  }
}
