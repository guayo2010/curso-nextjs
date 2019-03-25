import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import './styles.css';

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

const Index = () => (
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
  </div>
);
export default Index;
