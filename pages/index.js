import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import axios from 'axios';

import './styles.css';
import CONSTS from '../utils/consts';

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background-image: url('/static/bg/banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .movie-description {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 200px;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
    h2 {
      color: #fff;
      text-transform: uppercase;
    }
  }
`;

@observer
class Index extends React.Component {
  @observable movies = [];

  componentDidMount() {
    this.getMovies(1);
  }

  getMovies = async page => {
    try {
      const response = await axios(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          CONSTS.themoviedb_api_key
        }&language=en-US&page=${page}`
      );
      console.log(response);
      const { results, total_pages } = response.data;
      this.movies = results;
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <Head>
          <title>INdex</title>
        </Head>

        <Banner>
          <div className="movie-description container">
            <h2>Furia de titanes</h2>
            <div className="d-flex">
              <a className="btn-primary">Ver Pelicula</a>
              <a className="btn-border" style={{ marginLeft: 10 }}>
                Ver Info
              </a>
            </div>
          </div>
        </Banner>

        {this.movies.map(item => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    );
  }
}

export default Index;
