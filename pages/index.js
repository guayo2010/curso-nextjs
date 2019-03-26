import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import axios from 'axios';

import './styles.css';
import CONSTS from '../utils/consts';
import Movie from '../components/Movie';

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

const Movies = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

  .movie {
    margin: 10px 10px;
    flex-basis: 15%;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(199, 199, 199, 1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(199, 199, 199, 1);
    box-shadow: 0px 3px 5px 0px rgba(199, 199, 199, 1);

    img {
      width: 100%;
    }

    .movie-detail {
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        margin: 0;
        padding: 0;
        font-size: 90%;
        font-weight: bold;
      }
      span {
        font-size: 60%;
        color: #4e4e4e;
      }
      .rate {
        border-radius: 4px;
        padding: 5px 10px;
        border: 1px solid #ff0079;
      }
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

        <Movies className="container">
          {this.movies.map(item => (
            <Movie key={item.id} movie={item} />
          ))}
        </Movies>
      </div>
    );
  }
}

export default Index;
