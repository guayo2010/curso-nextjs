import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import CONSTS from '../utils/consts';
import Template from '../components/Template';
import { Banner } from './index';

class MoviePage extends React.PureComponent {
  static async getInitialProps({ query }) {
    try {
      const movieId = query.id;
      const response = await axios(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
          CONSTS.themoviedb_api_key
        }&language=en-US`
      );
      return { movie: response.data };
    } catch (error) {
      const err = new Error();
      err.code = 'ENOENT';
      throw err;
    }
  }

  render() {
    const { movie } = this.props;
    return (
      <Template>
        <div>
          <Head>
            <title>Pagina movie</title>
          </Head>
          <Banner
            style={{
              backgroundImage: `url("${CONSTS.themoviedb_backdrop_path}${
                movie.backdrop_path
              }")`,
            }}
          >
            <div className="movie-description">
              <div className="container">
                <h2>{movie.title}</h2>
                <div style={{ color: '#fff' }}>
                  {movie.genres.map(item => (
                    <span key={item.id}>{item.name}, </span>
                  ))}
                </div>
                <div className="d-flex">
                  <p style={{ color: '#fff' }}>{movie.overview}</p>
                </div>
              </div>
            </div>
          </Banner>
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </div>
      </Template>
    );
  }
}

export default MoviePage;
