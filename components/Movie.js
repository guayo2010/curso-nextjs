import React from 'react';
import Link from 'next/link';
import CONSTS from '../utils/consts';

export default class Movie extends React.PureComponent {
  render() {
    const { movie } = this.props;
    if (!movie.poster_path) {
      return null;
    }
    return (
      <Link
        href={{
          pathname: 'movie',
          query: {
            id: movie.id,
          },
        }}
      >
        <a className="movie">
          <div>
            <img
              src={CONSTS.themoviedb_poster_path + movie.poster_path}
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
        </a>
      </Link>
    );
  }
}
